import { redirect } from "next/navigation";
import { stripe } from "@/lib/utils/stripe-server";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ session_id?: string }>;
}

async function getSessionDetails(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "payment_intent"],
    });
    return session;
  } catch (error) {
    console.error("Error retrieving session:", error);
    return null;
  }
}

export default async function DonationSuccessPage({ searchParams }: Props) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    redirect("/");
  }

  const session = await getSessionDetails(sessionId);

  if (!session) {
    redirect("/");
  }

  const amount = session.amount_total ? session.amount_total / 100 : 0;
  const currency = session.currency?.toUpperCase() || "USD";
  const isRecurring = session.mode === "subscription";
  const project = session.metadata?.project || "General Fund";

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full mx-auto space-y-8 text-center">
        <div className="space-y-4">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
          <h1 className="text-3xl font-bold tracking-tight">Thank You!</h1>
          <p className="text-muted-foreground">
            Your {isRecurring ? "monthly" : ""} donation of{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: currency,
            }).format(amount)}{" "}
            to {project} has been processed successfully.
          </p>
          {isRecurring && (
            <p className="text-sm text-muted-foreground">
              You will receive monthly donation receipts via email.
            </p>
          )}
        </div>

        <div className="space-y-4">
          {session.customer_email && (
            <p className="text-sm text-muted-foreground">
              A receipt has been sent to {session.customer_email}
            </p>
          )}

          <div className="space-y-2">
            <Button asChild className="w-full">
              <Link href="/">Return Home</Link>
            </Button>
            {/* Optional: Add more actions like "View Impact" or "Share" */}
          </div>
        </div>
      </div>
    </main>
  );
}
