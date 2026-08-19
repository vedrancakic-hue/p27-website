"use client";

import Image from "next/image";
import { useState } from "react";
import {
  APP_FUNCTIONS,
  CFR_SECTIONS,
  CORE_CONCEPTS,
  FEATURES,
  LEMON_SQUEEZY_CHECKOUT_URL,
  PRODUCT_VIDEO_EMBED_URL,
  PRODUCT_VIDEO_URL,
} from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type TabId = "overview" | "cfr" | "features";

const TABS: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "cfr", label: "CFR Engine" },
  { id: "features", label: "Features" },
];

export function ProductDescription() {
  const [tab, setTab] = useState<TabId>("overview");

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-accent">Product Description</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            P27 Solver
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
            A native Windows GTO solver for heads-up postflop — Equity FN and
            Solve FN in one workspace.
          </p>
          <div className="mt-6">
            <Button href={PRODUCT_VIDEO_URL} variant="secondary">
              Watch product description
            </Button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)]">
          <div className="relative aspect-video w-full">
            <iframe
              src={PRODUCT_VIDEO_EMBED_URL}
              title="P27 Solver product description"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <p className="border-t border-border px-4 py-3 text-center text-sm text-muted">
            Product description video ·{" "}
            <a
              href={PRODUCT_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition hover:brightness-110"
            >
              Open on YouTube
            </a>
          </p>
        </div>

        <figure className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)]">
          <Image
            src="/screenshots/workspace.png"
            alt="P27 Solver workspace showing strategy grids, table view, equity analysis, and tree navigation"
            width={1920}
            height={1080}
            className="h-auto w-full"
            priority
          />
          <figcaption className="border-t border-border px-4 py-3 text-center text-sm text-muted">
            P27 Solver workspace — strategy, ranges, equity, and tree navigation
          </figcaption>
        </figure>

        <div className="mt-12">
          <div
            role="tablist"
            aria-label="Product description sections"
            className="flex flex-wrap justify-center gap-2 border-b border-border pb-1"
          >
            {TABS.map((item) => {
              const active = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  id={`tab-${item.id}`}
                  aria-controls={`panel-${item.id}`}
                  className={[
                    "rounded-xl px-4 py-2.5 text-sm font-medium transition",
                    active
                      ? "bg-accent-soft text-accent"
                      : "text-muted hover:text-text",
                  ].join(" ")}
                  onClick={() => setTab(item.id)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-10">
            {tab === "overview" ? (
              <div
                role="tabpanel"
                id="panel-overview"
                aria-labelledby="tab-overview"
                className="mx-auto max-w-3xl space-y-8"
              >
                <p className="text-base leading-relaxed text-muted sm:text-lg">
                  P27 Solver is a native Windows desktop app. Equity FN
                  computes range-vs-range equity without a GTO solve. Solve FN
                  runs a Rust CFR+ engine for heads-up GTO on Flop, Turn, and
                  River (SOLVE routes by board length: 3 / 4 / 5 cards). Solve
                  Quality presets are Quick, Normal, and Pro. Multiway trees,
                  tournament / ICM workflow, Import, GTO Adjustments, and
                  villain profiles are Coming Soon.
                </p>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-text">
                    Two core functions
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    The workspace clearly separates equity analysis from GTO
                    solving. They are different tools for different jobs.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {APP_FUNCTIONS.map((fn) => (
                      <div
                        key={fn.name}
                        className="rounded-2xl border border-border bg-surface p-6"
                      >
                        <p className="font-mono text-sm text-accent">{fn.name}</p>
                        <h3 className="mt-2 text-lg font-medium text-text">
                          {fn.role}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {fn.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-text">
                    Core Concepts
                  </h2>
                  <div className="mt-6 space-y-6">
                    {CORE_CONCEPTS.map((item) => (
                      <div key={item.title}>
                        <h3 className="text-lg font-medium text-text">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-muted">
                          {item.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {tab === "cfr" ? (
              <div
                role="tabpanel"
                id="panel-cfr"
                aria-labelledby="tab-cfr"
                className="mx-auto max-w-3xl space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-text">
                    The CFR Engine
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    The engine is written in Rust and runs natively. The
                    shipping app solves heads-up postflop trees — converging
                    toward optimal strategy over many iterations.
                  </p>
                </div>
                <div className="space-y-6">
                  {CFR_SECTIONS.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border bg-surface p-6"
                    >
                      <h3 className="text-lg font-medium text-text">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {tab === "features" ? (
              <div
                role="tabpanel"
                id="panel-features"
                aria-labelledby="tab-features"
                className="mx-auto max-w-4xl"
              >
                <h2 className="text-center text-2xl font-semibold tracking-tight text-text">
                  What’s included today
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted">
                  GTO Adjustments, tournament / ICM, Import, multiway trees, and
                  villain profiles are Coming Soon — not in the shipping app.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {FEATURES.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-2xl border border-border bg-surface p-6"
                    >
                      <h3 className="text-base font-medium text-text">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/download">Download Now</Button>
          <Button href={LEMON_SQUEEZY_CHECKOUT_URL} variant="secondary">
            Buy lifetime licence
          </Button>
        </div>
      </Container>
    </section>
  );
}
