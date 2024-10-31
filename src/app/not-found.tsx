export const dynamic = "force-dynamic";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          {/* Main content with fade-in effect using CSS */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              404 - Page Not Found
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved. Let&apos;s get you back on track.
            </p>
          </div>

          {/* Buttons with staggered fade-in */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 pt-8 animate-fade-in-delay-200">
            <Button asChild variant="default" size="lg">
              <Link href="/" className="inline-flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Contact Support
              </Link>
            </Button>
          </div>

          {/* Footer text with longer fade-in delay */}
          <div className="mt-8 text-center animate-fade-in-delay-400">
            <p className="text-sm text-muted-foreground">
              If you believe this is a mistake, please{" "}
              <Link href="/contact" className="text-primary hover:underline">
                let us know
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
