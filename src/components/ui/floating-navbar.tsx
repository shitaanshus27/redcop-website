import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={cn(
          "flex fixed top-4 inset-x-0 mx-auto border border-transparent rounded-full p-2 z-50 w-fit",
          isScrolled
            ? "bg-black/50 border-white/[0.2] shadow-lg backdrop-blur-md"
            : "bg-transparent",
          className
        )}
      >
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {navItems.map((navItem, idx) => (
            <a
              key={`${navItem.name}-${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center gap-1 text-sm font-medium px-4 py-2 text-white hover:text-redcop-primary transition-colors duration-300",
                isScrolled ? "opacity-100" : "text-white hover:text-redcop-primary"
              )}
            >
              {navItem.icon && <span>{navItem.icon}</span>}
              <span>{navItem.name}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};