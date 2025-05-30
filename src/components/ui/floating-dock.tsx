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
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default to first item
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track scroll position for visual effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Add logo for the center of the dock
  const logo = (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <div className="bg-redcop-primary rounded-full p-1.5 shadow-lg shadow-redcop-primary/50">
        <motion.div 
          className="font-bold text-xl text-white w-12 h-12 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="relative">RC</span>
        </motion.div>
      </div>
    </div>
  );
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden",
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

      <div className="relative bg-black/60 backdrop-blur-lg border border-white/10 rounded-full p-1 shadow-lg overflow-hidden">
        {/* Background gradient lamp effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-redcop-primary/5 via-redcop-accent/5 to-redcop-primary/5 animate-shimmer"></div>
        
        {/* Add the logo in the center */}
        {logo}
        
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
  );
};