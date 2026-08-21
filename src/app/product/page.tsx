import type { Metadata } from "next";
import { ProductDescription } from "@/components/sections/ProductDescription";

export const metadata: Metadata = {
  title: "Product Description",
  description:
    "Native Windows GTO solver for heads-up postflop — Strategy, EV, Equity, Reach, Composition, and tree navigation.",
};

export default function ProductPage() {
  return <ProductDescription />;
}
