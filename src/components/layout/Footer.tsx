import Image from "next/image";
import Link from "next/link";
import { LICENSE_PRICE, PRICE_UNTIL, PRODUCT_VIDEO_URL } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { LegalEntity } from "@/components/layout/LegalEntity";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/product", label: "Product Description" },
      { href: PRODUCT_VIDEO_URL, label: "Product Video", external: true as const },
      { href: "/#included", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/download", label: "Download" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/docs", label: "Documentation" },
      { href: "/docs/getting-started", label: "Getting Started" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/imprint", label: "Imprint" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className = "text-sm text-muted transition hover:text-text";

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Image
              src="/brand/p27-solver-mark-transparent.png?v=4"
              alt="P27 Solver"
              width={200}
              height={60}
              className="h-9 w-auto object-contain"
              unoptimized
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Native Windows GTO solver. Lifetime license {LICENSE_PRICE} until{" "}
              {PRICE_UNTIL} via Lemon Squeezy. Updates to the current product
              and further solver speed upgrades (for buyers on or before that
              date) — not every future module.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-medium text-text">{col.title}</p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={`${col.title}-${link.label}`}>
                      <FooterLink
                        href={link.href}
                        label={link.label}
                        external={"external" in link ? link.external : false}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted">
            Legal entity
          </p>
          <LegalEntity compact />
          <p className="mt-4 text-sm text-muted">
            Windows 10+ (64-bit) · Licenses via Lemon Squeezy ·{" "}
            <Link href="/imprint" className="transition hover:text-text">
              Full imprint
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
