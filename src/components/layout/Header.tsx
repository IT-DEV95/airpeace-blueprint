"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AirplaneTakeOff01Icon,
  Menu01Icon,
  Cancel01Icon,
  UserIcon,
  Search01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import Image from "next/image";

const navItems = [
  { label: "Book Flight", href: "/book" },
  { label: "Manage Booking", href: "/manage-booking" },
  { label: "Destinations", href: "/destinations" },
  { label: "Travel Info", href: "/travel-info" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

const utilityItems = [
  { label: "Check-in", href: "/check-in" },
  { label: "Flight Status", href: "/flight-status" },
  { label: "Support", href: "/support" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Utility Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="section-container flex items-center justify-between h-10 text-sm">
          <div className="hidden md:flex items-center gap-6">
            {utilityItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-accent transition-colors uppercase tracking-[0.18em] text-xs font-normal"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <Link
              href="/support"
              className="hover:text-accent transition-colors uppercase tracking-[0.18em] text-xs font-extralight"
            >
              Contact
            </Link>
            <Link
              href="/manage-booking"
              className="flex items-center gap-2 hover:text-accent transition-colors uppercase tracking-[0.18em] text-xs font-extralight"
            >
              <HugeiconsIcon icon={UserIcon} size={16} />
              <span>Login / My Trips</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Air Peace"
              height={100}
              width={200}
              className="h-[100px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link text-xs font-normal uppercase tracking-[0.2em]",
                  isActive(item.href) && "nav-link-active"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              size="sm"
              className="hidden sm:flex bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <Link href="/book">
                <HugeiconsIcon icon={Search01Icon} size={16} className="mr-2" />
                Book Now
              </Link>
            </Button>

            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <HugeiconsIcon
                icon={mobileMenuOpen ? Cancel01Icon : Menu01Icon}
                size={24}
                className="text-foreground"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="section-container py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                  "block py-3 px-4 rounded-lg text-foreground hover:bg-muted transition-colors uppercase tracking-[0.16em] text-xs font-normal",
                    isActive(item.href) && "bg-primary/10 text-primary"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                {utilityItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 px-4 text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground transition-colors font-normal"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Button
                className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                  Book a Flight
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
