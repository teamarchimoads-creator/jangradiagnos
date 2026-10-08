"use client";

import { useState } from "react";
import { Expand, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  category: string;
  title: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, src: "/gallery/image_1.jpeg", category: "Reception", title: "Patient Reception & Registration" },
  { id: 2, src: "/gallery/image_2.jpeg", category: "Facilities", title: "Patient Waiting Area & Ambience" },
  { id: 3, src: "/gallery/image_18.jpeg", category: "Ultrasound", title: "Ultrasound Diagnostic Suite" },
  { id: 4, src: "/gallery/image_13.jpeg", category: "X-Ray", title: "Digital X-Ray Radiography Unit" },
  { id: 5, src: "/gallery/blood_tests.jpg", category: "Pathology", title: "MAX LAB Partner Pathology Section" },
  { id: 6, src: "/gallery/image_17.jpeg", category: "Dental Clinic", title: "Dental Consultation & Treatment Desk" },
  { id: 7, src: "/gallery/image_26.jpeg", category: "Diagnostic Equipment", title: "Guided Procedures & Clinical Console" },
  { id: 8, src: "/gallery/image_11.jpeg", category: "Doctors", title: "Medical Radiologist Reporting Room" },
  { id: 9, src: "/gallery/image_6.jpeg", category: "Diagnostic Equipment", title: "Precision Imaging Equipment" },
  { id: 10, src: "/gallery/image_16.jpeg", category: "Centre", title: "Jangra Diagnostics Facility Wing" },
  { id: 11, src: "/gallery/image_19.jpeg", category: "Facilities", title: "Clinical Hygiene & Care Station" },
  { id: 12, src: "/gallery/home_collection.jpg", category: "Facilities", title: "Doorstep Sample Collection Service" },
  { id: 13, src: "/gallery/image_3.jpeg", category: "Centre", title: "Internal Diagnostics Corridor" },
  { id: 14, src: "/gallery/image_4.jpeg", category: "Reception", title: "Patient Helpdesk & Information" },
  { id: 15, src: "/gallery/image_5.jpeg", category: "Diagnostic Equipment", title: "Clinical Monitoring Station" },
  { id: 16, src: "/gallery/image_7.jpeg", category: "Facilities", title: "Sanitized Sample Handling Station" }
];

const categories = [
  "All",
  "Centre",
  "Reception",
  "Diagnostic Equipment",
  "Ultrasound",
  "X-Ray",
  "Pathology",
  "Dental Clinic",
  "Doctors",
  "Facilities"
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredImages = selectedCategory === "All"
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="bg-[#FBFDFF] min-h-screen pb-12 sm:pb-16">
      {/* Light Editorial Page Header */}
      <div className="bg-[#F5F9FD] border-b border-sky-100/80 py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center justify-center gap-2">
            <span>FACILITY TOUR</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>INFRASTRUCTURE</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Centre </span>
            <span className="text-[#1D64D8]">Photo Gallery</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed mt-3">
            Take a visual tour through our ultrasound diagnostic suite, digital X-ray unit, MAX LAB pathology department, dental clinic, and patient waiting areas.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        
        {/* Category Filter Bar */}
        <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-[0_4px_20px_rgba(10,25,56,0.04)] border border-slate-100 mb-6 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#1D64D8]" /> Categories:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#1D64D8] text-white shadow-sm font-semibold"
                    : "bg-[#F5F9FD] text-slate-600 hover:bg-[#EEF6FD] font-normal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-[0_4px_20px_rgba(10,25,56,0.04)] border border-slate-100 hover:shadow-lg hover:border-sky-100 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              <div className="aspect-4/3 relative overflow-hidden bg-slate-100">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg">
                    <Expand className="w-3.5 h-3.5 text-[#1D64D8]" />
                  </div>
                </div>
                <div className="absolute top-2.5 left-2.5 bg-[#0A1938]/80 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                  {item.category}
                </div>
              </div>

              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <h3 className="font-bold text-[#0A1938] text-xs sm:text-sm leading-snug group-hover:text-[#1D64D8] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100">
            <p className="text-slate-500 text-sm">No images currently in this category.</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            aria-label="Previous Image"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredImages[activeImageIndex].src}
              alt={filteredImages[activeImageIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-cyan-400 text-xs uppercase font-bold tracking-wider">
                {filteredImages[activeImageIndex].category}
              </span>
              <p className="text-white text-base font-bold mt-1">
                {filteredImages[activeImageIndex].title}
              </p>
            </div>
          </div>

          <button
            onClick={nextImage}
            aria-label="Next Image"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
