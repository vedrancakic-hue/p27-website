import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy information for P27 Solver and ${COMPANY.legalName}.`,
};

export default function PrivacyPage() {
  return (
    <article className="py-20 sm:py-28">
      <Container className="max-w-2xl">
        <p className="text-sm font-medium text-accent">Legal</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: August 2026</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted">
          <section>
            <h2 className="text-lg font-medium text-text">Who we are</h2>
            <p className="mt-3">
              P27 Solver is published by {COMPANY.legalName},{" "}
              {COMPANY.registeredAddress}. Public contact:{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-accent hover:underline"
              >
                {COMPANY.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text">The desktop app</h2>
            <p className="mt-3">
              P27 Solver is a native Windows application. Ranges, boards, and
              solves are stored locally on your machine. We do not run an
              account system or user database on our servers for the app.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text">Payments and licences</h2>
            <p className="mt-3">
              Purchases and licence-key fulfilment are handled by Lemon Squeezy
              as merchant of record. Lemon Squeezy processes payment data and
              sends the licence key and download link by email. Their privacy
              terms apply to checkout.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text">This website</h2>
            <p className="mt-3">
              This site is a product website. We do not operate a gambling
              service, poker room, or player accounts here. We do not use
              analytics or advertising cookies on this site. If you email us,
              we use that correspondence only to respond.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text">Contact</h2>
            <p className="mt-3">
              Privacy questions:{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-accent hover:underline"
              >
                {COMPANY.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </article>
  );
}
