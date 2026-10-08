import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export default function Logo({ className = "", variant = "dark", showTagline = false }: LogoProps) {
  const isLight = variant === "light";
  // Uses authentic high-resolution Jangra Diagnostic Centre logo
  const logoSrc = isLight ? "/logo-light.png" : "/logo.png";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 sm:gap-3 group transition-transform ${className}`}>
      <img
        src={logoSrc}
        alt="Jangra Diagnostic Centre"
        className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
      />
      <div className="flex flex-col justify-center">
        <span className={`font-extrabold text-lg sm:text-xl tracking-tight leading-tight ${isLight ? "text-white" : ""}`}>
          <span className={isLight ? "text-white" : "text-[#0A1938]"}>Jangra </span>
          <span className={isLight ? "text-sky-300" : "text-[#1D64D8]"}>Diagnostics</span>
        </span>
        <span className={`text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase ${isLight ? "text-slate-300" : "text-slate-500"}`}>
          {showTagline ? "Think of quality, Think of us." : "Diagnostic & Dental Care Centre"}
        </span>
      </div>
    </Link>
  );
}
