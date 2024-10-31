"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { useDonationModal } from "@/hooks/use-donation-modal";

interface DonateButtonProps extends Omit<ButtonProps, "onClick"> {}

export function DonateButton({
  children = "Donate Now",
  ...props
}: DonateButtonProps) {
  const { onOpen } = useDonationModal();

  return (
    <Button onClick={onOpen} {...props}>
      {children}
    </Button>
  );
}
