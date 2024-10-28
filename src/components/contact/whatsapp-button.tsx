"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <Button
      className="w-full"
      size="lg"
      onClick={() => window.open("https://wa.me/212522123456", "_blank")}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Chat on WhatsApp
    </Button>
  );
}
