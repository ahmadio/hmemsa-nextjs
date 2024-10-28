"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  {
    year: 2015,
    title: "Foundation",
    description:
      "Hmemsa was established with a vision to transform children's lives.",
  },
  {
    year: 2017,
    title: "First School",
    description: "Opened our first learning center in Casablanca.",
  },
  {
    year: 2019,
    title: "Healthcare Initiative",
    description: "Launched mobile healthcare clinics for rural communities.",
  },
  {
    year: 2021,
    title: "Major Expansion",
    description: "Reached 10,000 children across multiple regions.",
  },
  {
    year: 2023,
    title: "Digital Learning",
    description: "Introduced online education programs.",
  },
];

export function Timeline() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-px h-full bg-border">
                <div className="absolute left-0 top-2 w-2 h-2 -ml-1 rounded-full bg-primary" />
              </div>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-primary font-bold mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
