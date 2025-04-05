"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";

const products = [
  {
    title: "LED Smart Jacket",
    description: "Customizable LED patterns that respond to music and movement. Perfect for concerts and nightlife.",
    link: "#",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Thermal Adaptive Hoodie",
    description: "Smart hoodie that regulates temperature based on your body heat and environmental conditions.",
    link: "#",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80"
  },
  {
    title: "Fitness Tracking Tee",
    description: "Moisture-wicking t-shirt with integrated sensors to track your workout data in real-time.",
    link: "#",
    image: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
  },
  {
    title: "Solar-Powered Cap",
    description: "Stylish cap with built-in solar panels that charge your devices on the go.",
    link: "#",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  },
  {
    title: "Audio Beanie",
    description: "Warm beanie with integrated high-quality speakers for an immersive audio experience.",
    link: "#",
    image: "https://images.unsplash.com/photo-1609803384069-19f3e5a70e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    title: "Smart Watch Gloves",
    description: "Touch-screen compatible gloves with built-in display for notifications and fitness tracking.",
    link: "#",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  }
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our collection of innovative electronic apparel that seamlessly blends technology with fashion.
          </p>
        </motion.div>

        <HoverEffect items={products} />
      </div>
    </section>
  );
}