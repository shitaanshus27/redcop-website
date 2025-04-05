"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AppleCard3DProps {
  children?: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  onClick?: () => void;
}

export const AppleCard3D = ({
  children,
  className,
  backgroundImage,
  title,
  subtitle,
  buttonLabel = "Learn More",
  onClick,
}: AppleCard3DProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for smooth animation
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const transformX = useSpring(0, springConfig);
  const transformY = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  // Map mouse position to rotation and transform
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    
    const percentX = (clientX - left) / width;
    const percentY = (clientY - top) / height;
    
    // Calculate rotation (invert for natural feel)
    const rotX = -10 + percentY * 20; // Range: -10 to 10 degrees
    const rotY = 10 - percentX * 20; // Range: 10 to -10 degrees
    
    // Update spring motion values
    rotateX.set(rotX);
    rotateY.set(rotY);
    
    // Subtle movement effect
    const moveX = (percentX - 0.5) * 10;
    const moveY = (percentY - 0.5) * 10;
    
    transformX.set(moveX);
    transformY.set(moveY);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    scale.set(1.05);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    transformX.set(0);
    transformY.set(0);
    scale.set(1);
  };

  // Gradient style for background
  const gradientOverlay = {
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
    position: "absolute",
    inset: 0,
    zIndex: 1,
    borderRadius: "inherit",
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-2xl cursor-pointer perspective-1000",
        className
      )}
      style={{
        rotateX,
        rotateY,
        x: transformX,
        y: transformY,
        scale,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Background Image with gradient overlay */}
      {backgroundImage && (
        <>
          <div style={gradientOverlay} />
          <Image
            src={backgroundImage}
            alt={title || "Card background"}
            fill
            className="object-cover transition-transform duration-300"
            style={{
              transform: hovered ? "scale(1.1)" : "scale(1)",
              zIndex: 0,
            }}
          />
        </>
      )}

      {/* Content Container */}
      <div className="relative z-10 flex flex-col p-6 h-full">
        {/* Content provided by children */}
        {children || (
          <div className="mt-auto">
            {title && (
              <motion.h3 
                className="text-2xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {title}
              </motion.h3>
            )}
            {subtitle && (
              <motion.p 
                className="text-white/80 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}
            <motion.button
              className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {buttonLabel}
            </motion.button>
          </div>
        )}
      </div>

      {/* Shine effect */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: hovered
            ? "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)"
            : "none",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
          "--mouse-x": `${mouseX.get()}px`,
          "--mouse-y": `${mouseY.get()}px`,
        } as React.CSSProperties}
      />
    </motion.div>
  );
};