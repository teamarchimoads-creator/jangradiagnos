"use client";

import { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const jangraFaqs = [
  {
    q: "Do I need to visit a doctor before an ultrasound?",
    a: "A doctor visit is not necessarily required for non-pregnancy routine ultrasound investigations, while pregnancy-related scans should always be performed according to appropriate clinical guidance from a qualified doctor."
  },
  {
    q: "Is ultrasound safe?",
    a: "Yes. Diagnostic ultrasound is non-invasive and uses high-frequency sound waves rather than ionizing radiation. It is widely considered safe when performed by trained medical professionals."
  },
  {
    q: "When are pregnancy ultrasound scans performed?",
    a: "Pregnancy ultrasound scans typically include early pregnancy scans (viability), NT/NB scan (11-13 weeks), Level-II Anomaly scan (18-20 weeks), and third-trimester Growth & Color Doppler examinations as advised by your healthcare provider."
  },
  {
    q: "What pathology tests are available at Jangra Diagnostics?",
    a: "We offer all types of blood, urine, and body-fluid investigations. Our pathology services are powered in partnership with MAX LAB — a unit of Max Healthcare Institute Limited — ensuring high precision and dependable reports."
  },
  {
    q: "Do you provide home sample collection in Rohtak?",
    a: "Yes! We provide Free Home Sample Collection across Rohtak. Our trained phlebotomists collect samples safely from your home at your preferred time. Call 9813503420 or book online."
  },
  {
    q: "Do you provide dental services at your centre?",
    a: "Yes. Jangra Diagnostic & Dental Care Centre features a dedicated Dental Clinic headed by Dr. Neha Jangra (BDS, MMC Ambala, Ex-Intern Government Dental College, Rohtak), providing consultation, preventive dental care, and comprehensive treatments."
  },
  {
    q: "Are the reports accepted by all doctors and hospitals?",
    a: "Yes. All diagnostic and pathology reports from Jangra Diagnostics and MAX LAB adhere to strict quality standards and are widely recognized and accepted by physicians, clinics, and hospitals."
  }
];

export default function AboutFaqAndInfo() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* About Jangra Diagnostics Facility Detail Section */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white relative border-t border-slate-100 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeIn} className="mb-8 text-center">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center justify-center gap-2">
              <span>ESTABLISHED 2013</span>
              <span className="text-slate-300 font-normal">/</span>
              <span>ROHTAK CENTRE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-5">
              <span className="text-[#0A1938]">Diagnostic Excellence </span>
              <span className="text-[#1D64D8]">at Jangra Diagnostics</span>
            </h2>
            
            <div className="text-slate-600 mx-auto space-y-4 text-left max-w-4xl leading-relaxed font-normal">
              <p className="text-xs sm:text-sm">
                <strong className="text-[#0A1938] font-semibold">Jangra Diagnostic &amp; Dental Care Centre</strong> was founded in 2013 with a mission to bring compassionate, reliable, and technology-driven healthcare to the community. Having started in a rented facility, the centre has continually evolved into an advanced diagnostic hub located on Sonipat Road, Rohtak.
              </p>
              <p className="text-xs sm:text-sm">
                Today, our facility is equipped with modern diagnostic machinery, improved patient ambience, dedicated waiting spaces, and convenient parking facilities. Under the leadership of experienced consultants, we provide high-precision Ultrasound (Level-1 &amp; Level-2 3D/4D, Doppler), Digital X-Rays, Guided Clinical Procedures, comprehensive MAX LAB pathology services, and specialized dental care.
              </p>
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-3 bg-[#F5F9FD] p-4 rounded-[18px] border border-sky-100/80">
                  <CheckCircle2 className="w-4 h-4 text-[#1D64D8] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-normal">Accurate diagnostic reporting with qualified senior radiologists</span>
                </div>
                <div className="flex items-start gap-3 bg-[#F5F9FD] p-4 rounded-[18px] border border-sky-100/80">
                  <CheckCircle2 className="w-4 h-4 text-[#1D64D8] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-normal">MAX LAB pathology partnership for reliable test outcomes</span>
                </div>
                <div className="flex items-start gap-3 bg-[#F5F9FD] p-4 rounded-[18px] border border-sky-100/80">
                  <CheckCircle2 className="w-4 h-4 text-[#1D64D8] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-normal">Free Home Sample Collection across Rohtak (+91 9813503420)</span>
                </div>
                <div className="flex items-start gap-3 bg-[#F5F9FD] p-4 rounded-[18px] border border-sky-100/80">
                  <CheckCircle2 className="w-4 h-4 text-[#1D64D8] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-normal">Free General OPD consultation for patients seeking guidance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#F5F9FD] border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-8">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center justify-center gap-2">
              <span>COMMON QUESTIONS</span>
              <span className="text-slate-300 font-normal">/</span>
              <span>PATIENT GUIDANCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              <span className="text-[#0A1938]">Frequently Asked </span>
              <span className="text-[#1D64D8]">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {jangraFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-[24px] border border-slate-100 shadow-[0_4px_20px_rgba(29,100,216,0.03)] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0A1938] pr-6">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-[#EBF5FE] text-[#1D64D8] flex items-center justify-center shrink-0">
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-500 leading-relaxed border-t border-slate-50 pt-4 text-sm font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
