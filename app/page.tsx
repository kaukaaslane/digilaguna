"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#080808] text-[#f2f0eb]">
      {/* HERO */}
      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#080808] md:min-h-[820px]">
        {/* Ambient gold light */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-15%] top-[5%] z-0 h-[650px] w-[650px] rounded-full bg-[#8b6a2b]/[0.045] blur-[120px]"
        />

        {/* Desktop mandala */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-[-8%] z-0 hidden w-[62%] md:block"
        >
          <div className="hero-mandala absolute inset-[-8%]">
            <div
              className="absolute inset-0 bg-contain bg-right bg-no-repeat"
              style={{ backgroundImage: "url('/hero.png')" }}
            />

            {/* Fade artwork into the black background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/20 via-transparent to-[#080808]" />
          </div>
        </div>

        {/* Code card — editorial, decorative */}
        {/* Desktop floating panel (visible on lg+) */}
        <div aria-hidden className="pointer-events-none hidden lg:block">
          <div className="absolute right-[8%] top-[18%] z-20 -rotate-3">
            <div className="w-[340px] font-mono text-sm leading-6" aria-hidden>
              <div className="bg-[#040404]/[0.82] border border-white/[0.06] rounded-[8px] px-4 py-3">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-[#f2f0eb]/[0.55] rounded-full" />
                  <span className="w-2 h-2 bg-[#f2d180]/[0.45] rounded-full" />
                  <span className="w-2 h-2 bg-[#9aa8ff]/[0.38] rounded-full" />
                  <div className="ml-auto text-[11px] text-white/[0.12]">project.tsx</div>
                </div>

                <div className="flex gap-4">
                  <div className="text-[11px] text-white/[0.10] select-none pt-1 leading-5">01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07<br/></div>

                  <pre className="m-0 p-0 text-[13px] leading-5 overflow-hidden">
                    <code className="block">
                      <div className="code-line" style={{animationDelay: '1s'}}><span className="text-[#8f7fd3]">const</span> <span className="text-[#f2f0eb]">project</span><span className="text-[#9e9e9e]"> = </span><span className="text-[#f2d180]">{'{'}</span></div>
                      <div className="code-line pl-2" style={{animationDelay: '1.06s'}}><span className="text-[#f2f0eb]">idea</span><span className="text-[#9e9e9e]">: </span><span className="text-[#f2d180]">"meaningful"</span><span className="text-[#9e9e9e]">,</span></div>
                      <div className="code-line pl-2" style={{animationDelay: '1.12s'}}><span className="text-[#f2f0eb]">design</span><span className="text-[#9e9e9e]">: </span><span className="text-[#f2d180]">"thoughtful"</span><span className="text-[#9e9e9e]">,</span></div>
                      <div className="code-line pl-2" style={{animationDelay: '1.18s'}}><span className="text-[#f2f0eb]">code</span><span className="text-[#9e9e9e]">: </span><span className="text-[#f2d180]">"built to last"</span><span className="text-[#9e9e9e]">,</span></div>
                      <div className="code-line" style={{animationDelay: '1.24s'}}><span className="text-[#f2d180]">{'}'}</span>;</div>

                      <div className="code-line mt-2" style={{animationDelay: '1.32s'}}>&lt;<span className="text-[#89a6d9]">DigitalExperience</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#f2f0eb]">responsive</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#f2f0eb]">human</span><br/>&gt;</div>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="site-container relative z-10 flex min-h-[760px] items-center py-24 md:min-h-[820px] md:py-32">
          <div className="max-w-3xl">
            <div className="hero-fade-in mb-5 text-[11px] tracking-[0.3em] text-[#a7a39b] uppercase">
              Digital studio
            </div>

            <h1 className="hero-fade-in-delay text-[clamp(3.6rem,8vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.045em] text-[#f2f0eb]">
              You bring the idea.
              <br />
              We figure out
              <br />
              what to build.
            </h1>

            <p className="hero-fade-in-delay-2 mt-8 max-w-xl text-base leading-7 text-[#a7a39b] sm:text-lg">
              Bring us a problem, a rough idea or something you know could work
              better. We'll help you figure out what comes next.
            </p>

            <div className="hero-fade-in-delay-3 mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
              href="/contact"
              className="group inline-flex items-center h-11 md:h-9 gap-2 px-4 rounded-full border border-white/12 text-sm font-medium text-[#f2f0eb] cursor-pointer hover:bg-white/[0.04] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
              <span>Start a project</span>
              <span aria-hidden className="text-[#66645f] transition-colors duration-150 group-hover:text-[#f2f0eb]">→</span>
              </Link>

              <Link
                href="/work"
                className="group inline-flex items-center h-11 md:h-9 gap-2 px-4 rounded-full border border-white/12 text-sm font-medium text-[#f2f0eb] cursor-pointer hover:bg-white/[0.04] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                <span>View selected work</span>
                <span aria-hidden className="text-[#66645f] transition-colors duration-150 group-hover:text-[#f2f0eb]">→</span>
              </Link>
            </div>

            {/* Mobile code panel (compact) */}
            <div aria-hidden className="mt-6 block lg:hidden">
              <div className="mx-auto w-[90%] max-w-[520px] font-mono text-sm">
                <div className="bg-[#040404]/[0.9] border border-white/[0.06] rounded-[8px] px-4 py-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-[#f2f0eb]/[0.55] rounded-full" />
                    <span className="w-2 h-2 bg-[#f2d180]/[0.45] rounded-full" />
                    <span className="w-2 h-2 bg-[#9aa8ff]/[0.38] rounded-full" />
                    <div className="ml-auto text-[11px] text-white/[0.10]">project.tsx</div>
                  </div>

                  <pre className="m-0 p-0 text-[13px] leading-5 overflow-hidden">
                    <code className="block">
                      <div className="code-line" style={{animationDelay: '1.4s'}}><span className="text-[#8f7fd3]">const</span> <span className="text-[#f2f0eb]">project</span><span className="text-[#9e9e9e]"> = </span><span className="text-[#f2d180]">{'{'}</span></div>
                      <div className="code-line pl-2" style={{animationDelay: '1.46s'}}><span className="text-[#f2f0eb]">idea</span><span className="text-[#9e9e9e]">: </span><span className="text-[#f2d180]">"meaningful"</span><span className="text-[#9e9e9e]">,</span></div>
                      <div className="code-line pl-2" style={{animationDelay: '1.52s'}}><span className="text-[#f2f0eb]">design</span><span className="text-[#9e9e9e]">: </span><span className="text-[#f2d180]">"thoughtful"</span><span className="text-[#9e9e9e]">,</span></div>
                      <div className="code-line pl-2" style={{animationDelay: '1.58s'}}><span className="text-[#f2f0eb]">code</span><span className="text-[#9e9e9e]">: </span><span className="text-[#f2d180]">"built to last"</span><span className="text-[#9e9e9e]">,</span></div>
                      <div className="code-line" style={{animationDelay: '1.64s'}}><span className="text-[#f2d180]">{'}'}</span>;</div>
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Capabilities */}
            <div className="hero-fade-in-delay-3 mt-20 flex flex-wrap gap-x-6 gap-y-2 text-[10px] tracking-[0.2em] text-[#66645f] uppercase">
              <span>Websites</span>
              <span>E-commerce</span>
              <span>Digital Tools</span>
              <span>Automation &amp; AI</span>
            </div>
          </div>
        </div>

        {/* Mobile artwork */}
        <div className="relative z-10 -mt-16 md:hidden">
          <div className="relative mx-auto h-[390px] w-full max-w-[520px] overflow-hidden">
            <img
              src="/hero.png"
              alt="Black and gold mandala artwork"
              className="hero-mobile-mandala absolute left-1/2 top-0 h-full w-[135%] max-w-none -translate-x-1/2 object-contain"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="border-t border-white/[0.09]">
        <div className="site-container py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-4 text-[10px] tracking-[0.28em] text-[#66645f] uppercase">
             Start with the problem
            </div>
            <h2 className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl">
              Not every idea needs an app.
              <br />
              Not every business needs a complicated website.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#88857e]">
              Sometimes the right solution is simpler. Sometimes it isn't. We
             start by understanding what you're trying to achieve — then figure
             out what makes sense to build.
            </p>
           <p className="mt-6 text-sm uppercase tracking-[0.22em] text-[#a7a39b]">
             The technology comes after the idea.
           </p>
         </div>
       </div>
      </section>

      {/* SELECTED WORK */}
      <section className="border-t border-white/[0.09]">
        <div className="site-container py-24 md:py-32">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <div className="mb-4 text-[10px] tracking-[0.28em] text-[#66645f] uppercase">
                Selected work
              </div>
              <h2 className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl">
                A few things we've been building.
              </h2>
            </div>

            <div className="hidden text-right text-xs text-[#66645f] sm:block">
              Web Design
              <br />
              UX
              <br />
              Front-end Development
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="max-w-md text-base leading-7 text-[#a7a39b]">
                A multilingual website concept for a robotic lawn-care
                service, designed and built with a focus on clarity,
                simplicity and a calm Scandinavian visual direction.
              </p>

              <Link
                href="/work/dropmow"
                className="group inline-flex items-center h-11 md:h-9 gap-2 px-4 rounded-full border border-white/12 text-sm font-medium text-[#f2f0eb] cursor-pointer hover:bg-white/[0.04] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                <span>View case study</span>
                <span aria-hidden className="text-[#66645f] transition-colors duration-150 group-hover:text-[#f2f0eb]">→</span>
              </Link>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden border border-white/[0.08] bg-[#111]">
              <div className="absolute inset-0 flex items-center justify-center text-xs tracking-widest text-[#444] uppercase">
                DropMow project visual
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-white/[0.09]">
        <div className="site-container py-24 md:py-32">
          <div className="mb-14 max-w-2xl">
            <div className="mb-4 text-[10px] tracking-[0.28em] text-[#66645f] uppercase">
              What we build
            </div>
            <h2 className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl">
              What could we build together?
            </h2>
          </div>

          <div className="border-t border-white/[0.09]">
            {[
              {
                number: "01",
                title: "Websites",
                description:
                  "Clear, purposeful websites that make a business easier to understand and easier to choose.",
              },
              {
                number: "02",
                title: "E-commerce",
                description:
                  "Online stores built around the way you actually sell — not around a template.",
              },
              {
                number: "03",
                title: "Digital tools",
                description:
                  "Custom apps and internal tools for the things your existing software can't quite do.",
              },
              {
                number: "04",
                title: "Automation & AI",
                description:
                  "Less repetitive work. Better workflows. Smarter systems where they actually help.",
              },
              {
                number: "05",
                title: "Digital visuals",
                description:
                  "Visuals for products, brands, spaces and digital experiences.",
              },
            ].map((service) => (
              <div
                key={service.number}
                className="group grid grid-cols-[48px_1fr] gap-4 border-b border-white/[0.09] py-8 md:grid-cols-[80px_0.8fr_1fr] md:gap-8 md:py-10"
              >
                <div className="text-xs text-[#66645f]">
                  {service.number}
                </div>

                <h3 className="text-lg font-medium tracking-[-0.015em] transition-transform duration-300 md:text-xl md:group-hover:translate-x-1">
                  {service.title}
                </h3>

                <p className="col-start-2 text-sm leading-6 text-[#88857e] md:col-start-3 md:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-t border-white/[0.09]">
        <div className="site-container py-24 md:py-32">
          <div className="mb-14 max-w-2xl">
            <div className="mb-4 text-[10px] tracking-[0.28em] text-[#66645f] uppercase">
              Process
            </div>
            <h2 className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl">
              Start with the idea. Not the technology.
            </h2>
          </div>

          <div className="grid grid-cols-1 border-t border-white/[0.09] sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Tell us what you're thinking.",
                "You don't need a finished brief. A problem, a rough idea or even a sentence is enough.",
              ],
              [
                "02",
                "We figure it out.",
                "We look at what you're trying to achieve and what kind of solution makes sense.",
              ],
              [
                "03",
                "We build it.",
                "The right technology, the right amount of complexity, and nothing added just because we can.",
              ],
              [
                "04",
                "We keep it useful.",
                "Launch is not the end. Digital things can evolve as your business does.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="border-b border-white/[0.09] py-8 sm:border-r sm:px-6 lg:min-h-[210px] lg:border-b-0 lg:px-8 first:lg:pl-0 last:lg:border-r-0"
              >
                <div className="mb-8 text-xs text-[#66645f]">{number}</div>
                <h3 className="mb-3 text-lg font-medium">{title}</h3>
                <p className="text-sm leading-6 text-[#88857e]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL VISUALS */}
      <section className="border-t border-white/[0.09]">
        <div className="site-container py-24 md:py-32">
          <div className="mb-14 max-w-2xl">
            <div className="mb-4 text-[10px] tracking-[0.28em] text-[#66645f] uppercase">
              Digital visuals
            </div>

            <h2 className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl">
              Some ideas are better seen than explained.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#88857e]">
              Visual work created for screens, spaces, products and print.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {["01", "02", "03", "04"].map((item, index) => (
              <div
                key={item}
                className={`group relative overflow-hidden bg-[#111] ${
                  index === 0
                    ? "aspect-[3/4] md:col-span-2 md:row-span-2"
                    : "aspect-square"
                }`}
              >
                <div className="absolute inset-0 flex items-end p-4 text-[10px] tracking-[0.2em] text-white/20 uppercase transition-colors duration-500 group-hover:text-white/50">
                  Digital Visual {item}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/digital-visuals"
            className="group mt-8 inline-flex cursor-pointer items-center text-sm text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
          >
            Explore digital visuals
            <span
              aria-hidden
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </section>

      {/* PROJECT STARTER CTA */}
      <section className="border-t border-white/[0.09]">
        <div className="site-container py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.35fr_1fr]">
            <div className="text-[10px] tracking-[0.28em] text-[#66645f] uppercase">
              Start here
            </div>

            <div className="max-w-2xl">
              <h2 className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl">
                Not sure what you need yet?
              </h2>

              <p className="mt-6 text-base leading-7 text-[#88857e]">
                That's exactly where you can start. Tell us what you're
                thinking about. We'll help you work out where to take it.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex cursor-pointer items-center text-sm text-[#f2f0eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
              >
                Start with your idea
                <span
                  aria-hidden
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/[0.09]">
        <div className="site-container py-28 md:py-40">
          <div className="max-w-3xl">
            <div className="mb-4 text-[10px] tracking-[0.28em] text-[#66645f] uppercase">
              Get in touch
            </div>

            <h2 className="text-5xl font-medium tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Have something worth building?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#88857e]">
              Let's figure out what it could become.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex cursor-pointer items-center border border-[#f2f0eb]/30 px-6 py-3 text-sm transition-colors duration-300 hover:border-[#f2f0eb] hover:bg-[#f2f0eb] hover:text-[#080808] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2f0eb]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            >
              Start a project
              <span
                aria-hidden
                className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes heroMandalaIn {
          from {
            opacity: 0;
            transform: scale(1.08) translateX(5%);
          }
          to {
            opacity: 1;
            transform: scale(1) translateX(0);
          }
        }

        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* subtle panel reveal for code-lines */
        @keyframes codeReveal {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-mandala {
          animation: heroMandalaIn 1.8s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .hero-fade-in {
          animation: heroFadeIn 0.8s ease-out 0.15s both;
        }

        .hero-fade-in-delay {
          animation: heroFadeIn 0.9s ease-out 0.3s both;
        }

        .hero-fade-in-delay-2 {
          animation: heroFadeIn 0.9s ease-out 0.5s both;
        }

        .hero-fade-in-delay-3 {
          animation: heroFadeIn 0.9s ease-out 0.7s both;
        }

        .hero-mobile-mandala {
          animation: heroMandalaIn 1.6s cubic-bezier(0.22, 1, 0.36, 1)
            0.15s both;
        }

        /* apply the reveal to code lines; delays are set inline in JSX for a soft stagger */
        .code-line {
          opacity: 0;
          transform: translateY(6px);
          animation: codeReveal 0.46s ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-mandala,
          .hero-fade-in,
          .hero-fade-in-delay,
          .hero-fade-in-delay-2,
          .hero-fade-in-delay-3,
          .hero-mobile-mandala,
          .code-line {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}