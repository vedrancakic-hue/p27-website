import type { Metadata } from "next";
import {
  COMPANY,
  LEMON_SQUEEZY_CHECKOUT_CONFIGURED,
  LEMON_SQUEEZY_CHECKOUT_URL,
  SYSTEM_REQUIREMENTS,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download P27 Solver for Windows 10 or later (64-bit). Native desktop installer from NRG REAL d.o.o.",
};

export default function DownloadPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <p className="text-sm font-medium text-accent">Download</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-text">
          Download P27 Solver
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Native Windows 10 or later (64-bit) only. Licences are purchased
          through Lemon Squeezy. After purchase, the key and download link
          arrive by email — enter the key in Settings → License, or in the
          first-run dialog.
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm text-muted">Windows installer</p>
              <p className="mt-1 font-medium text-text">
                Forthcoming — unsigned until code signing completes
              </p>
              <p className="mt-2 text-sm text-muted">
                The public installer will be posted here when signing is
                finished. There is no downloadable file on this page yet.
              </p>
            </div>
            <Button href={LEMON_SQUEEZY_CHECKOUT_URL} className="sm:self-start">
              Buy licence
            </Button>
          </div>

          <dl className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
            {[
              ["Platform", "Windows 10+ (64-bit)"],
              ["Publisher", COMPANY.legalName],
              ["Commerce", "Lemon Squeezy"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs text-muted">{label}</dt>
                <dd className="mt-1 text-sm text-text">{value}</dd>
              </div>
            ))}
          </dl>

          {!LEMON_SQUEEZY_CHECKOUT_CONFIGURED ? (
            <p className="mt-6 text-sm text-muted">
              Lemon Squeezy checkout is not live yet. Buy currently opens the
              store URL.
            </p>
          ) : null}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-text">Windows SmartScreen</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            The first downloads of a newly signed publisher can still show a
            Windows SmartScreen prompt. That is expected for new software. The
            publisher name will show {COMPANY.legalName} (the Azure billing /
            certificate subject — not the P27 brand unless a DBA is validated).
            Choose More info, then Run anyway, if you intended to install P27
            Solver. We do not claim the warning will be absent.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-text">
            Suggested system specifications
          </h2>
          <ul className="mt-6 space-y-5">
            {SYSTEM_REQUIREMENTS.map((item) => (
              <li key={item.title}>
                <h3 className="text-sm font-medium text-text">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-muted/80">
            These figures are general guidelines based on typical use and do not
            constitute guaranteed minimum requirements.
          </p>
        </div>
      </Container>
    </section>
  );
}
