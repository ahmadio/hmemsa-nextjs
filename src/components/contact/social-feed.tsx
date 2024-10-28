"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const socialPosts = [
  {
    platform: "Instagram",
    content: "Join us for our annual fundraising gala! #HmemsaGala2024",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80",
  },
  {
    platform: "Twitter",
    content:
      "Thanks to our volunteers for making today's health camp a success!",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80",
  },
  {
    platform: "LinkedIn",
    content: "Proud to announce our new partnership with UNICEF Morocco.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
  },
];

export function SocialFeed() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Latest Updates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {socialPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-4">
                <Image
                  src={post.image}
                  alt={post.platform}
                  width={0}
                  height={0}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-sm font-medium text-primary mb-2">
                  {post.platform}
                </p>
                <p className="text-sm text-muted-foreground">{post.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
