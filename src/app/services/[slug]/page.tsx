"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData: Record<string, any> = {
  "ultrasound": {
    name: "Ultrasound Services",
    description: "High-resolution real-time diagnostic sonography conducted by consultant radiologists. From routine abdominal examinations to Level-1, Level-2 Anomaly scans, 3D/4D obstetrical rendering, and Color Doppler hemodynamic evaluations.",
    img: "/services/ultrasound.jpg",
    details: [
      "Level-1 & Level-2 Targeted Anomaly scans",
      "3D/4D Ultrasound & Comprehensive Pregnancy Monitoring",
      "Color Doppler for vascular and fetal-maternal assessment",
      "Non-invasive, safe imaging with high clinical precision"
    ],
    features: "Safe • Non-Invasive • Senior Radiologist Supervision",
    fullPage: "/services/ultrasound"
  },
  "digital-x-ray": {
    name: "Digital X-Ray",
    description: "Low-radiation digital radiography providing instant high-contrast radiographic visualization of chest, bones, joints, spine, and specialized contrast examinations such as HSG.",
    img: "/services/xray.jpg",
    details: [
      "Instant image availability and enhanced diagnostic detail",
      "Significantly reduced radiation dose for patient protection",
      "Comprehensive general and specialized skeletal studies",
      "Hysterosalpingography (HSG) performed with sterile care"
    ],
    features: "Low Radiation • Instant Digital Processing • Precise",
    fullPage: "/services/digital-x-ray"
  },
  "pathology": {
    name: "Pathology Laboratory",
    description: "Full spectrum of blood, urine, and body-fluid investigations conducted in partnership with MAX LAB — a unit of Max Healthcare Institute Limited. Ensuring accurate, dependable, and timely reports.",
    img: "/services/pathology.jpg",
    details: [
      "Routine & Specialized Blood Profiling (CBC, LFT, KFT, Lipid)",
      "Diabetes monitoring including HbA1C & Blood Sugar",
      "Infection & Inflammation markers (CRP, Widal, Dengue)",
      "Free Home Sample Collection available across Rohtak (9813503420)"
    ],
    features: "MAX LAB Partner • High Precision • Free Home Collection",
    fullPage: "/services/pathology"
  },
  "guided-procedures": {
    name: "Guided Procedures & Intervention",
    description: "Image-guided interventional procedures performed with high precision and clinical safety by experienced radiologists under real-time ultrasound control.",
    img: "/services/ultrasound.jpg",
    details: [
      "Ultrasound-guided FNAC (Fine Needle Aspiration Cytology)",
      "Core Biopsy for soft tissue and organ lesions",
      "Percutaneous abscess drainage under local anesthesia",
      "Diagnostic and therapeutic fluid aspiration"
    ],
    features: "Minimally Invasive • Real-Time Ultrasound Guided • Sterile Protocols",
    fullPage: "/services/guided-procedures"
  },
  "dental": {
    name: "Jangra Dental Care",
    description: "Complete dental and oral health clinic headed by Dr. Neha Jangra (BDS, MMC Ambala, Ex-Intern Government Dental College, Rohtak). Offering gentle consultation, preventive care, and restorative dental solutions.",
    img: "/services/dental.jpg",
    details: [
      "Comprehensive dental examination & consultation",
      "Preventive scaling, plaque removal & cavity prevention",
      "Restorative fillings, pain relief & extractions",
      "Patient-first oral hygiene & lifestyle guidance"
    ],
    features: "Dr. Neha Jangra (BDS) • Modern Dental Setup • Gentle Care",
    fullPage: "/services/dental"
  },
  "ct-scan": {
    name: "CT Scan (Computed Tomography)",
    description: "Detailed cross-sectional multi-slice computed tomography scans providing high-contrast anatomical visualization for prompt clinical diagnostics and rapid emergency evaluation.",
    img: "/services/ct-scan.jpg",
    details: [
      "High-speed multi-slice volumetric acquisition",
      "Detailed brain, thorax, abdomen, and skeletal scanning",
      "Low-dose clinical radiation protocols",
      "Rapid specialist radiologist reporting"
    ],
    features: "High-Speed • Multi-Slice • Detailed Cross-Sectional",
    fullPage: "/services"
  },
  "mri": {
    name: "MRI Scan (Magnetic Resonance)",
    description: "Advanced non-invasive magnetic resonance imaging offering superior soft tissue contrast for precise neurological, spine, joint, and musculoskeletal diagnosis.",
    img: "/services/mri.jpg",
    details: [
      "High-resolution neuro & brain imaging",
      "Spine, joint and musculoskeletal evaluation",
      "Non-ionizing radiation diagnostic scanning",
      "Patient-friendly wide bore comfortable design"
    ],
    features: "Superior Soft-Tissue Contrast • Non-Ionizing • High Resolution",
    fullPage: "/services"
  }
};

export default function ServiceDetails() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FBFDFF] px-4">
        <div className="text-center bg-white p-10 rounded-3xl shadow-[0_4px_24px_rgba(10,25,56,0.04)] border border-slate-100 max-w-md">
          <h1 className="text-2xl font-bold text-[#0A1938] mb-2">Service Overview</h1>
          <p className="text-slate-500 text-sm mb-6 font-normal">
            Please browse all verified diagnostic and healthcare services at Jangra Diagnostics.
          </p>
          <Link
            href="/services"
            className="inline-block bg-[#1D64D8] text-white px-6 py-3 rounded-full font-medium text-xs sm:text-sm shadow-sm hover:bg-[#1554B8] transition-colors"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFDFF] pb-12 sm:pb-16">
      {/* Light Editorial Page Header */}
      <div className="bg-[#F5F9FD] border-b border-sky-100/80 py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-[#1D64D8] hover:text-[#1554B8] mb-3 transition-colors text-xs font-medium">
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Back to Services
          </Link>
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center gap-2">
            <span>DIAGNOSTIC SERVICE</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>CLINICAL EXCELLENCE</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1938] tracking-tight leading-[1.14] mb-3"
          >
            {service.name}
          </motion.h1>
          <div className="inline-block px-3 py-1 rounded-full bg-[#EBF5FE] text-[#1D64D8] text-xs font-semibold">
            {service.features}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_4px_20px_rgba(10,25,56,0.04)] border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-1/2 relative min-h-[260px] md:min-h-full bg-slate-100">
            <img 
              src={service.img} 
              alt={service.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938] mb-2">About the Service</h2>
              <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed mb-6">
                {service.description}
              </p>

              <h3 className="text-lg font-bold text-[#0A1938] mb-3">Key Clinical Highlights</h3>
              <ul className="space-y-2.5 mb-6">
                {service.details.map((detail: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#1D64D8] mr-2.5 shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-xs sm:text-sm font-normal leading-snug">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2.5 items-center">
              {service.fullPage && (
                <Link
                  href={service.fullPage}
                  className="px-5 py-2.5 bg-[#1D64D8] hover:bg-[#1554B8] text-white font-medium rounded-full shadow-sm transition-all text-xs inline-flex items-center"
                >
                  View Full Service Details
                </Link>
              )}
              <a 
                href={`https://wa.me/919813503420?text=I%20want%20to%20book%20an%20appointment%20for%20${encodeURIComponent(service.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white hover:bg-slate-50 text-[#0A1938] border border-slate-200 font-medium rounded-full shadow-sm transition-all text-xs inline-flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-[#1D64D8]" />
                Book on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
