"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";

type WallText = Dictionary["shop"]["wallPreview"];

/**
 * Telefonifoto seinast katab tüüpiliselt paarsada sentimeetrit, mitte
 * kolme meetrit. Vahemik on meelega kitsas: 80..1200 juures jäi kogu
 * kasulik ala slaideri esimesse kuuendikku ja telefonis oli võimatu
 * täpselt tabada.
 */
const DEFAULT_WALL_CM = 200;
const MIN_WALL_CM = 60;
const MAX_WALL_CM = 400;

/** Nooleklahviga nihe — osa konteineri laiusest. */
const NUDGE = 0.02;

export default function WallPreview({
  src,
  alt,
  sizeCm,
  sizeLabel,
  t,
}: {
  src: string;
  alt: string;
  sizeCm: number;
  sizeLabel: string;
  t: WallText;
}) {
  const [open, setOpen] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [wallCm, setWallCm] = useState(DEFAULT_WALL_CM);

  /** Asukoht on murdosa konteinerist, nii et see peab akna muutmist üle. */
  const [pos, setPos] = useState({ fx: 0.5, fy: 0.42 });
  const [dragging, setDragging] = useState(false);
  const [box, setBox] = useState({ w: 0, h: 0 });

  const frameRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLImageElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  /* Mõõda konteiner — px/cm sõltub sellest. */
  useEffect(() => {
    const el = frameRef.current;
    if (!el || !photoUrl) return;

    const measure = () =>
      setBox({ w: el.clientWidth, h: el.clientHeight });

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [photoUrl]);

  /* Vabasta blob-URL, muidu jääb mälu kinni. */
  useEffect(
    () => () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    },
    [],
  );

  const pickPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);

    const url = URL.createObjectURL(file);
    objectUrlRef.current = url;
    setPhotoUrl(url);
    setPos({ fx: 0.5, fy: 0.42 });

    // Nulli väli, muidu sama faili teistkordsel valimisel change ei käivitu.
    e.target.value = "";
  };

  const pxPerCm = box.w > 0 ? box.w / wallCm : 0;
  const artPx = pxPerCm * sizeCm;

  /** Hoia töö kaadri sees. */
  const clamp = useCallback(
    (fx: number, fy: number) => {
      if (box.w === 0 || box.h === 0) return { fx, fy };

      const hx = artPx / 2 / box.w;
      const hy = artPx / 2 / box.h;

      // Kui töö on kaadrist laiem, jäta keskele — kinni ei kiilu.
      const cx = hx * 2 >= 1 ? 0.5 : Math.min(Math.max(fx, hx), 1 - hx);
      const cy = hy * 2 >= 1 ? 0.5 : Math.min(Math.max(fy, hy), 1 - hy);

      return { fx: cx, fy: cy };
    },
    [artPx, box.w, box.h],
  );

  /* Mõõdu vahetus võib töö servast välja viia. */
  useEffect(() => {
    setPos((prev) => clamp(prev.fx, prev.fy));
  }, [clamp]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || box.w === 0) return;

    setPos((prev) =>
      clamp(prev.fx + e.movementX / box.w, prev.fy + e.movementY / box.h),
    );
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    setDragging(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const nudges: Record<string, { dx: number; dy: number }> = {
      ArrowLeft: { dx: -NUDGE, dy: 0 },
      ArrowRight: { dx: NUDGE, dy: 0 },
      ArrowUp: { dx: 0, dy: -NUDGE },
      ArrowDown: { dx: 0, dy: NUDGE },
    };

    const step = nudges[e.key];
    if (!step) return;

    e.preventDefault();
    setPos((prev) => clamp(prev.fx + step.dx, prev.fy + step.dy));
  };

  /** Ekspordib täislahutuses — sama kaader, mida ekraanil näeb. */
  const download = async () => {
    const photo = photoRef.current;
    if (!photo) return;

    const w = photo.naturalWidth;
    const h = photo.naturalHeight;
    if (!w || !h) return;

    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(photo, 0, 0, w, h);

    const art = new Image();
    art.src = src;

    try {
      await art.decode();
    } catch {
      return;
    }

    // Sama osakaal kaadrist kui ekraanil, aga foto päris pikslites.
    const artW = (artPx / box.w) * w;
    const cx = pos.fx * w;
    const cy = pos.fy * h;

    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.45)";
    ctx.shadowBlur = artW * 0.06;
    ctx.shadowOffsetY = artW * 0.03;
    ctx.drawImage(art, cx - artW / 2, cy - artW / 2, artW, artW);
    ctx.restore();

    const blob = await new Promise<Blob | null>((res) =>
      canvas.toBlob(res, "image/jpeg", 0.92),
    );
    if (!blob) return;

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `digilaguna-${alt
      .toLowerCase()
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-|-$/g, "")}-${sizeCm}x${sizeCm}.jpg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn btn-accent mt-4 w-full justify-center"
      >
        {t.toggle}
        <span aria-hidden className="btn-arrow">
          →
        </span>
      </button>
    );
  }

  return (
    <section className="mt-4 border border-line-strong p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="eyebrow">{t.toggle}</h3>
          <p className="mt-3 max-w-sm text-sm leading-6 text-text-muted">
            {t.lead}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={t.close}
          className="btn-icon shrink-0"
        >
          <span aria-hidden>&times;</span>
        </button>
      </div>

      {/* Kaks eraldi nuppu, sest ühtegi usaldusväärset lippu pole:
          `capture`-iga läheb Android otse kaamerasse ja galerii jääb
          vahele, ilma selleta avab süsteemi fotovalija, kus kaamerat
          pole. Kumbki üksi jätab poole kasutajatest hätta. */}
      <div className="mt-5 flex flex-wrap gap-3">
        <label className="btn btn-secondary cursor-pointer">
          {t.takePhoto}
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={pickPhoto}
            className="sr-only"
          />
        </label>

        <label className="btn btn-secondary cursor-pointer">
          {t.choosePhoto}
          <input
            type="file"
            accept="image/*"
            onChange={pickPhoto}
            className="sr-only"
          />
        </label>
      </div>

      <p className="mt-3 text-xs leading-5 text-text-faint">{t.privacy}</p>

      {photoUrl && (
        <>
          {/* Kaader */}
          <div
            ref={frameRef}
            className="relative mt-5 w-full select-none overflow-hidden bg-bg-raised"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={photoRef}
              src={photoUrl}
              alt=""
              className="block h-auto w-full"
            />

            {artPx > 0 && (
              <div
                role="button"
                tabIndex={0}
                aria-label={t.dragHint}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onKeyDown={onKeyDown}
                style={{
                  width: artPx,
                  height: artPx,
                  left: `${pos.fx * 100}%`,
                  top: `${pos.fy * 100}%`,
                  transform: "translate(-50%, -50%)",
                  touchAction: "none",
                  boxShadow:
                    "0 10px 26px rgba(0,0,0,0.42), 0 2px 6px rgba(0,0,0,0.3)",
                }}
                className={`absolute ${
                  dragging ? "cursor-grabbing" : "cursor-grab"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  draggable={false}
                  className="pointer-events-none block h-full w-full object-cover"
                />
              </div>
            )}
          </div>

          <p className="mt-3 text-xs text-text-faint">{t.dragHint}</p>

          {/* Mõõtkava */}
          <div className="mt-5">
            <label
              htmlFor="wall-cm"
              className="mb-2 block text-sm text-text-secondary"
            >
              {t.wallWidth}
            </label>

            <div className="flex items-center gap-3">
              <input
                id="wall-cm"
                type="range"
                min={MIN_WALL_CM}
                max={MAX_WALL_CM}
                step={5}
                value={wallCm}
                onChange={(e) => setWallCm(Number(e.target.value))}
                className="w-full accent-[var(--color-accent)]"
              />

              <span className="w-20 shrink-0 text-right text-sm tabular-nums">
                {wallCm} cm
              </span>
            </div>

            <p className="mt-2 text-xs leading-5 text-text-faint">
              {t.wallWidthHint}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
            <span className="text-sm text-text-secondary">{sizeLabel}</span>

            <button
              type="button"
              onClick={download}
              className="btn btn-secondary"
            >
              {t.download}
            </button>
          </div>
        </>
      )}
    </section>
  );
}
