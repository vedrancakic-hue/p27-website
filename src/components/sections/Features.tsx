import Image from "next/image";
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

        <FadeIn className="mt-12" delay={0.04}>
          <figure>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)]">
              <Image
                src="/screenshots/workspace.png"
                alt="P27 Solver desktop workspace with ranges, board, and solve controls"
                width={1920}
                height={1080}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-muted">
              The shipping Windows workspace — ranges, board, Equity FN and
              Solve FN.
            </figcaption>
          </figure>
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
            Your {LICENSE_PRICE} lifetime license includes the High-Speed Solver
            Engine upon release. After testing and validation (expected in the
            coming months), the price will be adjusted — present buyers keep the
            upgrade included. Tournament Solver Mode and Exploitative
            Best-Response Solver are not included.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
