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
import HealthPackagesTeaser from "@/components/HealthPackagesTeaser";

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
          1. HERO SECTION (With Authentic Medical Team & Facilities Suite)
         ======================================================== */}
      <section className="relative w-full bg-gradient-to-b from-white via-[#FAFDFE] to-white text-slate-900 overflow-hidden pt-5 pb-8 sm:pt-8 sm:pb-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">

          {/* Top Row: Left Headline & CTAs | Right Real Team Image */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">

            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              {/* Eyebrow */}
              <div className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#1D64D8] uppercase flex items-center gap-1.5 sm:gap-2">
                <span>ACCURATE</span>
                <span className="text-slate-300 font-normal">/</span>
                <span>ADVANCED</span>
                <span className="text-slate-300 font-normal">/</span>
                <span>TRUSTED</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-[28px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[54px] font-extrabold tracking-tight leading-[1.12] sm:leading-[1.08]">
                <span className="text-[#0A1938] block"> Diagnostics</span>
                <span className="text-[#1D64D8] block">for a Healthier Tomorrow</span>
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-lg leading-relaxed font-normal">
                Led by Consultant Radiologist Dr. Krishan Jangra &amp; Dental Surgeon Dr. Neha Jangra. Bringing high-precision ultrasound, digital X-rays, Max Lab pathology, and compassionate care under one roof.
              </p>

              {/* Buttons Row with Download Report Button & Animated Pointing Finger */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1">
                {/* Primary CTA */}
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-[#1D64D8] hover:bg-[#1554B8] text-white font-semibold text-xs sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>

                {/* Download Report Button with Pointing Finger Animation */}
                <div className="relative inline-flex items-center mt-3 sm:mt-0">
                  <div className="absolute -top-5 sm:-top-6 left-3 flex items-center gap-1 bg-[#EBF5FE] text-[#1D64D8] border border-sky-200 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow-2xs animate-point-finger-y pointer-events-none z-10 whitespace-nowrap">
                    <span>👇</span>
                    <span>Check Reports Online</span>
                  </div>

                  <Link
                    href="/download-report"
                    className="relative inline-flex items-center gap-1.5 sm:gap-2 bg-[#0A1938] hover:bg-[#1D64D8] text-white font-bold text-xs sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 group border border-slate-800 hover:border-[#1D64D8]"
                  >
                    <span className="text-sm sm:text-lg animate-point-finger-x select-none inline-block">
                      👉
                    </span>
                    <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 group-hover:text-white transition-colors" />
                    <span>Download Report</span>
                  </Link>
                </div>

                {/* Secondary CTA */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700 hover:text-[#1D64D8] px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-full hover:bg-slate-50 transition-colors group"
                >
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-[#1D64D8] group-hover:text-white transition-all">
                    <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
                  </span>
                  <span>Our Services</span>
                </Link>
              </div>

              {/* Trust Strip */}
              <div className="pt-1.5 flex flex-wrap items-center gap-2.5 text-[11px] sm:text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#0A1938]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1D64D8]" />
                  <span>Max Lab Network Partner</span>
                </span>
                <span>•</span>
                <span>Serving Rohtak Since 2013</span>
                <span>•</span>
                <span className="italic text-slate-600">“Think of quality, Think of us.”</span>
              </div>
            </div>

            {/* Right Column: Hero Medical Team Photo (WhatsApp Image 2026-10-14 at 1.37.03 PM) */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Soft decorative shadow frame */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#1D64D8]/20 via-sky-200/30 to-[#1D64D8]/10 rounded-[30px] sm:rounded-[34px] blur-sm -z-10" />

                <div className="relative rounded-[26px] sm:rounded-[30px] overflow-hidden bg-white border-2 border-white shadow-[0_12px_45px_rgba(29,100,216,0.12)]">
                  <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden bg-slate-100">
                    <img
                      src="/enhanced/Hero%20image.png"
                      alt="Dr. Krishan Jangra, Dr. Neha Jangra and Clinical Team at Jangra Diagnostic Centre Rohtak"
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Top Floating Badge */}
                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-slate-100 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-bold text-[#0A1938]">Senior Consultants &amp; Clinical Care Team</span>
                    </div>

                    {/* Bottom Floating Card */}
                    <div className="absolute bottom-3 inset-x-3 sm:inset-x-4 bg-[#0A1938]/92 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-white/10 text-white flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[11px] sm:text-xs font-bold text-white flex items-center gap-1.5">
                          <Stethoscope className="w-3.5 h-3.5 text-[#38BDF8]" />
                          <span>Dr. Krishan Jangra &amp; Dr. Neha Jangra</span>
                        </div>
                        <div className="text-[10px] text-slate-300">
                          Consultant Radiologist &amp; Lead Dental Surgeon • With Support Staff
                        </div>
                      </div>
                      <Link
                        href="/doctors"
                        className="bg-white/15 hover:bg-white/25 text-[#38BDF8] text-[10px] font-semibold px-2.5 py-1 rounded-full transition-colors shrink-0"
                      >
                        Meet Doctors →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Card: Official Facilities of Diagnostic Centre (from Official Brochure) */}
          <div className="bg-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 border border-slate-100 shadow-[0_12px_45px_rgba(29,100,216,0.06)] relative overflow-hidden">
            {/* Soft top gradient accent curve matching brochure top blue wave */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-sky-400 via-[#1D64D8] to-sky-400" />

            {/* Header matching brochure */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-5 border-b border-slate-100 pb-3 gap-2">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#1D64D8] tracking-[0.2em] uppercase block">
                  OFFICIAL ADVANCED SUITE • JANGRA DIAGNOSTICS ROHTAK
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#D32F2F] tracking-tight uppercase">
                  FACILITIES OF DIAGNOSTIC CENTRE :
                </h2>
              </div>
              <a
                href="https://maps.app.goo.gl/qMRGY4v1UGqNN1ce8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 self-start sm:self-auto hover:text-[#1D64D8] hover:border-sky-300 transition-colors inline-flex items-center gap-1"
                title="View clinic on Google Maps"
              >
                <span>Near Elevated Railway Track, Sonipat Road</span>
                <span className="text-sky-500 font-bold">↗</span>
              </a>
            </div>

            {/* 6 Facilities with Exact Colors & Circular Icons matching brochure in 3-column / 2-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              {/* 1. 3D/4D Colour Doppler Ultrasound */}
              <Link
                href="/services/ultrasound"
                className="flex items-center gap-2.5 sm:gap-3 group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-slate-200 bg-white shadow-2xs flex items-center justify-center text-slate-700 shrink-0 group-hover:border-[#D97724] group-hover:text-[#D97724] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                    <path d="M7 13c1-2 3-3 5-3s4 1 5 3" />
                    <circle cx="12" cy="16" r="2.5" />
                  </svg>
                </div>
                <div className="flex-1 bg-[#D97724] hover:bg-[#C2651B] text-white font-extrabold text-[11px] sm:text-xs md:text-sm px-4 py-2 sm:py-2.5 rounded-full shadow-xs tracking-wider uppercase transition-all flex items-center justify-between transform group-hover:-translate-y-0.5">
                  <span>3D/4D COLOUR DOPPLER ULTRASOUND</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>

              {/* 2. Digital X-Rays */}
              <Link
                href="/services/digital-x-ray"
                className="flex items-center gap-2.5 sm:gap-3 group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-slate-200 bg-white shadow-2xs flex items-center justify-center text-slate-700 shrink-0 group-hover:border-[#DC2626] group-hover:text-[#DC2626] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="3" width="14" height="18" rx="2" />
                    <line x1="12" y1="6" x2="12" y2="18" />
                    <line x1="9" y1="9" x2="15" y2="9" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                </div>
                <div className="flex-1 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold text-[11px] sm:text-xs md:text-sm px-4 py-2 sm:py-2.5 rounded-full shadow-xs tracking-wider uppercase transition-all flex items-center justify-between transform group-hover:-translate-y-0.5">
                  <span>DIGITAL X-RAYS</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>

              {/* 3. IVP/HSG/MCU/RGU/BARIUM STUDY */}
              <Link
                href="/services/digital-x-ray"
                className="flex items-center gap-2.5 sm:gap-3 group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-slate-200 bg-white shadow-2xs flex items-center justify-center text-slate-700 shrink-0 group-hover:border-[#0284C7] group-hover:text-[#0284C7] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2v4.5M9.5 2v4.5" />
                    <path d="M6 6.5h12l-1.5 12a3 3 0 0 1-3 2.5h-3a3 3 0 0 1-3-2.5L6 6.5z" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                  </svg>
                </div>
                <div className="flex-1 bg-[#0284C7] hover:bg-[#0369A1] text-white font-extrabold text-[11px] sm:text-xs md:text-sm px-4 py-2 sm:py-2.5 rounded-full shadow-xs tracking-wider uppercase transition-all flex items-center justify-between transform group-hover:-translate-y-0.5">
                  <span>IVP/HSG/MCU/RGU/BARIUM STUDY</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>

              {/* 4. DEDICATED ULTRASONIC MAMMOGRAPHY */}
              <Link
                href="/services/ultrasound"
                className="flex items-center gap-2.5 sm:gap-3 group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-slate-200 bg-white shadow-2xs flex items-center justify-center text-slate-700 shrink-0 group-hover:border-[#16A34A] group-hover:text-[#16A34A] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8a8 8 0 0 1 16 0c0 5-4 10-8 13-4-3-8-8-8-13z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                </div>
                <div className="flex-1 bg-[#16A34A] hover:bg-[#15803D] text-white font-extrabold text-[11px] sm:text-xs md:text-sm px-4 py-2 sm:py-2.5 rounded-full shadow-xs tracking-wider uppercase transition-all flex items-center justify-between transform group-hover:-translate-y-0.5">
                  <span>DEDICATED ULTRASONIC MAMMOGRAPHY</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>

              {/* 5. BLOOD TESTS */}
              <Link
                href="/services/pathology"
                className="flex items-center gap-2.5 sm:gap-3 group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-slate-200 bg-white shadow-2xs flex items-center justify-center text-slate-700 shrink-0 group-hover:border-[#1E3A8A] group-hover:text-[#1E3A8A] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.5c-2.5 3.5-6 7.5-6 11.5a6 6 0 0 0 12 0c0-4-3.5-8-6-11.5z" fill="#DC2626" stroke="#DC2626" fillOpacity="0.25" />
                  </svg>
                </div>
                <div className="flex-1 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-extrabold text-[11px] sm:text-xs md:text-sm px-4 py-2 sm:py-2.5 rounded-full shadow-xs tracking-wider uppercase transition-all flex items-center justify-between transform group-hover:-translate-y-0.5">
                  <span>BLOOD TESTS</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>

              {/* 6. URINE EXAMINATION ETC. */}
              <Link
                href="/services/pathology"
                className="flex items-center gap-2.5 sm:gap-3 group"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-slate-200 bg-white shadow-2xs flex items-center justify-center text-slate-700 shrink-0 group-hover:border-[#0F766E] group-hover:text-[#0F766E] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="4" width="10" height="3" rx="1" />
                    <path d="M8 7v10a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V7" />
                    <line x1="10" y1="12" x2="14" y2="12" strokeDasharray="1 1" />
                  </svg>
                </div>
                <div className="flex-1 bg-[#0F766E] hover:bg-[#115E59] text-white font-extrabold text-[11px] sm:text-xs md:text-sm px-4 py-2 sm:py-2.5 rounded-full shadow-xs tracking-wider uppercase transition-all flex items-center justify-between transform group-hover:-translate-y-0.5">
                  <span>URINE EXAMINATION ETC.</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            </div>

            {/* 3D Folded Ribbon Banner: LIVER ELASTOGRAPHY & FAT QUANTIFICATION */}
            <div className="pt-4 pb-2 flex justify-center">
              <div className="relative inline-block w-full max-w-md">
                {/* Folded ribbon background ears */}
                <div className="absolute -left-2 top-2.5 w-4 h-full bg-[#9E1250] -skew-y-12 rounded-l -z-10" />
                <div className="absolute -right-2 top-2.5 w-4 h-full bg-[#9E1250] skew-y-12 rounded-r -z-10" />

                <Link
                  href="/services/ultrasound"
                  className="block bg-gradient-to-r from-[#D6336C] via-[#BE185D] to-[#D6336C] text-white px-4 sm:px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all text-center border-t border-pink-300/40 transform hover:-translate-y-0.5"
                >
                  <div className="text-[11px] sm:text-xs md:text-sm font-black tracking-wider uppercase drop-shadow-sm flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-pink-200 shrink-0" />
                    <span>LIVER ELASTOGRAPHY &amp; FAT QUANTIFICATION</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Slogan matching brochure */}
            <div className="pt-2 text-center">
              <span className="font-serif italic font-bold text-lg sm:text-xl text-[#8E283B] tracking-wide block">
                &ldquo;Think of Quality Think of Us&rdquo;
              </span>
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

          {/* 2x3 Grid with high-res service images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

            {/* Card 1: Ultrasound */}
            <Link
              href="/services/ultrasound"
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="/enhanced/ultrasound.png"
                  alt="Dr. Krishan Jangra conducting Ultrasound Examination in High-Resolution Suite"
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
                Safe and painless 3D/4D and Doppler imaging by expert radiologists.
              </p>
            </Link>

            {/* Card 2: Digital X-Ray */}
            <Link
              href="/services/digital-x-ray"
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="/enhanced/operator.png"
                  alt="Radiographer at Computerized Digital CR Radiography Workstation"
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
                Digital X-Ray
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                Quick, low-radiation and high-contrast digital radiography &amp; HSG.
              </p>
            </Link>

            {/* Card 3: Pathology Lab */}
            <Link
              href="/services/pathology"
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="/enhanced/lab.png"
                  alt="MAX Lab Partner Clinical Pathology Collection Station at Jangra Diagnostics"
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
                Partnered with MAX LAB for accurate routine &amp; advanced blood tests.
              </p>
            </Link>

            {/* Card 4: Dental Care */}
            <Link
              href="/services/dental"
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="/enhanced/dentalDoctor.png"
                  alt="Dr. Neha Jangra performing Dental Surgery & Restoration in Operatory"
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
                Comprehensive dental, scaling &amp; pain-free treatments by Dr. Neha Jangra.
              </p>
            </Link>

            {/* Card 5: Wellness Clinic */}
            <Link
              href="/services/wellness"
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="/enhanced/doctors.png"
                  alt="Dr. Krishan Jangra and Dr. Neha Jangra at Wellness Consultation Desk"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-[#1D64D8] shadow-sm">
                  <HeartPulse className="w-5 h-5 text-[#1D64D8]" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A1938] mb-1.5 group-hover:text-[#1D64D8] transition-colors tracking-tight">
                Wellness Clinic
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                Preventive health checkups, lifestyle care &amp; routine wellness consultations.
              </p>
            </Link>

            {/* Card 6: Patient Helpdesk */}
            <Link
              href="/contact"
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100">
                <img
                  src="/enhanced/helpdesk.png"
                  alt="Patient Helpdesk & Registration at Jangra Diagnostics Rohtak"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-[#1D64D8] shadow-sm">
                  <Clock className="w-5 h-5 text-[#1D64D8]" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A1938] mb-1.5 group-hover:text-[#1D64D8] transition-colors tracking-tight">
                Patient Helpdesk
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                Prompt registration, appointment assistance, nursing care &amp; fast report delivery.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* ========================================================
          WELLNESS CLINIC DEDICATED SECTION
         ======================================================== */}
      <section id="wellness-clinic" className="py-12 lg:py-16 bg-[#F8FAFD] border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Heading, Narrative & 4 Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center gap-2">
                  <span>WELLNESS CLINIC</span>
                  <span className="text-slate-300 font-normal">/</span>
                  <span>PREVENTIVE HEALTH</span>
                  <span className="text-slate-300 font-normal">/</span>
                  <span>LIFESTYLE CARE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.14]">
                  <span className="text-[#0A1938]">Comprehensive </span>
                  <span className="text-[#1D64D8]">Wellness Clinic</span>
                  <br />
                  <span className="text-[#0A1938] text-2xl sm:text-3xl lg:text-[32px] font-bold">for Your Whole Family</span>
                </h2>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl font-normal">
                Healthcare is more than treating illness—it is about preserving health and vitality. At Jangra Wellness Clinic, we provide personalized health assessments, routine screenings, and expert doctor consultations to help you stay ahead of lifestyle risks.
              </p>

              {/* 4 Wellness Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_4px_20px_rgba(29,100,216,0.04)] hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#EBF5FE] text-[#1D64D8] flex items-center justify-center mb-2.5">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0A1938] mb-1">Preventive Health Checkups</h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                    Complete vitals, blood panels, and metabolic risk assessments before symptoms appear.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_4px_20px_rgba(29,100,216,0.04)] hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#F0FDF4] text-emerald-600 flex items-center justify-center mb-2.5">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0A1938] mb-1">Chronic Disease Management</h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                    Targeted monitoring for diabetes, blood pressure, cholesterol, and thyroid disorders.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_4px_20px_rgba(29,100,216,0.04)] hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF7ED] text-amber-600 flex items-center justify-center mb-2.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0A1938] mb-1">Women &amp; Senior Wellness</h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                    Specialized evaluations for bone mineral density, hormonal wellness, and healthy aging.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_4px_20px_rgba(29,100,216,0.04)] hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF5FF] text-purple-600 flex items-center justify-center mb-2.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0A1938] mb-1">Lifestyle &amp; Diet Guidance</h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                    Actionable nutrition, physical wellness, and stress reduction tailored to your body reports.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-[#1D64D8] hover:bg-[#1554B8] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Wellness Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <Link
                  href="/services/wellness"
                  className="bg-white hover:bg-slate-50 text-[#0A1938] border border-slate-200 text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-2xs hover:shadow-sm inline-flex items-center gap-1.5"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>

                <a
                  href="https://wa.me/919813503420?text=Hello%20Jangra%20Diagnostics%2C%20I%20would%20like%20to%20know%20more%20about%20the%20Wellness%20Clinic."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 px-3 py-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none pr-3 pb-3 sm:pr-5 sm:pb-5">
                {/* Soft Emerald-Sky Pastel Offset Layer */}
                <div className="absolute bottom-0 right-0 w-[94%] h-[94%] bg-[#CBE6FF] rounded-[32px] sm:rounded-[36px] pointer-events-none" />

                {/* Wellness Image Card */}
                <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-xl aspect-[4/3] bg-white border-2 border-white z-10">
                  <img
                    src="/enhanced/doctors.png"
                    alt="Dr. Krishan Jangra and Dr. Neha Jangra at Doctor Consultation Desk in Jangra Diagnostics"
                    className="w-full h-full object-cover"
                  />
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-[#0A1938]">Doctor Consultation &amp; Vitals</span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-[#0A1938]/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-white/10 text-white max-w-[210px]">
                    <div className="text-[10px] uppercase font-bold text-[#38BDF8] tracking-wider">Preventive Care</div>
                    <div className="text-xs font-semibold mt-0.5 leading-snug">Personalized wellness for long-term health</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          MAX CARE HEALTH PACKAGES TEASER (Pamphlet Details & Offers)
         ======================================================== */}
      <HealthPackagesTeaser />

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

                {/* Main Clinic Entrance Image */}
                <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-lg aspect-[4/3] bg-white border-2 border-white z-10">
                  <img
                    src="/enhanced/entrance.png"
                    alt="Jangra Diagnostic Centre & Dental Clinic Grand Entrance on Sonipat Road Rohtak"
                    className="w-full h-full object-cover"
                  />
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1D64D8]" />
                    <span className="text-[11px] font-bold text-[#0A1938]">Centre Entrance • Sonipat Road</span>
                  </div>
                  <div className="absolute bottom-4 inset-x-4 bg-[#0A1938]/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-[#38BDF8] tracking-wider">Established 2013</div>
                      <a
                        href="https://maps.app.goo.gl/qMRGY4v1UGqNN1ce8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold mt-0.5 hover:text-[#38BDF8] transition-colors flex items-center gap-1"
                        title="Open on Google Maps"
                      >
                        <span>Near Elevated Railway Track, Rohtak</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                      Ample Parking
                    </span>
                  </div>
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
          CAMPUS & ON-SITE FACILITIES SHOWCASE
         ======================================================== */}
      <section className="py-12 lg:py-16 bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#1D64D8] uppercase mb-2 flex items-center gap-2">
                <span>CAMPUS &amp; INFRASTRUCTURE</span>
                <span className="text-slate-300 font-normal">/</span>
                <span>ON-SITE TOUR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.14]">
                <span className="text-[#0A1938]">Modern Facilities </span>
                <span className="text-[#1D64D8]">Designed for Patient Comfort</span>
              </h2>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1D64D8] hover:text-[#1554B8] group self-start md:self-end bg-[#EBF5FE] hover:bg-sky-100 px-5 py-2.5 rounded-full transition-all"
            >
              <span>Explore Complete Photo Gallery</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

            {/* 1. Grand Entrance & Campus */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="aspect-[16/11] relative overflow-hidden bg-slate-100">
                <img
                  src="/enhanced/entrance.png"
                  alt="Jangra Diagnostic Centre & Dental Clinic Grand Entrance on Sonipat Road Rohtak"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5 bg-[#0A1938]/85 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  Centre Frontage &amp; Gate
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-base text-[#0A1938] mb-1.5 group-hover:text-[#1D64D8] transition-colors">
                    Main Road Entrance &amp; Parking
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Located near India&apos;s First Elevated Railway Track on Sonipat Road with dedicated patient parking and wheelchair-friendly approach.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Computerized CR Radiography Console */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="aspect-[16/11] relative overflow-hidden bg-slate-100">
                <img
                  src="/enhanced/operator.png"
                  alt="Radiography technician at Computerized CR Workstation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5 bg-[#0A1938]/85 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  Digital X-Ray Console
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-base text-[#0A1938] mb-1.5 group-hover:text-[#1D64D8] transition-colors">
                    Computerized CR Workstation
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Real-time digital processing ensuring instantaneous doctor review and ALARA low-radiation safety protocols.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Dental Clinic Nursing & Billing Counter */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="aspect-[16/11] relative overflow-hidden bg-slate-100">
                <img
                  src="/enhanced/nursingStation.png"
                  alt="Jangra Dental Clinic Front Desk & Nursing Station"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5 bg-[#0A1938]/85 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  Dental Reception Station
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-base text-[#0A1938] mb-1.5 group-hover:text-[#1D64D8] transition-colors">
                    Dental Care Front Desk
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Dedicated dental reception counter providing seamless appointment booking and patient oral hygiene counseling.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Pathology Sample Collection Desk */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="aspect-[16/11] relative overflow-hidden bg-slate-100">
                <img
                  src="/enhanced/lab.png"
                  alt="Pathology laboratory sample collection station and BD supplies"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5 bg-[#0A1938]/85 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  Pathology Collection Desk
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-base text-[#0A1938] mb-1.5 group-hover:text-[#1D64D8] transition-colors">
                    Clinical Sample Collection
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Equipped with sterile BD Vacutainer supplies, barcoded collection tubes, and certified Max Lab pathology workflow.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. High-Resolution Ultrasound Suite */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="aspect-[16/11] relative overflow-hidden bg-slate-100">
                <img
                  src="/enhanced/ultrasound.png"
                  alt="Dr. Krishan Jangra conducting an ultrasound examination"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5 bg-[#0A1938]/85 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  Ultrasound Suite
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-base text-[#0A1938] mb-1.5 group-hover:text-[#1D64D8] transition-colors">
                    Ultrasound &amp; Colour Doppler Suite
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Advanced sonography room with high-resolution diagnostic probes, patient examination couch, and senior radiologist reporting.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Advanced Dental Surgery Operatory */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(29,100,216,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="aspect-[16/11] relative overflow-hidden bg-slate-100">
                <img
                  src="/enhanced/dentalDoctor.png"
                  alt="Dr. Neha Jangra and assistant performing dental surgery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5 bg-[#0A1938]/85 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                  Dental Surgery Operatory
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-base text-[#0A1938] mb-1.5 group-hover:text-[#1D64D8] transition-colors">
                    Sterilised Operatory Suite
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Equipped with ergonomic patient chair, surgical loupes, LED lighting, digital RVG imaging, and autoclaved instruments.
                  </p>
                </div>
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
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-sky-100 bg-slate-100">
                <img
                  src="/newPictures/WhatsApp Image 2026-10-14 at 1.37.14 PM.jpeg"
                  alt="Dr. Krishan Jangra — Consultant Radiologist"
                  className="w-full h-full object-cover"
                />
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
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-emerald-100 bg-slate-100">
                <img
                  src="/newPictures/WhatsApp Image 2026-10-14 at 1.37.04 PM.jpeg"
                  alt="Dr. Neha Jangra — Lead Dental Surgeon"
                  className="w-full h-full object-cover"
                />
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
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setIsBookingOpen(true)}
                    className="bg-white hover:bg-slate-50 text-[#0A1938] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all shadow-md inline-flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <Calendar className="w-4 h-4 text-[#1D64D8]" />
                    <span>Book Appointment</span>
                    <ArrowRight className="w-4 h-4 text-[#1D64D8]" />
                  </button>
                </div>
              </div>

              {/* Right Healthcare Team Image */}
              <div className="md:col-span-5 h-64 md:h-full min-h-[240px] md:min-h-[320px] relative overflow-hidden bg-slate-900">
                <img
                  src="/newPictures/WhatsApp Image 2026-10-14 at 1.37.20 PM.jpeg"
                  alt="Medical leadership and healthcare team at Jangra Diagnostic Centre & Dental Care Rohtak"
                  className="w-full h-full object-cover object-top"
                />
                {/* Soft gradient blend into navy background */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0A1938] to-transparent pointer-events-none hidden md:block" />
                <div className="absolute bottom-2.5 right-3 bg-black/60 backdrop-blur-sm text-[10px] text-sky-200 px-2.5 py-1 rounded-full font-medium">
                  Compassionate Patient Care
                </div>
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
                      suppressHydrationWarning
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
                      suppressHydrationWarning
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
                      suppressHydrationWarning
                      value={apptData.service}
                      onChange={(e) => setApptData({ ...apptData, service: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#1D64D8] focus:ring-1 focus:ring-[#1D64D8] bg-white"
                    >
                      <option value="Ultrasound">Ultrasound (3D/4D &amp; Doppler)</option>
                      <option value="Digital X-Ray">Digital X-Ray &amp; OPG</option>
                      <option value="Pathology Lab">Pathology Lab (MAX LAB)</option>
                      <option value="Dental Care">Dental Care Clinic</option>
                      <option value="Wellness Clinic">Wellness &amp; Preventive Clinic</option>
                      <option value="Guided Procedures">Guided Procedures</option>
                      <option value="Free General OPD">Free General OPD</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      suppressHydrationWarning
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
                    suppressHydrationWarning
                    placeholder="Doctor referral notes, preferred time slot..."
                    value={apptData.message}
                    onChange={(e) => setApptData({ ...apptData, message: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#1D64D8] focus:ring-1 focus:ring-[#1D64D8]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    suppressHydrationWarning
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
