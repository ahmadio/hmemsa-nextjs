"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
    setLoading(false);
  };

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Stay Updated
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Subscribe to our newsletter for updates on our impact and ways to
            get involved.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-primary-foreground text-foreground"
            />
            <Button
              type="submit"
              variant="secondary"
              disabled={loading}
              className="min-w-[100px]"
            >
              {loading ? "..." : "Subscribe"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
