"use client";

import { FormEvent, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";

type SubmitState = {
  type: "success" | "error";
  text: string;
};

export default function ContactClient({ dict }: { dict: Dictionary }) {
  const t = dict.contact;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState | null>(null);

  const handleDirectEnquirySubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      description: String(formData.get("description") ?? "").trim(),
    };

    setSubmitState(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
        message?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(data.error || t.formMode.errorGeneric);
      }

      form.reset();

      setSubmitState({
        type: "success",
        text: data.message || t.formMode.successDefault,
      });
    } catch (error) {
      setSubmitState({
        type: "error",
        text: error instanceof Error ? error.message : t.formMode.errorGeneric,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-text">
      {/* INTRO */}
      <section className="rule">
        <div className="site-container section-lg">
          <div className="max-w-4xl">
            <div className="mb-5 eyebrow">{t.intro.eyebrow}</div>

            <h1 className="max-w-3xl whitespace-pre-line text-5xl font-medium leading-[0.98] tracking-[-0.03em] md:text-7xl">
              {t.intro.title}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
              {t.intro.lead}
            </p>
          </div>
        </div>
      </section>

      

      

      {/* DIRECT FORM */}
      <section>
          <div className="site-container py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 rule pb-5">
                <div className="eyebrow">{t.formMode.eyebrow}</div>

                <div className="mt-2 text-sm text-text-secondary">
                  {t.formMode.subtitle}
                </div>
              </div>

              <form className="space-y-8" onSubmit={handleDirectEnquirySubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-text-muted"
                  >
                    {t.formMode.nameLabel}
                  </label>

                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rule-strong bg-transparent px-0 py-3 text-base text-text outline-none transition-colors placeholder:text-text-faint focus:border-line-strong"
                    placeholder={t.formMode.namePlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-text-muted"
                  >
                    {t.formMode.emailLabel}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rule-strong bg-transparent px-0 py-3 text-base text-text outline-none transition-colors placeholder:text-text-faint focus:border-line-strong"
                    placeholder={t.formMode.emailPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm text-text-muted"
                  >
                    {t.formMode.companyLabel}
                  </label>

                  <input
                    id="company"
                    name="company"
                    className="w-full rule-strong bg-transparent px-0 py-3 text-base text-text outline-none transition-colors placeholder:text-text-faint focus:border-line-strong"
                    placeholder={t.formMode.companyPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="mb-2 block text-sm text-text-muted"
                  >
                    {t.formMode.descriptionLabel}
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    required
                    className="min-h-[160px] w-full resize-none rule-strong bg-transparent px-0 py-3 text-base text-text outline-none transition-colors placeholder:text-text-faint focus:border-line-strong"
                    placeholder={t.formMode.descriptionPlaceholder}
                  />
                </div>

                {submitState && (
                  <div
                    aria-live="polite"
                    className={
                      submitState.type === "success"
                        ? "text-sm text-success"
                        : "text-sm text-error"
                    }
                  >
                    {submitState.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer hover:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-60 btn btn-primary"
                >
                  <span>{isSubmitting ? t.formMode.sending : t.formMode.submit}</span>

                  <span aria-hidden className="btn-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="border-t border-line">
        <div className="site-container py-12">
          <p className="max-w-xl text-sm leading-6 text-text-muted">
            {t.footerNote}
          </p>
        </div>
      </section>
    </div>
  );
}
