"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative py-24 overflow-hidden geometric-pattern w-full">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Our Story
          </h1>
          <p className="text-lg text-muted-foreground">
            Founded in 2015, Hmemsa has been working tirelessly to transform the
            lives of underprivileged children in Morocco through education and
            healthcare initiatives. Our commitment to creating lasting positive
            change drives everything we do.
          </p>
        </motion.div>
      </div>
    </section>
  );
}