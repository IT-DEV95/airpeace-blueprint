"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkBadge01Icon,
  TicketIcon,
  Download01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CheckInPage() {
  const [bookingRef, setBookingRef] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Starting check-in for: ${bookingRef}`);
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
            Online Check-in
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Check in from 24 hours to 2 hours before your flight and skip the queue
          </motion.p>
        </div>
      </section>

      {/* Check-in Form */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto"
          >
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                  <HugeiconsIcon icon={CheckmarkBadge01Icon} size={24} className="text-success" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    Start Check-in
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Available 24 hours before departure
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
                  Check In Now
                  <HugeiconsIcon icon={CheckmarkBadge01Icon} size={20} className="ml-2" />
                </Button>
              </form>
            </div>

            {/* Benefits */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Benefits of Online Check-in
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HugeiconsIcon icon={TicketIcon} size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Skip the Queue</h4>
                    <p className="text-sm text-muted-foreground">
                      Go straight to bag drop or security
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HugeiconsIcon icon={Download01Icon} size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Mobile Boarding Pass</h4>
                    <p className="text-sm text-muted-foreground">
                      Download your boarding pass to your phone
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
