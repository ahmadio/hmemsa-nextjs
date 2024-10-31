import { stripe, formatAmountForStripe } from "@/lib/utils/stripe-server";
import { DONATION_TYPE } from "@/lib/utils/stripe-client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      amount,
      currency = "USD",
      frequency,
      project,
      name,
      email,
      message,
    } = await request.json();

    // Validate the amount
    const minAmount = 1;
    if (amount < minAmount) {
      return NextResponse.json(
        { error: `Donation amount must be at least $${minAmount}` },
        { status: 400 }
      );
    }

    // Convert amount to cents for Stripe
    const stripeAmount = formatAmountForStripe(amount, currency);

    // Prepare line items description
    const description = project
      ? `Donation for ${project}`
      : "General Donation";

    // Safely determine the base URL
    let baseUrl: string;
    if (process.env.NEXT_PUBLIC_VERCEL_URL) {
      baseUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    } else if (process.env.VERCEL_URL) {
      baseUrl = `https://${process.env.VERCEL_URL}`;
    } else {
      baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    }
    // Base checkout session configuration
    const baseSessionConfig = {
      mode: frequency === DONATION_TYPE.RECURRING ? "subscription" : "payment",
      customer_email: email,
      metadata: {
        name,
        project: project || "general",
        message: message || "",
      },
      success_url: `${baseUrl}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/donate/cancel`,
    } as const;

    // // Add submit_type only for one-time payments
    // const sessionConfig =
    //   frequency === DONATION_TYPE.RECURRING
    //     ? baseSessionConfig
    //     : { ...baseSessionConfig, submit_type: "donate" as const };

    let session;

    if (frequency === DONATION_TYPE.RECURRING) {
      // Create a recurring price for subscription
      const price = await stripe.prices.create({
        unit_amount: stripeAmount,
        currency: currency,
        recurring: { interval: "month" },
        product_data: {
          name: description,
          metadata: {
            project: project || "general",
          },
        },
      });

      session = await stripe.checkout.sessions.create({
        ...baseSessionConfig,
        mode: "subscription",
        line_items: [
          {
            price: price.id,
            quantity: 1,
          },
        ],
      });
    } else {
      // One-time donation
      session = await stripe.checkout.sessions.create({
        ...baseSessionConfig,
        mode: "payment",
        submit_type: "donate",
        line_items: [
          {
            price_data: {
              currency: currency,
              unit_amount: stripeAmount,
              product_data: {
                name: description,
                metadata: {
                  project: project || "general",
                },
              },
            },
            quantity: 1,
          },
        ],
      });
    }

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}
