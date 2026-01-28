import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Target01Icon,
  UserMultiple02Icon,
  Shield01Icon,
  Leaf01Icon,
  Award02Icon,
  AirplaneTakeOff01Icon,
} from "@hugeicons/core-free-icons";
import { Layout } from "@/components/layout/Layout";

import heroImage from "@/assets/hero-aircraft.jpg";

const stats = [
  { label: "Years of Operation", value: "10+" },
  { label: "Fleet Size", value: "30+" },
  { label: "Destinations", value: "30+" },
  { label: "Employees", value: "3,000+" },
];

const values = [
  {
    icon: Shield01Icon,
    title: "Safety",
    description: "Safety is our top priority. We maintain the highest standards in aircraft maintenance and crew training.",
  },
  {
    icon: Target01Icon,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from customer service to operational efficiency.",
  },
  {
    icon: UserMultiple02Icon,
    title: "People First",
    description: "Our passengers and employees are at the heart of everything we do.",
  },
  {
    icon: Leaf01Icon,
    title: "Sustainability",
    description: "We are committed to reducing our environmental footprint and promoting sustainable aviation.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Air Peace aircraft"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <div className="relative section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4"
          >
            About Air Peace
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Nigeria's largest airline, connecting the nation and beyond with safe, comfortable, and reliable air travel.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl font-display font-bold text-foreground mt-4 mb-6">
                A Nigerian Success Story
              </h2>
              <p className="text-muted-foreground mb-4">
                Air Peace was founded in 2013 by Chief Allen Onyema with a vision to provide Nigerians with a world-class airline that prioritizes safety, comfort, and reliability.
              </p>
              <p className="text-muted-foreground mb-4">
                Starting with just a few aircraft, we have grown to become Nigeria's largest airline, operating a fleet of over 30 aircraft to more than 30 domestic, regional, and international destinations.
              </p>
              <p className="text-muted-foreground">
                Our journey has been driven by our commitment to excellence and our passion for connecting people. We are proud to be a Nigerian airline that competes on the global stage.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 bg-card rounded-2xl border border-border text-center"
                >
                  <p className="text-3xl font-display font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              Our Values
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground mt-4">
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <HugeiconsIcon icon={value.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <HugeiconsIcon icon={Award02Icon} size={48} className="mx-auto mb-6 text-accent" />
          <h2 className="text-3xl font-display font-bold mb-8">
            Recognized for Excellence
          </h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-80">
            <div className="text-center">
              <p className="text-2xl font-bold mb-1">NCAA Certified</p>
              <p className="text-sm opacity-70">Nigerian Civil Aviation Authority</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold mb-1">IATA Member</p>
              <p className="text-sm opacity-70">International Air Transport Association</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold mb-1">ISO 9001</p>
              <p className="text-sm opacity-70">Quality Management Certified</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
