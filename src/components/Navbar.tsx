"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { motion } from "framer-motion";

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
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center z-50"
      >
        <div className="font-bold text-xl text-white">
          <span className="text-redcop-primary">Red</span>Cop
        </div>
      </motion.div>

      <FloatingNav navItems={navItems} />
    </div>
  );
}