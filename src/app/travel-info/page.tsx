"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Backpack03Icon,
  CheckmarkBadge01Icon,
  PassportIcon,
  WheelchairIcon,
  UserIcon,
  HeartCheckIcon,
  AlertDiamondIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";

const travelInfoSections = [
  {
    id: "baggage",
    icon: Backpack03Icon,
    title: "Baggage Allowance",
    description: "Learn about carry-on and checked baggage limits",
  },
  {
    id: "check-in",
    icon: CheckmarkBadge01Icon,
    title: "Check-in Information",
    description: "Everything you need to know about checking in",
  },
  {
    id: "requirements",
    icon: PassportIcon,
    title: "Travel Requirements",
    description: "Visa, health, and entry requirements",
  },
  {
    id: "special-assistance",
    icon: WheelchairIcon,
    title: "Special Assistance",
    description: "Support for passengers with special needs",
  },
  {
    id: "minors",
    icon: UserIcon,
    title: "Unaccompanied Minors",
    description: "Travel services for children flying alone",
  },
  {
    id: "pets",
    icon: HeartCheckIcon,
    title: "Pets & Animals",
    description: "Traveling with your furry friends",
  },
  {
    id: "dangerous-goods",
    icon: AlertDiamondIcon,
    title: "Dangerous Goods",
    description: "Prohibited and restricted items",
  },
];

export default function TravelInfoPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4"
          >
            Travel Information
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Everything you need for a smooth journey
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelInfoSections.map((info, index) => (
              <motion.div
                key={info.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/travel-info/${info.id}`}
                  className="group block p-6 bg-card rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                    <HugeiconsIcon
                      icon={info.icon}
                      size={28}
                      className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground">{info.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
