/**
 * Verceli Web Analytics ilma npm-paketita.
 *
 * `@vercel/analytics` nõuaks sõltuvuse lisamist ja package-lock.json-i
 * uuendamist, mida ma siit teha ei saa — Vercel ehitab `npm ci`-ga ja
 * lukufaili lahknevus murraks ehituse. Vercel serveerib sama skripti
 * suhtelise teelt igast deployst, nii et paketti polegi vaja.
 *
 * Küpsiseid ei kasutata ja isikuandmeid ei koguta, seega küpsiseteadet
 * see ei nõua. Dashboardis peab Web Analytics olema sisse lülitatud,
 * muidu skript laeb, aga andmeid ei koguta.
 *
 * Arenduses jääb välja — lokaalselt seda teed pole ja skript annaks
 * konsooli 404.
 */
export default function Analytics() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};",
        }}
      />
      <script defer src="/_vercel/insights/script.js" />
    </>
  );
}
