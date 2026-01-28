"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  TicketIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ManageBookingPage() {
  const [bookingRef, setBookingRef] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Looking up booking: ${bookingRef} for ${lastName}`);
  };

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
            Manage Your Booking
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
          >
            View, modify, or add services to your existing booking
          </motion.p>
        </div>
      </section>

      {/* Booking Lookup */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto"
          >
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <HugeiconsIcon icon={TicketIcon} size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    Retrieve Your Booking
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Enter your details below
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Booking Reference (PNR)
                  </label>
                  <Input
                    type="text"
                    value={bookingRef}
                    onChange={(e) => setBookingRef(e.target.value.toUpperCase())}
                    placeholder="e.g., ABC123"
                    required
                    className="h-12 uppercase"
                    maxLength={6}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="As shown on ticket"
                    required
                    className="h-12"
                  />
                </div>
                <Button type="submit" size="lg" className="btn-hero w-full">
                  Find My Booking
                  <HugeiconsIcon icon={Search01Icon} size={20} className="ml-2" />
                </Button>
              </form>
            </div>

            {/* Options */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-xl border border-border">
                <h3 className="font-medium text-foreground mb-1">Change Flight</h3>
                <p className="text-sm text-muted-foreground">
                  Modify your travel dates or times
                </p>
              </div>
              <div className="p-4 bg-card rounded-xl border border-border">
                <h3 className="font-medium text-foreground mb-1">Add Baggage</h3>
                <p className="text-sm text-muted-foreground">
                  Purchase additional baggage allowance
                </p>
              </div>
              <div className="p-4 bg-card rounded-xl border border-border">
                <h3 className="font-medium text-foreground mb-1">Select Seats</h3>
                <p className="text-sm text-muted-foreground">
                  Choose your preferred seat
                </p>
              </div>
              <div className="p-4 bg-card rounded-xl border border-border">
                <h3 className="font-medium text-foreground mb-1">Download Itinerary</h3>
                <p className="text-sm text-muted-foreground">
                  Get your travel documents
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
