"use client";
import React from "react";
import { motion } from "framer-motion";
import { AppleCard3D } from "./ui/3d-card";
import { Spotlight } from "./ui/spotlight";

const products = [
  {
    title: "LED Smart Jacket",
    description: "Customizable LED patterns that respond to music and movement. Perfect for concerts and nightlife.",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Thermal Adaptive Hoodie",
    description: "Smart hoodie that regulates temperature based on your body heat and environmental conditions.",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80"
  },
  {
    title: "Fitness Tracking Tee",
    description: "Moisture-wicking t-shirt with integrated sensors to track your workout data in real-time.",
    image: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
  },
  {
    title: "Solar-Powered Cap",
    description: "Stylish cap with built-in solar panels that charge your devices on the go.",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Audio Beanie",
    description: "Warm beanie with integrated high-quality speakers for an immersive audio experience.",
    image: "https://images.unsplash.com/photo-1609803384069-19f3e5a70e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    title: "Smart Watch Gloves",
    description: "Touch-screen compatible gloves with built-in display for notifications and fitness tracking.",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  }
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-20 bg-redcop-light dark:bg-redcop-dark relative overflow-hidden">
      <Spotlight
        className="hidden lg:block"
        color="from-redcop-primary/10 via-redcop-accent/5 to-transparent"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-2">
            <span className="bg-redcop-primary/10 text-redcop-primary px-4 py-2 rounded-full text-sm font-medium">
              Our Collection
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-redcop-secondary dark:text-white">
            Featured Products
          </h2>
          <p className="text-redcop-gray max-w-2xl mx-auto">
            Discover our collection of innovative electronic apparel that seamlessly blends technology with fashion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AppleCard3D
                backgroundImage={product.image}
                title={product.title}
                subtitle={product.description}
                className="w-full h-[300px] md:h-[350px]"
              />
            </motion.div>
          ))}
        </div>
        
        {/* View all button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button className="px-6 py-3 bg-redcop-primary text-white rounded-full font-medium hover:bg-redcop-primary/90 transition-colors shadow-lg">
            View All Products
          </button>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-redcop-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-redcop-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
}