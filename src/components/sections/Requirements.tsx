import { SYSTEM_REQUIREMENTS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Requirements() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Suggested system specifications."
            description="General guidelines based on typical use. Actual requirements may vary depending on range complexity, board texture, bet-size configurations, and other factors. These figures are provided for informational purposes only and do not constitute guaranteed minimum requirements."
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {SYSTEM_REQUIREMENTS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-base font-medium text-text">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
