import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description: `${COMPANY.legalName} publishes P27 Solver, a native Windows GTO postflop solver.`,
};

export default function AboutPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-2xl">
        <p className="text-sm font-medium text-accent">Company</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          About
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
          <p>
            {COMPANY.legalName} publishes P27 Solver — a native Windows desktop
            application for GTO postflop analysis.
          </p>
          <p>
            The product is engineering software for study. It is not a poker
            room, not an online casino, and not a gambling service.
          </p>
          <p>
            Based in Zagreb, Croatia (operating since 2022). Public contact:{" "}
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-accent hover:underline"
            >
              {COMPANY.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
