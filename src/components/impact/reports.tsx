"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

const reports = [
  {
    id: 1,
    title: "Annual Impact Report 2023",
    description: "Comprehensive overview of our initiatives and achievements",
    size: "2.4 MB",
  },
  {
    id: 2,
    title: "Healthcare Initiative Results",
    description: "Detailed analysis of our healthcare programs",
    size: "1.8 MB",
  },
  {
    id: 3,
    title: "Education Progress Report",
    description: "Updates on our educational support programs",
    size: "1.5 MB",
  },
];

export function Reports() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Impact Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {report.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {report.size}
                    </span>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
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
