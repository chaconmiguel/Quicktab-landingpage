import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

const Circle = forwardRef<HTMLDivElement, {
  className?: string;
  children?: React.ReactNode;
  id: string;
}>(({
  className,
  children,
  id,
  ...props
}, ref) => {
  return <div id={id} ref={ref} className={cn("z-10 flex size-16 items-center justify-center rounded-full border-2 border-border", className)} {...props}>
      {children}
    </div>;
});
Circle.displayName = "Circle";

const Emoji = ({ symbol, label }: { symbol: string; label: string }) => (
  <span role="img" aria-label={label} className="text-3xl">
    {symbol}
  </span>
);

interface FloatingEmojiProps {
  symbol: string;
  delay: number;
  fromPos: { x: number; y: number };
  toPos: { x: number; y: number };
  isReverse?: boolean;
}

const FloatingEmoji = ({ symbol, delay, fromPos, toPos, isReverse = false }: FloatingEmojiProps) => {
  const xPath = isReverse ? [toPos.x, fromPos.x] : [fromPos.x, toPos.x];
  const yOffset = 20;
  const midX = (fromPos.x + toPos.x) / 2;
  const midY = Math.min(fromPos.y, toPos.y) - yOffset;

  return (
    <motion.div
      className="absolute z-20"
      style={{
        left: fromPos.x,
        top: fromPos.y,
      }}
      animate={{
        x: [0, (toPos.x - fromPos.x) / 2, toPos.x - fromPos.x],
        y: [0, midY - fromPos.y, toPos.y - fromPos.y],
        opacity: [0, 1, 0],
        scale: [0.9, 1, 0.9],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        repeatDelay: 6,
        ease: "linear",
      }}
    >
      <span className="text-2xl filter drop-shadow-lg">{symbol}</span>
    </motion.div>
  );
};

export function AnimatedBeamIntegration({
  className
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef<HTMLDivElement>(null);
  const quickTabRef = useRef<HTMLDivElement>(null);
  const customerRef = useRef<HTMLDivElement>(null);

  // Calculate positions for the emojis relative to container width
  const posPosition = { x: 80, y: 200 };
  const quickTabPosition = { x: 380, y: 200 };
  const customerPosition = { x: 680, y: 200 };

  const START_DELAY = 0;

  return (
    <div ref={containerRef} className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
      <div className="flex max-w-lg flex-row items-stretch justify-between w-full mx-auto px-10">
        <div className="flex flex-col items-center gap-2">
          <Circle ref={posRef} id="pos" className="border-quicktab-blue/20">
            <Emoji symbol="🏪" label="pos" />
          </Circle>
          <span className="text-sm text-quicktab-gray font-medium">Tu POS</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 bg-quicktab-blue rounded-full blur-xl animate-[glow_2s_ease-in-out_infinite]" />
            <Circle 
              ref={quickTabRef} 
              id="quicktab" 
              className="size-20 bg-quicktab-blue relative"
            >
              <Zap className="text-white h-10 w-10" />
            </Circle>
          </div>
          <span className="text-sm text-quicktab-gray font-medium">QuickTab</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Circle ref={customerRef} id="customer" className="border-quicktab-blue/20">
            <Emoji symbol="👤" label="customer" />
          </Circle>
          <span className="text-sm text-quicktab-gray font-medium">Tu Cliente</span>
        </div>
      </div>

      {/* Bidirectional beams */}
      {/* First sequence: Restaurant → QuickTab → Customer */}
      <AnimatedBeam 
        containerRef={containerRef} 
        fromRef={posRef} 
        toRef={quickTabRef} 
        delay={0} 
        curvature={20}
        gradientStartColor="#0055ff" 
        gradientStopColor="#0055ff80"
        duration={2}
      />
      <AnimatedBeam 
        containerRef={containerRef} 
        fromRef={quickTabRef} 
        toRef={customerRef} 
        delay={0.5} 
        curvature={20}
        gradientStartColor="#0055ff" 
        gradientStopColor="#0055ff80"
        duration={2}
      />

      {/* Parallel return beams with opposite curve */}
      <AnimatedBeam 
        containerRef={containerRef} 
        fromRef={customerRef} 
        toRef={quickTabRef} 
        delay={0} 
        curvature={-20}
        gradientStartColor="#0055ff" 
        gradientStopColor="#0055ff80"
        duration={2}
      />
      <AnimatedBeam 
        containerRef={containerRef} 
        fromRef={quickTabRef} 
        toRef={posRef} 
        delay={0.5} 
        curvature={-20}
        gradientStartColor="#0055ff" 
        gradientStopColor="#0055ff80"
        duration={2}
      />

      {/* Floating emojis with sequential timing */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Food order flow */}
        <FloatingEmoji 
          symbol="🍽️" 
          delay={START_DELAY} 
          fromPos={posPosition} 
          toPos={quickTabPosition} 
        />
        <FloatingEmoji 
          symbol="🍽️" 
          delay={START_DELAY + 1.5} 
          fromPos={quickTabPosition} 
          toPos={customerPosition} 
        />

        {/* Drinks flow */}
        <FloatingEmoji 
          symbol="🥤" 
          delay={START_DELAY + 3} 
          fromPos={posPosition} 
          toPos={quickTabPosition} 
        />
        <FloatingEmoji 
          symbol="🥤" 
          delay={START_DELAY + 4.5} 
          fromPos={quickTabPosition} 
          toPos={customerPosition} 
        />

        {/* Receipt and payment cycle */}
        <FloatingEmoji 
          symbol="🧾" 
          delay={START_DELAY + 6} 
          fromPos={posPosition} 
          toPos={quickTabPosition} 
        />
        <FloatingEmoji 
          symbol="💵" 
          delay={START_DELAY + 7.5} 
          fromPos={customerPosition} 
          toPos={quickTabPosition} 
        />
      </div>
    </div>
  );
}

