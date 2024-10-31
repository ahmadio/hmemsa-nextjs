"use client";

import { useEffect } from "react";
import { DonationModal } from "@/components/donation/donation-modal";
import { useDonationModal } from "@/hooks/use-donation-modal";

export function DonationProvider() {
  const { isOpen, onClose } = useDonationModal();

  // Reset modal state on mount
  useEffect(() => {
    onClose();
  }, [onClose]);

  return <DonationModal isOpen={isOpen} onClose={onClose} />;
}
