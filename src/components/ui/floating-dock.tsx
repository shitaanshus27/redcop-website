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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // Track touch position for lamp effect
  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        setMousePosition({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        });
      }
    };

    window.addEventListener("touchmove", handleTouchMove);
    return () => window.removeEventListener("touchmove", handleTouchMove);
  }, []);
  
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
          {/* Glow effect lamp */}
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div 
              className="absolute w-40 h-40 bg-redcop-primary/40 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                left: `${activeIndex !== null ? (activeIndex * 25) + 12.5 : 50}%`,
                top: '50%',
                opacity: 0.8,
                transition: 'left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            />
          </div>

          <div className="relative bg-black/50 backdrop-blur-lg border border-white/10 rounded-full p-1 shadow-lg overflow-hidden">
            {/* Background gradient lamp effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-redcop-primary/5 via-redcop-accent/5 to-redcop-primary/5 animate-shimmer"></div>
            
            <div className="flex items-center justify-between relative z-10">
              {items.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  className={cn(
                    "relative flex flex-col items-center justify-center w-16 py-1.5 px-2",
                    "text-white/70 hover:text-white transition-colors",
                    activeIndex === idx && "text-white"
                  )}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveIndex(idx)}
                >
                  {activeIndex === idx && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-gradient-to-b from-redcop-primary/50 to-redcop-primary/10 rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  
                  {/* Icon glow effect */}
                  <div className="relative">
                    {activeIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 bg-redcop-primary/30 rounded-full blur-md -z-10"
                      />
                    )}
                    <span className="h-6 w-6 mb-1 relative z-10">{item.icon}</span>
                  </div>
                  
                  <span className="text-[10px] font-medium">{item.name}</span>
                  
                  {/* Subtle indicator dot */}
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -bottom-0.5 w-1 h-1 bg-white rounded-full"
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Optional outside glow pulse */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-redcop-primary/10 to-redcop-accent/10 rounded-full blur-md -z-10"
            animate={{ 
              opacity: [0.5, 0.8, 0.5], 
              scale: [0.95, 1.02, 0.95] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};