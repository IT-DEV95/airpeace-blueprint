import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Layout } from "@/components/layout/Layout";
import { QueryProvider } from "@/components/providers/QueryProvider";
import "@/index.css";

export const metadata: Metadata = {
  title: {
    default: "Air Peace - Nigeria's Largest Airline",
    template: "%s | Air Peace",
  },
  description:
    "Air Peace – Nigeria's largest airline. Book flights, manage bookings, check flight status, and explore destinations across Nigeria, Africa, and beyond.",
  keywords: [
    "Air Peace",
    "Nigeria airline",
    "flight booking",
    "domestic flights",
    "international flights",
    "Lagos",
    "Abuja",
    "flight tickets",
  ],
  authors: [{ name: "Air Peace" }],
  creator: "Air Peace",
  publisher: "Air Peace",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://flyairpeace.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://flyairpeace.com",
    siteName: "Air Peace",
    title: "Air Peace - Nigeria's Largest Airline",
    description:
      "Book flights, manage bookings, and explore destinations across Nigeria, Africa, and beyond.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Air Peace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Peace - Nigeria's Largest Airline",
    description:
      "Book flights, manage bookings, and explore destinations across Nigeria, Africa, and beyond.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <QueryProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Layout>{children}</Layout>
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
