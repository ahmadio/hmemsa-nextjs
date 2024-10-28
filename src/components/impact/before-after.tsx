"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const comparisons = [
  {
    id: 1,
    title: "School Renovation",
    before:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80",
    after:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80",
  },
];

export function BeforeAfter() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Transforming Communities
        </h2>
        <div className="max-w-4xl mx-auto">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center">
                    {comparison.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                      <p className="text-center mb-2 text-muted-foreground">
                        Before
                      </p>
                      <Image
                        src={comparison.before}
                        alt="Before"
                        width={0}
                        height={0}
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-center mb-2 text-muted-foreground">
                        After
                      </p>
                      <Image
                        src={comparison.after}
                        alt="After"
                        width={0}
                        height={0}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
