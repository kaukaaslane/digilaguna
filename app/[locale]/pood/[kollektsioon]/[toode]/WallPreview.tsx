"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";

type WallText = Dictionary["shop"]["wallPreview"];

/**
 * Mõõtkava tuleb kasutaja enda seinast.
 *
 * Kaks varianti said enne proovitud ja mõlemad kukkusid läbi.
 * Esimene küsis "kui lai on fotol olev sein?" ja jagas sellega kogu
 * kaadrit — aga kaadris on peaaegu alati rohkem kui üks sein, nii et
 * aus vastus andis vale tulemuse. Teine palus tõmmata joone ukse
 * servadele ja eeldas, et uks on 80 cm — aga seinafotol on uks sageli
 * ainult osaliselt näha, nii et kitsa piidariba nimetamine ukseks
 * paisutas mõõtkava mitmekordseks.
 *
 * Nüüd on võrdluseks sein ise. Kasutaja teab oma seina laiust või saab
 * selle mõõdulindiga kätte, ja seina servad on fotol suured ja selged,
 * mitte kitsas riba. Mõlemad pooled tulevad sealt, kus nad usaldusväärsed
 * on: pikslid fotolt, sentimeetrid inimeselt.
 */
const DEFAULT_WALL_CM = 250;
const MIN_WALL_CM = 20;
const MAX_WALL_CM = 2000;

/** Seinafotol katab sein tavaliselt peaaegu kogu kaadri. */
const START_A = { fx: 0.06, fy: 0.65 };
const START_B = { fx: 0.94, fy: 0.65 };

