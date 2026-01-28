"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, PercentIcon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

import lagosImage from "@/assets/destination-lagos.jpg";
import dubaiImage from "@/assets/destination-dubai.jpg";
import londonImage from "@/assets/destination-london.jpg";

const promotions = [
  {
    id: 1,
    title: "Lagos to Dubai",
    subtitle: "Spring Special",
    price: "₦450,000",
    originalPrice: "₦550,000",
    image: dubaiImage,
    discount: "18% OFF",
    validUntil: "Mar 31, 2026",
  },
  {
    id: 2,
    title: "Lagos to London",
    subtitle: "Early Bird Deal",
    price: "₦680,000",
    originalPrice: "₦780,000",
    image: londonImage,
    discount: "13% OFF",
    validUntil: "Apr 15, 2026",
  },
  {
    id: 3,
    title: "Domestic Routes",
    subtitle: "Weekend Getaway",
    price: "₦45,000",
    originalPrice: "₦65,000",
    image: lagosImage,
    discount: "31% OFF",
    validUntil: "Ongoing",
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

export const PromotionsSection = () => {
  return (
    <section className="py-20 bg-gradient-sky">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4"
            >
              <HugeiconsIcon icon={PercentIcon} size={16} />
              Special Offers
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-foreground"
            >
              Exclusive Deals & Promotions
            </motion.h2>
          </div>
          <Link
            href="/destinations"
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
          >
            View All Deals
            <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
          </Link>
        </div>

        {/* Promotions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {promotions.map((promo) => (
            <motion.div
              key={promo.id}
              variants={itemVariants}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold z-10">
                  {promo.discount}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-1">
                  {promo.subtitle}
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {promo.title}
                </h3>

                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground line-through">
                      {promo.originalPrice}
                    </span>
                    <p className="text-2xl font-bold text-primary">
                      {promo.price}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      Valid until {promo.validUntil}
                    </span>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link href="/book">Book Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
          >
            View All Deals
            <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
