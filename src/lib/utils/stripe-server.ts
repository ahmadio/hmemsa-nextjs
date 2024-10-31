import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  typescript: true,
});

// Helper function to format amount for Stripe (converts dollars to cents)
export const formatAmountForStripe = (
  amount: number,
  currency: string
): number => {
  const currencies = {
    USD: 100, // 1 USD = 100 cents
    EUR: 100,
    GBP: 100,
  };

  const multiplier = currencies[currency as keyof typeof currencies] || 100;
  return Math.round(amount * multiplier);
};

// Helper function to format amount from Stripe (converts cents to dollars)
export const formatAmountFromStripe = (
  amount: number,
  currency: string
): number => {
  const currencies = {
    USD: 100,
    EUR: 100,
    GBP: 100,
  };

  const divider = currencies[currency as keyof typeof currencies] || 100;
  return amount / divider;
};
