import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, AirplaneTakeOff01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

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
    featured: true,
  },
  {
    id: 2,
    city: "Abuja",
    country: "Nigeria",
    code: "ABV",
    image: abujaImage,
    flights: "40+ daily",
    price: "₦38,000",
    featured: false,
  },
  {
    id: 3,
    city: "Accra",
    country: "Ghana",
    code: "ACC",
    image: accraImage,
    flights: "5 weekly",
    price: "₦120,000",
    featured: false,
  },
  {
    id: 4,
    city: "Dubai",
    country: "UAE",
    code: "DXB",
    image: dubaiImage,
    flights: "3 weekly",
    price: "₦450,000",
    featured: true,
  },
  {
    id: 5,
    city: "Johannesburg",
    country: "South Africa",
    code: "JNB",
    image: johannesburgImage,
    flights: "4 weekly",
    price: "₦380,000",
    featured: false,
  },
  {
    id: 6,
    city: "London",
    country: "United Kingdom",
    code: "LHR",
    image: londonImage,
    flights: "5 weekly",
    price: "₦680,000",
    featured: true,
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const DestinationsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4"
            >
              <HugeiconsIcon icon={AirplaneTakeOff01Icon} size={16} />
              Explore
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-foreground"
            >
              Popular Destinations
            </motion.h2>
          </div>
          <Link
            to="/destinations"
            className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
          >
            View All Destinations
            <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
          </Link>
        </div>

        {/* Destinations Grid - Bento Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              className={`destination-card ${
                destination.featured && index === 0
                  ? "lg:col-span-2 lg:row-span-2 min-h-[400px]"
                  : "min-h-[280px]"
              }`}
            >
              <img
                src={destination.image}
                alt={`${destination.city}, ${destination.country}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-primary-foreground">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium bg-primary-foreground/20 backdrop-blur-sm px-2 py-1 rounded">
                      {destination.code}
                    </span>
                    <span className="text-xs opacity-80">
                      {destination.flights}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-1">
                    {destination.city}
                  </h3>
                  <p className="text-sm opacity-80 mb-3">
                    {destination.country}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs opacity-60">From</span>
                      <p className="text-lg font-semibold">
                        {destination.price}
                      </p>
                    </div>
                    <Button
                      asChild
                      size="sm"
                      className="bg-accent text-accent-foreground hover:bg-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Link to={`/destinations/${destination.city.toLowerCase()}`}>
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
          >
            View All Destinations
            <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
