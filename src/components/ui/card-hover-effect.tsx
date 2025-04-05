import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image?: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, index) => (
        <div key={item.link} className="p-3 transition">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group overflow-hidden rounded-lg p-4 h-full border border-black/5 bg-gray-100 dark:bg-slate-950 dark:border-white/[0.2]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 scale-125 z-0 bg-gradient-to-br from-redcop-primary/20 via-transparent to-redcop-secondary/20 opacity-0 group-hover:opacity-100 transition duration-500"
            />
            {item.image && (
              <div className="flex justify-center mb-4">
                <div className="w-full h-60 relative rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </div>
              </div>
            )}
            <div className="flex flex-col justify-between h-full relative z-10">
              <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 tracking-tight mb-4">
                {item.description}
              </p>
              <a
                href={item.link}
                className="text-sm font-medium px-4 py-2 rounded-lg bg-redcop-primary text-white inline-block w-fit"
              >
                Shop Now →
              </a>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};