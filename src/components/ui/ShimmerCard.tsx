import { cn } from "@/lib/utils";
import React from "react";

interface ShimmerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  shimmerColor?: string;
  background?: string;
}

export function ShimmerCard({
  children,
  shimmerColor = "rgba(255, 255, 255, 0.8)",
  background = "linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.94))",
  className,
  ...props
}: ShimmerCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl isolate",
        "shadow-[0_8px_24px_-12px_rgba(0,85,255,0.4),0_8px_30px_-16px_rgba(0,0,0,0.2)]",
        "border border-white/50",
        // Glossy overlay
        "before:absolute before:inset-0 before:z-[2]",
        "before:bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.4)_40%,rgba(255,255,255,0.1)_60%,rgba(255,255,255,0.4)_80%)]",
        // Additional shine effect
        "[&>*:before]:absolute [&>*:before]:inset-0 [&>*:before]:z-[1]",
        "[&>*:before]:bg-[linear-gradient(120deg,transparent_0%,transparent_40%,rgba(255,255,255,0.5)_50%,transparent_60%,transparent_100%)]",
        "backdrop-blur-[2px]",
        "bg-white/90",
        className
      )}
      style={{
        "--shimmer-color": shimmerColor,
        background,
        boxShadow: `
          0 -1px 2px -1px rgba(255,255,255,0.8),
          0 1px 2px -1px rgba(255,255,255,0.8),
          0 8px 24px -12px rgba(0,85,255,0.4),
          0 8px 30px -16px rgba(0,0,0,0.2),
          inset 0 0 8px 4px rgba(255,255,255,0.4)
        `
      } as React.CSSProperties}
      {...props}
    >
      <div className="relative z-[3] h-full backdrop-blur-[1px] rounded-xl">
        {children}
      </div>
    </div>
  );
} 