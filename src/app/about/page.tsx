export const dynamic = "force-dynamic";

import { AboutHero } from "@/components/about/about-hero";
import { Timeline } from "@/components/about/timeline";
import { TeamGrid } from "@/components/about/team-grid";
import { AnnualReports } from "@/components/about/annual-reports";
import { FinancialCharts } from "@/components/about/financial-charts";
import { BoardMembers } from "@/components/about/board-members";
import { Certifications } from "@/components/about/certifications";

export const metadata = {
  title: "About Us | Hmemsa",
  description:
    "Learn about our mission, team, and impact in improving education and healthcare for Moroccan children.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      {/* <Timeline /> */}
      {/* <TeamGrid /> */}
      <AnnualReports />
      {/* <FinancialCharts /> */}
      {/* <BoardMembers /> */}
      {/* <Certifications /> */}
    </main>
  );
}
