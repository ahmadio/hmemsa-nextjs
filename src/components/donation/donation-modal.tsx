"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { DonationForm } from "./donation-form";
import { DonationSuccess } from "./donation-success";
import { useState } from "react";

export function DonationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogTitle className="text-2xl font-bold text-gray-900">
          {isSuccess ? "Thank You!" : "Make a Donation"}
        </DialogTitle>
        {isSuccess ? (
          <DonationSuccess onClose={onClose} />
        ) : (
          <DonationForm onSuccess={() => setIsSuccess(true)} />
        )}
      </DialogContent>
    </Dialog>
  );
}
