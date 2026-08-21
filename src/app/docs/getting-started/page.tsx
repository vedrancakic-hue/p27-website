import type { Metadata } from "next";
import Image from "next/image";
import {
  APP_FUNCTIONS,
  CFR_SECTIONS,
  CORE_CONCEPTS,
  DETAIL_SHOTS,
  HERO_SHOT,
  LEMON_SQUEEZY_CHECKOUT_URL,
  SOLVE_PROGRESS,
  SOLVER_BEHAVIOR,
  SYSTEM_REQUIREMENTS,
  VIEW_SHOTS,
  WORKFLOW_STEPS,
  WORKSPACE_VIEWS,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "Native Windows GTO solver for heads-up postflop — Equity FN, Solve FN, workspace views, solve progress, and system requirements.",
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

function Shot({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-bg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
        sizes="(max-width: 768px) 100vw, 720px"
      />
      <figcaption className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted">
        {caption}
      </figcaption>
    </figure>
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
          Set board and ranges → choose Solve Quality → SOLVE → wait through 0%
          setup, iteration %, then 100% packaging → walk the tree → read
          Strategy, EV, Equity, Reach, and Composition. Multiway trees,
          tournament / MTT / ICM as a working workflow, Import, GTO Adjustments,
          and villain profiles are Coming Soon.
        </p>

        <nav
          aria-label="On this page"
          className="mt-10 rounded-2xl border border-border bg-surface p-5"
        >
          <p className="text-sm font-medium text-text">On this page</p>
          <ul className="mt-3 grid gap-2 text-sm text-muted sm:grid-cols-2">
            {[
              ["core-functions", "Equity FN & Solve FN"],
              ["screenshots", "Workspace screenshots"],
              ["core-concepts", "Core Concepts"],
              ["cfr-engine", "The CFR Engine"],
              ["how-to-use", "How to Use"],
              ["solve-progress", "Solve progress"],
              ["workspace-views", "Views & panels"],
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

          <DocSection id="screenshots" title="Workspace screenshots">
            <Shot
              src={HERO_SHOT.src}
              alt={HERO_SHOT.alt}
              caption={HERO_SHOT.caption}
              width={HERO_SHOT.width}
              height={HERO_SHOT.height}
            />
            <div className="space-y-6">
              {VIEW_SHOTS.map((shot) => (
                <Shot
                  key={shot.id}
                  src={shot.src}
                  alt={shot.alt}
                  caption={shot.caption}
                  width={shot.width}
                  height={shot.height}
                />
              ))}
            </div>
            <div className="space-y-6">
              {DETAIL_SHOTS.map((shot) => (
                <Shot
                  key={shot.id}
                  src={shot.src}
                  alt={shot.alt}
                  caption={shot.caption}
                  width={shot.width}
                  height={shot.height}
                />
              ))}
            </div>
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
                        Street is detected from board cards (3 = Flop, 4 =
                        Turn, 5 = River). No manual street selection. GTO
                        Adjustments are Coming Soon and are not in the shipping
                        app.
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </DocSection>

          <DocSection id="solve-progress" title="Solve progress">
            <p className="text-base leading-relaxed text-muted">
              Shown next to the cash/tournament toggle while a solve runs, then
              as a completed badge. Computation is local — not a cloud download.
            </p>
            {SOLVE_PROGRESS.map((item) => (
              <Concept key={item.title} title={item.title} body={item.body} />
            ))}
          </DocSection>

          <DocSection id="workspace-views" title="Views & panels">
            {WORKSPACE_VIEWS.map((item) => (
              <Concept key={item.title} title={item.title} body={item.body} />
            ))}
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
              through Lemon Squeezy as merchant of record. Contact{" "}
              <a
                href="mailto:info@p27solver.com"
                className="text-accent transition hover:brightness-110"
              >
                info@p27solver.com
              </a>
              .
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
