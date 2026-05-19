
import {
  ShieldCheck,
  Plane,
  BadgeDollarSign,
  Headphones,
} from "lucide-react";
import SwipeCards from "../SwipeCards";

const features = [
  {
    title: "Safe & Trusted Trips",
    description: "Your comfort and safety always come first.",
    icon: "shield",
  },
  {
    title: "Exclusive Destinations",
    description: "Discover premium locations curated by experts.",
    icon: "plane",
  },
  {
    title: "Affordable Luxury",
    description: "Luxury experiences without overspending.",
    icon: "money",
  },
  {
    title: "24/7 Support",
    description: "We are always here for you.",
    icon: "support",
  },
];

export default function WhyChooseUs() {


  return (
    <section className="py-28 px-5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Content */}
        <div>
          <p className="uppercase tracking-[4px] text-cyan-500 text-sm mb-4">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold leading-tight text-gray-900">
            Travel Beyond <br />
            Expectations
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We create unforgettable travel experiences with carefully
            curated destinations, premium comfort, and personalized
            support for every traveler.
          </p>
        </div>

        {/* Stack Cards */}
        <div className="relative -left-62 h-102 flex items-center justify-center">
          <SwipeCards features={features}/>
        </div>
      </div>
    </section>
  );
}