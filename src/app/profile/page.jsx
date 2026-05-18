"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxSection() {
  const { scrollY } = useScroll();

  // background moves slower
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);

  // text moves faster
  const textY = useTransform(scrollY, [0, 1000], [0, -200]);

  // image rotates slightly
  const rotate = useTransform(scrollY, [0, 1000], [0, 10]);

  return (
    <section className="relative h-[200vh] bg-black overflow-hidden">
      
      {/* Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          className="w-full h-[120vh] object-cover opacity-40"
        />
      </motion.div>

      {/* Floating Image */}
      <motion.img
        style={{ y: textY, rotate }}
        src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
        className="absolute top-40 right-20 w-80 rounded-3xl shadow-2xl"
      />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-7xl font-bold text-white">
          Explore The World
        </h1>

        <p className="text-gray-300 text-xl mt-6 max-w-2xl">
          Scroll down and watch the cinematic parallax animation
          bring your landing page to life.
        </p>
      </motion.div>
    </section>
  );
}