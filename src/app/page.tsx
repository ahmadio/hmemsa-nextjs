import { Hero } from "@/components/home/hero";
import { ImpactCounter } from "@/components/home/impact-counter";
import { FeaturedInitiatives } from "@/components/home/featured-initiatives";
import { NewsGrid } from "@/components/home/news-grid";
import { PartnerLogos } from "@/components/home/partner-logos";
import { NewsletterSignup } from "@/components/home/newsletter-signup";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactCounter />
      <FeaturedInitiatives />
      {/* <NewsGrid /> */}
      <PartnerLogos />
      <NewsletterSignup />
    </>
  );
}
