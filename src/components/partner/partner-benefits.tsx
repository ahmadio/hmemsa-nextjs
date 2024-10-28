import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    title: "Impact Amplification",
    description:
      "Extend your reach and multiply your social impact through our established networks.",
  },
  {
    title: "Local Expertise",
    description:
      "Benefit from our deep understanding of local communities and cultural context.",
  },
  {
    title: "Transparency",
    description:
      "Receive detailed reports and real-time updates on project progress and impact.",
  },
  {
    title: "Brand Recognition",
    description:
      "Get featured across our platforms and gain visibility among stakeholders.",
  },
  {
    title: "Tax Benefits",
    description:
      "Take advantage of tax deductions through our 501(c)(3) status.",
  },
  {
    title: "Community Engagement",
    description: "Connect directly with beneficiaries and local communities.",
  },
];

export function PartnerBenefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {benefits.map((benefit, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
