import { WORKFLOW_STEPS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            title="How to use P27."
            description="Heads-up postflop: from board and ranges to a saved solve."
            align="center"
          />
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {WORKFLOW_STEPS.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <p className="font-mono text-sm text-accent">{step.step}</p>
                <h3 className="mt-3 text-lg font-medium text-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Button href="/docs/getting-started" variant="secondary">
            Read the full guide
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
