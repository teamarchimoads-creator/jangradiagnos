import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Calendar, Phone, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital X-Ray in Rohtak | Jangra Diagnostics",
  description: "Advanced Digital X-Ray services in Rohtak at Jangra Diagnostics. General X-rays, Special investigations, HSG with low radiation exposure and instant digital reporting.",
};

export default function DigitalXRayPage() {
  const xrayServices = [
    {
      title: "General X-Ray",
      desc: "Fast, clear digital imaging for chest, bones, joints, spine, and musculoskeletal evaluations with minimal radiation.",
      features: [
        "Chest X-Ray (PA/AP views) for pulmonary & cardiac screening",
        "Bone & Joint X-Rays for fractures, arthritis, and trauma",
        "Spine investigations (Cervical, Thoracic, Lumbar)",
        "Abdominal and Pelvic digital radiographs"
      ]
    },
    {
      title: "Special X-Ray Investigations",
      desc: "Contrast-enhanced radiographical investigations evaluating internal tract anatomy and functional transit.",
      features: [
        "Barium swallow and upper gastrointestinal studies",
        "Barium meal follow-through & enema studies",
        "Intravenous Pyelography (IVP) for renal tract assessment",
        "Conducted with sterile protocols and patient comfort"
      ]
    },
    {
      title: "HSG (Hysterosalpingography)",
      desc: "Specialized radiographic examination used to investigate uterine cavity anatomy and fallopian tube patency.",
      features: [
        "Assessment of female reproductive tract and fertility workups",
        "Evaluation of tubal blockage and uterine contour",
        "Performed with clinical sensitivity, comfort and gentle care",
        "Detailed interpretation by experienced radiologists"
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
            <span>DIGITAL RADIOGRAPHY</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>HIGH RESOLUTION</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Digital </span>
            <span className="text-[#1D64D8]">X-Ray</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-2xl leading-relaxed mt-3">
            High-clarity digital radiographs with reduced radiation dose, instant acquisition, and expert radiological reporting.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="grid lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)]">
              <div className="aspect-16/9 rounded-xl overflow-hidden mb-5 bg-slate-100 relative">
                <img
                  src="/services/xray.jpg"
                  alt="Digital X-Ray Machine at Jangra Diagnostics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0A1938]/85 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  Modern High-Frequency Digital Generator
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                <span className="text-[#0A1938]">Superior Clarity </span>
                <span className="text-[#1D64D8]">with Lower Radiation Dose</span>
              </h2>
              <p className="text-slate-500 leading-relaxed text-xs sm:text-sm font-normal">
                Digital X-Ray technology utilizes advanced digital detectors in place of standard photographic films. This yields sharp high-resolution radiographic images in seconds while substantially reducing radiation exposure to the patient. Reports are interpreted promptly by our consultant radiologists for quick diagnostic decisions.
              </p>
            </div>

            <div className="space-y-4">
              {xrayServices.map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] hover:shadow-lg hover:border-sky-100 transition-all">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A1938] mb-1.5">{service.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed mb-4">{service.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1D64D8] shrink-0 mt-0.5" />
                        <span className="font-normal text-slate-700">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] sticky top-24">
              <h3 className="text-xl font-bold text-[#0A1938] mb-1.5">Book Digital X-Ray</h3>
              <p className="text-slate-500 text-xs mb-4 font-normal">
                Walk-in X-rays and scheduled procedures available Monday to Sunday.
              </p>

              <div className="space-y-2.5 mb-5">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1D64D8] shrink-0" />
                  <span>ALARA Radiation Safety Compliant</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#1D64D8] shrink-0" />
                  <span>Immediate Digital Film Preview</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D64D8] shrink-0" />
                  <span>Report signed by Consultant Radiologist</span>
                </div>
              </div>

              <a
                href="https://wa.me/919813503420?text=Hello%20Jangra%20Diagnostics%2C%20I%20want%20to%20enquire%20about%20a%20Digital%20X-Ray."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1D64D8] hover:bg-[#1554B8] text-white font-medium py-3 rounded-full shadow-sm transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book X-Ray on WhatsApp</span>
              </a>

              <div className="mt-3.5 pt-3.5 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400 mb-0.5">Centre Contact:</p>
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
