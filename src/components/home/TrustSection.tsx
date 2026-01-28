 'use client';

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AirplaneTakeOff01Icon,
  UserMultiple02Icon,
  Globe02Icon,
  Calendar03Icon,
} from "@hugeicons/core-free-icons";

const stats = [
  {
    icon: AirplaneTakeOff01Icon,
    value: "50,000+",
    label: "Flights Annually",
  },
  {
    icon: UserMultiple02Icon,
    value: "5M+",
    label: "Passengers Yearly",
  },
  {
    icon: Globe02Icon,
    value: "30+",
    label: "Destinations",
  },
  {
    icon: Calendar03Icon,
    value: "10+",
    label: "Years of Excellence",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const TrustSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="section-container">
        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HugeiconsIcon icon={stat.icon} size={32} />
              </div>
              <p className="text-3xl md:text-4xl font-display font-bold mb-2">
                {stat.value}
              </p>
              <p className="text-sm opacity-80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6">
            Trusted by Millions, Recognized for Excellence
          </h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-80">
            <div className="flex items-center gap-2">
              <span className="text-accent">★★★★★</span>
              <span className="text-sm">4.5/5 Customer Rating</span>
            </div>
            <div className="text-sm">NCAA Certified</div>
            <div className="text-sm">IATA Member</div>
            <div className="text-sm">ISO 9001 Certified</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
