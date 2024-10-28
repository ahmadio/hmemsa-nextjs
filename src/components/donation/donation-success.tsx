"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function DonationSuccess({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center py-6">
      <div className="mb-6">
        <Heart className="w-16 h-16 mx-auto text-[#C1272D]" />
      </div>
      <h3 className="text-xl font-semibold mb-4">
        Your donation was successful!
      </h3>
      <p className="text-gray-600 mb-6">
        Thank you for supporting our mission to improve education and healthcare
        for underprivileged Moroccan children.
      </p>
      <p className="text-sm text-gray-500 mb-8">
        A confirmation email has been sent to your inbox.
      </p>
      <Button onClick={onClose} className="w-full">
        Close
      </Button>
    </div>
  );
}
