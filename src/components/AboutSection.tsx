"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-redcop-light dark:bg-redcop-dark relative overflow-hidden">
      <Spotlight
        className="hidden md:block"
        color="from-redcop-accent/20 via-transparent to-redcop-primary/20"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image with floating animation and gradient border */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:flex-1 w-full max-w-lg order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-redcop-primary to-redcop-accent rounded-2xl blur-sm opacity-70"></div>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative h-[350px] md:h-[450px] rounded-xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="RedCop Team"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:flex-1 order-1 lg:order-2"
          >
            <div className="inline-block mb-4">
              <span className="bg-redcop-primary/10 text-redcop-primary px-4 py-2 rounded-full text-sm font-medium">
                Our Story
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-redcop-secondary dark:text-white">
              Pioneering the Future of Wearable Technology
            </h2>
            <p className="text-redcop-gray dark:text-gray-300 mb-6">
              Founded in 2022, RedCop is at the forefront of wearable technology and electronic fashion. We believe that the future of apparel lies at the intersection of innovative technology and contemporary design.
            </p>
            <p className="text-redcop-gray dark:text-gray-300 mb-8">
              Our team of engineers, designers, and fashion experts work together to create products that not only look good but serve a practical purpose in our increasingly connected world.
            </p>

            {/* Stats with shimmer effect */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { value: "25+", label: "Products" },
                { value: "10k+", label: "Happy Customers" },
                { value: "15+", label: "Countries" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="relative overflow-hidden rounded-lg p-4 bg-white dark:bg-redcop-secondary/40 text-center shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-redcop-primary mb-1">{stat.value}</h3>
                  <p className="text-redcop-gray dark:text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-redcop-primary text-white rounded-full font-medium hover:bg-redcop-primary/90 transition-colors shadow-lg"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-redcop-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-redcop-primary/10 rounded-full blur-3xl"></div>
    </section>
  );
}