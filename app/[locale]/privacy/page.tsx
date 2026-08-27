export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">
        Privacy Policy
      </h1>

      <p className="mt-4 text-sm text-text-secondary">
        Last updated: 18 August 2026
      </p>

      <div className="mt-12 space-y-10 leading-7 text-text">
        <section>
          <h2 className="text-xl font-semibold text-text">
            1. Who we are
          </h2>
          <p className="mt-3">
            Digilaguna OÜ operates the Digilaguna website and provides digital
            design, visual creation and web-related services.
          </p>
          <p className="mt-3">
            Digilaguna OÜ is the data controller for personal data processed
            through this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            2. What information we collect
          </h2>
          <p className="mt-3">
            When you contact us through the contact form, we may collect:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your company or project name, if provided</li>
            <li>Information included in your project description</li>
            <li>Information contained in your correspondence with us</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            3. How we use your information
          </h2>
          <p className="mt-3">We may use the information you provide to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Respond to enquiries</li>
            <li>Discuss potential projects and services</li>
            <li>Prepare proposals or quotations</li>
            <li>Communicate regarding an existing project</li>
            <li>Maintain business correspondence</li>
            <li>Comply with applicable legal obligations</li>
          </ul>
          <p className="mt-3">We do not sell your personal information.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            4. Email communication
          </h2>
          <p className="mt-3">
            When you submit the contact form, your enquiry is sent to
            info@digilaguna.com using Hostinger&apos;s SMTP infrastructure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            5. Legal basis
          </h2>
          <p className="mt-3">
            Depending on the circumstances, personal data may be processed
            because it is necessary to respond to your request or to take
            steps at your request before entering into a contract.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            6. How long we keep your information
          </h2>
          <p className="mt-3">
            We retain enquiry and correspondence information only for as long
            as reasonably necessary to handle the enquiry, maintain the
            relevant business relationship and fulfil applicable legal
            obligations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            7. Your rights
          </h2>
          <p className="mt-3">
            Depending on the circumstances and applicable law, you may have the
            right to request access to, correction or deletion of your
            personal data, restriction of processing, objection to certain
            processing and data portability where applicable.
          </p>
          <p className="mt-3">
            You may also have the right to lodge a complaint with the
            Estonian Data Protection Inspectorate.
          </p>
          <p className="mt-3">
            To exercise your rights, contact us at{" "}
            <a
              href="mailto:info@digilaguna.com"
              className="underline underline-offset-4"
            >
              info@digilaguna.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            8. Cookies
          </h2>
          <p className="mt-3">
            The Digilaguna website may use cookies and similar technologies
            that are necessary for the operation, security and functionality of
            the website.
          </p>
          <p className="mt-3">
            If additional analytics, marketing or other non-essential cookies
            are introduced, the relevant information and consent mechanisms
            will be updated accordingly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            9. Third-party services
          </h2>
          <p className="mt-3">
            The website may rely on third-party technical services necessary
            to host, operate, secure and deliver the website and submitted
            enquiries.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            10. Data security
          </h2>
          <p className="mt-3">
            We take reasonable technical and organisational measures to
            protect personal information against unauthorised access, loss,
            misuse or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            11. Changes to this Privacy Policy
          </h2>
          <p className="mt-3">
            We may update this Privacy Policy when our website, services, data
            processing practices or applicable legal requirements change.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            12. Contact
          </h2>
          <p className="mt-3">
            <strong>Digilaguna OÜ</strong>
            <br />
            Registry code: 17334320
            <br />
            Email: info@digilaguna.com
            <br />
            Website: digilaguna.com
          </p>
        </section>
      </div>
    </div>
  );
}