import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AirplaneTakeOff01Icon,
  Building01Icon,
  PackageIcon,
  AirplaneIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "in-flight",
    icon: AirplaneTakeOff01Icon,
    title: "In-flight Services",
    description: "Enjoy a comfortable journey with our premium onboard services",
    features: [
      "Complimentary meals and beverages",
      "In-flight entertainment",
      "Comfortable seating with extra legroom",
      "Duty-free shopping",
      "Power outlets and USB charging",
    ],
  },
  {
    id: "airport",
    icon: Building01Icon,
    title: "Airport Services",
    description: "Start your journey right with our airport amenities",
    features: [
      "Priority check-in counters",
      "Lounge access for premium passengers",
      "Fast-track security",
      "Meet and assist service",
      "Wheelchair assistance",
    ],
  },
  {
    id: "charter",
    icon: AirplaneIcon,
    title: "Charter Services",
    description: "Private charter flights for groups and special occasions",
    features: [
      "Customized flight schedules",
      "Flexible destinations",
      "Group travel solutions",
      "Corporate charters",
      "Special event transportation",
    ],
  },
  {
    id: "cargo",
    icon: PackageIcon,
    title: "Cargo Services",
    description: "Reliable freight and cargo transportation solutions",
    features: [
      "Express cargo delivery",
      "Temperature-controlled storage",
      "Dangerous goods handling",
      "Door-to-door delivery",
      "Real-time tracking",
    ],
  },
];

const Services = () => {
  const { section } = useParams();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Comprehensive aviation services for passengers and businesses
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <HugeiconsIcon icon={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link to={`/services/${service.id}`}>
                      Learn More
                      <HugeiconsIcon icon={ArrowRight01Icon} size={18} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="section-container text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Need More Information?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is ready to assist you with any questions about our services.
          </p>
          <Button asChild size="lg" className="btn-hero">
            <Link to="/support">
              Contact Us
              <HugeiconsIcon icon={ArrowRight01Icon} size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
