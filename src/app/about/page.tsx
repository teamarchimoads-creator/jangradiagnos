import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, HeartPulse, Building2, User, Sparkles, ArrowRight, Stethoscope } from "lucide-react";
import AboutFaqAndInfo from "@/components/AboutFaqAndInfo";

export const metadata: Metadata = {
  title: "About Us | Jangra Diagnostics & Dental Care Centre Rohtak",
  description: "Learn about Jangra Diagnostic & Dental Care Centre in Rohtak. Founded in 2013, providing ultrasound, digital X-ray, MAX LAB pathology, and comprehensive dental care.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Header matching Home Page UI */}
      <div className="bg-[#F5F9FD] border-b border-sky-100/80 py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center justify-center gap-2">
            <span>SINCE 2013</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ADVANCED CARE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">About </span>
            <span className="text-[#1D64D8]">Jangra Diagnostics</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed mt-3">
            Your trusted partner in diagnostic and dental healthcare excellence. Think of quality, think of us.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-14">
          <div className="space-y-4">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] flex items-center gap-2">
              <span>OUR JOURNEY</span>
              <span className="text-slate-300 font-normal">/</span>
              <span>EXCELLENCE SINCE 2013</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1938] leading-tight">
              <span>From Humble Beginnings </span>
              <br />
              <span className="text-[#1D64D8]">To Advanced Diagnostics</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              <strong>Jangra Diagnostic &amp; Dental Care Centre</strong> was established in 2013 with a simple yet steadfast commitment: to provide accurate diagnosis, quality healthcare, and a comfortable experience for every patient.
            </p>
            <p className="text-slate-500 leading-relaxed text-xs sm:text-sm font-normal">
              The centre started in a rented building in 2013 and has steadily grown into a modern, patient-friendly facility located on Sonipat Road, Rohtak. Over the years, we have invested in advanced diagnostic equipment, expanded our physical ambience, and incorporated convenient parking facilities for patients and their families.
            </p>
            <p className="text-slate-500 leading-relaxed text-xs sm:text-sm font-normal">
              Today, with senior radiologists, dental surgeons, and our strategic pathology partnership with <strong>MAX LAB</strong> (a unit of Max Healthcare Institute Limited), Jangra Diagnostics provides dependable investigations under one roof.
            </p>
          </div>

          <div className="relative pr-3 pb-3 sm:pr-5 sm:pb-5">
            <div className="absolute bottom-0 right-0 w-[94%] h-[94%] bg-[#C6E0F9] rounded-[28px] sm:rounded-[32px] pointer-events-none" />
            <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-lg border-2 border-white bg-slate-100 z-10 aspect-[4/3]">
              <img 
                src="/enhanced/entrance.png" 
                alt="Jangra Diagnostic Centre & Dental Clinic Facility Campus" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 sm:mb-14">
          <div className="bg-[#F5F9FD] p-6 sm:p-8 rounded-[24px] border border-sky-100/80 shadow-[0_6px_25px_rgba(29,100,216,0.03)] space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#EBF5FE] text-[#1D64D8] flex items-center justify-center font-bold text-base mb-3">
              1
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A1938]">
              Our Mission
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
              To provide reliable and accessible diagnostic and dental care through modern equipment, verified testing protocols, experienced doctors, and compassionate, patient-first service.
            </p>
          </div>

          <div className="bg-[#F5F9FD] p-6 sm:p-8 rounded-[24px] border border-sky-100/80 shadow-[0_6px_25px_rgba(29,100,216,0.03)] space-y-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#EBF5FE] text-[#1D64D8] flex items-center justify-center font-bold text-base mb-3">
              2
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A1938]">
              Our Vision
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
              To remain the most trusted diagnostic and dental care centre in Rohtak, continually upholding high standards of precision, patient comfort, and ethical healthcare.
            </p>
          </div>
        </div>

        {/* Medical Team Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center justify-center gap-2">
              <span>OUR MEDICAL TEAM</span>
              <span className="text-slate-300 font-normal">/</span>
              <span>SPECIALISTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              <span className="text-[#0A1938]">Qualified Doctors </span>
              <span className="text-[#1D64D8]">You Can Trust</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Doctor 1: Dr. Krishan Jangra */}
            <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-slate-100 shadow-[0_6px_25px_rgba(29,100,216,0.04)] hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-sky-100 shadow-md bg-slate-100">
                <img
                  src="/newPictures/WhatsApp Image 2026-10-14 at 1.37.14 PM.jpeg"
                  alt="Dr. Krishan Jangra Consultant Radiologist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="inline-block text-[10px] font-semibold text-[#1D64D8] bg-[#EBF5FE] border border-sky-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Radiology &amp; Imaging
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A1938]">Dr. Krishan Jangra</h3>
                <p className="text-xs font-semibold text-slate-700">MBBS, DMRD, DNB</p>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Consultant Radiologist • Ex-Senior Resident PGIMS Rohtak • MIMA, PLM-IRIA. Specialist in 3D/4D ultrasound, vascular Doppler and ultrasound-guided procedures.
                </p>
              </div>
            </div>

            {/* Doctor 2: Dr. Neha Jangra */}
            <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-slate-100 shadow-[0_6px_25px_rgba(29,100,216,0.04)] hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-emerald-100 shadow-md bg-slate-100">
                <img
                  src="/newPictures/WhatsApp Image 2026-10-14 at 1.37.04 PM.jpeg"
                  alt="Dr. Neha Jangra Dental Surgeon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="inline-block text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Dental Surgeon
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A1938]">Dr. Neha Jangra</h3>
                <p className="text-xs font-semibold text-slate-700">BDS (MMC Ambala)</p>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Ex-Intern GDC Rohtak. Specialist in advanced cosmetic dentistry, pain-free root canals, dental crowns and smile restoration.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-[#F5F9FD] hover:bg-[#EEF6FD] text-[#1D64D8] border border-sky-200/80 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-2xs hover:shadow-xs"
            >
              <span>Explore Centre &amp; Facility Photo Gallery</span>
              <span>→</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Embedded FAQ & Facility Details */}
      <AboutFaqAndInfo />
    </div>
  );
}
