"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, CalendarCheck
} from "lucide-react";
import BookingModal from "@/components/BookingModal";

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      name: "Ultrasound Services",
      slug: "ultrasound",
      href: "/services/ultrasound",
      img: "/enhanced/ultrasound.png",
      desc: "Level-1 & Level-2, 3D/4D, Pregnancy Ultrasound, Doppler and specialized high-resolution sonographic investigations."
    },
    {
      name: "Digital X-Ray",
      slug: "digital-x-ray",
      href: "/services/digital-x-ray",
      img: "/enhanced/operator.png",
      desc: "Instant digital imaging for general and special radiographic investigations including HSG with minimal radiation exposure."
    },
    {
      name: "Pathology Laboratory",
      slug: "pathology",
      href: "/services/pathology",
      img: "/enhanced/lab.png",
      desc: "Partnered with MAX LAB — a unit of Max Healthcare Institute Limited — for all routine and advanced blood, urine and fluid analyses."
    },
    {
      name: "Wellness & Preventive Health Clinic",
      slug: "wellness",
      href: "/services/wellness",
      img: "/enhanced/doctors.png",
      desc: "Proactive health assessments, routine screenings, lifestyle consultations, and chronic disease monitoring for long-term health."
    },
    {
      name: "Dental Care Clinic",
      slug: "dental",
      href: "/services/dental",
      img: "/enhanced/dentalDoctor.png",
      desc: "All dental treatments by in-house & on-call specialists: RCT, Implants, Smile Designing, Veneers, Crowns, Scaling, Whitening & RVG X-Rays under Dr. Neha Jangra."
    },
    {
      name: "Guided Procedures & Intervention",
      slug: "guided-procedures",
      href: "/services/guided-procedures",
      img: "/enhanced/ultrasound.png",
      desc: "Real-time image-guided clinical procedures including FNAC, core biopsy, abscess drainage, and therapeutic fluid aspiration."
    },
    {
      name: "Free Home Sample Collection",
      slug: "home-sample-collection",
      href: "/#home-collection",
      img: "/enhanced/lab.png",
      desc: "Convenient and prompt blood and urine sample collection from the comfort of your home across Rohtak (9813503420)."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFDFF] pb-12 sm:pb-16">
      {/* Light Editorial Page Header */}
      <div className="bg-[#F5F9FD] border-b border-sky-100/80 py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center justify-center gap-2">
            <span>DIAGNOSTICS</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>IMAGING</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>SPECIALIZED CARE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Our Healthcare </span>
            <span className="text-[#1D64D8]">Services</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed mt-3">
            From routine checkups to advanced imaging investigations, we provide high-precision results with clinical excellence and gentle patient care.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] hover:shadow-lg hover:border-sky-100 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 sm:h-52 overflow-hidden relative bg-slate-100">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1938]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3.5 left-5 right-5">
                    <h3 className="font-bold text-white text-lg sm:text-xl drop-shadow-sm tracking-tight">
                      {service.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-slate-50 flex items-center justify-between gap-3">
                <Link
                  href={service.href}
                  className="text-xs font-medium text-[#1D64D8] hover:text-[#1554B8] flex items-center gap-1.5 group-hover:gap-2 transition-all"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-[#1D64D8] hover:bg-[#1554B8] text-white text-xs font-medium px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Book Test</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
