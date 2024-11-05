// components/mobile-menu.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "@/components/nav-link";
import { DonateButton } from "@/components/donate-button";

interface MobileMenuProps {
  navigationItems: Array<{ name: string; href: string }>;
}

export function MobileMenu({ navigationItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center space-x-4 md:hidden">
        {/* <DonateButton /> */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="p-1"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="px-4 py-3 space-y-3">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="block"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
