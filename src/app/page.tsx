import { ComingSoon } from "@/components/sections/ComingSoon";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { ProductVideo } from "@/components/sections/ProductVideo";
import { Requirements } from "@/components/sections/Requirements";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <ProductVideo />
      <ComingSoon />
      <Pricing />
      <Requirements />
      <FAQ />
      <FinalCTA />
    </>
  );
}
