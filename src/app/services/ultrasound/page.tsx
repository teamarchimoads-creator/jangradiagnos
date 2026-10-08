import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Calendar, Phone, AlertCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Ultrasound Services in Rohtak | Jangra Diagnostics",
  description: "High-resolution ultrasound investigations in Rohtak including Level-1, Level-2 Anomaly scans, 3D/4D ultrasound, pregnancy scans, and Color Doppler at Jangra Diagnostics.",
};

export default function UltrasoundPage() {
  const ultrasoundServices = [
    {
      title: "Level-1 Ultrasound",
      desc: "Basic diagnostic ultrasound examination of the abdomen, pelvis, and general organ structures for initial evaluation and routine checkups.",
      points: ["Whole Abdomen screening", "Pelvic & Kidney evaluation", "Gallbladder, Liver & Spleen assessment"]
    },
    {
      title: "Level-2 / Anomaly Scan",
      desc: "Detailed targeted ultrasound examination performed typically between 18–20 weeks of pregnancy to evaluate fetal anatomy and organ development with precision.",
      points: ["Comprehensive fetal anatomical survey", "Organ & spine structural screening", "Specialist evaluation by senior radiologist"]
    },
    {
      title: "3D / 4D Ultrasound",
      desc: "Advanced volumetric imaging providing clear surface rendering and real-time motion display for obstetrical and specialized anatomical assessments.",
      points: ["High-definition surface rendering", "Real-time fetal motion observation", "Enhanced clinical structural visualization"]
    },
    {
      title: "Pregnancy Ultrasound",
      desc: "Comprehensive obstetrical ultrasound throughout all trimesters to evaluate gestational viability, dating, fetal growth, amniotic fluid, and placental position.",
      points: ["Early pregnancy viability & dating", "NT/NB screening scan (11-13 weeks)", "Growth scans & well-being monitoring"]
    },
    {
      title: "Color Doppler",
      desc: "Non-invasive hemodynamic investigation assessing blood flow through vessels, vital organs, fetal umbilical vessels, and peripheral vasculature.",
      points: ["Carotid Doppler & peripheral vascular", "Obstetric fetal-maternal Doppler", "Renal & portal vein flow assessment"]
    },
    {
      title: "Other Ultrasound Investigations",
      desc: "Specialized high-frequency ultrasound for superficial organs, soft tissues, musculoskeletal joints, and small parts.",
      points: ["Thyroid & neck ultrasound", "Breast ultrasound (Sonomammography)", "Scrotal Doppler & soft tissue evaluation"]
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
            <span>CLINICAL SONOGRAPHY</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>3D/4D &amp; DOPPLER</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Ultrasound </span>
            <span className="text-[#1D64D8]">Services</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-2xl leading-relaxed mt-3">
            State-of-the-art ultrasound and Color Doppler investigations interpreted by experienced senior radiologists at Jangra Diagnostics, Rohtak.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Overview Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)]">
              <div className="aspect-16/9 rounded-xl overflow-hidden mb-5 bg-slate-100 relative">
                <img
                  src="/services/ultrasound.jpg"
                  alt="Ultrasound Diagnostic Suite at Jangra Diagnostics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0A1938]/85 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  Dr. Krishan Jangra (Consultant Radiologist)
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                <span className="text-[#0A1938]">High-Precision Imaging </span>
                <span className="text-[#1D64D8]">for Accurate Clinical Care</span>
              </h2>
              <p className="text-slate-500 leading-relaxed text-xs sm:text-sm font-normal">
                At <strong className="text-slate-800 font-medium">Jangra Diagnostics</strong>, our ultrasound suite is equipped with high-resolution digital sonography platforms providing exceptional image resolution for abdominal, obstetrical, pelvic, and vascular applications. Under the clinical guidance of Dr. Krishan Jangra (MBBS, DMRD, DNB, Ex-Senior Resident PGIMS Rohtak), each scan is conducted with thorough clinical attention to ensure accurate reporting.
              </p>
            </div>

            {/* Detailed Investigations Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {ultrasoundServices.map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] hover:shadow-lg hover:border-sky-100 transition-all flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0A1938] mb-1.5">{service.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed mb-3.5">{service.desc}</p>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {service.points.map((pt, pIdx) => (
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

            {/* Medical Disclaimer */}
            <div className="bg-[#F5F9FD] border-l-4 border-[#1D64D8] p-4 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-[#1D64D8] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 leading-relaxed">
                <span className="font-medium text-[#0A1938]">Medical Disclaimer: </span>
                Ultrasound investigations should be performed as advised by a qualified healthcare professional. Routine non-pregnancy ultrasound examinations do not strictly require an advance doctor visit, while all pregnancy-related investigations are conducted in accordance with medical recommendations and statutory compliance.
              </div>
            </div>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] sticky top-24">
              <h3 className="text-xl font-bold text-[#0A1938] mb-1.5">Book an Ultrasound</h3>
              <p className="text-slate-500 text-xs mb-4 font-normal">
                Appointments ensure minimal waiting time. Walk-ins are also accommodated.
              </p>

              <div className="space-y-2.5 mb-5">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#1D64D8] shrink-0" />
                  <span>Report reviewed by Radiologist</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#1D64D8] shrink-0" />
                  <span>Same-day reporting for routine scans</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#1D64D8] shrink-0" />
                  <span>Clean, hygienic &amp; comfortable environment</span>
                </div>
              </div>

              <a
                href="https://wa.me/919813503420?text=Hello%20Jangra%20Diagnostics%2C%20I%20would%20like%20to%20book%20an%20Ultrasound%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1D64D8] hover:bg-[#1554B8] text-white font-medium py-3 rounded-full shadow-sm transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Ultrasound on WhatsApp</span>
              </a>

              <div className="mt-3.5 pt-3.5 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400 mb-0.5">Or call directly:</p>
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
