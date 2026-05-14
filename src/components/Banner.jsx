import Image from "next/image";
import { MapPin, CalendarDays, Wallet, Users, Search } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/banner.jpeg"
          alt="Travel Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-28 pb-14 min-h-screen flex flex-col justify-center">
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
            <button className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-full uppercase tracking-wide font-medium cursor-pointer">
              Explore Now
            </button>

            <button className="border border-white/40 backdrop-blur-md hover:bg-white/10 transition px-8 py-4 rounded-full uppercase tracking-wide font-medium cursor-pointer">
              View Destinations
            </button>
          </div>
        </div>

        {/* Search Box */}
        <div className="mt-20">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-4 md:p-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-center">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="bg-cyan-500/20 p-3 rounded-2xl">
                  <MapPin size={22} className="text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    Location
                  </h3>

                  <p className="text-sm text-white/70">
                    Address, City or Zip
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-start gap-3">
                <div className="bg-cyan-500/20 p-3 rounded-2xl">
                  <CalendarDays
                    size={22}
                    className="text-cyan-400"
                  />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    Date / Duration
                  </h3>

                  <p className="text-sm text-white/70">
                    Anytime / 3 Days
                  </p>
                </div>
              </div>

              {/* Budget */}
              <div className="flex items-start gap-3">
                <div className="bg-cyan-500/20 p-3 rounded-2xl">
                  <Wallet size={22} className="text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    Budget
                  </h3>

                  <p className="text-sm text-white/70">
                    $0 - $3000
                  </p>
                </div>
              </div>

              {/* People */}
              <div className="flex items-start gap-3">
                <div className="bg-cyan-500/20 p-3 rounded-2xl">
                  <Users size={22} className="text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    People
                  </h3>

                  <p className="text-sm text-white/70">
                    5 - 10 Persons
                  </p>
                </div>
              </div>

              {/* Search Button */}
              <button className="h-full w-full bg-cyan-500 hover:bg-cyan-400 transition rounded-2xl flex items-center justify-center gap-2 text-white font-semibold py-4 cursor-pointer">
                <Search size={20} />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="mt-14 flex flex-wrap justify-center gap-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/10 px-8 py-5 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-white">
              120+
            </h2>

            <p className="text-white/70 text-sm mt-1">
              Destinations
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 px-8 py-5 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-white">
              15k+
            </h2>

            <p className="text-white/70 text-sm mt-1">
              Happy Travelers
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 px-8 py-5 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-white">
              4.9★
            </h2>

            <p className="text-white/70 text-sm mt-1">
              Average Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;