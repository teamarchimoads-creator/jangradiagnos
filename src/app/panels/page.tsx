"use client";

import { Search, ArrowRight, Building2 } from "lucide-react";
import { useState } from "react";

const panels = [
  "AAI", "AERA", "AIR INDIA", "BHEL", "CAPF", "CBSE",
  "CCI (Competition Commission of India)", "CEC", "CERC (Central Electricity Regulatory Commission)",
  "CGHS", "CWC (Central Warehousing Corporation)", "DDA"
];

export default function PanelsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPanels = panels.filter(panel => 
    panel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#FBFDFF] min-h-screen pb-12 sm:pb-16">
      {/* Light Editorial Page Header */}
      <div className="bg-[#F5F9FD] border-b border-sky-100/80 py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center justify-center gap-2">
            <span>INSTITUTIONAL AFFILIATIONS</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>GOVT &amp; PSUs</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Empanelled </span>
            <span className="text-[#1D64D8]">Organizations</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed mt-3">
            Recognized by government organizations, public sector undertakings, and major health institutions for trusted diagnostic delivery.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-white p-1.5 rounded-full shadow-[0_4px_20px_rgba(10,25,56,0.04)] border border-slate-100 flex items-center focus-within:border-[#1D64D8] focus-within:ring-2 focus-within:ring-[#1D64D8]/10 transition-all">
            <div className="w-9 h-9 bg-[#F5F9FD] rounded-full flex items-center justify-center shrink-0 ml-1 text-[#1D64D8]">
              <Search className="w-4 h-4" />
            </div>
            <input 
              type="text" 
              placeholder="Search empanelled organizations..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full focus:outline-none text-slate-800 px-3.5 py-2 bg-transparent text-xs sm:text-sm placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPanels.map((panel, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 flex items-center justify-between hover:shadow-lg hover:border-sky-100 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group shadow-[0_4px_20px_rgba(10,25,56,0.03)]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-[#EBF5FE] text-[#1D64D8] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#1D64D8] group-hover:text-white transition-colors">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="font-bold text-slate-800 group-hover:text-[#1D64D8] text-sm sm:text-base transition-colors leading-tight pr-3">
                  {panel}
                </span>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#F5F9FD] flex items-center justify-center shrink-0 group-hover:bg-[#EBF5FE] transition-colors">
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1D64D8] group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          ))}
          {filteredPanels.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-500 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)]">
              <p className="font-bold text-base text-[#0A1938] mb-1">No panels found matching &ldquo;{searchTerm}&rdquo;</p>
              <p className="text-xs text-slate-400">Please check the organization name or enquire at our reception.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
