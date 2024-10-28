"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "NGO Excellence Certification",
    issuer: "International NGO Council",
    year: "2023",
  },
  {
    title: "Child Protection Standards",
    issuer: "UNICEF Partnership",
    year: "2023",
  },
  {
    title: "Financial Transparency",
    issuer: "Charity Navigator",
    year: "2023",
  },
];

export function Certifications() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {cert.year}
                      </p>
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
