"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useDonationModal } from "@/hooks/use-donation-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./hero.css";

type ButtonConfig = {
  text: string;
  variant?: "default" | "outline";
  action: {
    type: "donation" | "link";
    href?: string;
  };
};

type Slide = {
  title: string;
  description: string;
  highlight: string;
  buttons?: ButtonConfig[];
};

const slides: Slide[] = [
  {
    title: "SOS PKU Morocco",
    description:
      "HMEMESA (USA), and SOS PKU Morocco, 3rd International Conference & Camp on PKU in Morocco on November 22 and 23, 2024 in Rabat",
    highlight: "Morocco",
    buttons: [
      {
        text: "Learn More",
        action: { type: "link", href: "https://www.pkumaroc.com/" }
      }
    ]
  },
  {
    title: "Impacting Morocco's Future Through Education",
    description:
      "Join us in our mission to contribute to the development of Morocco through services and exchange of expertise between Moroccan and American educators.",
    highlight: "Education",
    buttons: [
      {
        text: "Make a Difference",
        action: { type: "donation" }
      },
      {
        text: "Our Programs",
        variant: "outline",
        action: { type: "link", href: "/programs" }
      }
    ]
  },
  {
    title: "Empowering Through Advocacy",
    description:
      "We work tirelessly to advocate for educational opportunities and cultural exchange between Morocco and America.",
    highlight: "Advocacy",
    buttons: [
      {
        text: "Support Us",
        action: { type: "donation" }
      },
      {
        text: "Learn More",
        variant: "outline",
        action: { type: "link", href: "/about" }
      }
    ]
  },
  {
    title: "Providing Essential Resources",
    description:
      "Supporting communities with the tools and resources they need to build a brighter future for Morocco.",
    highlight: "Resources"
  }
];

export function Hero() {
  const { onOpen } = useDonationModal();

  const renderButtons = (buttons?: ButtonConfig[]) => {
    if (!buttons || buttons.length === 0) {
      return (
        <Button size="lg" onClick={onOpen}>
          Make a Difference
        </Button>
      );
    }

    return buttons.map((button, index) => {
      if (button.action.type === "donation") {
        return (
          <Button
            key={index}
            size="lg"
            variant={button.variant}
            onClick={onOpen}
          >
            {button.text}
          </Button>
        );
      }

      return (
        <Button
          key={index}
          size="lg"
          variant={button.variant}
          asChild
        >
          <Link href={button.action.href || "#"}>{button.text}</Link>
        </Button>
      );
    });
  };

  return (
    <div className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="hero-pattern absolute inset-0 opacity-50" />
      <div className="container relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-3xl text-center"
              >
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  {slide.title.split(slide.highlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="text-primary">{slide.highlight}</span>
                      )}
                    </span>
                  ))}
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  {slide.description}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  {renderButtons(slide.buttons)}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
