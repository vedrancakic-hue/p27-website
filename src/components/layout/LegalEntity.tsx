import { COMPANY } from "@/lib/constants";

export function LegalEntity({ compact = false }: { compact?: boolean }) {
  const year = new Date().getFullYear();

  return (
    <address className="not-italic text-sm leading-relaxed text-muted">
      <p className="font-medium text-text">{COMPANY.legalName}</p>
      <p className="mt-1">{COMPANY.registeredAddress}</p>
      <p className="mt-1">
        OIB: {COMPANY.oib}
        {compact ? " · " : <br />}
        Court register (MBS): {COMPANY.mbs}
      </p>
      <p className="mt-1">
        Public contact:{" "}
        <a
          href={`mailto:${COMPANY.email}`}
          className="text-accent transition hover:brightness-110"
        >
          {COMPANY.email}
        </a>
      </p>
      <p className="mt-1">Website: {COMPANY.domain}</p>
      <p className="mt-3 text-text">© {year} {COMPANY.legalName}</p>
    </address>
  );
}
