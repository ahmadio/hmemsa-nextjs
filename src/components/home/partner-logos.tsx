"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const partners = [
  {
    id: 1,
    name: "SOS PKU",
    logo: "https://www.pkumaroc.com/images/logos_phu_sponsors2.jpg",
  },
  // {
  //   id: 2,
  //   name: "WHO",
  //   logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80",
  // },
  // {
  //   id: 3,
  //   name: "Save the Children",
  //   logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80",
  // },
  // {
  //   id: 4,
  //   name: "UNESCO",
  //   logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80",
  // },
];

export function PartnerLogos() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight mb-12">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex items-center justify-center h-32 grayscale hover:grayscale-0 transition-all">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={100}
                  className="max-h-16 w-auto"
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
