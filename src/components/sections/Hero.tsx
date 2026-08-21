"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  HERO_SHOT,
  LICENSE_PRICE,
  LEMON_SQUEEZY_CHECKOUT_URL,
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
          <motion.p
            className="text-sm font-medium tracking-wide text-accent"
            {...item(0)}
          >
            P27 Solver
          </motion.p>

          <motion.h1
            className="mt-4 text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl md:text-5xl"
            {...item(0.06)}
          >
            Exact GTO postflop.
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
            {...item(0.12)}
          >
            P27 Solver calculates postflop strategies for No-Limit Hold&apos;em,
            with range analysis, solving, frequencies and EV in one focused
            desktop application.
          </motion.p>

          <motion.p
            className="mt-4 text-sm text-muted"
            {...item(0.16)}
          >
            Windows · Native application · Built for serious analysis
          </motion.p>

          <motion.div
            className="mx-auto mt-8 max-w-md rounded-2xl border border-border bg-surface/80 px-6 py-5"
            {...item(0.2)}
          >
            <p className="text-sm font-medium text-accent">Lifetime license</p>
            <p className="mt-1 font-mono text-3xl tracking-tight text-text">
              {LICENSE_PRICE}
            </p>
            <p className="mt-2 text-sm text-muted">
              One purchase. No subscription. 2 activations included.
            </p>
            <p className="mt-2 text-sm text-muted">
              Introductory price for early customers.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            {...item(0.28)}
          >
            <Button href={LEMON_SQUEEZY_CHECKOUT_URL}>
              Buy license — {LICENSE_PRICE}
            </Button>
            <Button href="/download" variant="secondary">
              Download
            </Button>
          </motion.div>

          <motion.p
            className="mt-4 text-sm text-muted"
            {...item(0.32)}
          >
            Download P27. A valid license is required to solve.
          </motion.p>
        </div>

        <motion.div className="mt-14 sm:mt-20" {...item(0.36)}>
          <figure className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)]">
            <Image
              src={HERO_SHOT.src}
              alt={HERO_SHOT.alt}
              width={1920}
              height={1080}
              className="h-auto w-full"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </figure>
        </motion.div>
      </Container>
    </section>
  );
}
