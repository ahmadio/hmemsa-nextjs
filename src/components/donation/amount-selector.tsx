"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";

const presetAmounts = ["10", "25", "50", "100"];

interface AmountSelectorProps {
  control: Control<any>;
  setValue: (name: string, value: string) => void;
  value: string;
}

export function AmountSelector({
  control,
  setValue,
  value,
}: AmountSelectorProps) {
  return (
    <FormItem>
      <FormLabel>Donation Amount ($)</FormLabel>
      <div className="grid grid-cols-4 gap-2 mb-2">
        {presetAmounts.map((amount) => (
          <Button
            key={amount}
            type="button"
            variant={value === amount ? "default" : "outline"}
            onClick={() => setValue("amount", amount)}
            className="w-full"
          >
            ${amount}
          </Button>
        ))}
      </div>
      <FormControl>
        <Input type="number" min="1" placeholder="Custom amount" />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
