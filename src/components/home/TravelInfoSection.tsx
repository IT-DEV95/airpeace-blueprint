import { Link } from "react-router-dom";
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
                to={card.link}
                className="group block p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
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
      </div>
    </section>
  );
};
