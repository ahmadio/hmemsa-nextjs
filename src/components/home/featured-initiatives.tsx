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
    title: "Education First",
    description:
      "Providing quality education through modern learning facilities and dedicated teachers.",
    icon: Book,
  },
  {
    title: "Healthcare Access",
    description:
      "Ensuring children have access to essential medical care and preventive services.",
    icon: HeartPulse,
  },
  {
    title: "Nutrition Program",
    description:
      "Delivering nutritious meals to support healthy growth and development.",
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
