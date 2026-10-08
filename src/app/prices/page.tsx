import React from "react";
import PricesClient from "./PricesClient";
import { testPrices } from "@/data/tests";

export default function PricesPage() {
  return (
    <div className="bg-[#FBFDFF] min-h-screen pb-12 sm:pb-16">
      {/* Light Editorial Page Header */}
      <div className="bg-[#F5F9FD] border-b border-sky-100/80 py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center justify-center gap-2">
            <span>TRANSPARENT RATES</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>AFFORDABLE CARE</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Investigation &amp; </span>
            <span className="text-[#1D64D8]">Test Prices</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed mt-3">
            Transparent and affordable pricing for all your pathology, radiology, and dental investigations with uncompromised clinical quality.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="bg-white rounded-[24px] sm:rounded-[28px] shadow-[0_4px_20px_rgba(10,25,56,0.04)] overflow-hidden border border-slate-100">
          <PricesClient testPrices={testPrices} />
        </div>

        <div className="mt-6 text-center text-xs text-slate-400">
          <p>* Prices are subject to periodic clinical review. Please confirm at the center or via WhatsApp helpdesk.</p>
        </div>
      </div>
    </div>
  );
}
