"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export default function TopDestinations({ destinations }) {

    
  const topDestinations = destinations.slice(0, 4);

  return (
    <section id="topDestination" className="relative py-28 px-4 md:px-10 overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 size-72 bg-cyan-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 size-72 bg-blue-200/40 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-cyan-600 text-sm font-semibold">
              Explore More
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-3 leading-tight">
              Top Destinations
            </h2>

            <p className="text-gray-500 max-w-2xl mt-5 text-lg leading-relaxed">
              Discover handpicked travel destinations with breathtaking views,
              luxurious stays, unforgettable adventures, and experiences that
              create memories for a lifetime.
            </p>
          </div>

          {/* Browse All Button */}
          <Link href="/destinations">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group bg-black text-white px-7 py-4 rounded-2xl flex items-center gap-3 shadow-2xl cursor-pointer"
            >
              Browse All

              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
              >
                <ArrowRight className="size-5" />
              </motion.div>
            </motion.button>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {topDestinations.map((destination, index) => (
            <motion.div
              key={destination._id}
              initial={{
                opacity: 0,
                y: 120,
                rotate: -8,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
              }}
              className="relative"
            >
              {/* Folded Stack Effect */}
              <div className="absolute inset-0 bg-cyan-100 rounded-[32px] rotate-6 scale-[0.96] -z-20" />

              <div className="absolute inset-0 bg-blue-100 rounded-[32px] -rotate-6 scale-[0.98] -z-10" />

              <Link href={`/destinations/${destination._id}`}>
                <motion.div
                  whileHover={{
                    y: -12,
                    rotate: 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={destination.imageUrl}
                      alt={destination.destinationName}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium">
                      {destination.category}
                    </div>

                    <div className="absolute bottom-5 left-5 text-white">
                      <h3 className="text-2xl font-bold leading-tight">
                        {destination.destinationName}
                      </h3>

                      <p className="text-sm text-gray-200 mt-1">
                        {destination.country}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <p>{destination.duration}</p>

                      <p className="text-cyan-600 font-semibold text-lg">
                        ${destination.price}
                      </p>
                    </div>

                    <motion.div
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-2 text-black font-semibold"
                    >
                      View Details

                      <ArrowRight className="size-4" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