/** Liiga lühike joon paisutaks mõõtkava lõpmatuseni. */
const MIN_SPAN_PX = 16;

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
  const [a, setA] = useState(START_A);
  const [b, setB] = useState(START_B);

  const [pos, setPos] = useState({ fx: 0.5, fy: 0.34 });
  const [dragging, setDragging] = useState(false);
  const [box, setBox] = useState({ w: 0, h: 0 });

  const frameRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLImageElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    const el = frameRef.current;
    if (!el || !photoUrl) return;

    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [photoUrl]);

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
    setPos({ fx: 0.5, fy: 0.34 });
    setA(START_A);
    setB(START_B);

    // Nulli väli, muidu sama faili teistkordsel valimisel change ei käivitu.
    e.target.value = "";
  };

  const spanPx = Math.hypot((b.fx - a.fx) * box.w, (b.fy - a.fy) * box.h);
  const pxPerCm = spanPx >= MIN_SPAN_PX && wallCm > 0 ? spanPx / wallCm : 0;
  const artPx = pxPerCm > 0 ? Math.min(pxPerCm * sizeCm, box.w * 2) : 0;

  const clamp = useCallback(
    (fx: number, fy: number) => {
      if (box.w === 0 || box.h === 0) return { fx, fy };

      const hx = artPx / 2 / box.w;
      const hy = artPx / 2 / box.h;

      const cx = hx * 2 >= 1 ? 0.5 : Math.min(Math.max(fx, hx), 1 - hx);
      const cy = hy * 2 >= 1 ? 0.5 : Math.min(Math.max(fy, hy), 1 - hy);

      return { fx: cx, fy: cy };
    },
    [artPx, box.w, box.h],
  );

  useEffect(() => {
    setPos((prev) => clamp(prev.fx, prev.fy));
  }, [clamp]);

  const startDrag = (e: React.PointerEvent<HTMLElement>) => {
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const endDrag = (e: React.PointerEvent<HTMLElement>) => {
    e.stopPropagation();
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    setDragging(false);
  };

  const movePoint =
    (set: typeof setA) => (e: React.PointerEvent<HTMLElement>) => {
      if (!e.currentTarget.hasPointerCapture?.(e.pointerId)) return;
      if (box.w === 0 || box.h === 0) return;

      e.stopPropagation();
      set((p) => ({
        fx: Math.min(Math.max(p.fx + e.movementX / box.w, 0), 1),
        fy: Math.min(Math.max(p.fy + e.movementY / box.h, 0), 1),
      }));
    };

  const moveArt = (e: React.PointerEvent<HTMLElement>) => {
    if (!e.currentTarget.hasPointerCapture?.(e.pointerId)) return;
    if (box.w === 0 || box.h === 0) return;

    setDragging(true);
    setPos((prev) =>
      clamp(prev.fx + e.movementX / box.w, prev.fy + e.movementY / box.h),
    );
  };

  const nudgeOf = (key: string) => {
    const nudges: Record<string, { dx: number; dy: number }> = {
      ArrowLeft: { dx: -NUDGE, dy: 0 },
      ArrowRight: { dx: NUDGE, dy: 0 },
      ArrowUp: { dx: 0, dy: -NUDGE },
      ArrowDown: { dx: 0, dy: NUDGE },
    };
    return nudges[key];
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = nudgeOf(e.key);
    if (!step) return;

    e.preventDefault();
    setPos((prev) => clamp(prev.fx + step.dx, prev.fy + step.dy));
  };

  /** Mõõtepunktid on fookustatavad, seega peavad ka klaviatuuriga liikuma. */
  const pointKeyDown =
    (set: typeof setA) => (e: React.KeyboardEvent<HTMLDivElement>) => {
      const step = nudgeOf(e.key);
      if (!step) return;

      e.preventDefault();
      set((p) => ({
        fx: Math.min(Math.max(p.fx + step.dx, 0), 1),
        fy: Math.min(Math.max(p.fy + step.dy, 0), 1),
      }));
    };

  /** Ekspordib täislahutuses. Mõõtejoon on DOM-is, nii et pilti ei satu. */
  const download = async () => {
    const photo = photoRef.current;
    if (!photo || artPx <= 0) return;

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

    const artW = (artPx / box.w) * w;

    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.45)";
    ctx.shadowBlur = artW * 0.06;
    ctx.shadowOffsetY = artW * 0.03;
    ctx.drawImage(art, pos.fx * w - artW / 2, pos.fy * h - artW / 2, artW, artW);
    ctx.restore();

    const blob = await new Promise<Blob | null>((res) =>
      canvas.toBlob(res, "image/jpeg", 0.92),
    );
    if (!blob) return;

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `digilaguna-${alt
      .toLowerCase()
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-|-$/g, "")}-${sizeCm}x${sizeCm}.jpg`;
    link.click();
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

      {/* Kaks nuppu, sest ükski lipp ei paku Androidil mõlemat. */}
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
                onPointerDown={startDrag}
                onPointerMove={moveArt}
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

            {/* Seina laiuse joon */}
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <line
                x1={`${a.fx * 100}%`}
                y1={`${a.fy * 100}%`}
                x2={`${b.fx * 100}%`}
                y2={`${b.fy * 100}%`}
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeDasharray="5 4"
              />
            </svg>

            {[
              { pt: a, set: setA, label: t.pointStart },
              { pt: b, set: setB, label: t.pointEnd },
            ].map((h, i) => (
              <div
                key={i}
                role="slider"
                tabIndex={0}
                aria-label={h.label}
                aria-valuenow={Math.round(h.pt.fx * 100)}
                aria-valuemin={0}
                aria-valuemax={100}
                onPointerDown={startDrag}
                onPointerMove={movePoint(h.set)}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onKeyDown={pointKeyDown(h.set)}
                style={{
                  left: `${h.pt.fx * 100}%`,
                  top: `${h.pt.fy * 100}%`,
                  touchAction: "none",
                }}
                className="absolute h-9 w-9 -translate-x-1/2 -translate-y-1/2 cursor-grab touch-none rounded-full border-2 border-[var(--color-accent)] bg-[rgba(0,0,0,0.45)] shadow-lg"
              />
            ))}
          </div>

          {/* Seina mõõt */}
          <div className="mt-5">
            <label
              htmlFor="wall-cm"
              className="block text-sm text-text-secondary"
            >
              {t.wallWidth}
            </label>

            <div className="mt-3 flex items-center gap-3">
              <input
                id="wall-cm"
                type="number"
                inputMode="numeric"
                min={MIN_WALL_CM}
                max={MAX_WALL_CM}
                step={1}
                value={wallCm}
                onChange={(e) =>
                  setWallCm(
                    Math.min(
                      Math.max(Number(e.target.value) || MIN_WALL_CM, MIN_WALL_CM),
                      MAX_WALL_CM,
                    ),
                  )
                }
                className="w-28 border border-line bg-bg-raised px-3 py-3 text-base text-text tabular-nums"
              />

              <span className="text-sm text-text-faint">cm</span>
            </div>

            <p className="mt-3 text-xs leading-5 text-text-faint">
              {t.wallWidthHint}
            </p>
          </div>

          <p className="mt-4 text-xs leading-5 text-text-faint">{t.dragHint}</p>

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
