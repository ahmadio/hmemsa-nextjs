"use client";

import { useEffect } from "react";
import { DonationModal } from "./donation-modal";
import { useDonationModal } from "@/hooks/use-donation-modal";

export function DonationProvider() {
  const { isOpen, onClose } = useDonationModal();

  // Reset modal state on mount to ensure it's closed initially
  useEffect(() => {
    onClose();
  }, [onClose]);

  return <DonationModal isOpen={isOpen} onClose={onClose} />;
}
