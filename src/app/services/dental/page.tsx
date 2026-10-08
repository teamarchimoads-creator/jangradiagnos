import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Calendar, Phone, Sparkles, User, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Jangra Dental Care | Dr. Neha Jangra (BDS) | Rohtak",
  description: "Complete dental care at Jangra Dental Care in Rohtak by Dr. Neha Jangra (BDS, MMC Ambala, Ex-Intern Govt Dental College Rohtak). Consultation, preventive care, general dental treatments, and oral guidance.",
};

export default function DentalPage() {
  const dentalSections = [
    {
      title: "Dental Consultation",
      desc: "Comprehensive examination of teeth, gums, and oral cavity with personalized treatment planning and expert advice.",
      points: [
        "Thorough visual and diagnostic examination",
        "Assessment of tooth sensitivity and decay",
        "Gum health and periodontal condition check",
        "Transparent treatment planning & consultation"
      ]
    },
    {
      title: "Preventive Dental Care",
      desc: "Proactive care designed to protect teeth and gums, preventing cavities, plaque accumulation, and gum disorders.",
      points: [
        "Professional scaling & teeth cleaning",
        "Plaque and calculus removal",
        "Enamel protection and preventive guidance",
        "Routine check-ups for ongoing oral wellness"
      ]
    },
    {
      title: "General Dental Care",
      desc: "High-quality restorative and therapeutic treatments to preserve tooth structure and restore comfortable chewing.",
      points: [
        "Dental fillings and restoration of cavities",
        "Management of tooth pain and infections",
        "Safe extractions when clinically required",
        "Crown and restorative consultation"
      ]
    },
    {
      title: "Oral Health Guidance",
      desc: "Educational guidance on brushing techniques, flossing, diet, and habits for maintaining lifelong healthy smiles.",
      points: [
        "Personalized hygiene instructions",
        "Dietary and lifestyle tips for teeth strength",
        "Pediatric and adult dental care guidelines",
        "Management of bad breath and sensitivity"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFDFF] pb-12 sm:pb-16">
      {/* Light Editorial Page Header */}
      <div className="bg-[#F5F9FD] border-b border-sky-100/80 py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-[#1D64D8] hover:text-[#1554B8] mb-3 transition-colors text-xs font-medium">
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Back to All Services
          </Link>
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center gap-2">
            <span>DENTAL CARE</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ORAL HEALTH</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Jangra </span>
            <span className="text-[#1D64D8]">Dental Care</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-2xl leading-relaxed mt-3">
            Complete dental care with compassionate consultation and treatment by Dr. Neha Jangra (BDS, MMC Ambala).
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="grid lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-8 space-y-6">
            {/* Dental Operatory Suite Banner */}
            <div className="aspect-16/9 rounded-2xl overflow-hidden bg-slate-100 relative border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)]">
              <img
                src="/services/dental.jpg"
                alt="Jangra Dental Care Operatory Suite"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#0A1938]/85 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                Modern Dental Operatory Suite
              </div>
            </div>

            {/* Doctor Profile Banner */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] flex flex-col md:flex-row gap-5 items-center">
              <div className="w-20 h-20 rounded-2xl bg-[#EBF5FE] flex items-center justify-center text-[#1D64D8] shrink-0">
                <User className="w-10 h-10" />
              </div>
              <div className="space-y-1 text-center md:text-left flex-1">
                <span className="text-[10px] bg-[#EBF5FE] text-[#1D64D8] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                  Lead Dental Surgeon
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938]">
                  Dr. Neha Jangra
                </h2>
                <p className="text-[#1D64D8] font-semibold text-xs">
                  BDS, MMC Ambala • Ex-Intern, Government Dental College, Rohtak
                </p>
                <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed pt-0.5">
                  Dedicated to providing gentle, hygienic, and patient-centred dental treatments in a friendly, comfortable atmosphere.
                </p>
              </div>
            </div>

            {/* Sections Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {dentalSections.map((sec, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] hover:shadow-lg hover:border-sky-100 transition-all flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A1938] mb-1.5">{sec.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed mb-3.5">{sec.desc}</p>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {sec.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1D64D8] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] sticky top-24">
              <h3 className="text-xl font-bold text-[#0A1938] mb-1.5">Book Dental Visit</h3>
              <p className="text-slate-500 text-xs mb-4 font-normal">
                Consultation and gentle treatments for patients of all age groups.
              </p>

              <div className="space-y-2.5 mb-5">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Strict Sterilization &amp; Hygiene</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Gentle &amp; Comfortable Approach</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>Modern Dental Instrumentation</span>
                </div>
              </div>

              <a
                href="https://wa.me/919813503420?text=Hello%20Jangra%20Diagnostics%2C%20I%20would%20like%20to%20book%20a%20Dental%20Consultation%20with%20Dr.%20Neha%20Jangra."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-full shadow-sm transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Dental Appointment</span>
              </a>

              <div className="mt-3.5 pt-3.5 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400 mb-0.5">Clinic Desk:</p>
                <a href="tel:+919813503419" className="text-sm font-medium text-[#0A1938] hover:text-[#1D64D8] flex items-center justify-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#1D64D8]" />
                  <span>+91 9813503419</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
