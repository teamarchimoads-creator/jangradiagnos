"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Menu, X, ChevronRight, Phone, MessageCircle } from "lucide-react";
import BookingModal from "@/components/BookingModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "Health Packages", href: "/prices" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Sticky Main Navigation - Ditto Match to White Header Reference */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">

          {/* Logo Area: Clean White Background with Authentic Logo */}
          <Link href="/" className="flex items-center shrink-0 group py-1">
            <img
              src="/logo.png"
              alt="Jangra Diagnostic Centre"
              className="h-11 sm:h-12 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors py-2 ${isActive
                      ? "text-[#1D64D8] font-semibold"
                      : "text-slate-700 hover:text-[#1D64D8]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Area: Royal Blue Pill Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setIsBookingOpen(true)}
              className="bg-[#1D64D8] hover:bg-[#1554B8] text-white font-medium text-sm px-6 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Right Bar: Book Button + Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setIsBookingOpen(true)}
              className="bg-[#1D64D8] hover:bg-[#1554B8] text-white font-medium text-xs px-4 py-2 rounded-full flex items-center gap-1 shadow-sm"
            >
              <span>Book</span>
            </button>

            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 p-2 rounded-xl bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-[85%] max-w-sm bg-white text-slate-800 h-full shadow-2xl flex flex-col p-6 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center py-1">
                <img src="/logo.png" alt="Jangra Diagnostic Centre" className="h-9 w-auto object-contain" />
              </Link>
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-800 bg-slate-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-1 py-6 flex-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-3 rounded-xl font-medium text-sm transition-colors ${isActive ? "bg-blue-50 text-[#1D64D8] font-bold" : "text-slate-700 hover:bg-slate-50"
                      }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTAs */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                suppressHydrationWarning
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookingOpen(true);
                }}
                className="w-full bg-[#1D64D8] hover:bg-[#1554B8] text-white font-medium py-3 rounded-full shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+919813503419"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2.5 rounded-full flex items-center justify-center gap-1.5 text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  Call Us
                </a>
                <a
                  href="https://wa.me/919813503420"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-medium py-2.5 rounded-full flex items-center justify-center gap-1.5 text-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
