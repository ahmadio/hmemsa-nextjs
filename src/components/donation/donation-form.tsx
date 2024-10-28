"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PaymentMethod } from "./payment-method";
import { ProjectSelect } from "./project-select";
import { DonationAmount } from "./donation-amount";
import { DonationFrequency } from "./donation-frequency";

const formSchema = z.object({
  project: z.string({
    required_error: "Please select a project",
  }),
  amount: z.string({
    required_error: "Please enter an amount",
  }),
  frequency: z.enum(["one-time", "monthly"], {
    required_error: "Please select a donation frequency",
  }),
  paymentMethod: z.string({
    required_error: "Please select a payment method",
  }),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface DonationFormProps {
  onSuccess: () => void;
}

export function DonationForm({ onSuccess }: DonationFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      project: "",
      amount: "25",
      frequency: "one-time",
      paymentMethod: "card",
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      // TODO: Implement payment processing
      console.log(values);
      onSuccess();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="project"
          render={({ field }) => (
            <ProjectSelect value={field.value} onChange={field.onChange} />
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <DonationAmount value={field.value} onChange={field.onChange} />
          )}
        />

        <FormField
          control={form.control}
          name="frequency"
          render={({ field }) => (
            <DonationFrequency value={field.value} onChange={field.onChange} />
          )}
        />

        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <PaymentMethod
              control={form.control}
              value={field.value}
              setValue={form.setValue}
            />
          )}
        />

        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          Complete Donation
        </Button>
      </form>
    </Form>
  );
}
