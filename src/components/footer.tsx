import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import type { SITE_SETTINGS_QUERYResult } from "@/sanity/types";

interface FooterProps {
  settings: SITE_SETTINGS_QUERYResult;
}

export function Footer({ settings }: FooterProps) {
  return (
    <footer className="bg-background border-t mt-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  Our Mission
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/team"
                  className="text-muted-foreground hover:text-primary"
                >
                  Team
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="/impact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Impact
                </Link>
              </li> */}
            </ul>
          </div>
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs"
                  className="text-muted-foreground hover:text-primary"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-muted-foreground hover:text-primary"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-muted-foreground hover:text-primary"
                >
                  Nutrition
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/donate"
                  className="text-muted-foreground hover:text-primary"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="text-muted-foreground hover:text-primary"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div> */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/HMEMSA"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/HMEMSA"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/hmemsa/"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t pt-8 text-center text-muted-foreground">
          <p>© 2024 Hmemsa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
