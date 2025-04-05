"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingDockProps {
  items: {
    name: string;
    icon: React.ReactNode;
    link: string;
  }[];
  className?: string;
}

export const FloatingDock = ({ items, className }: FloatingDockProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide/show dock based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
      
      // Show dock after scrolling a bit, hide when at the very top
      if (currentScrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ 
            opacity: 1, 
            y: scrollDir === "down" ? 100 : 0,
            transition: { 
              y: { duration: 0.2 },
              opacity: { duration: 0.3 } 
            }
          }}
          exit={{ opacity: 0, y: 100 }}
          className={cn(
            "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden",
            className
          )}
        >
          <div className="bg-black/70 backdrop-blur-lg border border-white/10 rounded-full p-1 shadow-lg">
            <div className="flex items-center justify-between">
              {items.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  className={cn(
                    "relative flex flex-col items-center justify-center w-16 py-1.5 px-2",
                    "text-white/70 hover:text-white transition-colors",
                    activeIndex === idx && "text-redcop-primary"
                  )}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveIndex(idx)}
                >
                  {activeIndex === idx && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="h-6 w-6 mb-1">{item.icon}</span>
                  <span className="text-[10px] font-medium">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};