import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export default function Logo({ className = "", variant = "dark", showTagline = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center group transition-transform ${className}`}>
      <img
        src="/gallery/logo.png"
        alt="Jangra Diagnostic Centre"
        className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105"
      />
    </Link>
  );
}
