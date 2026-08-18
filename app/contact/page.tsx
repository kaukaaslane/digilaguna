"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";

const starterOptions = [
  "A new website",
  "Redesign an existing website",
  "Digital tool or app",
  "Automation",
  "Something else",
];

function ChatWindow() {
  const initialAssistant =
    "Start wherever it makes sense. Tell me about the idea.";

  const { messages, status, sendMessage, error, clearError } = useChat({
    messages: [
      {
        id: "init",
        role: "assistant",
        parts: [{ type: "text", text: initialAssistant }],
      },
    ],
  });

  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e?: any) => {
    e?.preventDefault?.();

    const text = input.trim();
    if (!text) return;

    try {
      await sendMessage({ text });
      setInput("");
      inputRef.current?.focus();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="mb-8 max-w-2xl space-y-5">
        {messages?.map((m: any) => (
          <div
            key={m.id}
            className={
              m.role === "assistant"
                ? "text-sm text-[#a7a39b]"
                : "text-sm text-[#f2f0eb]"
            }
          >
            {m.parts?.map((p: any, idx: number) => (
              <div key={idx} className="whitespace-pre-wrap leading-7">
                {p.type === "text" ? p.text : null}
              </div>
            ))}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-auto w-full max-w-2xl">
        {error && (
          <div className="mb-4 text-sm text-[#d7c1a0]">
            Something went wrong. Please try again.
            <button
              type="button"
              onClick={() => clearError && clearError()}
              className="ml-3 cursor-pointer underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            >
              Retry
            </button>
          </div>
        )}

        <div className="flex gap-3">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tell me about your idea..."
            className="min-h-11 flex-1 rounded-full border border-white/[0.12] bg-transparent px-4 py-3 text-sm text-[#f2f0eb] placeholder:text-[#66645f] outline-none transition-colors focus:border-white/40"
            aria-label="Message"
          />

          <button
            type="submit"
            disabled={status !== "ready"}
            className="group inline-flex h-11 shrink-0 cursor-pointer items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-medium text-[#f2f0eb] transition-colors duration-150 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span>{status === "ready" ? "Send" : "…"}</span>
            <span
              aria-hidden
              className="text-[#66645f] transition-colors duration-150 group-hover:text-[#f2f0eb]"
            >
              →
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default function Contact() {
  const [mode, setMode] = useState<"choice" | "starter" | "form">("choice");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleDirectEnquirySubmit = async (
    event: React.FormEvent<HTMLFormElement>
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
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      form.reset();
      setSubmitState({
        type: "success",
        text: data.message || "Your enquiry has been sent.",
      });
    } catch (error) {
      setSubmitState({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080808] text-[#f2f0eb]">
      {/* INTRO */}
      <section className="border-b border-white/[0.08]">
        <div className="site-container py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#77736c]">
              Start a project
            </div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.03em] md:text-7xl">
              Let&apos;s start with
              <br />
              the idea.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#a7a39b] md:text-lg">
              You don&apos;t need a finished brief. Tell me what you&apos;re
              thinking about and we&apos;ll figure out the right direction
              together.
            </p>
          </div>
        </div>
      </section>

      {/* CHOICE */}
      {mode === "choice" && (
        <section>
          <div className="site-container py-20 md:py-28">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              {/* PROJECT STARTER */}
              <button
                type="button"
                onClick={() => setMode("starter")}
                className="group cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                <div className="border-t border-white/[0.12] pt-7 transition-colors duration-300 group-hover:border-white/40">
                  <div className="mb-12 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#77736c]">
                      01 / Guided
                    </span>

                    <span
                      aria-hidden
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-[#f2f0eb] transition-colors duration-150 group-hover:bg-white/[0.04]"
                    >
                      →
                    </span>
                  </div>

                  <h2 className="text-3xl font-medium leading-[1.02] tracking-[-0.025em] md:text-4xl">
                    Start with
                    <br />
                    Project Starter
                  </h2>

                  <p className="mt-6 max-w-md text-sm leading-7 text-[#a7a39b]">
                    Not sure exactly what you need? Start a conversation and
                    we&apos;ll turn the idea into a clearer project direction.
                  </p>
                </div>
              </button>

              {/* DIRECT ENQUIRY */}
              <button
                type="button"
                onClick={() => setMode("form")}
                className="group cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                <div className="border-t border-white/[0.12] pt-7 transition-colors duration-300 group-hover:border-white/40">
                  <div className="mb-12 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#77736c]">
                      02 / Direct
                    </span>

                    <span
                      aria-hidden
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-[#f2f0eb] transition-colors duration-150 group-hover:bg-white/[0.04]"
                    >
                      →
                    </span>
                  </div>

                  <h2 className="text-3xl font-medium leading-[1.02] tracking-[-0.025em] md:text-4xl">
                    I know what
                    <br />
                    I need
                  </h2>

                  <p className="mt-6 max-w-md text-sm leading-7 text-[#a7a39b]">
                    Already know what you&apos;re looking for? Send a direct
                    enquiry and tell me about the project in your own words.
                  </p>
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
              <div className="mb-10 flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#77736c]">
                  Project Starter
                </div>

                <button
                  type="button"
                  onClick={() => setMode("choice")}
                  className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-medium text-[#f2f0eb] transition-colors duration-150 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                >
                  <span>Back</span>
                  <span aria-hidden className="text-[#66645f]">
                    ←
                  </span>
                </button>
              </div>

              <div className="min-h-[420px]">
                <div className="mb-10">
                  <div className="mb-5 text-[10px] uppercase tracking-[0.18em] text-[#77736c]">
                    Digilaguna
                  </div>

                  <h2 className="max-w-2xl text-3xl font-medium leading-[1.05] tracking-[-0.025em] md:text-5xl">
                    What are you thinking about building?
                  </h2>
                </div>

                <ChatWindow />
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
              <div className="mb-10 flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[#77736c]">
                    Direct enquiry
                  </div>

                  <div className="mt-2 text-sm text-[#a7a39b]">
                    Tell me what you need.
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMode("choice")}
                  className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-medium text-[#f2f0eb] transition-colors duration-150 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                >
                  <span>Back</span>
                  <span aria-hidden className="text-[#66645f]">
                    ←
                  </span>
                </button>
              </div>

              <form
                className="space-y-8"
                onSubmit={handleDirectEnquirySubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs text-[#88857e]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full border-b border-white/[0.15] bg-transparent px-0 py-3 text-base text-[#f2f0eb] outline-none transition-colors placeholder:text-[#444] focus:border-white/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs text-[#88857e]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border-b border-white/[0.15] bg-transparent px-0 py-3 text-base text-[#f2f0eb] outline-none transition-colors placeholder:text-[#444] focus:border-white/50"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-xs text-[#88857e]"
                  >
                    Company / Project
                  </label>

                  <input
                    id="company"
                    name="company"
                    className="w-full border-b border-white/[0.15] bg-transparent px-0 py-3 text-base text-[#f2f0eb] outline-none transition-colors placeholder:text-[#444] focus:border-white/50"
                    placeholder="Company or project name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="mb-2 block text-xs text-[#88857e]"
                  >
                    What are you looking to build?
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    required
                    className="min-h-[160px] w-full resize-none border-b border-white/[0.15] bg-transparent px-0 py-3 text-base text-[#f2f0eb] outline-none transition-colors placeholder:text-[#444] focus:border-white/50"
                    placeholder="Tell me a little about the project..."
                  />
                </div>

                {submitState && (
                  <div
                    aria-live="polite"
                    className={
                      submitState.type === "success"
                        ? "text-sm text-[#d7c1a0]"
                        : "text-sm text-[#e9b8b8]"
                    }
                  >
                    {submitState.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-medium text-[#f2f0eb] transition-colors duration-150 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span>{isSubmitting ? "Sending..." : "Send enquiry"}</span>
                  <span
                    aria-hidden
                    className="text-[#66645f] transition-colors duration-150 group-hover:text-[#f2f0eb]"
                  >
                    →
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER NOTE */}
      <section className="border-t border-white/[0.08]">
        <div className="site-container py-12">
          <p className="max-w-xl text-xs leading-6 text-[#66645f]">
            Not sure what you need yet? That&apos;s perfectly fine. Start with
            the Project Starter and we&apos;ll work it out from there.
          </p>
        </div>
      </section>
    </div>
  );
}