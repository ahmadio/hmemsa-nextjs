import { ImpactHero } from "@/components/impact/impact-hero";
import { ImpactGallery } from "@/components/impact/impact-gallery";
import { VideoTestimonials } from "@/components/impact/video-testimonials";
import { BeforeAfter } from "@/components/impact/before-after";
import { ImpactMetrics } from "@/components/impact/impact-metrics";
import { Reports } from "@/components/impact/reports";

export const metadata = {
  title: "Our Impact | Hmemsa",
  description:
    "See how we're making a difference in the lives of Moroccan children through education and healthcare initiatives.",
};

export default function ImpactPage() {
  return (
    <main>
      <ImpactHero />
      <ImpactMetrics />
      <ImpactGallery />
      <VideoTestimonials />
      <BeforeAfter />
      <Reports />
    </main>
  );
}
