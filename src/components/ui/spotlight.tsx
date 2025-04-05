"use client";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SpotlightProps {
  children?: React.ReactNode;
  className?: string;
  color?: string;
}

export function Spotlight({
  children,
  className,
  color = "from-redcop-primary/20 via-redcop-accent/10 to-redcop-secondary/20",
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const updateMousePosition = (ev: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    mousePositionRef.current = { x, y };
  };

  const updatePosition = () => {
    setPosition(mousePositionRef.current);
  };

  useEffect(() => {
    const interval = setInterval(updatePosition, 100);
    
    if (containerRef.current) {
      window.addEventListener("mousemove", updateMousePosition);
      setOpacity(1);
    }
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={cn(
          "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300",
          "bg-gradient-to-r",
          color
        )}
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${color}, transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
}