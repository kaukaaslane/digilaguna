"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  locales,
  localeNames,
  localizePath,
  type Locale,
} from "@/i18n/config";

export default function LocaleSwitcher({
  locale,
  label,
  onNavigate,
}: {
  locale: Locale;
  label: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  // Remember the choice so middleware doesn't override it on the next visit.
  const remember = (next: Locale) => {
    // Writes document.cookie in response to a click, not during render; the
    // compiler's static analysis can't distinguish that from an in-render
    // mutation here.
    // eslint-disable-next-line react-hooks/immutability
    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000;samesite=lax`;
    onNavigate?.();
  };

  return (
    <nav aria-label={label} className="flex items-center gap-1">
      {locales.map((l) => (
        <Link
          key={l}
          href={localizePath(pathname, l)}
          hrefLang={l}
          lang={l}
          onClick={() => remember(l)}
          aria-current={l === locale ? "true" : undefined}
          className="locale-option"
        >
          <span aria-hidden>{l.toUpperCase()}</span>
          <span className="sr-only">{localeNames[l]}</span>
        </Link>
      ))}
    </nav>
  );
}
