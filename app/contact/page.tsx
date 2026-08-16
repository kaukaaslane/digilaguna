"use client";

import { useEffect, useState, useRef } from "react";
import { useChat } from "@ai-sdk/react";

const starterOptions = [
  "A new website",
  "Redesign an existing website",
  "Digital tool or app",
  "Automation",
  "Something else",
];

function ChatWindow() {
  const initialAssistant = "Start wherever it makes sense. Tell me about the idea.";
  const { messages, status, sendMessage, error, clearError } = useChat({
    messages: [
      {
        id: 'init',
        role: 'assistant',
        parts: [{ type: 'text', text: initialAssistant }],
      },
    ],
  });

  const [input, setInput] = useState('');
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
      setInput('');
      inputRef.current?.focus();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6 max-w-2xl space-y-4">
        {messages?.map((m: any) => (
          <div key={m.id} className={m.role === 'assistant' ? 'text-sm text-[#e9e7e3]' : 'text-sm text-[#f2f0eb]'}>
            {m.parts?.map((p: any, idx: number) => (
              <div key={idx} className="whitespace-pre-wrap leading-7">
                {p.type === 'text' ? p.text : null}
              </div>
            ))}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-auto w-full max-w-2xl">
        {error && (
          <div className="mb-3 text-sm text-[#d7c1a0]">
            Something went wrong. Please try again.
            <button type="button" onClick={() => clearError && clearError()} className="ml-3 cursor-pointer underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]">
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
            className="flex-1 rounded-sm border border-white/[0.08] bg-transparent px-4 py-3 text-sm text-[#f2f0eb] placeholder:text-[#666] focus:outline-none focus:border-white/40"
            aria-label="Message"
          />

          <button
            type="submit"
            className="inline-flex cursor-pointer items-center rounded-sm border border-white/[0.12] px-4 py-3 text-sm text-[#f2f0eb] transition-colors hover:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            disabled={status !== 'ready'}
          >
            {status === 'ready' ? 'Send' : '…'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function Contact() {
  const [mode, setMode] = useState<"choice" | "starter" | "form">("choice");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080808] text-[#f2f0eb]">
      {/* INTRO */}
      <section className="border-b border-white/[0.09]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="max-w-4xl">
            <div className="mb-5 text-[10px] tracking-[0.28em] text-[#66645f] uppercase">
              Start a project
            </div>

            <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              Let's start with
              <br />
              the idea.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#88857e] sm:text-lg">
              You don't need a finished brief. Tell me what you're thinking
              about and we'll figure out the right direction together.
            </p>
          </div>
        </div>
      </section>

      {/* CHOICE */}
      {mode === "choice" && (
        <section>
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* PROJECT STARTER */}
              <button
                type="button"
                onClick={() => setMode("starter")}
                className="group cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                <div className="border-t border-white/[0.12] pt-7 transition-colors duration-300 group-hover:border-white/40">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.25em] text-[#66645f] uppercase">
                      01 / Guided
                    </span>

                    <span className="text-[#66645f] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#f2f0eb]">
                      →
                    </span>
                  </div>

                  <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                    Start with
                    <br />
                    Project Starter
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-6 text-[#88857e]">
                    Not sure exactly what you need? Answer a few simple
                    questions and we'll turn the idea into a clearer project
                    direction.
                  </p>
                </div>
              </button>

              {/* DIRECT ENQUIRY */}
              <button
                type="button"
                onClick={() => setMode("form")}
                className="group cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                <div className="border-t border-white/[0.12] pt-7 transition-colors duration-300 group-hover:border-white/40">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.25em] text-[#66645f] uppercase">
                      02 / Direct
                    </span>

                    <span className="text-[#66645f] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#f2f0eb]">
                      →
                    </span>
                  </div>

                  <h2 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                    I know what
                    <br />
                    I need
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-6 text-[#88857e]">
                    Already know what you're looking for? Send a direct
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
          <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 md:py-24">
            <div className="mb-8 flex items-center justify-between border-b border-white/[0.09] pb-5">
              <div>
                <div className="text-[10px] tracking-[0.25em] text-[#66645f] uppercase">
                  Project Starter
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMode("choice")}
                className="cursor-pointer text-xs text-[#66645f] transition-colors hover:text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                ← Back
              </button>
            </div>

            <div className="min-h-[420px]">
              <div className="mb-10">
                <div className="mb-5 text-[10px] tracking-[0.25em] text-[#66645f] uppercase">
                  Digilaguna
                </div>

                <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl">
                  What are you thinking about building?
                </h2>
              </div>

              {/* AI-assisted chat (replaces the static starter flow) */}
              <div className="flex flex-col h-full">
                <ChatWindow />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DIRECT FORM */}
      {mode === "form" && (
        <section>
          <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 md:py-24">
            <div className="mb-10 flex items-center justify-between border-b border-white/[0.09] pb-5">
              <div>
                <div className="text-[10px] tracking-[0.25em] text-[#66645f] uppercase">
                  Direct enquiry
                </div>

                <div className="mt-2 text-sm text-[#88857e]">
                  Tell me what you need.
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMode("choice")}
                className="cursor-pointer text-xs text-[#66645f] transition-colors hover:text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                ← Back
              </button>
            </div>

            <form
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submission will be connected later.");
              }}
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
                  className="w-full border-b border-white/[0.15] bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-[#444] focus:border-white/50"
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
                  className="w-full border-b border-white/[0.15] bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-[#444] focus:border-white/50"
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
                  className="w-full border-b border-white/[0.15] bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-[#444] focus:border-white/50"
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
                  className="min-h-[160px] w-full resize-none border-b border-white/[0.15] bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-[#444] focus:border-white/50"
                  placeholder="Tell me a little about the project..."
                />
              </div>

              <button
                type="submit"
                className="group inline-flex cursor-pointer items-center border border-white/30 px-6 py-3 text-sm transition-colors hover:border-white hover:bg-white hover:text-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                Send enquiry
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </div>
        </section>
      )}

      {/* FOOTER NOTE */}
      <section className="border-t border-white/[0.09]">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
          <p className="max-w-xl text-xs leading-5 text-[#555]">
            Not sure what you need yet? That's perfectly fine. Start with the Project
            Starter and we'll work it out from there.
          </p>
        </div>
      </section>
    </main>
  );
}