"use client";

import React from "react";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";

export default function ContactTicker() {
  const tickerItems = [
    {
      type: "phone",
      icon: Phone,
      label: "Direct Centre Helpline",
      value: "+91 9813503419 / 9813503420",
      href: "tel:+919813503419",
      actionText: "Call Now",
    },
    {
      type: "whatsapp",
      icon: MessageCircle,
      label: "WhatsApp Quick Connect",
      value: "Chat Directly with Reception",
      href: "https://wa.me/919813503420?text=Hello%20Jangra%20Diagnostics%2C%20I%20want%20to%20connect%20directly%20with%20the%20centre.",
      actionText: "Message",
    },
    {
      type: "badge",
      icon: Sparkles,
      label: "Free Home Sample Collection",
      value: "Helpline: 9813503420",
      href: "tel:+919813503420",
      actionText: "Book Pickup",
    },
    {
      type: "location",
      icon: MapPin,
      label: "Centre Location",
      value: "Opp. Gymkhana Club, Sonipat Road, Rohtak",
      href: "https://maps.google.com/?q=Jangra+Diagnostics+Rohtak",
      actionText: "Directions",
    },
    {
      type: "time",
      icon: Clock,
      label: "Timings",
      value: "Mon–Sat 8:00 AM – 8:00 PM | Sun 8:00 AM – 2:00 PM",
      href: "tel:+919813503419",
      actionText: "Open Today",
    },
  ];

  return (
    <div className="relative w-full bg-[#F4F9FD] text-slate-800 overflow-hidden border-y border-sky-100/90 py-2 sm:py-2.5 z-20 group shadow-xs">
      {/* Left Gradient Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 z-30 bg-gradient-to-r from-[#F4F9FD] to-transparent pointer-events-none" />

      {/* Right Gradient Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 z-30 bg-gradient-to-l from-[#F4F9FD] to-transparent pointer-events-none" />

      {/* Marquee Track (Left to Right continuous movement) */}
      <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
        {[...Array(2)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center space-x-6 sm:space-x-10 pr-6 sm:pr-10 shrink-0">
            {tickerItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.type === "location" || item.type === "whatsapp" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 hover:text-[#1D64D8] transition-colors py-0.5 px-2 rounded-lg hover:bg-sky-100/60"
                >
                  <span className="w-6 h-6 rounded-full bg-[#EBF5FE] border border-sky-200/80 flex items-center justify-center text-[#1D64D8] shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  
                  <span className="text-slate-500 font-medium text-[11px] sm:text-xs">
                    {item.label}:
                  </span>

                  <span className="font-bold text-[#0A1938] tracking-wide">
                    {item.value}
                  </span>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1D64D8] bg-white px-2.5 py-0.5 rounded-full border border-sky-200 shadow-2xs ml-0.5 hover:bg-[#1D64D8] hover:text-white transition-colors">
                    {item.actionText}
                    <ArrowRight className="w-3 h-3" />
                  </span>

                  <span className="text-sky-200 font-bold ml-3 select-none">/</span>
                </a>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
