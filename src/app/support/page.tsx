"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Call02Icon,
  Mail01Icon,
  Location01Icon,
  MessageQuestionIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book a flight?",
    answer: "You can book a flight through our website by using the booking widget on our homepage or the dedicated Book Flight page. Simply enter your departure city, destination, travel dates, and passenger count, then follow the step-by-step process to complete your booking.",
  },
  {
    question: "What is the baggage allowance?",
    answer: "Our standard economy class allows one carry-on bag (7kg) and one checked bag (23kg). Business class passengers enjoy 2 checked bags (32kg each). Additional baggage can be purchased during booking or at the airport.",
  },
  {
    question: "How early should I arrive at the airport?",
    answer: "For domestic flights, we recommend arriving at least 2 hours before departure. For international flights, please arrive at least 3 hours before your scheduled departure time to allow for check-in, security, and immigration procedures.",
  },
  {
    question: "Can I change or cancel my booking?",
    answer: "Yes, you can modify or cancel your booking through the Manage Booking section on our website. Please note that change and cancellation fees may apply depending on your fare type and how close to departure you make the request.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Refund eligibility depends on your fare type. Flexible fares are fully refundable, while standard fares may be subject to cancellation fees. Please refer to our Refund Policy for complete details or contact our customer support team.",
  },
  {
    question: "How do I check in online?",
    answer: "Online check-in opens 24 hours before your flight departure. Visit our Check-in page, enter your booking reference and last name, then follow the prompts to select your seat and download your boarding pass.",
  },
];

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4"
          >
            How Can We Help?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Our dedicated support team is here to assist you with any questions or concerns.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-card rounded-2xl border border-border text-center hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HugeiconsIcon icon={Call02Icon} size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">24/7 Customer Service</p>
              <a
                href="tel:+2348000247322"
                className="text-primary font-medium hover:text-accent transition-colors"
              >
                +234 800 0247 322
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-card rounded-2xl border border-border text-center hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HugeiconsIcon icon={Mail01Icon} size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">Get a response within 24 hours</p>
              <a
                href="mailto:support@flyairpeace.com"
                className="text-primary font-medium hover:text-accent transition-colors"
              >
                support@flyairpeace.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-card rounded-2xl border border-border text-center hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HugeiconsIcon icon={Location01Icon} size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-4">Head Office</p>
              <p className="text-foreground">
                Murtala Muhammed Airport,
                <br />
                Lagos, Nigeria
              </p>
            </motion.div>
          </div>

          {/* FAQ & Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <HugeiconsIcon icon={MessageQuestionIcon} size={28} className="text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="How can we help?"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg" className="btn-hero w-full sm:w-auto">
                  Send Message
                  <HugeiconsIcon icon={ArrowRight01Icon} size={20} className="ml-2" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
