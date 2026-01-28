"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Backpack03Icon,
  CheckmarkBadge01Icon,
  PassportIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

const infoCards = [
  {
    icon: Backpack03Icon,
    title: "Baggage Allowance",
    description:
      "Learn about carry-on and checked baggage limits for your fare type.",
    link: "/travel-info/baggage",
  },
  {
    icon: CheckmarkBadge01Icon,
    title: "Online Check-in",
    description:
      "Check in online 24 hours before departure and skip the queue.",
    link: "/check-in",
  },
  {
    icon: PassportIcon,
    title: "Travel Requirements",
    description:
      "Stay updated on visa, health, and entry requirements for your destination.",
    link: "/travel-info/requirements",
  },
];

const servicesCards = [
  {
    title: "Ride Services",
    description:
      "Travel with ease by booking discounted airport pick-up and drop-off rides with our trusted partners.",
    cta: "Learn more",
    href: "/services/ride-services",
  },
  {
    title: "Booking a Hotel",
    description:
      "Access exclusive hotel deals when you book your accommodation through our partner network at your destination.",
    cta: "View hotel offers",
    href: "/services/hotels",
  },
  {
    title: "Travel Insurance",
    description:
      "Enhance your trip with comprehensive travel insurance and enjoy peace of mind from take-off to landing.",
    cta: "Add insurance",
    href: "/services/travel-insurance",
  },
  {
    title: "Pay Small Small",
    description:
      "Spread your ticket payment over convenient instalments while enjoying special early-bird fares.",
    cta: "See payment plans",
    href: "/services/pay-small-small",
  },
  {
    title: "Buggy Services",
    description:
      "Skip the long walks at the airport with our buggy service for a smooth, quick ride to your gate.",
    cta: "Book buggy",
    href: "/services/buggy",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const TravelInfoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
          >
            Plan Your Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Everything you need to know for a smooth travel experience
          </motion.p>
        </div>

        {/* Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {infoCards.map((card) => (
            <motion.div key={card.title} variants={itemVariants}>
              <Link
                href={card.link}
                className="group block p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <HugeiconsIcon
                    icon={card.icon}
                    size={32}
                    className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground mb-4">{card.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:text-accent transition-colors">
                  Learn More
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={18}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
            Get more from your trip
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            Enjoy extra benefits when you book with Air Peace, from airport transfers to flexible payment options.
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {servicesCards.map((service) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Link
                  href={service.href}
                  className="block h-full bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 p-6"
                >
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                    {service.cta}
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={16}
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
