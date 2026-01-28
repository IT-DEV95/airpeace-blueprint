import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Backpack03Icon,
  CheckmarkBadge01Icon,
  PassportIcon,
  WheelchairIcon,
  UserIcon,
  HeartCheckIcon,
  AlertDiamondIcon,
} from "@hugeicons/core-free-icons";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const travelInfoSections = [
  {
    id: "baggage",
    icon: Backpack03Icon,
    title: "Baggage Allowance",
    description: "Learn about carry-on and checked baggage limits",
    content: `
      <h3>Carry-on Baggage</h3>
      <p>Each passenger is allowed one piece of carry-on baggage weighing up to 7kg. Maximum dimensions: 55cm x 40cm x 20cm.</p>
      
      <h3>Checked Baggage</h3>
      <ul>
        <li><strong>Economy Class:</strong> 1 bag up to 23kg</li>
        <li><strong>Business Class:</strong> 2 bags up to 32kg each</li>
      </ul>
      
      <h3>Excess Baggage</h3>
      <p>Additional baggage can be purchased online during booking or at the airport. Rates vary by route.</p>
    `,
  },
  {
    id: "check-in",
    icon: CheckmarkBadge01Icon,
    title: "Check-in Information",
    description: "Everything you need to know about checking in",
    content: `
      <h3>Online Check-in</h3>
      <p>Online check-in opens 24 hours before departure and closes 2 hours before for domestic flights.</p>
      
      <h3>Airport Check-in</h3>
      <p>Counter check-in opens 3 hours before departure and closes 45 minutes before for domestic flights.</p>
      
      <h3>Required Documents</h3>
      <ul>
        <li>Valid government-issued ID (domestic)</li>
        <li>Valid passport (international)</li>
        <li>Visa (if required)</li>
      </ul>
    `,
  },
  {
    id: "requirements",
    icon: PassportIcon,
    title: "Travel Requirements",
    description: "Visa, health, and entry requirements",
    content: `
      <h3>Documentation</h3>
      <p>Ensure your travel documents are valid for at least 6 months beyond your travel date.</p>
      
      <h3>Health Requirements</h3>
      <p>Some destinations may require proof of vaccination or health certificates. Check with your destination's requirements.</p>
      
      <h3>Visa Information</h3>
      <p>Visa requirements vary by destination and nationality. We recommend checking with the relevant embassy well in advance.</p>
    `,
  },
  {
    id: "special-assistance",
    icon: WheelchairIcon,
    title: "Special Assistance",
    description: "Support for passengers with special needs",
    content: `
      <h3>Wheelchair Assistance</h3>
      <p>Free wheelchair assistance is available at all airports. Please request at least 48 hours before departure.</p>
      
      <h3>Medical Equipment</h3>
      <p>Passengers traveling with medical equipment should notify us in advance to ensure proper arrangements.</p>
      
      <h3>Seating Arrangements</h3>
      <p>Special seating can be arranged for passengers with mobility issues or other requirements.</p>
    `,
  },
  {
    id: "minors",
    icon: UserIcon,
    title: "Unaccompanied Minors",
    description: "Travel services for children flying alone",
    content: `
      <h3>Age Requirements</h3>
      <p>Unaccompanied minor service is available for children aged 5-14 years traveling alone.</p>
      
      <h3>Service Fee</h3>
      <p>A service fee applies per flight segment. Contact our reservations team for current rates.</p>
      
      <h3>Booking Requirements</h3>
      <p>Unaccompanied minor travel must be booked through our customer service center and cannot be booked online.</p>
    `,
  },
  {
    id: "pets",
    icon: HeartCheckIcon,
    title: "Pets & Animals",
    description: "Traveling with your furry friends",
    content: `
      <h3>Pet Travel Options</h3>
      <p>Small pets may travel in the cabin in an approved carrier. Larger animals must travel as cargo.</p>
      
      <h3>Requirements</h3>
      <ul>
        <li>Valid health certificate</li>
        <li>Up-to-date vaccinations</li>
        <li>Appropriate carrier/crate</li>
      </ul>
      
      <h3>Advance Notice</h3>
      <p>Pet travel must be booked at least 48 hours in advance.</p>
    `,
  },
  {
    id: "dangerous-goods",
    icon: AlertDiamondIcon,
    title: "Dangerous Goods",
    description: "Prohibited and restricted items",
    content: `
      <h3>Prohibited Items</h3>
      <ul>
        <li>Explosives and flammable materials</li>
        <li>Compressed gases</li>
        <li>Toxic substances</li>
        <li>Corrosive materials</li>
      </ul>
      
      <h3>Restricted Items</h3>
      <p>Certain items like lithium batteries and sharp objects have restrictions. Check our full list before packing.</p>
    `,
  },
];

const TravelInfo = () => {
  const { section } = useParams();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-hero">
        <div className="section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4"
          >
            Travel Information
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Everything you need for a smooth journey
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelInfoSections.map((info, index) => (
              <motion.div
                key={info.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/travel-info/${info.id}`}
                  className="group block p-6 bg-card rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                    <HugeiconsIcon
                      icon={info.icon}
                      size={28}
                      className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground">{info.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TravelInfo;
