import type { Metadata } from "next";
import { ProductDescription } from "@/components/sections/ProductDescription";

export const metadata: Metadata = {
  title: "Product Description",
  description:
    "Native Windows GTO solver for heads-up postflop — Equity FN, Solve FN, CFR engine, and current features.",
};

export default function ProductPage() {
  return <ProductDescription />;
}
