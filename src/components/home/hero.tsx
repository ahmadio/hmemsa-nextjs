"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useDonationModal } from "@/hooks/use-donation-modal";

export function Hero() {
  const { onOpen } = useDonationModal();

  return (
    <div className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="hero-pattern absolute inset-0 opacity-50" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Impacting Morocco&apos;s Future Through{" "}
            <span className="text-primary">
              Education, Advocacy and Resources
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join us in our mission to to contribute to the development of
            Morocco through services and exchange of expertise between Moroccan
            and American educators, professionals and students.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* <Button size="lg" onClick={onOpen}>
              Make a Difference
            </Button> */}
            {/* <Button size="lg" variant="outline" asChild>
              <Link href="/programs">Our Programs</Link>
            </Button> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
