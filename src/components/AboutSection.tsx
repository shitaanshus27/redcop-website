"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 order-2 lg:order-1"
          >
            <h2 className="text-4xl font-bold mb-6">About RedCop</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Founded in 2022, RedCop is at the forefront of wearable technology and electronic fashion. We believe that the future of apparel lies at the intersection of innovative technology and contemporary design.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our team of engineers, designers, and fashion experts work together to create products that not only look good but serve a practical purpose in our increasingly connected world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-gray-100 dark:bg-slate-900 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-redcop-primary mb-2">25+</h3>
                <p className="text-gray-600 dark:text-gray-300">Products</p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-slate-900 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-redcop-primary mb-2">10k+</h3>
                <p className="text-gray-600 dark:text-gray-300">Happy Customers</p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-slate-900 rounded-lg text-center">
                <h3 className="text-2xl font-bold text-redcop-primary mb-2">15+</h3>
                <p className="text-gray-600 dark:text-gray-300">Countries</p>
              </div>
            </div>

            <button className="bg-redcop-primary text-white px-6 py-3 rounded-full hover:bg-redcop-primary/90 transition-colors">
              Learn More About Us
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 order-1 lg:order-2 relative h-[400px] md:h-[500px] w-full"
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
      </div>
    </section>
  );
}