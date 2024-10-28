"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const presetAmounts = ["10", "25", "50", "100"];

interface DonationAmountProps {
  value: string;
  onChange: (value: string) => void;
}

export function DonationAmount({ value, onChange }: DonationAmountProps) {
  return (
    <FormItem>
      <FormLabel>Donation Amount</FormLabel>
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-2">
          {presetAmounts.map((amount) => (
            <Button
              key={amount}
              type="button"
              variant={value === amount ? "default" : "outline"}
              className={cn(
                "h-12",
                value === amount && "border-2 border-primary"
              )}
              onClick={() => onChange(amount)}
            >
              ${amount}
            </Button>
          ))}
        </div>
        <FormControl>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              $
            </span>
            <Input
              type="number"
              min="1"
              placeholder="Custom amount"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="pl-7"
            />
          </div>
        </FormControl>
      </div>
      <FormMessage />
    </FormItem>
  );
}
