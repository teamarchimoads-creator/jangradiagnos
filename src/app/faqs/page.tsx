"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Phone, MessageCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqCategories = [
  {
    category: "Ultrasound & Imaging",
    questions: [
      {
        q: "Do I need to visit a doctor before an ultrasound?",
        a: "A doctor visit is not necessarily required for non-pregnancy routine ultrasound investigations. However, pregnancy-related investigations and specialized examinations should always be performed according to appropriate clinical advice from a qualified healthcare professional."
      },
      {
        q: "Is diagnostic ultrasound safe?",
        a: "Yes. Diagnostic ultrasound is non-invasive and utilizes high-frequency sound waves rather than ionizing radiation. It is widely considered safe for both expectant mothers and developing babies when conducted by trained medical professionals."
      },
      {
        q: "When are pregnancy ultrasound scans performed?",
        a: "Standard pregnancy ultrasound timelines generally include: early pregnancy scans for gestational viability and dating (6-9 weeks), NT/NB scan (11-13 weeks), Level-II Targeted Anomaly scan (18-20 weeks), and third-trimester Growth and Color Doppler scans as recommended by your obstetrician."
      },
      {
        q: "Do I need a full bladder for pelvic or early pregnancy ultrasound?",
        a: "For routine transabdominal pelvic and early obstetrical examinations, a moderately full bladder is typically recommended to help visualize pelvic structures clearly. Specific preparation instructions are provided when booking."
      }
    ]
  },
  {
    category: "Pathology & MAX LAB Partnership",
    questions: [
      {
        q: "What pathology tests are available at Jangra Diagnostics?",
        a: "All types of blood, urine, and body-fluid investigations are available. This includes CBC, Liver Function Tests (LFT), Kidney Function Tests (KFT), Blood Sugar, HbA1C, Lipid Profiles, Thyroid hormones, CRP, and specialized fluid analyses."
      },
      {
        q: "Who is your pathology partner?",
        a: "Our pathology laboratory is partnered with MAX LAB — a unit of Max Healthcare Institute Limited — ensuring high precision, automated processing, and reliable reports accepted by doctors across the country."
      },
      {
        q: "Do I need to fast before blood tests?",
        a: "Certain tests such as Fasting Blood Sugar (FBS), Lipid Profile, and selected metabolic panels require 8 to 12 hours of overnight fasting. Many routine tests like CBC or HbA1C do not require fasting. Our team will guide you on test preparation."
      }
    ]
  },
  {
    category: "Home Collection & Appointments",
    questions: [
      {
        q: "Do you provide home sample collection in Rohtak?",
        a: "Yes! Jangra Diagnostics provides Free Home Sample Collection across Rohtak. Our certified phlebotomists arrive with sterile barcoded kits at your preferred time. You can book directly by calling 9813503420."
      },
      {
        q: "Is prior appointment required for centre visit?",
        a: "Walk-ins are always welcome for routine pathology blood/urine tests and general X-rays. For ultrasound scans, guided clinical procedures, and dental consultations, booking an appointment in advance helps minimize waiting time."
      },
      {
        q: "How soon are diagnostic reports delivered?",
        a: "Most routine pathology tests and digital X-rays are reported the same day. Ultrasound reports are provided immediately following radiologist review. Reports are delivered digitally and physically at the front desk."
      }
    ]
  },
  {
    category: "Dental Clinic & General Services",
    questions: [
      {
        q: "Do you provide dental services at your centre?",
        a: "Yes. Jangra Diagnostic & Dental Care Centre features a dedicated Dental Clinic headed by Dr. Neha Jangra (BDS, MMC Ambala, Ex-Intern Government Dental College, Rohtak), providing consultation, preventive scaling, cavity restorations, extractions, and oral health guidance."
      },
      {
        q: "What is Free General OPD Consultation?",
        a: "Jangra Diagnostics offers Free General OPD consultation for patients seeking initial medical guidance, review of test symptoms, and appropriate diagnostic test suggestions."
      },
      {
        q: "Where is the centre located and is parking available?",
        a: "We are conveniently located at 91-1/22K, Near India's First Elevated Railway Track, Sonipat Road, Rohtak, Haryana – 124001, featuring convenient parking facilities for patients."
      }
    ]
  }
];

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<string | null>("0-0");

  const toggleQuestion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="bg-[#FBFDFF] min-h-screen pb-12 sm:pb-16">
      {/* Light Editorial Page Header */}
      <div className="bg-[#F5F9FD] border-b border-sky-100/80 py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center justify-center gap-2">
            <span>PATIENT SUPPORT</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>KNOWLEDGE BASE</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Frequently Asked </span>
            <span className="text-[#1D64D8]">Questions</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed mt-3">
            Find clear, accurate answers about ultrasound investigations, MAX LAB pathology, dental care, home collection, and visiting Jangra Diagnostics.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {faqCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2 rounded-full text-xs transition-all cursor-pointer ${
                activeCategory === idx
                  ? "bg-[#1D64D8] text-white shadow-sm font-semibold"
                  : "bg-white text-slate-600 hover:bg-[#F5F9FD] border border-slate-100 font-normal shadow-[0_2px_12px_rgba(10,25,56,0.03)]"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Questions Accordion */}
        <div className="space-y-3">
          {faqCategories[activeCategory].questions.map((faq, idx) => {
            const id = `${activeCategory}-${idx}`;
            const isOpen = openIndex === id;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] overflow-hidden transition-all hover:border-sky-100"
              >
                <button
                  onClick={() => toggleQuestion(id)}
                  className="w-full px-5 sm:px-6 py-4 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-[#0A1938] pr-4 text-sm sm:text-base leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#1D64D8] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-1 text-slate-500 font-normal text-xs sm:text-sm leading-relaxed border-t border-slate-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-8 bg-[#F5F9FD] rounded-2xl p-6 sm:p-8 border border-sky-100/80 text-center space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0A1938] tracking-tight">Still have questions about a test or appointment?</h3>
          <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto font-normal">
            Our medical helpdesk is happy to assist you with test guidelines, appointments, and report status.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <a
              href="tel:+919813503419"
              className="bg-[#1D64D8] hover:bg-[#1554B8] text-white font-medium px-5 py-2.5 rounded-full text-xs transition-colors flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              Call: +91 9813503419
            </a>
            <a
              href="https://wa.me/919813503420?text=Hello%20Jangra%20Diagnostics%2C%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-50 text-[#0A1938] font-medium border border-slate-200 px-5 py-2.5 rounded-full text-xs transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#1D64D8]" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
