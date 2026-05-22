"use client";

import Link from "next/link";
import { AlertTriangle, Plane } from "lucide-react";

const ErrorPage = ({ error, reset }) => {
  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-red-50 relative flex items-center justify-center px-5">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-300/20 blur-[140px] rounded-full" />

      {/* Floating Plane */}
      <div className="absolute top-24 right-20 hidden lg:block animate-out">
        <Plane
          size={80}
          className="text-cyan-400 rotate-12 opacity-70"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl">
        
        {/* Icon */}
        <div className="w-28 h-28 mx-auto rounded-full bg-red-100 flex items-center justify-center shadow-xl border border-red-200">
          <AlertTriangle
            size={56}
            className="text-red-500"
          />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mt-10 leading-tight">
          Journey Lost
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mt-6 leading-relaxed max-w-2xl mx-auto">
          The destination you’re trying to explore doesn’t exist, may have been removed,
          or the route is invalid.
        </p>

       

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
          
          <button
            onClick={() => reset()}
            className="bg-cyan-500 hover:bg-cyan-400 transition text-white px-8 py-4 rounded-2xl font-semibold shadow-lg cursor-pointer"
          >
            Try Again
          </button>

          <Link
            href="/destinations"
            className="border border-gray-300 hover:bg-white transition px-8 py-4 rounded-2xl font-semibold text-gray-700 backdrop-blur-md"
          >
            Explore Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;