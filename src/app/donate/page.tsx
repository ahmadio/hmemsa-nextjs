import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Star, Zap } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Make a Difference Today
        </h1>
        <p className="text-lg text-muted-foreground">
          Your donation helps us provide education and healthcare to children in
          need across Morocco.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {donationTiers.map((tier) => (
          <Card key={tier.id} className="relative">
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                <tier.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>{tier.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">${tier.amount}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-4">
                {tier.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full"
                variant={tier.popular ? "default" : "outline"}
              >
                Select Plan
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const donationTiers = [
  {
    id: 1,
    name: "Supporter",
    amount: 25,
    description:
      "Help provide educational materials and basic healthcare for one child.",
    icon: Heart,
    popular: false,
  },
  {
    id: 2,
    name: "Champion",
    amount: 50,
    description:
      "Support comprehensive education and healthcare for two children.",
    icon: Star,
    popular: true,
  },
  {
    id: 3,
    name: "Guardian",
    amount: 100,
    description:
      "Make a significant impact by supporting multiple children and programs.",
    icon: Zap,
    popular: false,
  },
];
