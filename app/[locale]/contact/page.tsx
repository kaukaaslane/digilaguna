"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";

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
                <div
                  key={index}
                  className="whitespace-pre-wrap leading-7"
                >
                  {part.type === "text" ? part.text : null}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-auto w-full max-w-2xl"
      >
        {error && (
          <div className="mb-4 text-sm text-error">
            Something went wrong. Please try again.

            <button
              type="button"
              onClick={() => clearError && clearError()}
              className="ml-3 cursor-pointer underline"
            >
              Retry
            </button>
          </div>
        )}

        <div className="flex gap-3">
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Tell me about your idea..."
            className="min-h-11 flex-1 rounded-full border border-line-strong bg-transparent px-4 py-3 text-sm text-text outline-none placeholder:text-text-faint transition-colors focus:border-line-strong"
            aria-label="Message"
          />

          <button
            type="submit"
            disabled={status !== "ready"}
            className="shrink-0 cursor-pointer hover:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-50 btn btn-primary"
          >
            <span>
              {status === "ready" ? "Send" : "…"}
            </span>

            <span
              aria-hidden
              className="btn-arrow"
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
  const [mode, setMode] = useState<
    "choice" | "starter" | "form"
  >("choice");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitState, setSubmitState] =
    useState<SubmitState | null>(null);

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
      description: String(
        formData.get("description") ?? ""
      ).trim(),
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
        throw new Error(
          data.error ||
            "Something went wrong. Please try again."
        );
      }

      form.reset();

      setSubmitState({
        type: "success",
        text:
          data.message ||
          "Your enquiry has been sent.",
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
    <div className="min-h-screen overflow-x-hidden bg-bg text-text">
      {/* INTRO */}
      <section className="rule">
        <div className="site-container section-lg">
          <div className="max-w-4xl">
            <div className="mb-5 eyebrow">
              Start a project
            </div>

            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.03em] md:text-7xl">
              Let&apos;s start with
              <br />
              the idea.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
              You don&apos;t need a finished brief. Tell me
              what you&apos;re thinking about and we&apos;ll figure
              out the right direction together.
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
                    {/* ARROW PILL */}
                    <span className="btn btn-secondary">
                      <span
                        aria-hidden
                        className="btn-arrow"
                      >
                        →
                      </span>
                    </span>

                    {/* LABEL */}
                    <span className="pt-2 eyebrow">
                      01 / Guided
                    </span>
                  </div>

                  <div className="mt-auto pt-16">
                    <h2 className="text-3xl font-medium leading-[1.02] tracking-[-0.025em] md:text-4xl">
                      Start with
                      <br />
                      Project Starter
                    </h2>

                    <p className="mt-6 max-w-md text-sm leading-7 text-text-secondary">
                      Not sure exactly what you need? Start a
                      conversation and we&apos;ll turn the idea
                      into a clearer project direction.
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
                    {/* ARROW PILL */}
                    <span className="btn btn-secondary">
                      <span
                        aria-hidden
                        className="btn-arrow"
                      >
                        →
                      </span>
                    </span>

                    {/* LABEL */}
                    <span className="pt-2 eyebrow">
                      02 / Direct
                    </span>
                  </div>

                  <div className="mt-auto pt-16">
                    <h2 className="text-3xl font-medium leading-[1.02] tracking-[-0.025em] md:text-4xl">
                      I know what
                      <br />
                      I need
                    </h2>

                    <p className="mt-6 max-w-md text-sm leading-7 text-text-secondary">
                      Already know what you&apos;re looking
                      for? Send a direct enquiry and tell me
                      about the project in your own words.
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
                <div className="eyebrow">
                  Project Starter
                </div>

                <button
                  type="button"
                  onClick={() => setMode("choice")}
                  className="cursor-pointer hover:bg-white/[0.04] btn btn-secondary"
                >
                  <span>Back</span>

                  <span
                    aria-hidden
                    className="text-text-faint"
                  >
                    ←
                  </span>
                </button>
              </div>

              <div className="min-h-[420px]">
                <div className="mb-10">
                  <div className="mb-5 eyebrow">
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
              <div className="mb-10 flex items-center justify-between rule pb-5">
                <div>
                  <div className="eyebrow">
                    Direct enquiry
                  </div>

                  <div className="mt-2 text-sm text-text-secondary">
                    Tell me what you need.
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMode("choice")}
                  className="cursor-pointer hover:bg-white/[0.04] btn btn-secondary"
                >
                  <span>Back</span>

                  <span
                    aria-hidden
                    className="text-text-faint"
                  >
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
                    className="mb-2 block text-xs text-text-muted"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rule-strong bg-transparent px-0 py-3 text-base text-text outline-none transition-colors placeholder:text-text-faint focus:border-line-strong"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs text-text-muted"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rule-strong bg-transparent px-0 py-3 text-base text-text outline-none transition-colors placeholder:text-text-faint focus:border-line-strong"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-xs text-text-muted"
                  >
                    Company / Project
                  </label>

                  <input
                    id="company"
                    name="company"
                    className="w-full rule-strong bg-transparent px-0 py-3 text-base text-text outline-none transition-colors placeholder:text-text-faint focus:border-line-strong"
                    placeholder="Company or project name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="mb-2 block text-xs text-text-muted"
                  >
                    What are you looking to build?
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    required
                    className="min-h-[160px] w-full resize-none rule-strong bg-transparent px-0 py-3 text-base text-text outline-none transition-colors placeholder:text-text-faint focus:border-line-strong"
                    placeholder="Tell me a little about the project..."
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
                  <span>
                    {isSubmitting
                      ? "Sending..."
                      : "Send enquiry"}
                  </span>

                  <span
                    aria-hidden
                    className="btn-arrow"
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
      <section className="border-t border-line">
        <div className="site-container py-12">
          <p className="max-w-xl text-xs leading-6 text-text-faint">
            Not sure what you need yet? That&apos;s perfectly
            fine. Start with the Project Starter and we&apos;ll
            work it out from there.
          </p>
        </div>
      </section>
    </div>
  );
}