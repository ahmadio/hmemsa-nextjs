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
            Home of Moroccan Educators & Students in America (HMEMSA) is a
            registered 501(c)(3) non-profit organization dedicated to fostering
            the development and enrichment of vulnerable communities in Morocco
            through EDUCATION. Established in 2009 by a group of Moroccan
            American professionals, HMEMSA remains steadfast in its mission to
            collaborate with the Moroccan community in the United States and
            internationally, striving to bring about measurable and sustainable
            development for those in need.
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Our Mission
          </h1>
          <p className="text-lg text-muted-foreground">
            To contribute to the development of Morocco through services and
            exchange of expertise between Moroccan and American educators,
            professionals and students.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
