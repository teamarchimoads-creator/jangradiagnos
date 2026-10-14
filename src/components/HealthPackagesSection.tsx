"use client";

import React, { useState } from "react";
import { 
  maxCarePackages, 
  fullBodyHealthPlus, 
  weekendOffers, 
  dailyOfferDTC, 
  labDetails,
  HealthPackage 
} from "@/data/healthPackages";
import { 
  ShieldCheck, 
  Sparkles, 
  Check, 
  Phone, 
  MessageCircle, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  MapPin, 
  FileText,
  BadgePercent,
  Calendar,
  Building2,
  Stethoscope
} from "lucide-react";

export default function HealthPackagesSection() {
  const [activeTab, setActiveTab] = useState<"all" | "family" | "special">("all");
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>("max-care-1");

  const toggleExpand = (id: string) => {
    setExpandedPackageId(expandedPackageId === id ? null : id);
  };

  const filteredPackages = maxCarePackages.filter((pkg) => {
    if (activeTab === "family") return pkg.isFamilyOffer;
    return true;
  });

  return (
    <section className="space-y-12">
      {/* Official Partnership & Smart Report Announcement Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F2856] via-[#123673] to-[#0A1938] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-sky-400/20">
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider text-sky-200 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>{labDetails.reportType}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Max Care Health Check Packages
            </h2>
            
            <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
              Powered by <strong className="text-white">MAX LAB</strong> — A Wholly Owned Subsidiary of <strong className="text-white">Max Healthcare Institute Limited</strong>. 
              Comprehensive diagnostics with advanced clinical accuracy and pathology expertise.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-sky-200">
              <span className="inline-flex items-center gap-1.5 bg-sky-950/60 px-3 py-1 rounded-md border border-sky-400/30 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-400" /> {labDetails.regionNotice}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-sky-950/60 px-3 py-1 rounded-md border border-sky-400/30 font-medium">
                <FileText className="w-3.5 h-3.5 text-sky-300" /> Free SMART Report
              </span>
            </div>
          </div>

          {/* Quick Direct Booking Action Box */}
          <div className="w-full lg:w-auto shrink-0 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex flex-col gap-3">
            <div className="text-xs text-sky-200 font-medium">For home sample collection or walk-in:</div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <a
                href={`tel:${labDetails.homeCollectionPhone}`}
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-98"
              >
                <Phone className="w-4 h-4" />
                <span>Call {labDetails.homeCollectionPhone}</span>
              </a>
              <a
                href={`https://wa.me/91${labDetails.homeCollectionPhone}?text=${encodeURIComponent(
                  "Hello Jangra Diagnostics & Max Lab, I want to book a Health Check Package."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1D64D8] hover:bg-[#1554B8] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
            <div className="text-[11px] text-sky-300/80 text-center">
              Centre: Sonipat Road, Near Railway Crossing, Rohtak
            </div>
          </div>
        </div>

        {/* Ambient subtle light glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* FEATURED: Max Care Full-Body Health Plus (82 Tests) & 100% Cashback */}
      <div className="bg-gradient-to-r from-amber-50 via-sky-50 to-emerald-50 border-2 border-emerald-300/80 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-emerald-200/60">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-emerald-600 text-white text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-sm tracking-wide">
                Special Offer
              </span>
              <span className="bg-amber-500 text-slate-950 font-black text-xs uppercase px-3 py-1 rounded-full shadow-sm animate-pulse tracking-wide">
                {fullBodyHealthPlus.cashback}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1938]">
              {fullBodyHealthPlus.name}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              Total Tests: <strong className="text-slate-900 font-bold">{fullBodyHealthPlus.totalTests} Parameters</strong> | Comprehensive Full-Body Screen
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
            <div className="text-left sm:text-right">
              <div className="text-xs text-slate-400 line-through">
                Actual Price: ₹{fullBodyHealthPlus.actualPrice.toLocaleString("en-IN")}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#1D64D8]">
                ₹{fullBodyHealthPlus.offerPrice.toLocaleString("en-IN")}
              </div>
              <div className="text-[11px] font-semibold text-emerald-700">
                Massive ₹{(fullBodyHealthPlus.actualPrice - fullBodyHealthPlus.offerPrice).toLocaleString("en-IN")} Savings
              </div>
            </div>

            <a
              href={`https://wa.me/91${labDetails.homeCollectionPhone}?text=${encodeURIComponent(
                `Hi, I want to book the "${fullBodyHealthPlus.name}" (Offer Price ₹${fullBodyHealthPlus.offerPrice}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md inline-flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book @ ₹{fullBodyHealthPlus.offerPrice}</span>
            </a>
          </div>
        </div>

        {/* Tests Included in Full-Body Health Plus */}
        <div className="pt-6">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Key Profiles &amp; Investigations Included in 82 Tests:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
            {fullBodyHealthPlus.testsList.map((test, idx) => (
              <div
                key={idx}
                className="bg-white border border-emerald-100 rounded-xl px-3.5 py-2.5 shadow-xs text-xs font-bold text-slate-800 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>{test}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-slate-500 italic">
            *Get 100% Cashback, redeemable in two bookings (50% each), by same patient on the same package. Valid for 24 months, Limited time offer.
          </p>
        </div>
      </div>

      {/* DAILY OFFERS & EXCLUSIVE WEEKEND OFFERS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Offer: DTC Package */}
        <div className="lg:col-span-1 bg-gradient-to-br from-white to-sky-50/70 border border-sky-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#1D64D8] font-bold text-[11px] uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Daily Offer</span>
            </div>
            <h4 className="text-xl font-extrabold text-[#0A1938]">
              {dailyOfferDTC.name}
            </h4>
            <div className="text-xs font-semibold text-[#1D64D8] mb-3">
              *{dailyOfferDTC.subtitle}
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-sky-100 text-xs text-slate-700 leading-relaxed font-medium mb-4">
              {dailyOfferDTC.tests}
            </div>
          </div>

          <div className="pt-2 border-t border-sky-100 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Special Price</div>
              <div className="text-2xl font-extrabold text-[#0A1938]">₹{dailyOfferDTC.price}</div>
            </div>
            <a
              href={`https://wa.me/91${labDetails.homeCollectionPhone}?text=${encodeURIComponent(
                `Hi, I want to book Daily Offer: DTC Package (Sugar F, HbA1c, Lipid Profile Basic, Thyroid Profile) @ ₹${dailyOfferDTC.price}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1D64D8] hover:bg-[#1554B8] text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-xs"
            >
              Book @ ₹{dailyOfferDTC.price}
            </a>
          </div>
        </div>

        {/* Exclusive Weekend Offers */}
        <div className="lg:col-span-2 bg-gradient-to-br from-white to-amber-50/50 border border-amber-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-[11px] uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>Exclusive Weekend Offers</span>
            </div>
            <h4 className="text-xl font-extrabold text-[#0A1938] mb-1">
              High-Value Screening Tests at Subsidized Weekend Rates
            </h4>
            <p className="text-xs text-slate-500 mb-4">
              Avail individual tests or special bundles on weekends directly at Jangra Diagnostics Rohtak.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {weekendOffers.map((offer, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded-xl border border-amber-100/80 flex items-center justify-between gap-2 shadow-2xs hover:border-amber-300 transition-colors"
                >
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-800 truncate">{offer.title}</div>
                    <div className="text-[11px] text-slate-500 line-clamp-1">{offer.deal}</div>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="inline-block bg-amber-50 text-amber-900 font-extrabold text-xs px-2.5 py-1 rounded-lg border border-amber-200">
                      {offer.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-amber-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-600">
            <span>Special weekend slot appointments available with zero wait times.</span>
            <a
              href={`https://wa.me/91${labDetails.homeCollectionPhone}?text=${encodeURIComponent(
                "Hi, I want to inquire about Weekend Offers at Jangra Diagnostics."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D64D8] font-bold hover:underline"
            >
              Inquire Weekend Slots →
            </a>
          </div>
        </div>
      </div>

      {/* FILTER TABS & MAIN MAX CARE HEALTH CHECK PACKAGES (1 TO 5) */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h3 className="text-2xl font-extrabold text-[#0A1938]">
              Max Care Health Check Series (1 to 5)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Each package provides exhaustive organ profiles with Free SMART Reports by MAX Hospitals.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start sm:self-center">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === "all"
                  ? "bg-white text-[#1D64D8] shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Packages (1-5)
            </button>
            <button
              onClick={() => setActiveTab("family")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === "family"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Family Offers (Buy 1 Get 1)</span>
            </button>
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => {
            const isExpanded = expandedPackageId === pkg.id;

            return (
              <div
                key={pkg.id}
                className={`bg-white rounded-3xl border transition-all duration-200 flex flex-col justify-between shadow-xs ${
                  pkg.isFamilyOffer
                    ? "border-emerald-200 hover:border-emerald-400 hover:shadow-md"
                    : "border-slate-200 hover:border-[#1D64D8]/40 hover:shadow-md"
                }`}
              >
                {/* Card Header */}
                <div className="p-6">
                  {/* Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full ${
                        pkg.isFamilyOffer
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                          : "bg-blue-100 text-blue-800 border border-blue-200"
                      }`}
                    >
                      {pkg.highlightBadge || "Standard Package"}
                    </span>
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                      {pkg.totalTests} Tests
                    </span>
                  </div>

                  <h4 className="text-xl font-extrabold text-[#0A1938] mb-1">
                    {pkg.name}
                  </h4>

                  {/* Pricing Display */}
                  <div className="mt-4 p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-slate-400 line-through">
                        Actual: ₹{pkg.actualPrice.toLocaleString("en-IN")}
                      </span>
                      {pkg.offerPrice && (
                        <div className="text-right">
                          <span className="text-xs text-slate-500 font-medium mr-1.5">Offer Price:</span>
                          <span className="text-2xl font-black text-[#1D64D8]">
                            ₹{pkg.offerPrice.toLocaleString("en-IN")}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Family Buy 1 Get 1 Specific Pricing */}
                    {pkg.isFamilyOffer && (
                      <div className="pt-2 border-t border-slate-200/60 space-y-1.5 text-xs">
                        <div className="flex items-center justify-between text-slate-700">
                          <span className="font-medium">Price for 1 Person:</span>
                          <span className="font-bold text-base text-[#0A1938]">
                            ₹{pkg.priceForOne?.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <div className="flex items-center justify-between bg-emerald-50 text-emerald-900 p-2 rounded-xl border border-emerald-200 font-bold">
                          <span className="flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Family Offer (1+1):</span>
                          </span>
                          <span className="text-lg text-emerald-800">
                            ₹{pkg.priceForFamily?.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Organ Profiles / Categories List */}
                  <div className="mt-5 space-y-3">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                      <span>Included Profiles ({pkg.categories.length})</span>
                      <button
                        onClick={() => toggleExpand(pkg.id)}
                        className="text-[#1D64D8] hover:underline flex items-center gap-1 lowercase text-xs font-semibold"
                      >
                        {isExpanded ? (
                          <>
                            <span>collapse</span> <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>view all tests</span> <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Expanded vs Compact Category View */}
                    <div className="space-y-2">
                      {pkg.categories.map((cat, idx) => {
                        // If not expanded, show only first 4 categories compactly
                        if (!isExpanded && idx >= 4) return null;

                        return (
                          <div
                            key={idx}
                            className="text-xs rounded-xl p-2.5 bg-white border border-slate-100 hover:border-slate-200 transition-colors"
                          >
                            <div className="font-bold text-slate-900 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1D64D8] shrink-0" />
                              <span>{cat.category}</span>
                            </div>
                            {isExpanded && (
                              <div className="text-slate-600 mt-1 pl-3 text-[11px] leading-relaxed">
                                {cat.tests}
                              </div>
                            )}
                          </div>
                        );
                      })}
                      {!isExpanded && pkg.categories.length > 4 && (
                        <button
                          onClick={() => toggleExpand(pkg.id)}
                          className="w-full text-center text-[11px] font-semibold text-slate-400 hover:text-[#1D64D8] py-1 transition-colors"
                        >
                          + {pkg.categories.length - 4} more organ profiles (click to see all tests)
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="p-6 pt-0 mt-2">
                  <a
                    href={`https://wa.me/91${labDetails.homeCollectionPhone}?text=${encodeURIComponent(
                      `Hello Jangra Diagnostics, I would like to book the "${pkg.name}" (${pkg.totalTests} Tests). Please confirm appointment and home sample collection.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-2xl font-bold text-xs inline-flex items-center justify-center gap-2 transition-all shadow-xs ${
                      pkg.isFamilyOffer
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                        : "bg-[#1D64D8] hover:bg-[#1554B8] text-white"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book {pkg.name}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MAX LAB EXPANDING FOOTPRINTS & QUALITY ASSURANCE */}
      <div className="bg-[#0A1938] text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="text-xs uppercase font-extrabold tracking-widest text-sky-400 mb-1">
              India's Trusted Diagnostic Network
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Our Expanding Footprints with Max Lab
            </h4>
          </div>
          <div className="flex items-center gap-2 text-xs text-sky-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>NABL Standards &amp; Hospital-Grade Quality</span>
          </div>
        </div>

        {/* 5 Stats from Pamphlet */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-black text-sky-300">45+</div>
            <div className="text-xs text-slate-300 mt-1">Test processing labs</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-black text-sky-300">60+</div>
            <div className="text-xs text-slate-300 mt-1">Operational cities</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-black text-sky-300">780+</div>
            <div className="text-xs text-slate-300 mt-1">Team of medical professionals</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
            <div className="text-2xl sm:text-3xl font-black text-sky-300">1400+</div>
            <div className="text-xs text-slate-300 mt-1">Patient touchpoints</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl col-span-2 sm:col-span-1">
            <div className="text-2xl sm:text-3xl font-black text-sky-300">2700+</div>
            <div className="text-xs text-slate-300 mt-1">Test menu of routine &amp; subspecialties</div>
          </div>
        </div>

        {/* Location & Contact Strip */}
        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-start gap-2 max-w-xl">
            <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <span>
              <strong>Jangra Diagnostic Centre (Max Lab Partner):</strong> {labDetails.address}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sample Collection: <strong>{labDetails.homeCollectionPhone}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: <strong>{labDetails.whatsapp}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
