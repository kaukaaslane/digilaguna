export default function LegalNoticePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">
        Legal Notice
      </h1>

      <p className="mt-4 text-sm text-text-secondary">
        Last updated: 18 August 2026
      </p>

      <div className="mt-12 space-y-10 leading-7 text-text">
        <section>
          <h2 className="text-xl font-semibold text-text">
            Company Information
          </h2>

          <p className="mt-3">
            <strong>Digilaguna OÜ</strong>
            <br />
            Registry code: 17334320
            <br />
            Republic of Estonia
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            Contact
          </h2>

          <p className="mt-3">
            Email:{" "}
            <a
              href="mailto:info@digilaguna.com"
              className="underline underline-offset-4"
            >
              info@digilaguna.com
            </a>
            <br />
            Website: digilaguna.com
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            Business Activities
          </h2>

          <p className="mt-3">
            Digilaguna provides digital creative, design and web-related
            services, including digital visual creation, branding graphics,
            website and landing page design, Shopify setup, website
            maintenance and SEO-related services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            Website Content
          </h2>

          <p className="mt-3">
            The content of this website is provided for general informational
            purposes. Digilaguna makes reasonable efforts to keep the
            information accurate and up to date, but service descriptions,
            pricing and other information may change without notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            Intellectual Property
          </h2>

          <p className="mt-3">
            Unless otherwise stated, the design, original content, graphics
            and other materials created for this website are protected by
            applicable intellectual property laws.
          </p>

          <p className="mt-3">
            Website content may not be reproduced, distributed or commercially
            exploited without appropriate permission, except where permitted
            by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            External Services and Links
          </h2>

          <p className="mt-3">
            The website may contain links to external websites or rely on
            third-party services. Digilaguna is not responsible for the
            content, availability or policies of external websites and
            services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            Legal Documents
          </h2>

          <p className="mt-3">
            Additional information about the processing of personal data,
            cookies and the use of Digilaguna services can be found in our
            Privacy Policy, Cookie Policy and Terms of Service.
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="/privacy"
              className="underline underline-offset-4"
            >
              Privacy Policy
            </a>

            <a
              href="/cookies"
              className="underline underline-offset-4"
            >
              Cookie Policy
            </a>

            <a
              href="/terms"
              className="underline underline-offset-4"
            >
              Terms of Service
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            Contact
          </h2>

          <p className="mt-3">
            For questions regarding this website or Digilaguna services,
            please contact us at{" "}
            <a
              href="mailto:info@digilaguna.com"
              className="underline underline-offset-4"
            >
              info@digilaguna.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}