"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
        onClick={onToggle}
      >
        <span className="text-base font-medium text-text">{question}</span>
        <span
          aria-hidden
          className={`text-muted transition duration-200 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-8 text-sm leading-relaxed text-muted">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn>
            <SectionHeading title="Questions, answered." />
          </FadeIn>

          <FadeIn delay={0.06}>
            <div>
              {FAQ_ITEMS.map((item, i) => (
                <FaqItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  open={openIndex === i}
                  onToggle={() =>
                    setOpenIndex((current) => (current === i ? null : i))
                  }
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
