"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Products",
    link: "#products",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={cn(
          "px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300 w-full",
          isScrolled
            ? "bg-redcop-dark/80 backdrop-blur-lg border-b border-white/10 shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center z-50"
          >
            <div className="font-bold text-xl md:text-2xl text-white">
              <span className="text-redcop-primary">Red</span>Cop
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-white hover:text-redcop-primary transition-colors font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
              className="bg-redcop-primary text-white px-4 py-2 rounded-full hover:bg-redcop-primary/90 transition-colors font-medium"
            >
              Shop Now
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span 
                  className={cn(
                    "absolute left-0 top-0 h-0.5 w-6 bg-white transition-transform duration-300",
                    isMobileMenuOpen && "rotate-45 translate-y-2"
                  )}
                />
                <span 
                  className={cn(
                    "absolute left-0 top-2 h-0.5 w-6 bg-white transition-opacity duration-300",
                    isMobileMenuOpen && "opacity-0"
                  )}
                />
                <span 
                  className={cn(
                    "absolute left-0 top-4 h-0.5 w-6 bg-white transition-transform duration-300",
                    isMobileMenuOpen && "-rotate-45 -translate-y-2"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-redcop-dark z-40 pt-20"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.link}
                    onClick={handleNavLinkClick}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-2xl text-white hover:text-redcop-primary transition-colors font-medium"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  className="bg-redcop-primary text-white px-6 py-3 rounded-full hover:bg-redcop-primary/90 transition-colors font-medium w-full mt-4"
                >
                  Shop Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}