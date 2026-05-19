"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Plane, BadgeDollarSign, Headphones } from "lucide-react";

const iconMap = {
  shield: ShieldCheck,
  plane: Plane,
  money: BadgeDollarSign,
  support: Headphones,
};

export default function SwipeCards({ features }) {
  const [cards, setCards] = useState(features);
  const [draggingId, setDraggingId] = useState(null);
  const [exitX, setExitX] = useState(0);

  const handleSwipe = (direction) => {
    setExitX(direction > 0 ? 300 : -300);
    setTimeout(() => {
      setCards((prev) => {
        const updated = [...prev];
        const first = updated.shift();
        updated.push(first);
        return updated;
      });
      setExitX(0);
    }, 200);
  };

  return (
    <div className="relative h-[420px] flex items-center justify-center">
      {[...cards].reverse().map((card, reversedIndex) => {
        const index = cards.length - 1 - reversedIndex;
        const Icon = iconMap[card.icon];
        const isTop = index === 0;

        return (
          <motion.div
            key={card.title}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragStart={() => setDraggingId(card.title)}
            onDragEnd={(e, info) => {
              setDraggingId(null);
              if (Math.abs(info.offset.x) > 80) {
                handleSwipe(info.offset.x);
              }
            }}
            animate={{
              y: index * 16,
              scale: 1 - index * 0.05,
              rotate: draggingId === card.title ? 0 : 0,
            }}
            whileDrag={{
              rotate: 6,
              scale: 1.04,
              cursor: "grabbing",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 28,
            }}
            className="absolute w-full max-w-md"
            style={{
              zIndex: cards.length - index,
              opacity: 1 - index * 0.12,
              cursor: isTop ? "grab" : "default",
            }}
          >
            <div className="bg-white border border-gray-200 shadow-2xl rounded-[32px] p-8 select-none w-3xl">
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center">
                <Icon className="text-cyan-600" size={30} />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-6">
                {card.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {card.description}
              </p>

              <div className="mt-8 text-cyan-600 font-medium flex items-center gap-2">
                <span>Swipe</span>
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}