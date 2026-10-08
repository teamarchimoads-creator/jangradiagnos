"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({ value, text }: { value: number, text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [displayValue, setDisplayValue] = useState("0");
  const [isFinished, setIsFinished] = useState(false);
  
  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const duration = 2000; // 2 seconds
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // easeOutQuart for smooth deceleration
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentVal = Math.floor(easeProgress * value);
        
        setDisplayValue(new Intl.NumberFormat("en-US").format(currentVal));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setDisplayValue(new Intl.NumberFormat("en-US").format(value));
          setIsFinished(true);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <div className="pt-4 md:pt-0">
      <div className="text-4xl md:text-5xl font-bold mb-2">
        <span ref={ref}>{displayValue}</span>
        {isFinished || displayValue !== "0" ? "+" : ""}
      </div>
      <div className="text-blue-100 font-medium">{text}</div>
    </div>
  );
}
