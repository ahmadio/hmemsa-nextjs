export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default async function CancelPage() {
  // Get the origin for dynamic URL construction
  const headersList = await headers();
  const domain = headersList.get("host") || "";
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const origin = `${protocol}://${domain}`;

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Donation Cancelled
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Your donation has been cancelled. No charges have been made to
              your account.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 pt-8">
            <Button asChild variant="default" size="lg">
              <Link href={new URL("/", origin).toString()}>
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              If you experienced any issues, please{" "}
              <Link
                href={new URL("/contact", origin).toString()}
                className="text-primary hover:underline"
              >
                contact our support team
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
