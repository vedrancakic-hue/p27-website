"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

function scrollToHash(href: string) {
  const id = href.includes("#") ? href.split("#")[1] : "";
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled || open
          ? "border-border bg-bg/80 backdrop-blur-xl"
          : "border-transparent bg-bg/40 backdrop-blur-md",
      ].join(" ")}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label="P27 Solver home"
        >
          <Image
            src="/brand/p27-solver-mark-transparent.png?v=4"
            alt="P27 Solver"
            width={200}
            height={60}
            className="h-9 w-auto object-contain sm:h-10"
            priority
            unoptimized
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-text"
              onClick={(e) => {
                if (scrollToHash(link.href)) e.preventDefault();
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href="/#pricing"
            variant="primary"
            onClick={(e) => {
              if (scrollToHash("/#pricing")) e.preventDefault();
            }}
          >
            See pricing
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-text md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-px w-5 bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-bg md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base text-muted hover:bg-white/[0.03] hover:text-text"
                onClick={(e) => {
                  setOpen(false);
                  if (scrollToHash(link.href)) e.preventDefault();
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 px-3 pb-2">
              <Button
                href="/#pricing"
                className="w-full"
                onClick={(e) => {
                  setOpen(false);
                  if (scrollToHash("/#pricing")) e.preventDefault();
                }}
              >
                See pricing
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
