import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Guides for P27 Solver — getting started, core concepts, CFR engine, and system requirements.",
};

const docs = [
  {
    href: "/docs/getting-started",
    title: "Getting Started",
    description:
      "Product overview, core concepts, CFR engine, how to use, solver behavior, and system specs.",
  },
];

export default function DocsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <p className="text-sm font-medium text-accent">Documentation</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-text">
          Learn P27 Solver.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Guides for serious study — from first solve to engine behavior.
        </p>

        <ul className="mt-12 space-y-4">
          {docs.map((doc) => (
            <li key={doc.href}>
              <Link
                href={doc.href}
                className="block rounded-2xl border border-border bg-surface p-6 transition hover:border-border-strong"
              >
                <h2 className="text-xl font-medium text-text">{doc.title}</h2>
                <p className="mt-2 text-sm text-muted">{doc.description}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Button href="/download" variant="secondary">
            Download for Windows
          </Button>
        </div>
      </Container>
    </section>
  );
}
