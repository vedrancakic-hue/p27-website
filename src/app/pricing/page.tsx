import type { Metadata } from "next";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { LICENSE_PRICE, PRICE_UNTIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    `P27 Solver lifetime licence ${LICENSE_PRICE} until ${PRICE_UNTIL}. High-Speed Solver included for buyers on or before that date. Tournament Mode and Exploitative Best-Response are not included.`,
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <FAQ />
    </>
  );
}
