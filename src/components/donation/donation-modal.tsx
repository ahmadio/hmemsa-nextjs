import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { CreditCard, Landmark } from "lucide-react";
import { DONATION_TYPE } from "@/lib/utils/stripe-client";

// Mock data - will be replaced with Sanity data later
const MOCK_PROJECTS = [
  {
    id: "1",
    name: "Education Access",
    description: "Support educational resources for underprivileged",
    targetAmount: 50000,
    raisedAmount: 25000,
  },
  {
    id: "2",
    name: "Healthcare Initiative",
    description: "Provide medical care in remote areas",
    targetAmount: 75000,
    raisedAmount: 45000,
  },
  {
    id: "3",
    name: "Clean Water Project",
    description: "Build wells and water purification systems",
    targetAmount: 30000,
    raisedAmount: 15000,
  },
] as const;

const PRESET_AMOUNTS = ["25", "50", "100", "250"] as const;

const formSchema = z.object({
  project: z.string({
    required_error: "Please select a project",
  }),
  amount: z
    .string({
      required_error: "Please enter an amount",
    })
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) > 0,
      "Please enter a valid amount greater than 0"
    ),
  frequency: z.enum(["one_time", "recurring"], {
    required_error: "Please select a donation frequency",
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

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      project: "",
      amount: "50",
      frequency: "one_time",
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setError(null);
    setIsSubmitting(true);

    try {
      // Create Stripe Checkout Session
      const response = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: parseFloat(values.amount),
          currency: "USD", // You might want to make this configurable
          frequency: values.frequency,
          project: MOCK_PROJECTS.find((p) => p.id === values.project)?.name,
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      const { url } = await response.json();

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      // Open Stripe Checkout in a new tab
      window.open(url, "_blank");

      // Close the donation modal
      onClose();
    } catch (error) {
      console.error("Payment error:", error);
      setError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const selectedProject = MOCK_PROJECTS.find(
    (p) => p.id === form.watch("project")
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogTitle className="text-2xl font-bold text-gray-900">
          Make a Donation
        </DialogTitle>

        {error && (
          <div className="bg-destructive/15 text-destructive px-4 py-2 rounded-md mb-4">
            {error}
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Project Selection */}
            <FormField
              control={form.control}
              name="project"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Project</FormLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a project to support" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {MOCK_PROJECTS.map((project) => (
                        <SelectItem
                          key={project.id}
                          value={project.id}
                          className="py-3"
                        >
                          <div className="flex flex-col gap-1">
                            <div className="font-medium">{project.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {project.description}
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Amount Selection */}
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Donation Amount</FormLabel>
                  <div className="space-y-4">
                    <div className="grid grid-cols-4 gap-2">
                      {PRESET_AMOUNTS.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={
                            field.value === amount ? "default" : "outline"
                          }
                          className={cn(
                            "h-12",
                            field.value === amount && "border-2 border-primary"
                          )}
                          onClick={() => field.onChange(amount)}
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
                          step="any"
                          placeholder="Custom amount"
                          {...field}
                          className="pl-7"
                        />
                      </div>
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Frequency Selection */}
            <FormField
              control={form.control}
              name="frequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Donation Frequency</FormLabel>
                  <div className="grid grid-cols-2 gap-4">
                    <FormControl>
                      <Button
                        type="button"
                        variant={
                          field.value === "one_time" ? "default" : "outline"
                        }
                        className={cn(
                          "w-full",
                          field.value === "one_time" &&
                            "border-2 border-primary"
                        )}
                        onClick={() => field.onChange("one_time")}
                      >
                        One-time
                      </Button>
                    </FormControl>
                    <FormControl>
                      <Button
                        type="button"
                        variant={
                          field.value === "recurring" ? "default" : "outline"
                        }
                        className={cn(
                          "w-full",
                          field.value === "recurring" &&
                            "border-2 border-primary"
                        )}
                        onClick={() => field.onChange("recurring")}
                      >
                        Monthly
                      </Button>
                    </FormControl>
                  </div>
                  {field.value === "recurring" && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Monthly donors receive quarterly impact reports and
                      exclusive updates.
                    </p>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Personal Information */}
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
                        type="email"
                        placeholder="john@example.com"
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

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Proceed to Payment"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
