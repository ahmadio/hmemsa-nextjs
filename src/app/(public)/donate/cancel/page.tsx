import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DonationCancelPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full mx-auto space-y-8 text-center">
        <div className="space-y-4">
          <XCircle className="w-16 h-16 text-muted-foreground mx-auto" />
          <h1 className="text-3xl font-bold tracking-tight">
            Donation Cancelled
          </h1>
          <p className="text-muted-foreground">
            Your donation process was cancelled. If you experienced any issues,
            please try again or contact our support team.
          </p>
        </div>

        <div className="space-y-2">
          <Button asChild className="w-full">
            <Link href="/">Return Home</Link>
          </Button>
          {/* You might want to add a "Try Again" button that reopens the donation modal */}
        </div>
      </div>
    </main>
  );
}
