"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AirplaneTakeOff01Icon,
  AirplaneLanding01Icon,
  Calendar03Icon,
  Clock01Icon,
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { BookingWidget } from "@/components/booking/BookingWidget";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

// Mock flight results
const mockFlights = [
  {
    id: "AP101",
    departure: { code: "LOS", city: "Lagos", time: "06:00" },
    arrival: { code: "ABV", city: "Abuja", time: "07:15" },
    duration: "1h 15m",
    stops: "Non-stop",
    price: 45000,
    aircraft: "Boeing 737-500",
  },
  {
    id: "AP103",
    departure: { code: "LOS", city: "Lagos", time: "08:30" },
    arrival: { code: "ABV", city: "Abuja", time: "09:45" },
    duration: "1h 15m",
    stops: "Non-stop",
    price: 52000,
    aircraft: "Embraer E195",
  },
  {
    id: "AP105",
    departure: { code: "LOS", city: "Lagos", time: "12:00" },
    arrival: { code: "ABV", city: "Abuja", time: "13:20" },
    duration: "1h 20m",
    stops: "Non-stop",
    price: 48000,
    aircraft: "Boeing 737-300",
  },
  {
    id: "AP107",
    departure: { code: "LOS", city: "Lagos", time: "16:45" },
    arrival: { code: "ABV", city: "Abuja", time: "18:00" },
    duration: "1h 15m",
    stops: "Non-stop",
    price: 55000,
    aircraft: "Boeing 737-500",
  },
  {
    id: "AP109",
    departure: { code: "LOS", city: "Lagos", time: "20:30" },
    arrival: { code: "ABV", city: "Abuja", time: "21:45" },
    duration: "1h 15m",
    stops: "Non-stop",
    price: 42000,
    aircraft: "Embraer E195",
  },
];

const steps = [
  { id: 1, label: "Search" },
  { id: 2, label: "Select Flight" },
  { id: 3, label: "Passengers" },
  { id: 4, label: "Add-ons" },
  { id: 5, label: "Payment" },
];

export default function BookPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);
  const [searchComplete, setSearchComplete] = useState(false);

  const handleSearch = () => {
    setSearchComplete(true);
    setCurrentStep(2);
  };

  const handleSelectFlight = (flightId: string) => {
    setSelectedFlight(flightId);
  };

  const handleContinue = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="section-container py-8">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "step-indicator text-sm",
                    currentStep < step.id && "step-indicator-inactive"
                  )}
                >
                  {currentStep > step.id ? (
                    <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} />
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={cn(
                    "text-xs mt-2 hidden sm:block",
                    currentStep >= step.id
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "w-12 sm:w-24 h-0.5 mx-2",
                    currentStep > step.id ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Search */}
      {currentStep === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
            Search Flights
          </h1>
          <BookingWidget variant="standalone" />
          <div className="mt-8 text-center">
            <Button onClick={handleSearch} size="lg" className="btn-hero">
              Search Flights
              <HugeiconsIcon icon={ArrowRight01Icon} size={20} className="ml-2" />
            </Button>
          </div>
        </motion.div>
      )}

      {/* Step 2: Flight Results */}
      {currentStep === 2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-display font-bold text-foreground mb-2 text-center">
            Select Your Flight
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            Lagos (LOS) → Abuja (ABV) • {mockFlights.length} flights available
          </p>

          {/* Flight Cards */}
          <div className="max-w-4xl mx-auto space-y-4">
            {mockFlights.map((flight) => (
              <motion.div
                key={flight.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "flight-card cursor-pointer",
                  selectedFlight === flight.id &&
                    "border-primary ring-2 ring-primary/20"
                )}
                onClick={() => handleSelectFlight(flight.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Flight Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {flight.id}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {flight.aircraft}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      {/* Departure */}
                      <div className="text-center">
                        <p className="text-2xl font-bold text-foreground">
                          {flight.departure.time}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {flight.departure.code}
                        </p>
                      </div>

                      {/* Duration */}
                      <div className="flex-1 flex flex-col items-center">
                        <p className="text-xs text-muted-foreground mb-1">
                          {flight.duration}
                        </p>
                        <div className="relative w-full max-w-[200px]">
                          <div className="h-0.5 bg-border w-full" />
                          <HugeiconsIcon
                            icon={AirplaneTakeOff01Icon}
                            size={16}
                            className="absolute right-0 -top-2 text-primary"
                          />
                        </div>
                        <p className="text-xs text-success mt-1">
                          {flight.stops}
                        </p>
                      </div>

                      {/* Arrival */}
                      <div className="text-center">
                        <p className="text-2xl font-bold text-foreground">
                          {flight.arrival.time}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {flight.arrival.code}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right md:min-w-[150px]">
                    <p className="text-2xl font-bold text-primary">
                      {formatPrice(flight.price)}
                    </p>
                    <p className="text-sm text-muted-foreground">per person</p>
                    <Button
                      size="sm"
                      className={cn(
                        "mt-2",
                        selectedFlight === flight.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                      )}
                    >
                      {selectedFlight === flight.id ? "Selected" : "Select"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Continue Button */}
          {selectedFlight && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center"
            >
              <Button onClick={handleContinue} size="lg" className="btn-hero">
                Continue to Passenger Details
                <HugeiconsIcon icon={ArrowRight01Icon} size={20} className="ml-2" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Step 3-5: Placeholder */}
      {currentStep >= 3 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center py-16"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HugeiconsIcon
              icon={CheckmarkCircle02Icon}
              size={40}
              className="text-primary"
            />
          </div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">
            {steps[currentStep - 1].label}
          </h2>
          <p className="text-muted-foreground mb-8">
            This step is coming soon. In a production environment, you would
            enter passenger details, select add-ons, and complete payment here.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Go Back
            </Button>
            {currentStep < 5 && (
              <Button onClick={handleContinue} className="btn-hero">
                Continue
                <HugeiconsIcon icon={ArrowRight01Icon} size={20} className="ml-2" />
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
