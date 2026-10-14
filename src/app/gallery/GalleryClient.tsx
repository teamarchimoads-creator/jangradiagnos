"use client";

// Gallery client component - fully updated with verified clinic photography
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { 
  galleryItems, 
  galleryCategories, 
  GalleryCategory, 
  GalleryItem 
} from "@/data/galleryData";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles, 
  Check, 
  Layers, 
  Filter,
  Camera
} from "lucide-react";

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  // Lightbox navigation helpers
  const handleOpenLightbox = (index: number) => {
    setActiveItemIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setActiveItemIndex(null);
  }, []);

  const handleNext = useCallback(() => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  }, [activeItemIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  }, [activeItemIndex, filteredItems.length]);

  // Keyboard controls & body scroll lock
  useEffect(() => {
    if (activeItemIndex === null) {
      document.body.style.overflow = "unset";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeItemIndex, handleCloseLightbox, handleNext, handlePrev]);

  const currentItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  return (
    <div className="space-y-6">
      {/* Category Filter Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
        {galleryCategories.map((cat) => {
          const isActive = selectedCategory === cat;
          const count = cat === "All" 
            ? galleryItems.length 
            : galleryItems.filter((i) => i.category === cat).length;

          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveItemIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? "bg-[#1D64D8] text-white shadow-md shadow-[#1D64D8]/20 scale-102"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-[#1D64D8]/40 hover:bg-slate-50"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(idx)}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] hover:shadow-xl hover:border-sky-200 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-100">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Category Pill Tag */}
              <div className="absolute top-3 left-3 bg-[#0A1938]/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                {item.category}
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1D64D8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* Content Metadata */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#0A1938] group-hover:text-[#1D64D8] transition-colors leading-snug mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Sonipat Road, Rohtak</span>
                <span className="font-semibold text-[#1D64D8] group-hover:underline flex items-center gap-1">
                  View Full Photo →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-100">
          <Camera className="w-10 h-10 text-slate-300 mx-auto mb-2" />
          <h4 className="text-base font-bold text-slate-700">No images in this category</h4>
          <p className="text-xs text-slate-400 mt-1">Please select "All" to view the complete photo archive.</p>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      {currentItem && activeItemIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-[#0A1938]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={handleCloseLightbox}
        >
          {/* Modal Container */}
          <div 
            className="relative w-full max-w-5xl bg-[#0F2042] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-[#0A1938]">
              <div className="flex items-center gap-2.5">
                <span className="bg-[#1D64D8] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {currentItem.category}
                </span>
                <span className="text-xs text-sky-200">
                  {activeItemIndex + 1} / {filteredItems.length}
                </span>
              </div>

              <button
                onClick={handleCloseLightbox}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative flex-1 bg-black/60 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[450px]">
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className="max-h-[68vh] w-auto max-w-full object-contain mx-auto select-none"
              />

              {/* Prev / Next Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#1D64D8] text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#1D64D8] text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Caption Footer */}
            <div className="p-5 sm:p-6 bg-[#0A1938] border-t border-white/10 text-white space-y-1.5">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {currentItem.caption}
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] text-sky-400 font-medium">
                <span>Jangra Diagnostic &amp; Dental Care Centre • Rohtak, Haryana</span>
                <span className="hidden sm:inline text-slate-400">Use ← → arrow keys to navigate, Esc to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
