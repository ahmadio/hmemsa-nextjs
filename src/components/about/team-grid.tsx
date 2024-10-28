"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

const team = [
  {
    name: "Sarah Johnson",
    role: "Executive Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    bio: "15+ years of experience in nonprofit management and international development.",
  },
  {
    name: "Mohammed Ahmed",
    role: "Education Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    bio: "Former school principal with a passion for transforming education.",
  },
  {
    name: "Amina Benali",
    role: "Healthcare Programs",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    bio: "Medical doctor specializing in pediatric care and public health.",
  },
];

export function TeamGrid() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className="overflow-hidden cursor-pointer">
                    <CardContent className="p-0">
                      <div className="aspect-square relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={0}
                          height={0}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {member.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
