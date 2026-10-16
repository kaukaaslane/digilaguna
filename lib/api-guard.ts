/**
 * Jagatud kaitse avalikele API-marsruutidele.
 *
 * Kolm kihti, tegeliku kasu järjekorras:
 *
 * 1. Päritolukontroll — olekuta, seega töötab serverless'is täpselt. Lükkab
 *                       tagasi kõik, mis ei tule meie enda saidilt. Kõige
 *                       mõjusam kiht siin.
 * 2. Sisendi piirid   — piiravad ühe päringu maksumust. /api/chat puhul
 *                       sõltub arve tokenite, mitte päringute arvust, seega
 *                       mahu piiramine loeb rohkem kui päringute piiramine.
 * 3. Päringupiirang   — mälus, instantsi kohta. Vt hoiatust rateLimit() juures.
 */

const PROD_ORIGINS = [
  "https://www.digilaguna.com",
  "https://digilaguna.com",
];

/** true `next dev` ajal, kus Origin on localhost. */
const isDev = process.env.NODE_ENV !== "production";

/**
 * Vercel'i preview-ehitustes on NODE_ENV "production", aga URL on *.vercel.app.
 * Ilma selleta annaks iga preview-deploy vormidele 403.
 */
const isPreview = process.env.VERCEL_ENV === "preview";

export function checkOrigin(req: Request): boolean {
  if (isDev) return true;

  const allow = (origin: string) =>
    PROD_ORIGINS.includes(origin) ||
    (isPreview && /^https:\/\/[a-z0-9-]+\.vercel\.app$/.test(origin));

  const origin = req.headers.get("origin");
  if (origin) return allow(origin);

  // Mõni brauser jätab Origin'i same-origin POST'i puhul ära; proovi Referer'it.
  const referer = req.headers.get("referer");
  if (referer) {
    try {
      return allow(new URL(referer).origin);
    } catch {
      return false;
    }
  }

  // Kumbagi päist ei ole — see ei tulnud brauseri vormist.
  return false;
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();
let lastSweep = Date.now();

/**
 * Fikseeritud akna piiraja.
 *
 * HOIATUS: see elab ühe serverless-instantsi mälus. Vercel käitab neid mitu
 * korraga ja taaskäivitab vabalt, seega tegelik lagi on umbes
 * `limit × aktiivsete instantside arv` ja loendur nullitakse külmkäivitusel.
 * Sellest piisab lihtsa skripti peatamiseks ja see on tasuta — sihikindla
 * ründaja peatamiseks sellest ei piisa.
 *
 * Kindla garantii jaoks vaheta funktsiooni sisu Upstash Redis'e
 * (@upstash/ratelimit) või Vercel KV vastu. Kutsumiskohad ei muutu.
 */
export function rateLimit(
  key: string,
  limit: number,
  windowMs: number
): { ok: true } | { ok: false; retryAfter: number } {
  const now = Date.now();

  // Perioodiline puhastus, et map ei kasvaks piiramatult.
  if (now - lastSweep > 60_000) {
    for (const [k, b] of buckets) if (b.resetAt <= now) buckets.delete(k);
    lastSweep = now;
  }

  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  if (bucket.count >= limit) {
    return { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  return { ok: true };
}

function json(body: unknown, status: number, headers: HeadersInit = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });
}

export function tooMany(retryAfter: number): Response {
  return json({ error: "Too many requests. Please wait a moment." }, 429, {
    "Retry-After": String(retryAfter),
  });
}

export function forbidden(): Response {
  return json({ error: "Forbidden." }, 403);
}

export function badRequest(message: string): Response {
  return json({ error: message }, 400);
}

/** HTML-i erimärkide maskeerimine e-kirja sisu jaoks. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
