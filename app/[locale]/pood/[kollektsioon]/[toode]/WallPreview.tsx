"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";

type WallText = Dictionary["shop"]["wallPreview"];

/**
 * Mõõtkava tuleb seina mõõtudest, mitte fotolt.
 *
 * Kaks varianti said enne proovitud ja mõlemad kukkusid läbi, sest
 * mõlemad üritasid mõõtkava fotost välja lugeda: esimene küsis kaadri
 * laiust, mida keegi hinnata ei oska, teine eeldas tuntud suurusega
 * eset, mida kaadris sageli tervikuna polegi.
 *
 * Nüüd joonistatakse sein numbritest. Kasutaja teab oma seina mõõte —
 * lagi on 2,50 või 2,55, laius on mõõdulindiga käes — ja töö asetub
 * sellele ristkülikule täpses suhtes. Mõõtkava ei saa valesti minna,
 * sest midagi ei tuletata pildist.
 *
 * Foto on nüüd valikuline ja ainult meeleolu jaoks. Tööriist töötab
 * ka ilma, mis tähendab, et mõõtu saab kontrollida kohe, ilma et peaks
 * enne midagi pildistama.
 */
const DEFAULT_W_M = 4;
const DEFAULT_H_M = 2.55;

const MIN_M = 0.5;
const MAX_M = 20;

/** Galeriistandard: töö keskpunkt 145 cm põrandast. */
const HANG_CENTRE_CM = 145;

const NUDGE = 0.02;

const num = (v: string, fallback: number) => {
  const n = Number(v.replace(",", "."));
  return Number.isFinite(n) && n > 0 ? Math.min(Math.max(n, MIN_M), MAX_M) : fallback;
};

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

  const [wM, setWM] = useState(DEFAULT_W_M);
  const [hM, setHM] = useState(DEFAULT_H_M);

  /** Tekstiväljad eraldi, et poolik sisestus ei hüppaks vaikeväärtusele. */
  const [wText, setWText] = useState(String(DEFAULT_W_M));
  const [hText, setHText] = useState(String(DEFAULT_H_M));

  const [pos, setPos] = useState({ fx: 0.5, fy: 0 });
  const [dragging, setDragging] = useState(false);
  const [box, setBox] = useState({ w: 0, h: 0 });

  const wallRef = useRef<HTMLDivElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  const wallWcm = wM * 100;
  const wallHcm = hM * 100;

  /** Riputuskõrgus murdosana ülaservast. */
  const hangFy = Math.min(Math.max((wallHcm - HANG_CENTRE_CM) / wallHcm, 0), 1);

  /* Esimene paigutus ja seina kõrguse muutus viivad töö riputuskõrgusele. */
  useEffect(() => {
    setPos((p) => (p.fy === 0 ? { fx: 0.5, fy: hangFy } : p));
  }, [hangFy]);

  useEffect(() => {
    const el = wallRef.current;
    if (!el) return;

    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [open]);

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

    objectUrlRef.current = URL.createObjectURL(file);
    setPhotoUrl(objectUrlRef.current);

    // Nulli väli, muidu sama faili teistkordsel valimisel change ei käivitu.
    e.target.value = "";
  };

  /* Siin ongi kogu arvutus. Ei oletusi, ei kalibreerimist. */
  const pxPerCm = box.w > 0 ? box.w / wallWcm : 0;
  const artPx = pxPerCm * sizeCm;

  const clamp = useCallback(
    (fx: number, fy: number) => {
      if (box.w === 0 || box.h === 0) return { fx, fy };

      const hx = artPx / 2 / box.w;
      const hy = artPx / 2 / box.h;

      return {
        fx: hx * 2 >= 1 ? 0.5 : Math.min(Math.max(fx, hx), 1 - hx),
        fy: hy * 2 >= 1 ? 0.5 : Math.min(Math.max(fy, hy), 1 - hy),
      };
    },
    [artPx, box.w, box.h],
  );

  useEffect(() => {
    setPos((prev) => clamp(prev.fx, prev.fy));
  }, [clamp]);

  const startDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    setDragging(false);
  };

  const moveArt = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || box.w === 0 || box.h === 0) return;

    setPos((prev) =>
      clamp(prev.fx + e.movementX / box.w, prev.fy + e.movementY / box.h),
    );
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

  /** Töö keskpunkti kõrgus põrandast — näidatakse kinnituseks. */
  const centreFromFloorCm = Math.round(wallHcm * (1 - pos.fy));

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

      {/* Seina mõõdud. Siit tuleb kogu mõõtkava. */}
      <div className="mt-5 flex flex-wrap gap-5">
        <div>
          <label htmlFor="wall-w" className="block text-sm text-text-secondary">
            {t.wallWidth}
          </label>

          <div className="mt-2 flex items-baseline gap-2">
            <input
              id="wall-w"
              type="text"
              inputMode="decimal"
              value={wText}
              onChange={(e) => {
                setWText(e.target.value);
                setWM(num(e.target.value, DEFAULT_W_M));
              }}
              onBlur={() => setWText(String(wM))}
              className="w-24 border border-line bg-bg-raised px-3 py-3 text-base text-text tabular-nums"
            />
            <span className="text-sm text-text-faint">m</span>
          </div>
        </div>

        <div>
          <label htmlFor="wall-h" className="block text-sm text-text-secondary">
            {t.wallHeight}
          </label>

          <div className="mt-2 flex items-baseline gap-2">
            <input
              id="wall-h"
              type="text"
              inputMode="decimal"
              value={hText}
              onChange={(e) => {
                setHText(e.target.value);
                setHM(num(e.target.value, DEFAULT_H_M));
              }}
              onBlur={() => setHText(String(hM))}
              className="w-24 border border-line bg-bg-raised px-3 py-3 text-base text-text tabular-nums"
            />
            <span className="text-sm text-text-faint">m</span>
          </div>
        </div>
      </div>

      {/* Sein */}
      <div
        ref={wallRef}
        style={{ aspectRatio: `${wM} / ${hM}` }}
        className="relative mt-5 w-full select-none overflow-hidden border border-line bg-bg-raised"
      >
        {photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoUrl}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          // Tühi sein: ülalt veidi heledam, all põrandajoon.
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.015) 62%, rgba(0,0,0,0.25))",
            }}
          />
        )}

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
            className={`absolute ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
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

      <p className="mt-3 flex flex-wrap justify-between gap-x-6 gap-y-1 text-xs text-text-faint">
        <span>{t.dragHint}</span>
        <span className="tabular-nums">
          {t.centreHeight} {centreFromFloorCm} cm
        </span>
      </p>

      {/* Foto on valikuline ja ainult meeleolu jaoks. */}
      <div className="mt-5 border-t border-line pt-5">
        <p className="text-sm text-text-secondary">{t.photoOptional}</p>

        <div className="mt-3 flex flex-wrap gap-3">
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
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        <span className="text-sm text-text-secondary">{sizeLabel}</span>
      </div>
    </section>
  );
}
