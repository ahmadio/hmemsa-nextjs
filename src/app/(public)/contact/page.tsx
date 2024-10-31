export const dynamic = "force-dynamic";

import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { OfficeMap } from "@/components/contact/office-map";
import { SocialFeed } from "@/components/contact/social-feed";
import { ContactFaq } from "@/components/contact/contact-faq";
import { WhatsAppButton } from "@/components/contact/whatsapp-button";

export const metadata = {
  title: "Contact Us | Hmemsa",
  description:
    "Get in touch with Hmemsa. We're here to answer your questions and help you make a difference.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-12">
            <OfficeMap />
            <WhatsAppButton />
          </div>
        </div>
        <SocialFeed />
        <ContactFaq />
      </div>
    </main>
  );
}
