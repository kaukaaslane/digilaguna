"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import type { Dictionary } from "@/i18n/dictionaries/en";

type ChatMessagePart = {
  type: string;
  text?: string;
};

type ChatMessage = {
  id: string;
  role: string;
  parts?: ChatMessagePart[];
};

type SubmitState = {
  type: "success" | "error";
  text: string;
};

function ChatWindow({ dict }: { dict: Dictionary }) {
  const t = dict.contact.chat;
  const c = dict.common;

  const { messages, status, sendMessage, error, clearError } = useChat({
    messages: [
      {
        id: "init",
        role: "assistant",
        parts: [{ type: "text", text: t.initialAssistant }],
      },
    ],
  });

  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const text = input.trim();

    if (!text) {
      return;
    }

    try {
      await sendMessage({ text });
      setInput("");
      inputRef.current?.focus();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="mb-8 max-w-2xl space-y-5">
        {messages?.map((message) => {
          const typedMessage = message as unknown as ChatMessage;

          return (
            <div
              key={typedMessage.id}
              className={
                typedMessage.role === "assistant"
                  ? "text-sm text-text-secondary"
                  : "text-sm text-text"
              }
            >
              {typedMessage.parts?.map((part, index) => (
                <div key={index} className="whitespace-pre-wrap leading-7">
                  {part.type === "text" ? part.text : null}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="mt-auto w-full max-w-2xl">
        {error && (
          <div className="mb-4 text-sm text-error">
            {t.error}

            <button
              type="button"
              onClick={() => clearError && clearError()}
              className="ml-3 cursor-pointer underline"
            >
              {t.retry}
            </button>
          </div>
        )}

        <div className="flex gap-3">
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={t.placeholder}
            className="min-h-11 flex-1 rounded-full border border-line-strong bg-transparent px-4 py-3 text-sm text-text outline-none placeholder:text-text-faint transition-colors focus:border-line-strong"
            aria-label="Message"
          />

          <button
            type="submit"
            disabled={status !== "ready"}
            className="shrink-0 cursor-pointer hover:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-50 btn btn-primary"
          >
            <span>{status === "ready" ? c.send : "…"}</span>

            <span aria-hidden className="btn-arrow">→</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default function ContactClient({ dict }: { dict: Dictionary }) {
  const t = dict.contact;
  const c = dict.common;

  const [mode, setMode] = useState<"choice" | "starter" | "form">("choice");
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

      {/* CHOICE */}
      {mode === "choice" && (
        <section>
          <div className="site-container section">
            <div className="grid gap-6 md:grid-cols-2">
              {/* PROJECT STARTER */}
              <button
                type="button"
                onClick={() => setMode("starter")}
                className="group min-h-[300px] cursor-pointer border border-line-strong p-7 text-left transition-colors duration-300 hover:border-line-strong md:p-8"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span className="btn btn-secondary">
                      <span aria-hidden className="btn-arrow">→</span>
                    </span>

                    <span className="pt-2 eyebrow">{t.choice.starter.label}</span>
                  </div>

                  <div className="mt-auto pt-16">
                    <h2 className="whitespace-pre-line text-3xl font-medium leading-[1.02] tracking-[-0.025em] md:text-4xl">
                      {t.choice.starter.title}
                    </h2>

                    <p className="mt-6 max-w-md text-sm leading-7 text-text-secondary">
                      {t.choice.starter.body}
                    </p>
                  </div>
                </div>
              </button>

              {/* DIRECT ENQUIRY */}
              <button
                type="button"
                onClick={() => setMode("form")}
                className="group min-h-[300px] cursor-pointer border border-line-strong p-7 text-left transition-colors duration-300 hover:border-line-strong md:p-8"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span className="btn btn-secondary">
                      <span aria-hidden className="btn-arrow">→</span>
                    </span>

                    <span className="pt-2 eyebrow">{t.choice.direct.label}</span>
                  </div>

                  <div className="mt-auto pt-16">
                    <h2 className="whitespace-pre-line text-3xl font-medium leading-[1.02] tracking-[-0.025em] md:text-4xl">
                      {t.choice.direct.title}
                    </h2>

                    <p className="mt-6 max-w-md text-sm leading-7 text-text-secondary">
                      {t.choice.direct.body}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* PROJECT STARTER */}
      {mode === "starter" && (
        <section>
          <div className="site-container py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 flex items-center justify-between rule pb-5">
                <div className="eyebrow">{t.starterMode.eyebrow}</div>

                <button
                  type="button"
                  onClick={() => setMode("choice")}
                  className="cursor-pointer hover:bg-white/[0.04] btn btn-secondary"
                >
                  <span>{c.back}</span>

                  <span aria-hidden className="text-text-faint">←</span>
                </button>
              </div>

              <div className="min-h-[420px]">
                <div className="mb-10">
                  <div className="mb-5 eyebrow">{t.starterMode.label}</div>

                  <h2 className="max-w-2xl text-3xl font-medium leading-[1.05] tracking-[-0.025em] md:text-5xl">
                    {t.starterMode.title}
                  </h2>
                </div>

                <ChatWindow dict={dict} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DIRECT FORM */}
      {mode === "form" && (
        <section>
          <div className="site-container py-16 md:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="mb-10 flex items-center justify-between rule pb-5">
                <div>
                  <div className="eyebrow">{t.formMode.eyebrow}</div>

                  <div className="mt-2 text-sm text-text-secondary">
                    {t.formMode.subtitle}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMode("choice")}
                  className="cursor-pointer hover:bg-white/[0.04] btn btn-secondary"
                >
                  <span>{c.back}</span>

                  <span aria-hidden className="text-text-faint">←</span>
                </button>
              </div>

              <form className="space-y-8" onSubmit={handleDirectEnquirySubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs text-text-muted"
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
                    className="mb-2 block text-xs text-text-muted"
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
                    className="mb-2 block text-xs text-text-muted"
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
                    className="mb-2 block text-xs text-text-muted"
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
      )}

      {/* FOOTER NOTE */}
      <section className="border-t border-line">
        <div className="site-container py-12">
          <p className="max-w-xl text-xs leading-6 text-text-faint">
            {t.footerNote}
          </p>
        </div>
      </section>
    </div>
  );
}
