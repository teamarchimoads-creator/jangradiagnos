import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Calendar, Phone, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Guided Procedures & Intervention in Rohtak | Jangra Diagnostics",
  description: "Image-guided clinical procedures in Rohtak including ultrasound-guided FNAC, Core Biopsy, Abscess Drainage, and Fluid Aspiration performed by expert radiologists at Jangra Diagnostics.",
};

export default function GuidedProceduresPage() {
  const procedures = [
    {
      title: "FNAC (Fine Needle Aspiration Cytology)",
      desc: "Minimally invasive diagnostic procedure utilizing ultrasound guidance to sample cells from lumps, thyroid nodules, lymph nodes, or breast lesions for cytopathological analysis.",
      benefits: ["High target precision with real-time ultrasound guidance", "Virtually painless with minimal recovery time", "Quick turnaround for cytopathology results"]
    },
    {
      title: "Image-Guided Biopsy",
      desc: "Extraction of core tissue specimens under direct sonographic visualization, ensuring precise tissue sampling from suspicious internal masses and lesions.",
      benefits: ["Accurate targeting of deep lesions without major surgery", "Performed under strict local anesthesia & sterile protocols", "Reliable histological diagnosis"]
    },
    {
      title: "Abscess Drainage",
      desc: "Ultrasound-guided percutaneous evacuation of infected fluid collections or localized abscesses in abdominal, pelvic, or soft-tissue spaces.",
      benefits: ["Relieves pain and infection without surgical incision", "Real-time image verification of complete drainage", "Reduced recovery and hospitalization risk"]
    },
    {
      title: "Fluid Aspiration",
      desc: "Diagnostic and therapeutic aspiration of symptomatic fluid accumulations including pleural effusions, ascitic peritoneal fluid, and joint effusions.",
      benefits: ["Immediate symptomatic relief for the patient", "Provides fluid specimens for cytological & biochemical analysis", "Conducted with careful clinical monitoring"]
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
            <span>INTERVENTIONAL RADIOLOGY</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>CLINICAL PROCEDURES</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Guided Procedures </span>
            <span className="text-[#1D64D8]">&amp; Intervention</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-2xl leading-relaxed mt-3">
            Image-guided diagnostic and therapeutic procedures performed with appropriate clinical expertise, sterile precautions, and patient safety.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="grid lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)]">
              <div className="aspect-16/9 rounded-xl overflow-hidden mb-5 bg-slate-100 relative">
                <img
                  src="/enhanced/ultrasound.png"
                  alt="Clinical Intervention and Ultrasound Guidance at Jangra Diagnostics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0A1938]/85 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  Ultrasound Guided Interventions
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                <span className="text-[#0A1938]">Precision Interventions </span>
                <span className="text-[#1D64D8]">with Minimal Discomfort</span>
              </h2>
              <p className="text-slate-500 leading-relaxed text-xs sm:text-sm font-normal">
                Interventional procedures at <strong className="text-slate-800 font-medium">Jangra Diagnostics</strong> are performed under direct real-time ultrasound guidance by experienced radiologists. By visualizing the target tissue and the needle path in real time, procedures such as FNAC, core biopsies, and therapeutic aspirations are completed with exceptional accuracy, safety, and minimal patient discomfort.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {procedures.map((proc, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] hover:shadow-lg hover:border-sky-100 transition-all flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A1938] mb-1.5">{proc.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed mb-3.5">{proc.desc}</p>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {proc.benefits.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1D64D8] shrink-0 mt-0.5" />
                          <span>{b}</span>
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
              <h3 className="text-xl font-bold text-[#0A1938] mb-1.5">Schedule a Procedure</h3>
              <p className="text-slate-500 text-xs mb-4 font-normal">
                Prior appointment is advised for guided procedures. Doctor prescription required.
              </p>

              <div className="space-y-2.5 mb-5">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1D64D8] shrink-0" />
                  <span>Conducted by Senior Radiologists</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#1D64D8] shrink-0" />
                  <span>Strict Sterile &amp; Aseptic Protocols</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D64D8] shrink-0" />
                  <span>Prompt Reporting &amp; Specimen Handling</span>
                </div>
              </div>

              <a
                href="https://wa.me/919813503420?text=Hello%20Jangra%20Diagnostics%2C%20I%20want%20to%20inquire%20about%20a%20guided%20procedure%20(FNAC/Biopsy/Drainage)."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1D64D8] hover:bg-[#1554B8] text-white font-medium py-3 rounded-full shadow-sm transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book on WhatsApp</span>
              </a>

              <div className="mt-3.5 pt-3.5 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400 mb-0.5">Direct Radiologist Desk:</p>
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
