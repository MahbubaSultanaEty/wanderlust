import Link from "next/link";
import { Compass, Plane } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-100 relative flex items-center justify-center px-5">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/20 blur-[140px] rounded-full" />

      {/* Floating Plane */}
      <div className="absolute top-24 right-20 hidden lg:block animate-caret-blink">
        <Plane
          size={80}
          className="text-cyan-400 rotate-12 opacity-70"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl">
        
        {/* Icon */}
        <div className="w-28 h-28 mx-auto rounded-full bg-cyan-100 flex items-center justify-center shadow-xl border border-cyan-200">
          <Compass
            size={58}
            className="text-cyan-500"
          />
        </div>

        {/* 404 */}
        <h1 className="text-[110px] md:text-[180px] font-black text-gray-900 leading-none mt-8 tracking-tight">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Destination Not Found
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mt-6 leading-relaxed max-w-2xl mx-auto">
          Looks like this journey doesn’t exist anymore or the route got lost somewhere in the clouds.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
          
          <Link
            href="/"
            className="bg-cyan-500 hover:bg-cyan-400 transition text-white px-8 py-4 rounded-2xl font-semibold shadow-lg"
          >
            Back To Home
          </Link>

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

export default NotFound;