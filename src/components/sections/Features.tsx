import { FEATURES, LICENSE_PRICE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Features() {
  return (
    <section id="included" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            title="What’s included."
            description="What ships today on Windows. Coming Soon items are listed separately and are not implied here."
          />
        </FadeIn>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.04}>
              <div className="h-full border-t border-border pt-5">
                <h3 className="text-base font-medium text-text">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <p className="text-sm font-medium text-accent">Continuous Development</p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
            Your {LICENSE_PRICE} lifetime license includes further solver speed
            upgrades when released. Further solver speed upgrades are under
            testing and validation (expected in the coming months). After that,
            the price will be adjusted — present buyers keep those upgrades
            included. Tournament Solver Mode and Exploitative Best-Response
            Solver are not included.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
