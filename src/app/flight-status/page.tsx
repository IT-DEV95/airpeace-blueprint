"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AirplaneTakeOff01Icon,
  Clock01Icon,
  CheckmarkCircle02Icon,
  AlertCircleIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockFlightStatus = {
  flightNumber: "AP101",
  departure: { city: "Lagos", code: "LOS", time: "06:00", terminal: "D" },
  arrival: { city: "Abuja", code: "ABV", time: "07:15", terminal: "1" },
  status: "On Time",
  aircraft: "Boeing 737-500",
  date: "Jan 28, 2026",
};

export default function FlightStatusPage() {
  const [searchType, setSearchType] = useState("flight-number");
  const [flightNumber, setFlightNumber] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
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
            Flight Status
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Track your flight in real-time
          </motion.p>
        </div>
      </section>

      {/* Search */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto"
          >
            <div className="bg-card p-8 rounded-2xl border border-border">
              <Tabs value={searchType} onValueChange={setSearchType} className="mb-6">
                <TabsList className="w-full">
                  <TabsTrigger value="flight-number" className="flex-1">
                    By Flight Number
                  </TabsTrigger>
                  <TabsTrigger value="route" className="flex-1">
                    By Route
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <form onSubmit={handleSubmit} className="space-y-4">
                {searchType === "flight-number" ? (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Flight Number
                    </label>
                    <Input
                      type="text"
                      value={flightNumber}
                      onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                      placeholder="e.g., AP101"
                      required
                      className="h-12 uppercase"
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        From
                      </label>
                      <Input type="text" placeholder="Lagos (LOS)" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        To
                      </label>
                      <Input type="text" placeholder="Abuja (ABV)" className="h-12" />
                    </div>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Date
                  </label>
                  <Input type="date" className="h-12" defaultValue="2026-01-28" />
                </div>
                <Button type="submit" size="lg" className="btn-hero w-full">
                  Check Status
                </Button>
              </form>
            </div>

            {/* Results */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 bg-card p-6 rounded-2xl border border-border"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <HugeiconsIcon icon={AirplaneTakeOff01Icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {mockFlightStatus.flightNumber}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {mockFlightStatus.aircraft}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-success/10 text-success px-3 py-1.5 rounded-full">
                    <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} />
                    <span className="text-sm font-medium">{mockFlightStatus.status}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-1 text-center">
                    <p className="text-2xl font-bold text-foreground">
                      {mockFlightStatus.departure.time}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {mockFlightStatus.departure.city} ({mockFlightStatus.departure.code})
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Terminal {mockFlightStatus.departure.terminal}
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full h-0.5 bg-border relative">
                      <HugeiconsIcon
                        icon={AirplaneTakeOff01Icon}
                        size={20}
                        className="absolute right-0 -top-2.5 text-primary"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">1h 15m</p>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-2xl font-bold text-foreground">
                      {mockFlightStatus.arrival.time}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {mockFlightStatus.arrival.city} ({mockFlightStatus.arrival.code})
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Terminal {mockFlightStatus.arrival.terminal}
                    </p>
                  </div>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  {mockFlightStatus.date}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
