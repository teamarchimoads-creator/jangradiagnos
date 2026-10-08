"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, Calendar, Phone, MessageCircle, 
  MapPin, CheckCircle2, ShieldCheck, HeartPulse, Sparkles, User, 
  Mail, ChevronRight, FileText, ChevronDown, Check, Loader2,
  Stethoscope, Clock, Users, Play, Award, ChevronLeft, ChevronRight as ChevronRightIcon,
  Activity
} from "lucide-react";
import { motion } from "framer-motion";
import BookingModal from "@/components/BookingModal";
import WhatsAppModal from "@/components/WhatsAppModal";
import CallbackModal from "@/components/CallbackModal";
import { 
  CTScanIcon, MRIIcon, XRayIcon, UltrasoundIcon, PathologyIcon, DentalCareIcon 
} from "@/components/ServiceIcons";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isWaModalOpen, setIsWaModalOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  // Testimonials Carousel State
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Patient",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      quote: "The staff is very professional and caring. I got my ultrasound reports on time and the whole process was smooth and accurate."
    },
    {
      name: "Rajesh Verma",
      role: "Patient",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      quote: "Dr. Krishan Jangra explained the scan findings very clearly and patiently. High quality imaging and trusted pathology through Max Lab."
    },
    {
      name: "Sunita Devi",
      role: "Dental Patient",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      quote: "Had root canal treatment with Dr. Neha Jangra. Extremely gentle, clean setup and completely painless experience. Highly recommend!"
    }
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Appointment Form State
  const [apptData, setApptData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Ultrasound",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });
  const [isSubmittingAppt, setIsSubmittingAppt] = useState(false);
  const [apptSuccess, setApptSuccess] = useState(false);
  const [apptError, setApptError] = useState("");

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingAppt(true);
    setApptError("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: apptData.name,
          phone: apptData.phone,
          email: apptData.email,
          service: apptData.service,
          preferredDate: apptData.preferredDate,
          preferredTime: apptData.preferredTime,
          message: apptData.message,
          collectionType: "Centre Visit"
        })
      });

      const data = await res.json();
      if (res.ok) {
        setApptSuccess(true);
        const waMessage = `HELLO JANGRA DIAGNOSTICS,\n\nI have requested an appointment:\nBooking ID: ${data.bookingId}\nName: ${apptData.name}\nPhone: ${apptData.phone}\nService: ${apptData.service}\nPreferred Date: ${apptData.preferredDate || 'Earliest'}\nTime: ${apptData.preferredTime || 'Standard'}\nMessage: ${apptData.message || 'None'}\n\nPlease confirm my appointment slot.`;
        setTimeout(() => {
          window.open(`https://wa.me/919813503420?text=${encodeURIComponent(waMessage)}`, "_blank");
        }, 1200);
      } else {
        setApptError(data.error || "Failed to schedule appointment. Please call us directly.");
      }
    } catch (err) {
      setApptError("Network error. Please call +91 9813503419 directly.");
    } finally {
      setIsSubmittingAppt(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white min-h-screen">

      {/* ========================================================
          1. HERO SECTION (Ditto Match to User Reference Screenshot)
         ======================================================== */}
      <section className="relative w-full bg-white text-slate-900 overflow-hidden py-8 sm:py-10 lg:py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              {/* Eyebrow - Matching reference styling exactly */}
              <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#1D64D8] uppercase flex items-center gap-2">
                <span>ACCURATE</span>
                <span className="text-slate-300 font-normal">/</span>
                <span>ADVANCED</span>
                <span className="text-slate-300 font-normal">/</span>
                <span>TRUSTED</span>
              </div>

              {/* Main Headline - Bold Sans Two-Tone Headline matching reference */}
              <h1 className="text-4xl sm:text-5xl lg:text-[60px] xl:text-[66px] font-extrabold tracking-tight leading-[1.08]">
                <span className="text-[#0A1938] block">Advanced Diagnostics</span>
                <span className="text-[#1D64D8] block">for a Healthier Tomorrow</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-500 max-w-lg leading-relaxed font-normal">
                State-of-the-art technology, expert radiologists and compassionate care, all under one roof.
              </p>

              {/* Buttons Row with Download Report Button & Animated Pointing Finger */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                {/* Primary CTA: Royal Blue Pill Button */}
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-[#1D64D8] hover:bg-[#1554B8] text-white font-medium text-sm sm:text-base px-6 sm:px-7 py-3 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Download Report Button with Pointing Finger Animation */}
                <div className="relative inline-flex items-center">
                  {/* Floating pointer callout badge */}
                  <div className="absolute -top-6 sm:-top-7 left-3 flex items-center gap-1 bg-[#EBF5FE] text-[#1D64D8] border border-sky-200 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-xs animate-point-finger-y pointer-events-none z-10 whitespace-nowrap">
                    <span>👇</span>
                    <span>Check Reports Online</span>
                  </div>

                  <Link
                    href="/download-report"
                    className="relative inline-flex items-center gap-2 bg-[#0A1938] hover:bg-[#1D64D8] text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3 rounded-full transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 group border border-slate-800 hover:border-[#1D64D8]"
                  >
                    <span className="text-base sm:text-lg animate-point-finger-x select-none inline-block">
                      👉
                    </span>
                    <FileText className="w-4 h-4 text-sky-400 group-hover:text-white transition-colors" />
                    <span>Download Report</span>
                  </Link>
                </div>

                {/* Secondary CTA: Our Services with play button icon */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 text-sm font-medium text-slate-700 hover:text-[#1D64D8] px-3.5 py-2.5 rounded-full hover:bg-slate-50 transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-[#1D64D8] group-hover:text-white transition-all">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </span>
                  <span>Our Services</span>
                </Link>
              </div>

              {/* Motto / Accreditation strip */}
              <div className="pt-1 flex items-center gap-2.5 text-xs text-slate-400">
                <span className="italic text-slate-600">“Think of quality, Think of us.”</span>
                <span>•</span>
                <span className="text-slate-500">Serving Rohtak Since 2013</span>
              </div>
            </div>

            {/* Right Column: Hero Diagnostic Scanner Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Curved Container with Scanner Photo */}
                <div className="relative rounded-[32px] overflow-hidden shadow-xl border border-slate-100 aspect-[16/11] bg-slate-50">
                  <img
                    src="/hero_scanner.jpg"
                    alt="Advanced Medical Scanner at Jangra Diagnostics"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating White Card matching reference UI */}
                <div className="absolute -bottom-4 left-4 sm:left-6 bg-white text-slate-900 rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D64D8] shrink-0">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#0A1938] leading-tight">Your Health</h4>
                    <p className="text-[10px] text-slate-400 font-medium">Our Priority</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. COMPREHENSIVE DIAGNOSTIC SERVICES (Ditto Reference Match)
         ======================================================== */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#1D64D8] uppercase mb-2 flex items-center gap-2">
                <span>OUR SERVICES</span>
                <span className="text-slate-300 font-normal">/</span>
                <span>ACCURATE</span>
                <span className="text-slate-300 font-normal">/</span>
                <span>ADVANCED</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.14]">
                <span className="text-[#0A1938]">Comprehensive </span>
                <span className="text-[#1D64D8]">Diagnostic Services</span>
              </h2>
            </div>

            <p className="text-slate-500 text-xs sm:text-sm max-w-xs sm:max-w-sm leading-relaxed self-start md:self-end font-normal">
              A wide range of diagnostic tests and imaging with precision, speed and reliability.
            </p>
          </div>

          {/* 2x3 Grid matching reference screenshot with high-res service images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Card 1: CT Scan */}
            <Link
              href="/services"
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="/services/ct-scan.jpg"
                  alt="CT Scan Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-[#1D64D8] shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A1938] mb-1.5 group-hover:text-[#1D64D8] transition-colors tracking-tight">
                CT Scan
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                Detailed cross-sectional imaging for accurate diagnosis.
              </p>
            </Link>

            {/* Card 2: MRI */}
            <Link
              href="/services"
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="/services/mri.jpg"
                  alt="MRI Scan Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-[#1D64D8] shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <line x1="7.5" y1="12" x2="16.5" y2="12" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A1938] mb-1.5 group-hover:text-[#1D64D8] transition-colors tracking-tight">
                MRI
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                High-resolution scans for better clarity.
              </p>
            </Link>

            {/* Card 3: X-Ray */}
            <Link
              href="/services/digital-x-ray"
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="/services/xray.jpg"
                  alt="Digital X-Ray Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-[#1D64D8] shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="3" x2="12" y2="21" />
                    <line x1="8" y1="8" x2="16" y2="8" />
                    <line x1="7" y1="12" x2="17" y2="12" />
                    <line x1="8" y1="16" x2="16" y2="16" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A1938] mb-1.5 group-hover:text-[#1D64D8] transition-colors tracking-tight">
                X-Ray
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                Quick and safe digital X-ray services.
              </p>
            </Link>

            {/* Card 4: Ultrasound */}
            <Link
              href="/services/ultrasound"
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="/services/ultrasound.jpg"
                  alt="Ultrasound Diagnostic Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-[#1D64D8] shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 4 12 Q 8 6 12 12 T 20 12" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A1938] mb-1.5 group-hover:text-[#1D64D8] transition-colors tracking-tight">
                Ultrasound
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                Safe and painless 3D/4D and Doppler imaging.
              </p>
            </Link>

            {/* Card 5: Pathology Lab */}
            <Link
              href="/services/pathology"
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="/services/pathology.jpg"
                  alt="Pathology Lab Testing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-[#1D64D8] shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 10 3 H 14 V 7 L 19 17 C 19.8 18.5 18.8 20.5 17 20.5 H 7 C 5.2 20.5 4.2 18.5 5 17 L 10 7 V 3 Z" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A1938] mb-1.5 group-hover:text-[#1D64D8] transition-colors tracking-tight">
                Pathology Lab
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                Wide range of blood, urine and other tests.
              </p>
            </Link>

            {/* Card 6: Dental Care */}
            <Link
              href="/services/dental"
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="/services/dental.jpg"
                  alt="Dental Care Clinic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-[#1D64D8] shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 6.5 4.5 C 5.5 8.5 6.5 13 7.5 16.5 C 8.5 19 10 19.5 11 17.5 C 11.8 15.5 12 13 12 13 C 12 13 12.2 15.5 13 17.5 C 14 19.5 15.5 19 16.5 16.5 C 17.5 13 18.5 8.5 17.5 4.5 C 16.5 2.5 14 2.5 12 3.5 C 10 2.5 7.5 2.5 6.5 4.5 Z" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A1938] mb-1.5 group-hover:text-[#1D64D8] transition-colors tracking-tight">
                Dental Care
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                Comprehensive dental and root canal treatments.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. ABOUT US SECTION (Ditto Match to User Reference Screenshot)
         ======================================================== */}
      <section className="py-12 lg:py-16 bg-[#F5F9FD] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Reception Image with Soft Pastel Blue Offset Backdrop */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none pr-3 pb-3 sm:pr-5 sm:pb-5">
                
                {/* Soft Pastel Blue Offset Layer matching reference screenshot */}
                <div className="absolute bottom-0 right-0 w-[94%] h-[94%] bg-[#C6E0F9] rounded-[32px] sm:rounded-[36px] pointer-events-none" />

                {/* Main Clinic Reception Image */}
                <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-lg aspect-[4/3] bg-white border-2 border-white z-10">
                  <img
                    src="/clinic_reception.jpg"
                    alt="Jangra Diagnostics Reception & Waiting Area"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Content & 3 Stat Cards */}
            <div className="lg:col-span-6 space-y-5 lg:pl-2">
              <div>
                <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2.5 flex items-center gap-2">
                  <span>ABOUT US</span>
                  <span className="text-slate-300 font-normal">/</span>
                  <span>ESTABLISHED 2013</span>
                  <span className="text-slate-300 font-normal">/</span>
                  <span>ROHTAK</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.14]">
                  <span className="text-[#0A1938]">Your Trusted Partner </span>
                  <br className="hidden sm:inline" />
                  <span className="text-[#1D64D8]">for Advanced Diagnostics</span>
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl font-normal">
                At Jangra Diagnostics &amp; Dental Care Centre, we are committed to delivering accurate results, compassionate care and a hassle-free experience, guided by experienced radiologists, pathologists and technicians.
              </p>

              {/* 3 Stat Cards matching reference screenshot */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-1">
                <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-100 shadow-[0_4px_20px_rgba(29,100,216,0.04)] hover:shadow-md transition-shadow">
                  <div className="text-xl sm:text-2xl lg:text-[30px] font-extrabold text-[#1D64D8] tracking-tight leading-none mb-1">
                    100%
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-tight">
                    Accurate results
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-100 shadow-[0_4px_20px_rgba(29,100,216,0.04)] hover:shadow-md transition-shadow">
                  <div className="text-xl sm:text-2xl lg:text-[30px] font-extrabold text-[#1D64D8] tracking-tight leading-none mb-1">
                    Expert
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-tight">
                    Medical team
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-100 shadow-[0_4px_20px_rgba(29,100,216,0.04)] hover:shadow-md transition-shadow">
                  <div className="text-xl sm:text-2xl lg:text-[30px] font-extrabold text-[#1D64D8] tracking-tight leading-none mb-1">
                    Fast
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-tight">
                    Report delivery
                  </p>
                </div>
              </div>

              {/* Royal Blue Pill Button matching reference */}
              <div className="pt-1">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center bg-[#1D64D8] hover:bg-[#1554B8] text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer transform hover:-translate-y-0.5"
                >
                  Know More About Us
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          4. WHY CHOOSE US (Ditto Match to User Reference Screenshot)
         ======================================================== */}
      <section className="bg-[#EAF3FD] py-10 lg:py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Title Area */}
            <div className="lg:col-span-4 space-y-2.5">
              <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] flex items-center gap-2">
                <span>WHY CHOOSE US</span>
                <span className="text-slate-300 font-normal">/</span>
                <span>CARE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight leading-[1.18]">
                <span className="text-[#0A1938]">Better care, </span>
                <br />
                <span className="text-[#1D64D8]">every step of the way</span>
              </h2>
            </div>

            {/* Right 4 Metrics */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-4 xl:gap-8 items-start">
              
              {/* Metric 1 */}
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-[42px] font-extrabold text-[#1D64D8] tracking-tight leading-none whitespace-nowrap">
                  10+
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-tight">
                  Years of excellence
                </p>
              </div>

              {/* Metric 2 */}
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-[42px] font-extrabold text-[#1D64D8] tracking-tight leading-none whitespace-nowrap">
                  50,000+
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-tight">
                  Happy patients
                </p>
              </div>

              {/* Metric 3 */}
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-[42px] font-extrabold text-[#1D64D8] tracking-tight leading-none whitespace-nowrap">
                  99.8%
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-tight">
                  Accuracy rate
                </p>
              </div>

              {/* Metric 4 */}
              <div className="min-w-0">
                <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-[42px] font-extrabold text-[#1D64D8] tracking-tight leading-none whitespace-nowrap">
                  24/7
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-tight">
                  Support &amp; help
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          5. PATIENT TESTIMONIALS SECTION (Ditto Match to User Reference Screenshot)
         ======================================================== */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6 sm:mb-8">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center gap-2">
              <span>PATIENT REVIEWS</span>
              <span className="text-slate-300 font-normal">/</span>
              <span>VERIFIED CARE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
              <span className="text-[#0A1938]">Hear From Our </span>
              <span className="text-[#1D64D8]">Happy Patients</span>
            </h2>
          </div>

          {/* Testimonial Card matching reference screenshot */}
          <div className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-9 border border-slate-100 shadow-[0_8px_30px_rgba(29,100,216,0.06)] max-w-5xl">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-8">
              
              {/* Patient Avatar matching reference */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border border-slate-100 shadow-sm">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Testimonial Quote & Info */}
              <div className="space-y-3 text-center sm:text-left flex-1">
                <p className="text-base sm:text-lg lg:text-xl text-[#0A1938] leading-relaxed font-normal">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="text-xs sm:text-sm font-bold text-[#0A1938] tracking-tight">
                  {testimonials[currentTestimonial].name} <span className="font-normal text-slate-400">· {testimonials[currentTestimonial].role}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          6. OUR MEDICAL EXPERTS SECTION (Ditto Match to User Reference Screenshot)
         ======================================================== */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#F5F9FD] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center justify-center gap-2">
              <span>OUR MEDICAL EXPERTS</span>
              <span className="text-slate-300 font-normal">/</span>
              <span>SENIOR DOCTORS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
              <span className="text-[#0A1938]">Experienced Doctors </span>
              <span className="text-[#1D64D8]">You Can Trust</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-2 max-w-2xl mx-auto leading-relaxed">
              Decades of clinical experience ensuring the highest diagnostic precision and patient safety.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* Doctor 1: Dr. Krishan Jangra */}
            <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-slate-100 shadow-[0_6px_25px_rgba(29,100,216,0.04)] hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left group">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#EBF5FE] border border-sky-100 overflow-hidden shrink-0 shadow-sm flex items-center justify-center text-[#1D64D8]">
                <Stethoscope className="w-8 h-8" />
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
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#F0FDF4] border border-emerald-100 overflow-hidden shrink-0 shadow-sm flex items-center justify-center text-emerald-600">
                <Sparkles className="w-8 h-8" />
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

        </div>
      </section>

      {/* ========================================================
          7. CTA BANNER ("Book Your Test Today" - Ditto Match to User Reference)
         ======================================================== */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#0A1938] text-white shadow-xl">
            <div className="grid md:grid-cols-12 items-center">
              
              {/* Left Content */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 md:col-span-7 space-y-3.5">
                <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#38BDF8] flex items-center gap-2">
                  <span>QUICK &amp; EASY</span>
                  <span className="text-sky-300/40 font-normal">/</span>
                  <span>ACCURATE RESULTS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-[1.16]">
                  <span>Book Your Test Today </span>
                  <span className="text-[#38BDF8]">For Rapid Reports</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 max-w-md font-normal leading-relaxed">
                  Take the first step towards a healthier you. Get accurate reports with free home collection options across Rohtak.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="bg-white hover:bg-slate-50 text-[#0A1938] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md inline-flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <Calendar className="w-4 h-4 text-[#1D64D8]" />
                    <span>Book Appointment</span>
                    <ArrowRight className="w-4 h-4 text-[#1D64D8]" />
                  </button>
                </div>
              </div>

              {/* Right Lab Technician Image matching reference screenshot */}
              <div className="md:col-span-5 h-56 md:h-full min-h-[220px] md:min-h-[300px] relative overflow-hidden">
                <img
                  src="/lab_technician.jpg"
                  alt="Pathology lab technician preparing blood sample"
                  className="w-full h-full object-cover"
                />
                {/* Soft gradient blend into navy background */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A1938] to-transparent pointer-events-none hidden md:block" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. QUICK APPOINTMENT BOOKING FORM
         ======================================================== */}
      <section id="appointment-form" className="py-10 sm:py-12 lg:py-14 bg-[#F5F9FD] border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-lg border border-slate-100">
            
            <div className="text-center max-w-xl mx-auto mb-6">
              <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-1.5 flex items-center justify-center gap-2">
                <span>ONLINE BOOKING</span>
                <span className="text-slate-300 font-normal">/</span>
                <span>INSTANT CONFIRMATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1938] tracking-tight">
                <span>Schedule an </span>
                <span className="text-[#1D64D8]">Appointment</span>
              </h2>
              <p className="text-xs text-slate-500 font-normal mt-1.5">
                Fill out the quick form below. Our care team will confirm your slot via call or WhatsApp.
              </p>
            </div>

            {apptSuccess ? (
              <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-emerald-900">Appointment Request Submitted!</h3>
                <p className="text-xs text-emerald-700">
                  Redirecting to WhatsApp for instant confirmation. Or call us directly at <strong>+91 9813503419</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAppointmentSubmit} className="space-y-4">
                {apptError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600">
                    {apptError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={apptData.name}
                      onChange={(e) => setApptData({ ...apptData, name: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#1D64D8] focus:ring-1 focus:ring-[#1D64D8]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9813503419"
                      value={apptData.phone}
                      onChange={(e) => setApptData({ ...apptData, phone: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#1D64D8] focus:ring-1 focus:ring-[#1D64D8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Select Service *</label>
                    <select
                      value={apptData.service}
                      onChange={(e) => setApptData({ ...apptData, service: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#1D64D8] focus:ring-1 focus:ring-[#1D64D8] bg-white"
                    >
                      <option value="Ultrasound">Ultrasound (3D/4D &amp; Doppler)</option>
                      <option value="Digital X-Ray">Digital X-Ray &amp; OPG</option>
                      <option value="Pathology Lab">Pathology Lab (MAX LAB)</option>
                      <option value="Dental Care">Dental Care Clinic</option>
                      <option value="Guided Procedures">Guided Procedures</option>
                      <option value="Free General OPD">Free General OPD</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={apptData.preferredDate}
                      onChange={(e) => setApptData({ ...apptData, preferredDate: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#1D64D8] focus:ring-1 focus:ring-[#1D64D8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Any Specific Requirement / Message</label>
                  <textarea
                    rows={2}
                    placeholder="Doctor referral notes, preferred time slot..."
                    value={apptData.message}
                    onChange={(e) => setApptData({ ...apptData, message: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#1D64D8] focus:ring-1 focus:ring-[#1D64D8]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmittingAppt}
                    className="w-full bg-[#1D64D8] hover:bg-[#1554B8] text-white font-medium text-sm py-3.5 rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {isSubmittingAppt ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" />
                        <span>Confirm Appointment Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* Modals */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <WhatsAppModal isOpen={isWaModalOpen} onClose={() => setIsWaModalOpen(false)} />
      <CallbackModal isOpen={isCallbackOpen} onClose={() => setIsCallbackOpen(false)} />

    </div>
  );
}
