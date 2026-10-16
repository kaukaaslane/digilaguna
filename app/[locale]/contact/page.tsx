import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import ContactClient from "./ContactClient";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = (await getDictionary(locale as Locale)).contact.meta;

  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `/${locale}/contact` },
    openGraph: { title: m.title, description: m.description },
  };
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return <ContactClient dict={dict} />;
}
