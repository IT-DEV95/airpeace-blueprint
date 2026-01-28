"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookingWidget } from "@/components/booking/BookingWidget";
import heroImage from "@/assets/hero-aircraft.jpg";

export const HeroSection = () => {
  return (
    <>
      {/* Fixed Background Image - stays in place while scrolling */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <Image
          src={heroImage}
          alt="Air Peace aircraft flying above clouds at sunset"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Hero Section Content - scrolls normally */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="relative section-container py-20 md:py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
            Explore Our Destinations
            <br />
            <span className="block text-sm md:text-base tracking-[0.2em] uppercase">
              BOOK YOUR NEXT FLIGHT WITH US
            </span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Experience Nigeria's largest airline with over 30 destinations across
            Africa and beyond. Safe, comfortable, and reliable.
          </p>
        </motion.div>

        {/* Booking Widget */}
        <BookingWidget variant="hero" />
      </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary-foreground"
              />
            </div>
          </motion.div>
      </section>
    </>
  );
};
