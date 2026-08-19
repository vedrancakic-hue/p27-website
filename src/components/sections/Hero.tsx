"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  LICENSE_PRICE,
  LEMON_SQUEEZY_CHECKOUT_URL,
  PRICE_INTRO_LINE,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const reduce = useReducedMotion();

  const item = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1] as const,
            delay,
          },
        };

  return (
    <section className="relative overflow-hidden pt-12 pb-10 sm:pt-20 sm:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(50,213,255,0.14), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(50,100,180,0.12), transparent 55%)",
        }}
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.div className="flex justify-center" {...item(0)}>
            <Image
              src="/brand/p27-solver-logo.png?v=2"
              alt="P27 Solver"
              width={720}
              height={720}
              priority
              className="h-auto w-full max-w-sm object-contain drop-shadow-[0_0_60px_rgba(50,213,255,0.18)] sm:max-w-md"
            />
          </motion.div>

          <motion.h1
            className="mt-8 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl md:text-5xl"
            {...item(0.08)}
          >
            Native Windows GTO Postflop Solver
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
            {...item(0.16)}
          >
            Equity FN (range-vs-range equity) and Solve FN (GTO Flop / Turn /
            River). SOLVE routes automatically by board length: 3 / 4 / 5
            cards.
          </motion.p>

          <motion.div
            className="mx-auto mt-8 max-w-md rounded-2xl border border-border bg-surface/80 px-6 py-5"
            {...item(0.2)}
          >
            <p className="text-sm font-medium text-accent">Lifetime Licence</p>
            <p className="mt-1 font-mono text-3xl tracking-tight text-text">
              {LICENSE_PRICE}
            </p>
            <p className="mt-2 text-sm text-muted">{PRICE_INTRO_LINE}</p>
            <p className="mt-2 text-sm text-muted">
              One purchase. No subscriptions. Two activations included (desktop
              + laptop). Sold via Lemon Squeezy.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            {...item(0.28)}
          >
            <Button href="/download">Download Now</Button>
            <Button href={LEMON_SQUEEZY_CHECKOUT_URL} variant="secondary">
              Buy lifetime licence
            </Button>
          </motion.div>
        </div>

        <motion.div className="mt-14 sm:mt-20" {...item(0.36)}>
          <figure className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)]">
            <Image
              src="/screenshots/workspace.png"
              alt="P27 Solver application workspace"
              width={1920}
              height={1080}
              className="h-auto w-full"
              priority
            />
          </figure>
        </motion.div>
      </Container>
    </section>
  );
}
