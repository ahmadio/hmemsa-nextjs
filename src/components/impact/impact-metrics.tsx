"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, Heart, School } from "lucide-react";

const metrics = [
  {
    id: 1,
    icon: Users,
    value: "50,000+",
    label: "Children Helped",
    color: "text-[#C1272D]",
  },
  {
    id: 2,
    icon: GraduationCap,
    value: "1,000+",
    label: "Scholarships Awarded",
    color: "text-[#006233]",
  },
  {
    id: 3,
    icon: Heart,
    value: "25+",
    label: "Healthcare Centers",
    color: "text-[#C1272D]",
  },
  {
    id: 4,
    icon: School,
    value: "100+",
    label: "Schools Supported",
    color: "text-[#006233]",
  },
];

export function ImpactMetrics() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <metric.icon
                      className={`mx-auto h-12 w-12 ${metric.color} mb-4`}
                    />
                    <h3 className="text-3xl font-bold mb-2">{metric.value}</h3>
                    <p className="text-muted-foreground">{metric.label}</p>
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
