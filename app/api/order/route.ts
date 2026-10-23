import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import {
  checkOrigin,
  getClientIp,
  rateLimit,
  escapeHtml,
} from "@/lib/api-guard";

export const runtime = "nodejs";

const MAX_ORDERS = 5; // IP kohta
const WINDOW_MS = 10 * 60 * 1000; // 10 minuti kohta

const LIMITS = {
  name: 120,
  email: 200,
  phone: 60,
  product: 120,
  size: 80,
  delivery: 120,
  message: 2000,
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@digilaguna.com",
    pass: process.env.CONTACT_EMAIL_PASSWORD || "",
  },
});

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export async function POST(request: Request) {
  if (!checkOrigin(request)) {
    return NextResponse.json(
      { success: false, error: "Forbidden." },
      { status: 403 }
    );
  }

  const limited = rateLimit(
    `order:${getClientIp(request)}`,
    MAX_ORDERS,
    WINDOW_MS
  );
  if (!limited.ok) {
    return NextResponse.json(
      { success: false, error: "Too many orders sent. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limited.retryAfter) } }
    );
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;

    const name = str(body.name);
    const email = str(body.email);
    const phone = str(body.phone);
    const message = str(body.message);
    const product = str(body.product);
    const productSlug = str(body.productSlug);
    const size = str(body.size);
    const delivery = str(body.delivery);
    const locale = str(body.locale);
    const total = typeof body.total === "number" ? body.total : null;
    const unitPrice =
      typeof body.unitPrice === "number" ? body.unitPrice : null;
    // Kogus tuleb kliendilt: piirame mõistlikku vahemikku, et kirja ei
    // saaks täita jaburate väärtustega.
    const quantity =
      typeof body.quantity === "number" &&
      Number.isInteger(body.quantity) &&
      body.quantity >= 1 &&
      body.quantity <= 10
        ? body.quantity
        : 1;

    if (!name) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }
    if (!email || !emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }
    if (!phone) {
      return NextResponse.json(
        { success: false, error: "Phone is required." },
        { status: 400 }
      );
    }
    if (!product || !size) {
      return NextResponse.json(
        { success: false, error: "Product and size are required." },
        { status: 400 }
      );
    }

    if (
      name.length > LIMITS.name ||
      email.length > LIMITS.email ||
      phone.length > LIMITS.phone ||
      product.length > LIMITS.product ||
      size.length > LIMITS.size ||
      delivery.length > LIMITS.delivery ||
      message.length > LIMITS.message
    ) {
      return NextResponse.json(
        { success: false, error: "One of the fields is too long." },
        { status: 400 }
      );
    }

    if (!process.env.CONTACT_EMAIL_PASSWORD) {
      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured. Please try again later.",
        },
        { status: 500 }
      );
    }

    // NB: `total` tuleb kliendilt ja on ainult viiteks. Lõpliku hinna
    // paneb arvele inimene — summat siin usaldada ei tohi.
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Language: ${locale || "-"}`,
      "",
      `Product: ${product} (${productSlug})`,
      `Size: ${size}`,
      `Quantity: ${quantity}`,
      `Delivery: ${delivery || "-"}`,
      `Unit price: ${unitPrice === null ? "-" : `${unitPrice} EUR`}`,
      `Total shown to customer: ${total === null ? "-" : `${total} EUR`}`,
      "",
      "Message:",
      message || "-",
    ];

    const row = (k: string, v: string) =>
      `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>`;

    const info = await transporter.sendMail({
      from: '"Õied order" <info@digilaguna.com>',
      to: "info@digilaguna.com",
      replyTo: email,
      subject: `Order: ${product} (${size})${quantity > 1 ? ` x${quantity}` : ""} — ${name}`,
      text: lines.join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1a1a1a;">
          ${row("Name", name)}
          ${row("Email", email)}
          ${row("Phone", phone)}
          ${row("Language", locale || "-")}
          <hr />
          ${row("Product", `${product} (${productSlug})`)}
          ${row("Size", size)}
          ${row("Quantity", String(quantity))}
          ${row("Delivery", delivery || "-")}
          ${row("Unit price", unitPrice === null ? "-" : `${unitPrice} EUR`)}
          ${row("Total shown to customer", total === null ? "-" : `${total} EUR`)}
          <hr />
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message || "-").replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (!info.messageId) {
      throw new Error("Unable to send order.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[api/order]", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while sending your order. Please try again.",
      },
      { status: 500 }
    );
  }
}
