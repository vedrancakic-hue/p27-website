import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${COMPANY.legalName} at ${COMPANY.email}.`,
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-2xl">
        <p className="text-sm font-medium text-accent">Contact</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Contact
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted">
          Public contact for P27 Solver and {COMPANY.legalName}:
        </p>
        <p className="mt-6">
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-xl font-medium text-accent hover:underline"
          >
            {COMPANY.email}
          </a>
        </p>
        <p className="mt-8 text-sm leading-relaxed text-muted">
          The P27 Solver team does not operate a phone line or live chat. Licence
          purchases are handled by Lemon Squeezy as merchant of record.
        </p>
      </Container>
    </section>
  );
}
