import React from "react";
import Link from "next/link";
import { 
  Home, 
  ArrowLeft, 
  Calendar, 
  Phone, 
  Search, 
  FileText, 
  Users, 
  Activity, 
  Sparkles,
  MapPin
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-[#F5F9FD] via-[#FBFDFF] to-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-3xl w-full text-center space-y-8">
        
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 bg-[#EBF5FE] text-[#1D64D8] border border-sky-100 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-2xs">
          <Activity className="w-3.5 h-3.5 text-[#1D64D8]" />
          <span>Error 404 • Page Not Found</span>
        </div>

        {/* Hero 404 Text */}
        <div className="space-y-3">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#0A1938] tracking-tight">
            4<span className="text-[#1D64D8]">0</span>4
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1938]">
            We Couldn&apos;t Find the Page You&apos;re Looking For
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            The link may be outdated, the page might have been moved, or there was a typo in the URL. Let&apos;s get you back on track to the care or results you need.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#1D64D8] hover:bg-[#1554B8] text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 shadow-md shadow-[#1D64D8]/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#0A1938] border border-slate-200 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 hover:border-[#1D64D8]/40 hover:-translate-y-0.5 active:translate-y-0 shadow-2xs"
          >
            <Phone className="w-4 h-4 text-[#1D64D8]" />
            <span>Contact Helpdesk</span>
          </Link>
        </div>

        {/* Helpful Shortcut Cards */}
        <div className="pt-8 border-t border-slate-100">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
            Or explore popular diagnostic sections
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <Link
              href="/services"
              className="group bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(29,100,216,0.04)] hover:shadow-md hover:border-sky-200 transition-all duration-300 flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#1D64D8] flex items-center justify-center shrink-0 group-hover:bg-[#1D64D8] group-hover:text-white transition-colors">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#0A1938] group-hover:text-[#1D64D8] transition-colors">
                  Diagnostic Services
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Ultrasound, X-Ray &amp; Dental Care
                </p>
              </div>
            </Link>

            <Link
              href="/prices"
              className="group bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(29,100,216,0.04)] hover:shadow-md hover:border-sky-200 transition-all duration-300 flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#0A1938] group-hover:text-emerald-700 transition-colors">
                  Health Packages
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Max Care &amp; Full Body Checks
                </p>
              </div>
            </Link>

            <Link
              href="/doctors"
              className="group bg-white p-4 rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(29,100,216,0.04)] hover:shadow-md hover:border-sky-200 transition-all duration-300 flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D64D8] flex items-center justify-center shrink-0 group-hover:bg-[#1D64D8] group-hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#0A1938] group-hover:text-[#1D64D8] transition-colors">
                  Medical Experts
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Meet our Radiologist &amp; Surgeon
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Urgent Inquiry Helpline */}
        <div className="pt-2 text-xs text-slate-500 flex items-center justify-center gap-2">
          <span>Need immediate assistance? Call our clinic directly at</span>
          <a 
            href="tel:+919813503419" 
            className="font-bold text-[#1D64D8] hover:underline"
          >
            +91 9813503419
          </a>
        </div>

      </div>
    </div>
  );
}
