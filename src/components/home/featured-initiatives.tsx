"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Book, HeartPulse, Utensils } from "lucide-react";

const initiatives = [
  {
    title: "PKU",
    description:
      "HMEMSA facilitates the exchange of expertise between Moroccan and US doctors. Advocate and support PKU patients.",
    icon: HeartPulse,
  },
  {
    title: "Education",
    description:
      " HMEMSA sponsors and organizes educational projects for the benefit of Moroccan professionals and students",
    icon: Book,
  },
  {
    title: "Enrichment",
    description:
      "HMEMSA encourages and aids in the educational sponsorship and enrichment of orphans living in orphanages throughout Morocco",
    icon: Utensils,
  },
];

export function FeaturedInitiatives() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Our Key Initiatives
          </h2>
          <p className="mt-4 text-muted-foreground">
            Discover how we're making a difference in the lives of Moroccan
            children through our comprehensive programs.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                    <initiative.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{initiative.title}</CardTitle>
                  <CardDescription>{initiative.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Add more content or stats here */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
