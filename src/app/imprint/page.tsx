import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { LegalEntity } from "@/components/layout/LegalEntity";

export const metadata: Metadata = {
  title: "Imprint",
  description: `Legal information for ${COMPANY.legalName}, publisher of P27 Solver.`,
};

export default function ImprintPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-medium text-accent">Legal</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Imprint
          </h1>
          <p className="mt-4 text-muted">
            P27 Solver is published by the following legal entity.
          </p>

          <dl className="mt-10 space-y-6 border-t border-border pt-8 text-sm sm:text-base">
            <div>
              <dt className="text-muted">Legal name</dt>
              <dd className="mt-1 font-medium text-text">{COMPANY.legalName}</dd>
            </div>
            <div>
              <dt className="text-muted">Full company name (sudreg)</dt>
              <dd className="mt-1 font-medium text-text">
                {COMPANY.fullLegalName}
              </dd>
            </div>
            <div>
              <dt className="text-muted">Registered address</dt>
              <dd className="mt-1 font-medium text-text">
                {COMPANY.registeredAddress}
              </dd>
            </div>
            <div>
              <dt className="text-muted">OIB</dt>
              <dd className="mt-1 font-medium text-text">{COMPANY.oib}</dd>
            </div>
            <div>
              <dt className="text-muted">Court register (MBS)</dt>
              <dd className="mt-1 font-medium text-text">{COMPANY.mbs}</dd>
            </div>
            <div>
              <dt className="text-muted">Public contact</dt>
              <dd className="mt-1 font-medium text-text">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-accent hover:underline"
                >
                  {COMPANY.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Website</dt>
              <dd className="mt-1 font-medium text-text">{COMPANY.domain}</dd>
            </div>
          </dl>

          <div className="mt-12 border-t border-border pt-8">
            <LegalEntity />
          </div>
        </div>
      </Container>
    </section>
  );
}
