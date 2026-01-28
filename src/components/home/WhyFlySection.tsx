import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Shield01Icon,
  Sofa01Icon,
  Globe02Icon,
  Time01Icon,
  Award02Icon,
  HeartCheckIcon,
} from "@hugeicons/core-free-icons";

const features = [
  {
    icon: Shield01Icon,
    title: "Safety First",
    description:
      "Highest safety standards with a modern fleet and trained crew, ensuring your peace of mind.",
  },
  {
    icon: Sofa01Icon,
    title: "Maximum Comfort",
    description:
      "Spacious seating, quality in-flight meals, and entertainment for a pleasant journey.",
  },
  {
    icon: Globe02Icon,
    title: "Wide Network",
    description:
      "Over 30 destinations across Nigeria, Africa, and international routes.",
  },
  {
    icon: Time01Icon,
    title: "On-Time Performance",
    description:
      "Industry-leading punctuality with efficient operations and reliable schedules.",
  },
  {
    icon: Award02Icon,
    title: "Award Winning",
    description:
      "Recognized for excellence in service, safety, and customer satisfaction.",
  },
  {
    icon: HeartCheckIcon,
    title: "Nigerian Pride",
    description:
      "Proudly Nigerian, serving our nation and connecting Africa to the world.",
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

export const WhyFlySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
          >
            Why Fly Air Peace?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Experience the difference with Nigeria's most trusted airline, committed
            to excellence in every flight.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <HugeiconsIcon
                  icon={feature.icon}
                  size={28}
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
