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

const slides = [
  {
    title: "Impacting Morocco's Future Through Education",
    description:
      "Join us in our mission to contribute to the development of Morocco through services and exchange of expertise between Moroccan and American educators.",
    highlight: "Education",
  },
  {
    title: "Empowering Through Advocacy",
    description:
      "We work tirelessly to advocate for educational opportunities and cultural exchange between Morocco and America.",
    highlight: "Advocacy",
  },
  {
    title: "Providing Essential Resources",
    description:
      "Supporting communities with the tools and resources they need to build a brighter future for Morocco.",
    highlight: "Resources",
  },
];

export function Hero() {
  const { onOpen } = useDonationModal();

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
                  <Button size="lg" onClick={onOpen}>
                    Make a Difference
                  </Button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
