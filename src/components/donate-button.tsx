// components/donate-button.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useDonationModal } from "@/hooks/use-donation-modal";

export function DonateButton() {
  const { onOpen } = useDonationModal();

  return (
    <Button onClick={onOpen} variant="outline">
      Donate
    </Button>
  );
}
