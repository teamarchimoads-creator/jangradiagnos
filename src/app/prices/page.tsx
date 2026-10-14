import React from "react";
import PricesClient from "./PricesClient";
import HealthPackagesSection from "@/components/HealthPackagesSection";
import { testPrices } from "@/data/tests";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Check Packages & Test Prices | Jangra Diagnostics Rohtak",
  description: "Max Care Health Check Packages (1-5), Full-Body Health Plus with 100% cashback, weekend offers, and transparent prices for all blood, urine, pathology and radiology investigations in Rohtak.",
};

export default function PricesPage() {
  return (
    <div className="bg-[#FBFDFF] min-h-screen pb-16 sm:pb-24">
      {/* Light Editorial Page Header */}
      <div className="bg-[#F5F9FD] border-b border-sky-100/80 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center justify-center gap-2">
            <span>MAX LAB PARTNER</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>HEALTH PACKAGES</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Health Packages &amp; </span>
            <span className="text-[#1D64D8]">Investigations</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-3xl mx-auto leading-relaxed mt-3">
            Explore Max Care Health Check Packages with Free SMART Reports by MAX Hospitals, exclusive family 1+1 offers, and complete directory of laboratory &amp; imaging investigations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-16">
        {/* Max Care Packages & Pamphlet Details Section */}
        <HealthPackagesSection />

        {/* Individual Investigation Directory */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1D64D8] mb-1">
              Complete Test Directory
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1938]">
              A–Z Individual Test &amp; Investigation Directory
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Search by test name to enquire and book appointments for routine, specialized, or advanced clinical investigations.
            </p>
          </div>

          <div className="bg-white rounded-[24px] sm:rounded-[28px] shadow-[0_4px_20px_rgba(10,25,56,0.04)] overflow-hidden border border-slate-100">
            <PricesClient testPrices={testPrices} />
          </div>

          <div className="text-center text-xs text-slate-400">
            <p>* For test availability, preparation instructions, or home sample collection, call <strong>7988241350</strong> or chat on WhatsApp.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

