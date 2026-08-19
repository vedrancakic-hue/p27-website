import type { Metadata } from "next";
import { COMPANY, LICENSE_PRICE, PRICE_INTRO_LINE, PRICE_UNTIL } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms",
  description: `Licence terms for P27 Solver, published by ${COMPANY.legalName}.`,
};

export default function TermsPage() {
  return (
    <article className="py-20 sm:py-28">
      <Container className="max-w-2xl">
        <p className="text-sm font-medium text-accent">Legal</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Terms
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: August 2026</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted">
          <section>
            <h2 className="text-lg font-medium text-text">Publisher</h2>
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
            <h2 className="text-lg font-medium text-text">What this software is</h2>
            <p className="mt-3">
              P27 Solver is a native Windows desktop application for studying
              GTO postflop strategy. It is not a poker room, not an online
              casino, and not a gambling service. We do not accept wagers or
              operate real-money play.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text">Licence</h2>
            <p className="mt-3">
              The listed price is a lifetime licence ({LICENSE_PRICE} on this
              site through {PRICE_UNTIL}) for the current Windows product. It is
              sold via Lemon Squeezy as merchant of record. There is no
              subscription. {PRICE_INTRO_LINE} Anyone who buys at {LICENSE_PRICE}{" "}
              on or before {PRICE_UNTIL} keeps that lifetime licence, including
              the High-Speed Solver Engine when released. Tournament Solver Mode
              and Exploitative Best-Response Solver are not included.
            </p>
            <p className="mt-3">
              Refunds and payment disputes are handled under Lemon Squeezy’s
              checkout terms as merchant of record. Their policies apply at
              checkout; our licence scope is described on this page.
            </p>
            <p className="mt-3">
              Two activations are included (desktop + laptop). Deactivate a
              machine in the app to move the licence. Windows 10 or later
              (64-bit) only.
            </p>
            <p className="mt-3">
              After purchase, Lemon Squeezy emails the licence key and download
              link. Enter the key in the app under Settings → License, or in
              the first-run dialog.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-text">Platform</h2>
            <p className="mt-3">
              The shipping application is Windows-only. macOS and Linux builds
              are not offered.
            </p>
          </section>
        </div>
      </Container>
    </article>
  );
}
