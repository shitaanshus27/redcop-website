"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setComplete(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const renderWords = () => {
    return words.split(" ").map((word, idx) => {
      return (
        <motion.span
          key={`${word}-${idx}`}
          className="opacity-0 inline-block"
          initial={{ opacity: 0 }}
          animate={complete ? { opacity: 1 } : {}}
          transition={{
            duration: 0.4,
            ease: [0.2, 0.65, 0.3, 0.9],
            delay: idx * 0.1,
          }}
        >
          {word}{" "}
        </motion.span>
      );
    });
  };

  return (
    <h1 className={cn("text-center text-4xl font-bold", className)}>
      {renderWords()}
    </h1>
  );
};