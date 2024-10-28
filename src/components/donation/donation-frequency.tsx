"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

interface DonationFrequencyProps {
  value: string;
  onChange: (value: "one-time" | "monthly") => void;
}

export function DonationFrequency({ value, onChange }: DonationFrequencyProps) {
  return (
    <FormItem>
      <FormLabel>Donation Frequency</FormLabel>
      <FormControl>
        <div className="grid grid-cols-2 gap-4">
          <Button
            type="button"
            variant={value === "one-time" ? "default" : "outline"}
            className={cn(
              "h-12",
              value === "one-time" && "border-2 border-primary"
            )}
            onClick={() => onChange("one-time")}
          >
            One-time
          </Button>
          <Button
            type="button"
            variant={value === "monthly" ? "default" : "outline"}
            className={cn(
              "h-12",
              value === "monthly" && "border-2 border-primary"
            )}
            onClick={() => onChange("monthly")}
          >
            Monthly
          </Button>
        </div>
      </FormControl>
      {value === "monthly" && (
        <p className="text-sm text-muted-foreground mt-2">
          Monthly donors receive quarterly impact reports and exclusive updates.
        </p>
      )}
      <FormMessage />
    </FormItem>
  );
}
