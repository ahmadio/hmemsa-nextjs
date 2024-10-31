import { loadStripe, Stripe } from "@stripe/stripe-js";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set");
}

// Define donation types
export const DONATION_TYPE = {
  ONE_TIME: "one_time",
  RECURRING: "recurring",
} as const;

// Types for donation data
export interface DonationData {
  amount: number;
  currency: string;
  frequency: (typeof DONATION_TYPE)[keyof typeof DONATION_TYPE];
  project?: string;
  name: string;
  email: string;
  message?: string;
}

let stripePromise: Promise<Stripe | null>;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};
