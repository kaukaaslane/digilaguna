import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@digilaguna.com",
    pass: process.env.CONTACT_EMAIL_PASSWORD || "",
  },
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: unknown;
      email?: unknown;
      company?: unknown;
      description?: unknown;
    };

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const description =
      typeof body.description === "string" ? body.description.trim() : "";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeDescription = escapeHtml(description).replace(/\n/g, "<br />");

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

    if (!description) {
      return NextResponse.json(
        { success: false, error: "Project details are required." },
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

    const info = await transporter.sendMail({
      from: '"Direct Enquiry" <info@digilaguna.com>',
      to: "info@digilaguna.com",
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company / Project: ${company}` : "Company / Project: Not provided",
        "",
        "Project details:",
        description,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1a1a1a;">
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company / Project:</strong> ${safeCompany || "Not provided"}</p>
          <p><strong>Project details:</strong></p>
          <p>${safeDescription}</p>
        </div>
      `,
    });

    if (!info.messageId) {
      throw new Error("Unable to send enquiry.");
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent.",
    });
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while sending your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
