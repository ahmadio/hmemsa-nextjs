"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I get involved with Hmemsa?",
    answer:
      "There are several ways to get involved: volunteer for our programs, make a donation, or partner with us for initiatives. Contact us for more details on each option.",
  },
  {
    question: "Where are your programs located?",
    answer:
      "Our programs are primarily located in various regions across Morocco, with a focus on both urban and rural areas where support is most needed.",
  },
  {
    question: "How is my donation used?",
    answer:
      "Your donations directly support our education and healthcare programs. We maintain full transparency with detailed impact reports available on our website.",
  },
  {
    question: "Can I volunteer from abroad?",
    answer:
      "Yes, we offer both remote and in-person volunteering opportunities. Contact us to learn more about our international volunteer program.",
  },
];

export function ContactFaq() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
