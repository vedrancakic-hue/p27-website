import {
  LICENSE_PRICE,
  LEMON_SQUEEZY_CHECKOUT_URL,
  PRICE_LOCK_LINE,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(50,213,255,0.12), transparent 60%)",
              }}
            />
            <div className="relative">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                Ready to run a custom solve?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-muted sm:text-lg">
                {PRICE_LOCK_LINE}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/download">Download Now</Button>
                <Button href={LEMON_SQUEEZY_CHECKOUT_URL} variant="secondary">
                  Buy licence — {LICENSE_PRICE}
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
