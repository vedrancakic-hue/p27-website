import type { Metadata } from "next";
import {
  APP_FUNCTIONS,
  CFR_SECTIONS,
  CORE_CONCEPTS,
  LEMON_SQUEEZY_CHECKOUT_URL,
  SOLVER_BEHAVIOR,
  SYSTEM_REQUIREMENTS,
  WORKFLOW_STEPS,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "Native Windows GTO solver for heads-up postflop — Equity FN, Solve FN, CFR engine, workflow, and system requirements.",
};

function DocSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-border pt-12">
      <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}

function Concept({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-text">{title}</h3>
      <p className="mt-2 text-base leading-relaxed text-muted">{body}</p>
    </div>
  );
}

export default function GettingStartedPage() {
  return (
    <article className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <p className="text-sm font-medium text-accent">Getting Started</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          P27 Solver
        </h1>
        <p className="mt-5 text-xl leading-relaxed text-muted">
          A native Windows GTO solver for heads-up postflop — Equity FN and
          Solve FN in one workspace.
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted">
          Equity FN computes range-vs-range equity without a GTO solve. Solve
          FN runs a native Rust CFR+ engine for Flop, Turn, and River (SOLVE
          routes by board length: 3 / 4 / 5 cards). Solve Quality presets are
          Quick, Normal, and Pro. Multiway trees, tournament / MTT / ICM as a
          working workflow, Import, GTO Adjustments, and villain profiles are
          Coming Soon.
        </p>

        <nav
          aria-label="On this page"
          className="mt-10 rounded-2xl border border-border bg-surface p-5"
        >
          <p className="text-sm font-medium text-text">On this page</p>
          <ul className="mt-3 grid gap-2 text-sm text-muted sm:grid-cols-2">
            {[
              ["core-functions", "Equity FN & Solve FN"],
              ["core-concepts", "Core Concepts"],
              ["cfr-engine", "The CFR Engine"],
              ["how-to-use", "How to Use"],
              ["solver-behavior", "Solver Behavior"],
              ["system-specs", "System Specifications"],
              ["about", "About"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={`#${href}`} className="transition hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-16 space-y-16">
          <DocSection id="core-functions" title="Equity FN & Solve FN">
            <p className="text-base leading-relaxed text-muted">
              P27 Solver separates equity analysis from GTO solving. These are
              two different functions in the application.
            </p>
            {APP_FUNCTIONS.map((fn) => (
              <Concept
                key={fn.name}
                title={`${fn.name} — ${fn.role}`}
                body={fn.body}
              />
            ))}
          </DocSection>

          <DocSection id="core-concepts" title="Core Concepts">
            {CORE_CONCEPTS.map((item) => (
              <Concept key={item.title} title={item.title} body={item.body} />
            ))}
          </DocSection>

          <DocSection id="cfr-engine" title="The CFR Engine">
            {CFR_SECTIONS.map((item) => (
              <Concept key={item.title} title={item.title} body={item.body} />
            ))}
          </DocSection>

          <DocSection id="how-to-use" title="How to Use">
            <ol className="space-y-8">
              {WORKFLOW_STEPS.map((step) => (
                <li key={step.step} className="flex gap-4">
                  <span className="font-mono text-sm text-accent">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-text">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted">
                      {step.description}
                    </p>
                    {step.step === "04" ? (
                      <p className="mt-3 text-base leading-relaxed text-muted">
                        The engine detects the street from the board cards you
                        have dealt (3 cards = Flop, 4 = Turn, 5 = River) and
                        runs the appropriate solver. No manual street selection
                        is needed. GTO Adjustments (ICM, risk premium, stack
                        pressure) are Coming Soon and are not in the shipping
                        app.
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </DocSection>

          <DocSection id="solver-behavior" title="Solver Behavior">
            {SOLVER_BEHAVIOR.map((item) => (
              <Concept key={item.title} title={item.title} body={item.body} />
            ))}
          </DocSection>

          <DocSection id="system-specs" title="Suggested System Specifications">
            <p className="text-base leading-relaxed text-muted">
              The values below are general guidelines based on typical use.
              Actual requirements may vary depending on range complexity, board
              texture, bet-size configurations, and other factors. These figures
              are provided for informational purposes only and do not constitute
              guaranteed minimum requirements.
            </p>
            {SYSTEM_REQUIREMENTS.map((item) => (
              <Concept key={item.title} title={item.title} body={item.body} />
            ))}
          </DocSection>

          <DocSection id="about" title="About">
            <p className="text-base leading-relaxed text-muted">
              P27 Solver is a desktop GTO solver for heads-up postflop, built
              for offline analysis. Equity FN and Solve FN run locally. Ranges,
              boards, and solves stay on your machine. Licences are sold
              through Lemon Squeezy as merchant of record.
            </p>
          </DocSection>
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-surface px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-semibold tracking-tight text-text">
            Ready to run a custom solve?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">
            Download for Windows, or purchase a licence via Lemon Squeezy. The
            key arrives by email after purchase.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/download">Download</Button>
            <Button href={LEMON_SQUEEZY_CHECKOUT_URL} variant="secondary">
              Buy with Lemon Squeezy
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
