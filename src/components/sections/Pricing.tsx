import {
  CHECKOUT_NOTE,
  LEMON_SQUEEZY_CHECKOUT_CONFIGURED,
  LICENSE_PRICE,
  LEMON_SQUEEZY_CHECKOUT_URL,
  PRICE_INTRO_LINE,
  PRICING_INCLUDES,
  PRICING_NOTE,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            title="Pricing"
            description="One purchase. No subscriptions. No recurring fees."
            align="center"
          />
        </FadeIn>

        <FadeIn className="mx-auto mt-14 max-w-xl" delay={0.05}>
          <div className="rounded-2xl border border-accent/30 bg-surface p-8 shadow-[0_0_0_1px_rgba(50,213,255,0.08)] sm:p-10">
            <p className="text-sm font-medium text-accent">Lifetime license</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-mono text-5xl tracking-tight text-text">
                {LICENSE_PRICE}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted">
              One purchase. No subscription. 2 activations included.
            </p>
            <p className="mt-2 text-sm text-muted">{PRICE_INTRO_LINE}</p>

            <p className="mt-8 text-sm font-medium text-text">Includes:</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {PRICING_INCLUDES.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-muted">
              {PRICING_NOTE}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              After purchase, the license key and download link arrive by
              email. Enter the key in the app (Settings → License, or the
              first-run dialog).
            </p>
            {!LEMON_SQUEEZY_CHECKOUT_CONFIGURED ? (
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {CHECKOUT_NOTE}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col gap-3">
              <Button href={LEMON_SQUEEZY_CHECKOUT_URL}>
                Buy license — {LICENSE_PRICE}
              </Button>
              <Button href="/download" variant="secondary">
                Download
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
