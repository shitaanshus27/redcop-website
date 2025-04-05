"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundGradient } from "./ui/background-gradient";
import { Spotlight } from "./ui/spotlight";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden bg-redcop-dark">
      {/* Background with spotlight effect */}
      <Spotlight
        className="hidden md:block absolute inset-0"
        color="from-redcop-primary/30 via-redcop-accent/20 to-redcop-secondary/30"
      />

      {/* Mobile-optimized container with improved spacing */}
      <div className="container mx-auto px-4 md:px-6 z-10 py-12 md:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 max-w-2xl"
          >
            <div className="space-y-1 mb-6">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-block text-redcop-primary font-semibold tracking-wider uppercase text-sm md:text-base"
              >
                Next Generation Wearables
              </motion.span>
              
              <TextGenerateEffect
                words="Redefining Fashion with Technology"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 text-base md:text-lg mb-8 max-w-lg leading-relaxed"
            >
              Experience the fusion of cutting-edge electronics and contemporary style with RedCop's innovative apparel collection. Designed for the modern tech enthusiast.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <BackgroundGradient className="rounded-full">
                <button className="font-medium text-white px-6 py-3 rounded-full whitespace-nowrap">
                  Explore Collection
                </button>
              </BackgroundGradient>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-colors"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
          
          {/* Image with floating animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 relative w-full max-w-md h-[300px] sm:h-[400px] md:h-[500px] mt-10 lg:mt-0"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-redcop-primary to-redcop-accent rounded-2xl blur-sm opacity-70"></div>
              <Image
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80"
                alt="RedCop Smart Apparel"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-redcop-dark"
            opacity=".5" 
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            className="fill-redcop-dark" 
          />
        </svg>
      </div>
    </section>
  );
}