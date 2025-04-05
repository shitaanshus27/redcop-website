"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundGradient } from "./ui/background-gradient";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 w-full h-full bg-black z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-redcop-primary/20 via-transparent to-redcop-secondary/20 z-0" />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <TextGenerateEffect
            words="Redefining Fashion with Technology"
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          />
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
            Experience the fusion of cutting-edge electronics and contemporary style with RedCop's innovative apparel collection.
          </p>
          
          <BackgroundGradient className="px-6 py-3 rounded-full">
            <button className="font-medium text-white">
              Explore Collection
            </button>
          </BackgroundGradient>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-1 relative w-full h-96 md:h-[500px] mt-10 lg:mt-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80"
            alt="RedCop Smart Apparel"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}