import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale, isLocale } from "@/i18n/config";

/**
 * Picks the best locale from the Accept-Language header, falling back to
 * defaultLocale. Deliberately simple — no negotiation library, since we only
 * have four options and quality values rarely matter at this scale.
 */
function detectLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of preferred) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  // A returning visitor's explicit choice beats their browser header.
  const saved = request.cookies.get("NEXT_LOCALE")?.value;
  const locale = saved && isLocale(saved) ? saved : detectLocale(request);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Everything except API routes, Next internals, and files with an extension.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
