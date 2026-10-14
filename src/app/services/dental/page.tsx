import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowLeft, CheckCircle2, Calendar, Phone, Sparkles, User, ShieldCheck, 
  Smile, Activity, Stethoscope, Clock
} from "lucide-react";

export const metadata: Metadata = {
  title: "Jangra Dental Care & Clinic | Dr. Neha Jangra (BDS) | Rohtak",
  description: "Comprehensive dental care in Rohtak at Jangra Dental Care: RCT, Partial & Full Mouth Implants, Smile Designing, Veneers, Crowns, Scaling, Teeth Whitening & RVG Digital Dental X-Rays by in-house and on-call specialist doctors.",
};

export default function DentalPage() {
  const dentalTreatments = [
    {
      name: "RCT (Root Canal Treatment)",
      desc: "Painless single-sitting and multi-sitting root canal therapy to save infected or severely damaged teeth, eliminate persistent pain, and preserve natural tooth structure.",
      badge: "Pain Relief & Preservation"
    },
    {
      name: "Implants (Partial & Full Mouth)",
      desc: "Permanent titanium dental implants replacing single missing teeth, multiple gaps, or full-arch edentulous cases with natural aesthetics and chewing function.",
      badge: "Permanent Tooth Replacement"
    },
    {
      name: "Smile Designing",
      desc: "Custom aesthetic analysis and digital smile planning harmonizing tooth proportions, gum contour, and facial symmetry for an exceptional natural smile.",
      badge: "Aesthetic Transformation"
    },
    {
      name: "Cosmetic Procedures",
      desc: "Advanced aesthetic dental treatments including tooth contouring, composite bonding, diastema (gap) closures, and aesthetic enamel recontouring.",
      badge: "Cosmetic Dentistry"
    },
    {
      name: "Veneers and Laminates",
      desc: "Ultra-thin, custom-crafted porcelain or composite shells bonded to the front of teeth to fix deep stains, chipped enamel, and minor misalignments.",
      badge: "Flawless Aesthetics"
    },
    {
      name: "Crowns and Bridges",
      desc: "High-strength metal-free zirconia and ceramic crowns and fixed bridge prostheses to restore broken, weakened, or missing teeth with long-lasting durability.",
      badge: "Restorative Strength"
    },
    {
      name: "Fillings and Sealants",
      desc: "Tooth-colored composite resin fillings for cavity repair and preventive pit-and-fissure sealants to shield molars from decay in children and adults.",
      badge: "Cavity Restoration & Protection"
    },
    {
      name: "Scaling & Deep Cleaning",
      desc: "Ultrasonic scaling to remove stubborn calculus, dental plaque, and bacterial tartar, curing bleeding gums and halting periodontal disease.",
      badge: "Gum & Periodontal Health"
    },
    {
      name: "Teeth Whitening",
      desc: "Safe and effective in-office dental bleaching treatments to remove stubborn food, tea, coffee, and tobacco stains, brightening teeth several shades lighter.",
      badge: "Bright Smile Enhancement"
    },
    {
      name: "Teeth Reshaping",
      desc: "Gentle odontoplasty and enamel recontouring to smooth irregular edges, minor overlaps, and uneven tooth lengths for a balanced, harmonious bite.",
      badge: "Minor Alignment & Contouring"
    },
    {
      name: "RVG (Digital Dental X-Rays)",
      desc: "Real-time RadioVisioGraphy (RVG) sensors providing instant, high-magnification intraoral radiographs with minimal radiation dose for pinpoint diagnosis.",
      badge: "Instant Low-Radiation Imaging"
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
            <span>DENTAL CARE</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>SPECIALIST ORAL HEALTH</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Jangra </span>
            <span className="text-[#1D64D8]">Dental Care Clinic</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-2xl leading-relaxed mt-3">
            All types of dental treatments available under one roof—conducted by experienced in-house surgeons and on-call specialist doctors for advanced treatments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="grid lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-8">
            
            {/* Dental Banner */}
            <div className="aspect-16/9 rounded-3xl overflow-hidden bg-slate-100 relative border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)]">
              <img
                src="/enhanced/dentalDoctor.png"
                alt="Jangra Dental Care Operatory Suite in Rohtak"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#0A1938]/85 text-white text-[11px] font-medium px-3.5 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-2">
                <Smile className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Modern Dental Operatory Suite</span>
              </div>
            </div>

            {/* Doctor & Clinic Highlights */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100 shadow-sm">
                <img
                  src="/newPictures/WhatsApp Image 2026-10-14 at 1.37.04 PM.jpeg"
                  alt="Dr. Neha Jangra - Dental Surgeon at Jangra Dental Care"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1.5 text-center md:text-left flex-1">
                <span className="text-[10px] bg-[#EBF5FE] text-[#1D64D8] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                  Lead Dental Surgeon
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938]">
                  Dr. Neha Jangra
                </h2>
                <p className="text-[#1D64D8] font-semibold text-xs">
                  BDS (MMC Ambala) • Ex-Intern, Government Dental College (GDC), Rohtak
                </p>
                <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed pt-1">
                  All types of dental treatment are available at Jangra Dental Care, delivered by in-house surgeons and dedicated on-call specialists (Endodontists, Implantologists, Orthodontists, and Prosthodontists) ensuring gentle, hygienic, and precise dental solutions.
                </p>
              </div>
            </div>

            {/* Treatments Section */}
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-[#1D64D8] tracking-widest uppercase">Comprehensive Treatments</span>
                <h2 className="text-2xl font-bold text-[#0A1938] mt-1">
                  Available Dental Treatments &amp; Procedures
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  From routine restorative care to high-end smile transformations and digital dental radiology:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {dentalTreatments.map((treatment, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] hover:shadow-md hover:border-sky-100 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold text-[#1D64D8] bg-[#EBF5FE] px-2 py-0.5 rounded-md">
                          {treatment.badge}
                        </span>
                        <span className="text-xs font-bold text-slate-300">#{idx + 1}</span>
                      </div>
                      <h3 className="text-base font-bold text-[#0A1938] mb-1.5">
                        {treatment.name}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-normal">
                        {treatment.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] text-[#1D64D8] font-medium">
                      <span>Available Daily</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient Hygiene & Safety Assurance */}
            <div className="bg-[#F8FAFD] rounded-3xl p-6 border border-sky-100/70 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1D64D8] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#1D64D8]" />
                <span>Sterilization &amp; Clinical Safety Standards</span>
              </div>
              <h3 className="text-lg font-bold text-[#0A1938]">
                Strict 4-Step Autoclave &amp; Infection Control Protocols
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Your oral health and safety are our highest priorities. All instruments undergo class-B vacuum autoclaving, pouch-sealing, and sterile chair-side opening. Coupled with our instant RVG digital dental X-rays, you receive prompt diagnosis with minimal radiation exposure.
              </p>
            </div>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0A1938] text-white rounded-3xl p-6 sm:p-7 shadow-xl sticky top-24 space-y-5">
              <div className="text-xs font-bold tracking-widest text-[#38BDF8] uppercase">
                EXPERT DENTAL CONSULTATION
              </div>
              <h3 className="text-2xl font-extrabold leading-snug">
                Book a Dental Consultation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Consult with Dr. Neha Jangra for painless consultations, tooth pain evaluation, implants, or cosmetic smile designing.
              </p>

              <div className="space-y-3 text-xs text-slate-200 border-t border-slate-700/60 pt-4">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>In-House &amp; On-Call Specialist Doctors</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Activity className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>Instant RVG Digital Dental X-Rays</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>Mon – Sat: 9:00 AM – 7:30 PM</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href="https://wa.me/919813503420?text=Hello%20Jangra%20Diagnostics%2C%20I%20would%20like%20to%20book%20a%20Dental%20Consultation%20with%20Dr.%20Neha%20Jangra."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1D64D8] hover:bg-[#1554B8] text-white font-semibold py-3.5 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book on WhatsApp (9813503420)</span>
                </a>

                <a
                  href="tel:+919813503419"
                  className="w-full bg-white/10 hover:bg-white/15 text-white font-medium py-3 rounded-2xl transition-all flex items-center justify-center gap-2 text-xs border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Call Directly: +91 9813503419</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-700/60 text-[11px] text-slate-400">
                📍 Sonipat Road, Near India&apos;s First Elevated Railway Track, Rohtak
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
