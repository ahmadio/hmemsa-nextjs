"use client";

import { motion } from "framer-motion";

export function ImpactHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden w-full">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Making a Lasting Impact
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Through education and healthcare initiatives, we're transforming lives
            and building a brighter future for Morocco's children.
          </p>
        </motion.div>
      </div>
    </section>
  );
}