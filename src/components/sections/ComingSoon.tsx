import {
  COMING_SOON_ITEMS,
  LICENSE_PRICE,
  PRICE_INTRO_LINE,
  PRICE_UNTIL,
} from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function ComingSoon() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-12 sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 80% at 50% 0%, rgba(50,213,255,0.1), transparent 65%)",
              }}
            />
            <div className="relative mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium text-accent">Coming Soon</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                P27 Solver continues to evolve.
              </h2>
              <p className="mt-4 text-base text-muted sm:text-lg">
                Not in the shipping app. License coverage is noted per item.
              </p>

              <ul className="mx-auto mt-8 max-w-xl space-y-4 text-left">
                {COMING_SOON_ITEMS.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <div>
                      <p className="text-base text-text">{item.title}</p>
                      {item.note ? (
                        <p className="mt-1 text-sm text-muted">{item.note}</p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-base leading-relaxed text-muted">
                {PRICE_INTRO_LINE} Further solver speed upgrades are under
                testing and validation, and are included for {LICENSE_PRICE}{" "}
                buyers on or before {PRICE_UNTIL} when released. Tournament Mode
                and Exploitative Best-Response are not part of the{" "}
                {LICENSE_PRICE} license.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
