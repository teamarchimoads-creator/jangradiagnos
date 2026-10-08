import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Calendar, Phone, Sparkles, ShieldCheck, Home as HomeIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Pathology Laboratory in Rohtak | MAX LAB Partner | Jangra Diagnostics",
  description: "Complete blood, urine and body-fluid pathology investigations in Rohtak. Jangra Diagnostics is partnered with MAX LAB — a unit of Max Healthcare Institute Limited. Free home collection available.",
};

export default function PathologyPage() {
  const pathologyCategories = [
    {
      category: "Blood Tests",
      desc: "Complete hematology, cell count profiling, and biochemical blood analysis.",
      tests: ["CBC (Complete Blood Count)", "Hemoglobin (Hb)", "ESR (Erythrocyte Sedimentation Rate)", "Platelet Count & Peripheral Smear"]
    },
    {
      category: "Urine Tests",
      desc: "Routine and microscopic urinalysis for metabolic and urinary tract assessments.",
      tests: ["Urine Routine & Microscopic (CUE)", "Urine Albumin / Microalbumin", "Urine Sugar & Ketone Bodies", "Urine Pregnancy Test"]
    },
    {
      category: "Other Body Fluid Tests",
      desc: "Cytological and biochemical analysis of clinical body cavity fluids.",
      tests: ["Pleural Fluid Analysis", "Ascitic / Peritoneal Fluid", "Synovial Fluid Examination", "CSF & Specialized Fluid Workups"]
    },
    {
      category: "Diabetes Tests",
      desc: "Precise glycemic evaluation for diagnosis, screening, and long-term diabetes management.",
      tests: ["Fasting Blood Sugar (FBS)", "Post Prandial Blood Sugar (PPBS)", "Random Blood Sugar (RBS)", "HbA1C (Glycosylated Hemoglobin)"]
    },
    {
      category: "Liver & Kidney Tests",
      desc: "Organ health profiles assessing hepatic and renal clearance and function.",
      tests: ["LFT (Bilirubin, SGOT, SGPT, ALP, Proteins)", "KFT / RFT (Serum Urea, Creatinine, Uric Acid, BUN)", "Serum Electrolytes (Sodium, Potassium, Chloride)", "Serum Calcium & Phosphorus"]
    },
    {
      category: "Infection / Inflammation Tests",
      desc: "Immunological and infectious disease markers for acute and chronic conditions.",
      tests: ["CRP (C-Reactive Protein)", "Widal Test & Typhoid Serology", "Dengue NS1 / IgM-IgG", "Malaria Antigen Screening", "Thyroid Profile (T3, T4, TSH)"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFDFF] pb-24">
      {/* Light Editorial Page Header */}
      <div className="bg-[#F5F9FD] border-b border-sky-100/80 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-[#1D64D8] hover:text-[#1554B8] mb-4 transition-colors text-xs font-medium">
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Back to All Services
          </Link>
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-3 flex items-center gap-2">
            <span>MAX LAB PARTNER</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ACCURATE PATHOLOGY</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Pathology </span>
            <span className="text-[#1D64D8]">Laboratory</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base font-normal max-w-2xl leading-relaxed mt-4">
            All types of blood, urine and body-fluid investigations conducted with dependable accuracy in partnership with MAX LAB — a unit of Max Healthcare Institute Limited.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-8">
            {/* Overview Banner */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(10,25,56,0.04)]">
              <div className="aspect-16/9 rounded-2xl overflow-hidden mb-6 bg-slate-100 relative">
                <img
                  src="/gallery/blood_tests.jpg"
                  alt="Pathology Lab Testing at Jangra Diagnostics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#0A1938]/85 text-white text-xs font-medium px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                  Pathology Partner: MAX LAB
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#1D64D8] uppercase tracking-[0.14em] mb-2">
                <ShieldCheck className="w-4 h-4 text-[#1D64D8]" />
                Trusted Clinical Pathology
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                <span className="text-[#0A1938]">Precision Laboratory Investigations </span>
                <span className="text-[#1D64D8]">Under One Roof</span>
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm sm:text-base font-normal">
                Diagnostic reports are the cornerstone of accurate medical decisions. <strong className="text-slate-800 font-medium">Jangra Diagnostics</strong> provides full-range clinical pathology investigations through our partnership with <strong className="text-slate-800 font-medium">MAX LAB</strong>, a unit of Max Healthcare Institute Limited. From routine blood and urine analyses to comprehensive metabolic profiling, every investigation is processed according to strict quality-control protocols.
              </p>
            </div>

            {/* Test Categories Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {pathologyCategories.map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(10,25,56,0.04)] hover:shadow-xl hover:border-sky-100 transition-all flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#0A1938] mb-2">{item.category}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed mb-5">{item.desc}</p>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {item.tests.map((test, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1D64D8] shrink-0 mt-0.5" />
                          <span>{test}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Free Home Sample Collection Card */}
            <div className="bg-[#0A1938] text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="space-y-2 text-center sm:text-left relative z-10">
                <span className="text-xs bg-white/10 text-sky-200 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                  Zero Extra Charge
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  <span>Free Home Sample </span>
                  <span className="text-sky-300">Collection</span>
                </h3>
                <p className="text-slate-300 text-sm max-w-md font-normal leading-relaxed">
                  Book sample collection at your doorstep across Rohtak. Trained phlebotomist visit at your scheduled time.
                </p>
              </div>
              <a
                href="tel:+919813503420"
                className="bg-white hover:bg-slate-100 text-[#0A1938] font-bold px-7 py-3.5 rounded-full shadow transition-colors text-sm shrink-0 cursor-pointer relative z-10"
              >
                Call: 9813503420
              </a>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(10,25,56,0.04)] sticky top-24">
              <h3 className="text-xl font-bold text-[#0A1938] mb-2">Book Pathology Tests</h3>
              <p className="text-slate-500 text-xs mb-6 font-normal">
                Fast sample handling and dependable reporting by MAX LAB.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#1D64D8] shrink-0" />
                  <span>MAX LAB High Quality Standards</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Sparkles className="w-4 h-4 text-[#1D64D8] shrink-0" />
                  <span>Barcoded Vacutainers &amp; Sterile Kits</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <HomeIcon className="w-4 h-4 text-[#1D64D8] shrink-0" />
                  <span>Free Home Collection in Rohtak</span>
                </div>
              </div>

              <a
                href="https://wa.me/919813503420?text=Hello%20Jangra%20Diagnostics%2C%20I%20want%20to%20book%20Pathology%20Lab%20tests."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1D64D8] hover:bg-[#1554B8] text-white font-medium py-3.5 rounded-full shadow-sm transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Tests on WhatsApp</span>
              </a>

              <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400 mb-1">Need advice on tests?</p>
                <a href="tel:+919813503419" className="text-base font-medium text-[#0A1938] hover:text-[#1D64D8] flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-[#1D64D8]" />
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
