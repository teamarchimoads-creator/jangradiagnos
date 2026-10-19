import React from "react";
import { Metadata } from "next";
import GalleryClient from "./GalleryClient";
import { Sparkles, MapPin, Phone, ShieldCheck, HeartPulse } from "lucide-react";

export const metadata: Metadata = {
  title: "Photo Gallery & Facility Tour | Jangra Diagnostics Rohtak",
  description: "Take a visual tour of Jangra Diagnostic Centre & Dental Care in Rohtak. Explore real photos of our ultrasound suite, digital X-ray machine, dental operatory, comfortable patient waiting lounge, and medical team.",
};

export default function GalleryPage() {
  return (
    <div className="bg-[#FBFDFF] min-h-screen pb-16 sm:pb-24">
      {/* Light Editorial Page Header */}
      <div className="bg-[#F5F9FD] border-b border-sky-100/80 py-6 sm:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-1.5 flex items-center justify-center gap-2">
            <span>FACILITY TOUR</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>CLINICAL INFRASTRUCTURE</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Centre &amp; Clinical </span>
            <span className="text-[#1D64D8]">Photo Gallery</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed mt-2">
            Explore authentic, on-site photographs of our modern diagnostic suites, digital radiography, advanced dental operatory, comfortable patient waiting lounge, and dedicated medical leadership.
          </p>

          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2.5 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1D64D8]" /> 100% Real Facility Photos
            </span>
            <a 
              href="https://maps.app.goo.gl/qMRGY4v1UGqNN1ce8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs hover:text-[#1D64D8] hover:border-sky-300 transition-colors"
              title="Open clinic location on Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#1D64D8]" /> Sonipat Road, Near India&apos;s First Elevated Railway Track, Rohtak ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main Gallery Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6">
        <GalleryClient />
      </div>
    </div>
  );
}
