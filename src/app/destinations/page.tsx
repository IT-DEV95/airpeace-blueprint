"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { AirplaneTakeOff01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import lagosImage from "@/assets/destination-lagos.jpg";
import abujaImage from "@/assets/destination-abuja.jpg";
import accraImage from "@/assets/destination-accra.jpg";
import dubaiImage from "@/assets/destination-dubai.jpg";
import johannesburgImage from "@/assets/destination-johannesburg.jpg";
import londonImage from "@/assets/destination-london.jpg";

const destinations = [
  {
    id: 1,
    city: "Lagos",
    country: "Nigeria",
    code: "LOS",
    image: lagosImage,
    flights: "50+ daily",
    price: "₦35,000",
    description: "Nigeria's largest city and economic hub. Experience the vibrant culture, stunning beaches, and dynamic nightlife.",
    category: "domestic",
  },
  {
    id: 2,
    city: "Abuja",
    country: "Nigeria",
    code: "ABV",
    image: abujaImage,
    flights: "40+ daily",
    price: "₦38,000",
    description: "The capital city of Nigeria, known for its modern architecture and beautiful landscapes.",
    category: "domestic",
  },
  {
    id: 3,
    city: "Port Harcourt",
    country: "Nigeria",
    code: "PHC",
    image: lagosImage,
    flights: "25+ daily",
    price: "₦32,000",
    description: "The Garden City of Nigeria, a major industrial center with rich oil reserves.",
    category: "domestic",
  },
  {
    id: 4,
    city: "Accra",
    country: "Ghana",
    code: "ACC",
    image: accraImage,
    flights: "5 weekly",
    price: "₦120,000",
    description: "Ghana's capital, a gateway to West Africa with beautiful beaches and historic forts.",
    category: "regional",
  },
  {
    id: 5,
    city: "Johannesburg",
    country: "South Africa",
    code: "JNB",
    image: johannesburgImage,
    flights: "4 weekly",
    price: "₦380,000",
    description: "South Africa's largest city, offering world-class shopping, dining, and entertainment.",
    category: "regional",
  },
  {
    id: 6,
    city: "Dubai",
    country: "UAE",
    code: "DXB",
    image: dubaiImage,
    flights: "3 weekly",
    price: "₦450,000",
    description: "A global city known for luxury shopping, ultramodern architecture, and vibrant nightlife.",
    category: "international",
  },
  {
    id: 7,
    city: "London",
    country: "United Kingdom",
    code: "LHR",
    image: londonImage,
    flights: "5 weekly",
    price: "₦680,000",
    description: "The capital of England, a leading global city with a history spanning two millennia.",
    category: "international",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DestinationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4"
          >
            Explore Our Destinations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Discover 30+ destinations across Nigeria, Africa, and beyond. 
            Your next adventure is just a flight away.
          </motion.p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-background">
        <div className="section-container">
          {/* Domestic */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              Domestic Destinations
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {destinations
                .filter((d) => d.category === "domestic")
                .map((destination) => (
                  <motion.div
                    key={destination.id}
                    variants={itemVariants}
                    className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={destination.image}
                        alt={destination.city}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {destination.code}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {destination.city}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {destination.country} • {destination.flights}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {destination.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-muted-foreground">From</span>
                          <p className="text-lg font-bold text-primary">
                            {destination.price}
                          </p>
                        </div>
                        <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                          <Link href="/book">Book Flight</Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>

          {/* Regional */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              Regional Destinations
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {destinations
                .filter((d) => d.category === "regional")
                .map((destination) => (
                  <motion.div
                    key={destination.id}
                    variants={itemVariants}
                    className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={destination.image}
                        alt={destination.city}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {destination.code}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {destination.city}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {destination.country} • {destination.flights}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {destination.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-muted-foreground">From</span>
                          <p className="text-lg font-bold text-primary">
                            {destination.price}
                          </p>
                        </div>
                        <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                          <Link href="/book">Book Flight</Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>

          {/* International */}
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              International Destinations
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {destinations
                .filter((d) => d.category === "international")
                .map((destination) => (
                  <motion.div
                    key={destination.id}
                    variants={itemVariants}
                    className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={destination.image}
                        alt={destination.city}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {destination.code}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {destination.city}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {destination.country} • {destination.flights}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {destination.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-muted-foreground">From</span>
                          <p className="text-lg font-bold text-primary">
                            {destination.price}
                          </p>
                        </div>
                        <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                          <Link href="/book">Book Flight</Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
