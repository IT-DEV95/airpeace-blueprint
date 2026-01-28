 'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AirplaneTakeOff01Icon,
  AirplaneLanding01Icon,
  Calendar03Icon,
  UserMultiple02Icon,
  ArrowRight01Icon,
  RepeatIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const airports = [
  { code: "LOS", city: "Lagos", airport: "Murtala Muhammed Int'l" },
  { code: "ABV", city: "Abuja", airport: "Nnamdi Azikiwe Int'l" },
  { code: "PHC", city: "Port Harcourt", airport: "Port Harcourt Int'l" },
  { code: "KAN", city: "Kano", airport: "Mallam Aminu Kano Int'l" },
  { code: "ACC", city: "Accra", airport: "Kotoka Int'l" },
  { code: "JNB", city: "Johannesburg", airport: "O.R. Tambo Int'l" },
  { code: "DXB", city: "Dubai", airport: "Dubai Int'l" },
  { code: "LHR", city: "London", airport: "Heathrow" },
];

interface BookingWidgetProps {
  variant?: "hero" | "standalone";
}

export const BookingWidget = ({ variant = "hero" }: BookingWidgetProps) => {
  const router = useRouter();
  const [tripType, setTripType] = useState("round-trip");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [cabinClass, setCabinClass] = useState("economy");

  const handleSearch = () => {
    router.push("/book");
  };

  const swapLocations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        "booking-widget",
        variant === "hero" && "max-w-5xl mx-auto"
      )}
    >
      {/* Trip Type Tabs */}
      <Tabs value={tripType} onValueChange={setTripType} className="mb-6">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="round-trip" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Round Trip
          </TabsTrigger>
          <TabsTrigger value="one-way" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            One Way
          </TabsTrigger>
          <TabsTrigger value="multi-city" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Multi-City
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
        {/* From */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-foreground mb-2">
            From
          </label>
          <div className="relative">
            <HugeiconsIcon
              icon={AirplaneTakeOff01Icon}
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10"
            />
            <Select value={from} onValueChange={setFrom}>
              <SelectTrigger className="pl-10 h-12 bg-card">
                <SelectValue placeholder="Select departure" />
              </SelectTrigger>
              <SelectContent className="bg-card border border-border z-50">
                {airports.map((airport) => (
                  <SelectItem key={airport.code} value={airport.code}>
                    <span className="font-medium">{airport.city}</span>
                    <span className="text-muted-foreground ml-2">
                      ({airport.code})
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="hidden lg:flex lg:col-span-1 justify-center pb-1">
          <button
            onClick={swapLocations}
            className="w-10 h-10 rounded-full border-2 border-border bg-card hover:bg-muted flex items-center justify-center transition-colors"
            aria-label="Swap locations"
          >
            <HugeiconsIcon icon={RepeatIcon} size={18} className="text-primary" />
          </button>
        </div>

        {/* To */}
        <div className="lg:col-span-3">
          <label className="block text-sm font-medium text-foreground mb-2">
            To
          </label>
          <div className="relative">
            <HugeiconsIcon
              icon={AirplaneLanding01Icon}
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10"
            />
            <Select value={to} onValueChange={setTo}>
              <SelectTrigger className="pl-10 h-12 bg-card">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent className="bg-card border border-border z-50">
                {airports.map((airport) => (
                  <SelectItem key={airport.code} value={airport.code}>
                    <span className="font-medium">{airport.city}</span>
                    <span className="text-muted-foreground ml-2">
                      ({airport.code})
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Depart Date */}
        <div className="md:col-span-1 lg:col-span-2">
          <label className="block text-sm font-medium text-foreground mb-2">
            Depart
          </label>
          <div className="relative">
            <HugeiconsIcon
              icon={Calendar03Icon}
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-10"
            />
            <input
              type="date"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
              className="input-airline w-full h-12 pl-10 pr-3 bg-card text-foreground"
              min={new Date().toISOString().split("T")[0]}
              style={{ WebkitAppearance: 'none' }}
            />
          </div>
        </div>

        {/* Return Date */}
        {tripType === "round-trip" && (
          <div className="md:col-span-1 lg:col-span-2">
            <label className="block text-sm font-medium text-foreground mb-2">
              Return
            </label>
            <div className="relative">
              <HugeiconsIcon
                icon={Calendar03Icon}
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-10"
              />
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="input-airline w-full h-12 pl-10 pr-3 bg-card text-foreground"
                min={departDate || new Date().toISOString().split("T")[0]}
                style={{ WebkitAppearance: 'none' }}
              />
            </div>
          </div>
        )}

        {/* Passengers & Class Row (on smaller screen) or inline */}
        <div className={cn(
          tripType === "round-trip" 
            ? "md:col-span-2 lg:col-span-12 lg:mt-4" 
            : "md:col-span-1 lg:col-span-3"
        )}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Passengers
              </label>
              <div className="relative">
                <HugeiconsIcon
                  icon={UserMultiple02Icon}
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10"
                />
                <Select value={passengers} onValueChange={setPassengers}>
                  <SelectTrigger className="pl-10 h-12 bg-card">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border border-border z-50">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Passenger" : "Passengers"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Cabin Class
              </label>
              <Select value={cabinClass} onValueChange={setCabinClass}>
                <SelectTrigger className="h-12 bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border border-border z-50">
                  <SelectItem value="economy">Economy</SelectItem>
                  <SelectItem value="premium">Premium Economy</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex justify-center lg:justify-end">
        <Button
          onClick={handleSearch}
          size="lg"
          className="btn-hero w-full lg:w-auto min-w-[200px]"
        >
          Search Flights
          <HugeiconsIcon icon={ArrowRight01Icon} size={20} className="ml-2" />
        </Button>
      </div>
    </motion.div>
  );
};
