import { MapPin, CalendarDays, Wallet, Users, Search } from "lucide-react";
import Link from "next/link";
import AutoCarousel from "./AutoCarousel";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">

      {/* Background — carousel fills this absolutely */}
      <div className="absolute inset-0 w-full h-full">
        <AutoCarousel />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-10 pb-6 min-h-screen flex flex-col justify-center">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="uppercase tracking-[5px] text-cyan-400 text-sm mb-5">
            Explore The World
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Discover Your <br />
            Next Adventure
          </h1>

          <p className="mt-6 text-base md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Explore breathtaking destinations, luxury stays, and unforgettable
            experiences crafted for every traveler around the globe.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="#topDestination">
              <button className="bg-cyan-500 hover:bg-cyan-300 transition px-8 py-4 rounded-full uppercase tracking-wide font-medium cursor-pointer">
                Explore Now
              </button>
            </a>

            <Link href="/destinations">
              <button className="border border-white/40 backdrop-blur-md hover:bg-white/10 transition px-8 py-4 rounded-full uppercase tracking-wide font-medium cursor-pointer">
                View Destinations
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;