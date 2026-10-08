"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import BookingModal from "@/components/BookingModal";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("General Enquiry");
  const [message, setMessage] = useState("");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    const text = `HELLO JANGRA DIAGNOSTICS,\n\nI have an enquiry:\nName: ${name}\nPhone: ${phone}\nService/Subject: ${service}\nMessage: ${message || 'Please provide details.'}`;
    const url = `https://wa.me/919813503420?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FBFDFF] pb-12 sm:pb-16">
      {/* Light Editorial Page Header */}
      <div className="bg-[#F5F9FD] border-b border-sky-100/80 py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center justify-center gap-2">
            <span>SONIPAT ROAD, ROHTAK</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>CONTACT US</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>HELP DESK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Get In Touch </span>
            <span className="text-[#1D64D8]">With Us</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed mt-3">
            We are here to assist you with ultrasound appointments, lab tests, home sample collection, and instant digital report inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        
        {/* Quick Action Cards Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5 mb-8">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] hover:shadow-md hover:border-sky-100 transition-all text-center flex flex-col items-center justify-center cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EBF5FE] text-[#1D64D8] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm sm:text-base text-[#0A1938]">Book Test</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Quick online slot</span>
          </button>

          <a
            href="tel:+919813503419"
            className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] hover:shadow-md hover:border-sky-100 transition-all text-center flex flex-col items-center justify-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EBF5FE] text-[#1D64D8] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm sm:text-base text-[#0A1938]">Call Helpline</span>
            <span className="text-[11px] text-slate-400 mt-0.5">+91 9813503419</span>
          </a>

          <a
            href="tel:+919813503420"
            className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] hover:shadow-md hover:border-sky-100 transition-all text-center flex flex-col items-center justify-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm sm:text-base text-[#0A1938]">Home Collection</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Free in Rohtak</span>
          </a>

          <a
            href="https://wa.me/919813503420?text=Hello%20Jangra%20Diagnostics"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] hover:shadow-md hover:border-sky-100 transition-all text-center flex flex-col items-center justify-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EBF5FE] text-[#1D64D8] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm sm:text-base text-[#0A1938]">WhatsApp Desk</span>
            <span className="text-[11px] text-slate-400 mt-0.5">Instant response</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] space-y-3">
              <div className="w-10 h-10 bg-[#EBF5FE] text-[#1D64D8] rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#0A1938] mb-1.5">Centre Address</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  <span className="font-medium text-slate-800">Jangra Diagnostic &amp; Dental Care Centre</span><br />
                  91-1/22K, Near India&apos;s First Elevated Railway Track,<br />
                  Sonipat Road, Rohtak, Haryana – 124001
                </p>
                <div className="mt-3 text-[11px] bg-[#F5F9FD] p-2.5 rounded-xl text-slate-600 border border-sky-100/60">
                  ✓ Convenient parking facilities available on premises
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] space-y-3">
              <div className="w-10 h-10 bg-[#EBF5FE] text-[#1D64D8] rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#0A1938] mb-2">Phone &amp; Email</h3>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-xs w-20">Helpline:</span>
                    <a href="tel:+919813503419" className="font-medium text-[#1D64D8] hover:underline">+91 9813503419</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-xs w-20">Collection:</span>
                    <a href="tel:+919813503420" className="font-medium text-[#1D64D8] hover:underline">+91 9813503420</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-xs w-20">Email:</span>
                    <a href="mailto:drkkj.2k@gmail.com" className="font-medium text-slate-700 hover:text-[#1D64D8]">drkkj.2k@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] space-y-3">
              <div className="w-10 h-10 bg-[#EBF5FE] text-[#1D64D8] rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#0A1938] mb-2">Centre Timings</h3>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-800">Monday - Saturday:</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-slate-800">Sunday:</span>
                    <span>8:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF5FE] text-[#1D64D8] text-xs font-semibold mb-3">
                  <MessageCircle className="w-3.5 h-3.5" /> Direct Support via WhatsApp
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A1938] mb-1.5">
                  <span className="text-[#0A1938]">Send Us an </span>
                  <span className="text-[#1D64D8]">Inquiry</span>
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm font-normal mb-5">
                  Fill in your details below and our team will connect with you promptly.
                </p>

                <form onSubmit={handleWhatsAppRedirect} className="space-y-3.5">
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Anil Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#1D64D8] focus:ring-2 focus:ring-[#1D64D8]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10 digit mobile"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#1D64D8] focus:ring-2 focus:ring-[#1D64D8]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Service / Requirement</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#1D64D8] focus:ring-2 focus:ring-[#1D64D8]/10 transition-all"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Ultrasound Appointment">Ultrasound Appointment</option>
                      <option value="Digital X-Ray">Digital X-Ray</option>
                      <option value="Pathology Blood/Urine Test">Pathology Blood/Urine Test</option>
                      <option value="Free Home Sample Collection">Free Home Sample Collection</option>
                      <option value="Dental Clinic Visit">Dental Clinic Visit (Dr. Neha Jangra)</option>
                      <option value="Guided Procedure">Guided Procedure (FNAC/Biopsy)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Your Message</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please mention any details or query you have..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#1D64D8] focus:ring-2 focus:ring-[#1D64D8]/10 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1D64D8] hover:bg-[#1554B8] text-white font-medium py-3 rounded-full shadow-sm transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp (+91 9813503420)</span>
                  </button>
                </form>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 text-xs text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1D64D8] shrink-0" />
                <span>Your privacy is protected. Inquiries are handled directly by Jangra Diagnostics staff.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Embedded Google Maps Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-[0_4px_20px_rgba(10,25,56,0.04)] border border-slate-100 overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-[#FBFDFF]">
            <div>
              <h3 className="text-lg font-bold text-[#0A1938]">Find Us on Google Maps</h3>
              <p className="text-slate-500 text-xs mt-0.5">91-1/22K, Near India&apos;s First Elevated Railway Track, Sonipat Road, Rohtak</p>
            </div>
            <a
              href="https://maps.google.com/?q=Sonipat+Road+Rohtak+Haryana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#1D64D8] hover:underline"
            >
              Open in Google Maps App →
            </a>
          </div>
          <div className="h-96 w-full relative">
            <iframe
              src="https://www.google.com/maps?q=Sonipat+Road,+Rohtak,+Haryana+124001&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
