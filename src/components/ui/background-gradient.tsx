import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  as: Component = "div",
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
}) => {
  return (
    <Component
      className={cn(
        "relative w-full bg-slate-950 p-[1px] rounded-lg overflow-hidden",
        containerClassName
      )}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-redcop-primary to-redcop-secondary animate-gradient"
        style={{
          transform: "translate3d(0, 0, 0)",
        }}
      />
      <div
        className={cn(
          "relative flex items-center justify-center px-8 py-4 bg-black backdrop-blur-xl rounded-lg",
          className
        )}
      >
        {children}
      </div>
    </Component>
  );
};