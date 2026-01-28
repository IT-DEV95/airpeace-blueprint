import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookFlight from "./pages/BookFlight";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Support from "./pages/Support";
import TravelInfo from "./pages/TravelInfo";
import ManageBooking from "./pages/ManageBooking";
import CheckIn from "./pages/CheckIn";
import FlightStatus from "./pages/FlightStatus";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book" element={<BookFlight />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:city" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:section" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/:section" element={<Support />} />
          <Route path="/travel-info" element={<TravelInfo />} />
          <Route path="/travel-info/:section" element={<TravelInfo />} />
          <Route path="/manage-booking" element={<ManageBooking />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/flight-status" element={<FlightStatus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:section" element={<Services />} />
          <Route path="/contact" element={<Support />} />
          <Route path="/careers" element={<About />} />
          <Route path="/legal/:section" element={<TravelInfo />} />
          <Route path="/login" element={<ManageBooking />} />
          <Route path="/deals" element={<Destinations />} />
          <Route path="/sitemap" element={<TravelInfo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
