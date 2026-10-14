import React from "react";
import Link from "next/link";
import { Sparkles, Users, Calendar, ArrowRight, ShieldCheck, Phone, Check } from "lucide-react";
import { labDetails, dailyOfferDTC } from "@/data/healthPackages";

export default function HealthPackagesTeaser() {
  return (
    <section className="py-12 lg:py-16 bg-[#F8FAFD] border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#1D64D8] uppercase mb-2 flex items-center gap-2">
              <span>MAX LAB PARTNER</span>
              <span className="text-slate-300 font-normal">/</span>
              <span>HEALTH PACKAGES</span>
              <span className="text-slate-300 font-normal">/</span>
              <span>HARYANA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.14]">
              <span className="text-[#0A1938]">Max Care </span>
              <span className="text-[#1D64D8]">Health Check Packages</span>
            </h2>
          </div>

          <p className="text-slate-500 text-xs sm:text-sm max-w-sm leading-relaxed self-start md:self-end font-normal">
            Free SMART Reports by MAX Hospitals with Buy 1 Get 1 Family Offers, and transparent rates.
          </p>
        </div>

        {/* 2-Column Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 2: Family Offers Buy 1 Get 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-sky-200 shadow-[0_4px_24px_rgba(29,100,216,0.06)] flex flex-col justify-between hover:shadow-lg transition-all relative overflow-hidden group">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="bg-[#1D64D8] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <span>Buy 1 Get 1 Free</span>
                </span>
                <span className="text-xs font-bold text-slate-500">Packages 3, 4, 5</span>
              </div>
              <h3 className="text-xl font-extrabold text-[#0A1938] group-hover:text-[#1D64D8] transition-colors">
                Family Health Check Series
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Max Care 3 (62 Tests), Max Care 4 (80 Tests), and Max Care 5 (94 Tests with HOMA-IR &amp; cardiac markers). Checkups for two people at subsidized family rates.
              </p>

              <div className="pt-2 space-y-1">
                <div className="text-xs text-slate-600 font-semibold flex items-center justify-between">
                  <span>Max Care 3 (62 Tests 1+1):</span>
                  <span className="font-bold text-[#0A1938]">₹4,000</span>
                </div>
                <div className="text-xs text-slate-600 font-semibold flex items-center justify-between">
                  <span>Max Care 4 (80 Tests 1+1):</span>
                  <span className="font-bold text-[#0A1938]">₹5,000</span>
                </div>
                <div className="text-xs text-slate-600 font-semibold flex items-center justify-between">
                  <span>Max Care 5 (94 Tests 1+1):</span>
                  <span className="font-bold text-[#0A1938]">₹6,000</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-[#1D64D8]">Covers 2 Persons</span>
              <Link
                href="/prices"
                className="text-xs font-bold text-[#1D64D8] hover:text-[#1554B8] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Compare Series</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Daily & Weekend Specials */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-200/80 shadow-[0_4px_24px_rgba(245,158,11,0.06)] flex flex-col justify-between hover:shadow-lg transition-all relative overflow-hidden group">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="bg-amber-500 text-slate-950 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Special Offers</span>
                </span>
                <span className="text-xs font-bold text-slate-500">From ₹99</span>
              </div>
              <h3 className="text-xl font-extrabold text-[#0A1938] group-hover:text-amber-700 transition-colors">
                Weekend &amp; Daily DTC Offers
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                4 Screening tests (Cholesterol, Sugar, Calcium, Uric Acid) @ ₹99, Vitamin D @ ₹499, and Daily DTC Package (Sugar F, HbA1c, Lipid &amp; Thyroid) @ ₹599.
              </p>

              <div className="pt-2">
                <div className="text-xs text-slate-400">Daily DTC* Package</div>
                <div className="text-3xl font-extrabold text-amber-600">₹{dailyOfferDTC.price}</div>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-amber-800">Home Collection: {labDetails.homeCollectionPhone}</span>
              <Link
                href="/prices"
                className="text-xs font-bold text-[#1D64D8] hover:text-[#1554B8] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                <span>View All Offers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* CTA Bar */}
        <div className="mt-8 bg-[#0A1938] text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-sky-200">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              <strong>MAX LAB Partnership:</strong> 45+ Labs, 780+ Medical Team, Free SMART Report by MAX Hospitals.
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${labDetails.homeCollectionPhone}`}
              className="text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{labDetails.homeCollectionPhone}</span>
            </a>
            <Link
              href="/prices"
              className="text-xs font-bold bg-[#1D64D8] hover:bg-[#1554B8] text-white px-4 py-2 rounded-xl transition-colors shadow-xs"
            >
              Full Details &amp; Prices →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
