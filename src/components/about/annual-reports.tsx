"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

interface Report {
  year: number;
  title: string;
  description: string;
  // fileSize: string;
  fileName: string;
}

const reports: Report[] = [
  {
    year: 2023,
    title: "Annual Impact Report",
    description: "A comprehensive look at our achievements and growth.",
    // fileSize: "3.2 MB",
    fileName: "anunual_report_2023.pdf",
  },
  {
    year: 2022,
    title: "Annual Impact Report",
    description: "Celebrating milestones and community impact.",
    // fileSize: "2.8 MB",
    fileName: "anunual_report_2022.pdf",
  },
  {
    year: 2021,
    title: "Annual Impact Report",
    description: "Adapting and thriving through challenges.",
    // fileSize: "2.5 MB",
    fileName: "anunual_report_2021.pdf",
  },
];

export function AnnualReports() {
  const handleDownload = (fileName: string) => {
    // Create the full path to the file in the public folder
    const fileUrl = `/reports/${fileName}`;

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (fileName: string) => {
    // Open the PDF in a new tab
    window.open(`/reports/${fileName}`, "_blank");
  };

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Annual Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reports.map((report, index) => (
            <motion.div
              key={report.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold mb-2">{report.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{report.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {report.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {/* {report.fileSize} */}
                    </span>
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(report.fileName)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleView(report.fileName)}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </Button>
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
