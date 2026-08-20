import { PRODUCT_VIDEO_EMBED_URL } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProductVideo() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            title="See P27 in action."
            description="A short walkthrough of the desktop workspace and solve flow."
            align="center"
          />
        </FadeIn>
        <FadeIn className="mx-auto mt-12 max-w-4xl" delay={0.05}>
          <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)]">
            <iframe
              src={PRODUCT_VIDEO_EMBED_URL}
              title="P27 Solver product walkthrough"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
