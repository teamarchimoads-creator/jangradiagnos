"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // Start fade out transition after 2 seconds
    const timer1 = setTimeout(() => {
      setAnimateOut(true);
      document.body.style.overflow = "";
    }, 2000);

    // Completely remove from DOM after the 700ms fade out transition
    const timer2 = setTimeout(() => {
      setShow(false);
    }, 2700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white/95 backdrop-blur-sm transition-opacity duration-700 ease-in-out ${
        animateOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Subtle medical-blue gradient backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#087EB5]/5 rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#00A6A6]/5 rounded-full"></div>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Minimal circular loading rings */}
        <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full border-[1.5px] border-[#063B73]/5 border-t-[#087EB5]/80 animate-[spin_3s_linear_infinite] shadow-[0_0_30px_rgba(8,126,181,0.05)]"></div>
        <div className="absolute w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] rounded-full border border-transparent border-b-[#00A6A6]/30 animate-[spin_4s_linear_infinite_reverse]"></div>

        {/* Pure Transparent Logo Emblem with 3D rotation and reveal */}
        <div className="relative animate-logo-reveal z-10 flex items-center justify-center p-3">
          <Image
            src="/logo.png"
            alt="Jangra Diagnostics Loading..."
            width={240}
            height={160}
            className="w-40 sm:w-52 h-auto object-contain drop-shadow-[0_10px_25px_rgba(29,100,216,0.25)]"
            priority
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes logo-reveal {
          0% {
            opacity: 0;
            transform: perspective(1200px) rotateY(-360deg) scale(0.85);
          }
          15% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: perspective(1200px) rotateY(0deg) scale(1);
          }
        }
        
        .animate-logo-reveal {
          animation: logo-reveal 1.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}
