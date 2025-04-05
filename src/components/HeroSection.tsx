"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundGradient } from "./ui/background-gradient";
import { Spotlight } from "./ui/spotlight";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const { scrollY } = useScroll();
  
  // Parallax effect for scrolling
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Initialize animations
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-redcop-dark to-black"
    >
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-redcop-dark opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-radial from-redcop-primary/10 via-transparent to-transparent"></div>
        
        {/* Animated gradient circles */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-redcop-primary/10 blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-redcop-accent/10 blur-[120px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Grid pattern overlay for texture */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>

      {/* Spotlight effect */}
      <Spotlight
        className="hidden md:block absolute inset-0"
        color="from-redcop-primary/30 via-redcop-accent/20 to-redcop-secondary/30"
      />

      {/* Content container with improved spacing */}
      <motion.div 
        style={{ opacity, y }}
        className="container mx-auto px-4 md:px-6 lg:px-8 z-10 py-16 md:py-0"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className="flex-1 max-w-2xl"
          >
            <div className="space-y-2 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-redcop-primary"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-redcop-primary"></span>
                </span>
                <span className="text-sm font-medium text-white tracking-wider">Revolutionary Tech Apparel</span>
              </motion.div>
              
              <TextGenerateEffect
                words="Experience Fashion Powered by Technology"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-300 text-base md:text-lg mb-8 max-w-lg leading-relaxed"
            >
              RedCop merges cutting-edge electronics with contemporary design to create apparel that doesn't just look good – it enhances your life. Discover the future of fashion today.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <BackgroundGradient className="rounded-full">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="font-medium text-white px-6 py-3 rounded-full whitespace-nowrap"
                >
                  Explore Collection
                </motion.button>
              </BackgroundGradient>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-3 rounded-full border border-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-colors overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
                  </svg>
                  Watch Demo
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-redcop-primary/20 to-redcop-accent/20 transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-500"></span>
              </motion.button>
            </div>
            
            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap justify-start gap-8 mt-12"
            >
              {[
                { value: "25+", label: "Products" },
                { value: "10k+", label: "Happy Customers" },
                { value: "15+", label: "Countries" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-redcop-primary font-bold text-2xl">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Hero Image with 3D effect and floating animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="flex-1 relative w-full max-w-lg h-[350px] sm:h-[400px] md:h-[500px] select-none pointer-events-none"
          >
            {/* Decorative elements */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-redcop-primary to-redcop-accent rounded-2xl blur-sm opacity-70"></div>
            
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full h-full relative rounded-xl overflow-hidden"
            >
              {/* Product Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md rounded-lg px-3 py-2 text-xs text-white"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span>Smart Heat Control</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-md rounded-lg px-3 py-2 text-xs text-white"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span>Bluetooth 5.0 Integration</span>
                </div>
              </motion.div>
              
              {/* Main hero image */}
              <div className="relative h-full w-full">
                <Image
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80"
                  alt="RedCop Smart Apparel"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                  className="rounded-xl select-none"
                />
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-9 border-2 border-white/30 rounded-full flex justify-center p-1"
        >
          <motion.div className="w-1 h-1.5 bg-white rounded-full"></motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-black"
            opacity=".5" 
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            className="fill-black" 
          />
        </svg>
      </div>
    </section>
  );
}