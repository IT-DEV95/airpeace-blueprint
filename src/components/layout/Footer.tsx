import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook02Icon,
  InstagramIcon,
  NewTwitterIcon,
  Linkedin02Icon,
  YoutubeIcon,
  Location01Icon,
  Call02Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";

import logo from "@/assets/logo.png";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Fleet", href: "/about/fleet" },
    { label: "Safety", href: "/about/safety" },
    { label: "Sustainability", href: "/about/sustainability" },
    { label: "Careers", href: "/careers" },
  ],
  travel: [
    { label: "Destinations", href: "/destinations" },
    { label: "Baggage Allowance", href: "/travel-info/baggage" },
    { label: "Check-in Information", href: "/travel-info/check-in" },
    { label: "Travel Requirements", href: "/travel-info/requirements" },
    { label: "Special Assistance", href: "/travel-info/special-assistance" },
  ],
  services: [
    { label: "In-flight Services", href: "/services/in-flight" },
    { label: "Airport Services", href: "/services/airport" },
    { label: "Charter Services", href: "/services/charter" },
    { label: "Cargo Services", href: "/services/cargo" },
  ],
  support: [
    { label: "Help Centre", href: "/support" },
    { label: "FAQs", href: "/support/faqs" },
    { label: "Contact Us", href: "/contact" },
    { label: "Feedback", href: "/support/feedback" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
    { label: "Refund Policy", href: "/legal/refund" },
    { label: "Conditions of Carriage", href: "/legal/carriage" },
    { label: "Accessibility", href: "/legal/accessibility" },
  ],
};

const socialLinks = [
  { icon: Facebook02Icon, href: "https://facebook.com", label: "Facebook" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: NewTwitterIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin02Icon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src={logo}
                alt="Air Peace"
                height={40}
                width={120}
                className="h-10 w-auto object-contain bg-white rounded-md px-2 py-1"
              />
              <div>
                <span className="text-2xl font-display font-bold">Air Peace</span>
                <span className="block text-sm opacity-80">
                  Nigeria's Largest Airline
                </span>
              </div>
            </Link>
            <p className="text-sm opacity-80 mb-6 max-w-sm">
              Connecting Nigeria to the world with safe, comfortable, and reliable
              air travel. Your journey, our priority.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+2348000247322"
                className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
              >
                <HugeiconsIcon icon={Call02Icon} size={18} />
                +234 800 0247 322
              </a>
              <a
                href="mailto:info@flyairpeace.com"
                className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
              >
                <HugeiconsIcon icon={Mail01Icon} size={18} />
                info@flyairpeace.com
              </a>
              <div className="flex items-start gap-3 text-sm opacity-80">
                <HugeiconsIcon icon={Location01Icon} size={18} className="mt-0.5" />
                <span>
                  Murtala Muhammed Airport, Lagos,
                  <br />
                  Nigeria
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <HugeiconsIcon icon={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Travel Info</h4>
            <ul className="space-y-2">
              {footerLinks.travel.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold mb-4 mt-6">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Air Peace Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/travel-info"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Sitemap
            </Link>
            <Link
              href="/travel-info"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Privacy
            </Link>
            <Link
              href="/travel-info"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
