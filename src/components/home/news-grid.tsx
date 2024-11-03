"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const news = [
  {
    id: 2,
    title: "Healthcare Initiative Reaches 1,000 Children",
    excerpt:
      "Milestone achievement in providing essential medical care to rural communities.",
    date: "March 10, 2024",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80",
    category: "Healthcare",
  },
  // {
  //   id: 1,
  //   title: "New Learning Center Opens in Casablanca",
  //   excerpt:
  //     "Expanding our reach with state-of-the-art facilities to serve more children in need.",
  //   date: "March 15, 2024",
  //   image:
  //     "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80",
  //   category: "Education",
  // },
  // {
  //   id: 3,
  //   title: "Annual Fundraising Gala Announced",
  //   excerpt:
  //     "Join us for an evening of inspiration and support for Morocco's children.",
  //   date: "March 5, 2024",
  //   image:
  //     "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80",
  //   category: "Events",
  // },
];

export function NewsGrid() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Latest News</h2>
          <Button variant="ghost" asChild>
            <Link href="/news" className="group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={0}
                    height={0}
                    className="object-cover w-full h-full"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
