import { Metadata } from "next";
import Link from "next/link";
import { User, Sparkles, CheckCircle2, Calendar, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Meet Our Doctors | Jangra Diagnostics Rohtak",
  description: "Meet the experienced healthcare professionals at Jangra Diagnostics: Dr. Krishan Jangra (MBBS, DMRD, DNB, Consultant Radiologist) and Dr. Neha Jangra (BDS, Dental Surgeon).",
};

export default function DoctorsPage() {
  return (
    <div className="bg-[#FBFDFF] min-h-screen pb-12 sm:pb-16">
      {/* Light Editorial Page Header */}
      <div className="bg-[#F5F9FD] border-b border-sky-100/80 py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center justify-center gap-2">
            <span>EXPERIENCED LEADERSHIP</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>SENIOR CONSULTANTS</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Meet Our </span>
            <span className="text-[#1D64D8]">Medical Experts</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed mt-3">
            Our qualified doctors bring years of clinical experience, dedication, and compassionate care to Jangra Diagnostics &amp; Dental Care Centre.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* DOCTOR 1: DR. KRISHAN JANGRA */}
          <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] hover:shadow-lg hover:border-sky-100 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-sky-100 shadow-md bg-slate-100">
                  <img
                    src="/newPictures/WhatsApp Image 2026-10-14 at 1.37.14 PM.jpeg"
                    alt="Dr. Krishan Jangra — Consultant Radiologist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="bg-[#EBF5FE] text-[#1D64D8] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block mb-1">
                    Consultant Radiologist
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938]">
                    Dr. Krishan Jangra
                  </h2>
                  <p className="text-[#1D64D8] text-xs font-semibold">
                    MBBS, DMRD, DNB
                  </p>
                </div>
              </div>

              {/* Clinical in-action preview */}
              <div className="rounded-2xl overflow-hidden mb-4 border border-slate-100 aspect-[16/9] relative group">
                <img
                  src="/enhanced/ultrasound.png"
                  alt="Dr. Krishan Jangra performing an ultrasound examination"
                  className="w-full h-full object-cover transition-transform group-hover:scale-102"
                />
                <div className="absolute bottom-2 left-2 bg-[#0A1938]/85 text-white text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Ultrasound Suite • Jangra Diagnostics
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 text-sm text-slate-700">
                <div className="flex items-start gap-2.5 bg-[#F8FAFC] p-3 rounded-xl">
                  <Award className="w-4 h-4 text-[#1D64D8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block text-xs">Ex-Senior Resident</span>
                    <span className="text-[11px] text-slate-500 font-normal">Pt. B.D. Sharma Post Graduate Institute of Medical Sciences (PGIMS), Rohtak</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-[#F8FAFC] p-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#1D64D8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block text-xs">Professional Association</span>
                    <span className="text-[11px] text-slate-500 font-normal">Member of Indian Medical Association (MIMA)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-[#F8FAFC] p-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#1D64D8] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block text-xs">Radiological Society</span>
                    <span className="text-[11px] text-slate-500 font-normal">PLM-IRIA (Indian Radiological and Imaging Association)</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <p className="text-slate-500 text-xs font-normal leading-relaxed">
                  Specializing in diagnostic sonography, Level-1 &amp; Level-2 targeted anomaly obstetrical scans, Color Doppler hemodynamic studies, and ultrasound-guided clinical interventions.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
              <Link
                href="/services/ultrasound"
                className="flex-1 text-center py-2.5 rounded-full bg-[#F5F9FD] hover:bg-[#EEF6FD] text-[#0A1938] font-semibold text-xs transition-colors"
              >
                View Radiology Services
              </Link>
              <a
                href="https://wa.me/919813503420?text=Hello%20Jangra%20Diagnostics%2C%20I%20would%20like%20to%20consult%20Dr.%20Krishan%20Jangra."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-full bg-[#1D64D8] hover:bg-[#1554B8] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Consultation
              </a>
            </div>
          </div>

          {/* DOCTOR 2: DR. NEHA JANGRA */}
          <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] hover:shadow-lg hover:border-emerald-100 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-emerald-100 shadow-md bg-slate-100">
                  <img
                    src="/newPictures/WhatsApp Image 2026-10-14 at 1.37.04 PM.jpeg"
                    alt="Dr. Neha Jangra — Lead Dental Surgeon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block mb-1">
                    Dental Surgeon &amp; Consultant
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938]">
                    Dr. Neha Jangra
                  </h2>
                  <p className="text-emerald-700 text-xs font-semibold">
                    BDS, MMC Ambala
                  </p>
                </div>
              </div>

              {/* Clinical in-action preview */}
              <div className="rounded-2xl overflow-hidden mb-4 border border-slate-100 aspect-[16/9] relative group">
                <img
                  src="/enhanced/dentalDoctor.png"
                  alt="Dr. Neha Jangra performing dental procedure"
                  className="w-full h-full object-cover transition-transform group-hover:scale-102"
                />
                <div className="absolute bottom-2 left-2 bg-[#0A1938]/85 text-white text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Dental Operatory • Jangra Dental Care
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 text-sm text-slate-700">
                <div className="flex items-start gap-2.5 bg-[#F8FAFC] p-3 rounded-xl">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-900 block text-xs">Internship &amp; Clinical Training</span>
                    <span className="text-[11px] text-slate-500 font-normal">Ex-Intern, Government Dental College, Rohtak</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-[#F8FAFC] p-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-900 block text-xs">Dental Consultation &amp; Care</span>
                    <span className="text-[11px] text-slate-500 font-normal">Comprehensive examination, cavity restoration &amp; tooth protection</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-[#F8FAFC] p-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-900 block text-xs">Preventive &amp; Oral Hygiene</span>
                    <span className="text-[11px] text-slate-500 font-normal">Scaling, polishing &amp; educational health guidance for all ages</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <p className="text-slate-500 text-xs font-normal leading-relaxed">
                  Leading the dental wing at Jangra Diagnostic &amp; Dental Care Centre, providing patient-friendly dental consultations, restorative fillings, and oral health guidance in a clean, hygienic environment.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
              <Link
                href="/services/dental"
                className="flex-1 text-center py-2.5 rounded-full bg-[#F5F9FD] hover:bg-[#EEF6FD] text-[#0A1938] font-medium text-xs transition-colors"
              >
                View Dental Clinic
              </Link>
              <a
                href="https://wa.me/919813503420?text=Hello%20Jangra%20Diagnostics%2C%20I%20would%20like%20to%20consult%20Dr.%20Neha%20Jangra."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Dental Visit
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
