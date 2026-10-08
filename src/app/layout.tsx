import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactTicker from "@/components/ContactTicker";
import Preloader from "@/components/Preloader";
import Logo from "@/components/Logo";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"]
});

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jangradiagnostics.com"),
  title: "Jangra Diagnostics | Diagnostic & Dental Care Centre in Rohtak",
  description: "Advanced diagnostics for a healthier tomorrow. High-resolution ultrasound, digital X-ray, MAX LAB pathology, guided procedures and dental care on Sonipat Road, Rohtak.",
  keywords: "Jangra Diagnostics, Diagnostic Centre in Rohtak, Ultrasound in Rohtak, Digital X-Ray in Rohtak, Pathology Lab in Rohtak, Dental Clinic in Rohtak, Home Sample Collection Rohtak",
  openGraph: {
    title: "Jangra Diagnostics | Diagnostic & Dental Care Centre in Rohtak",
    description: "State-of-the-art technology, expert radiologists and compassionate care, all under one roof.",
    url: "https://jangradiagnostics.com",
    siteName: "Jangra Diagnostics",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 400,
        alt: "Jangra Diagnostics Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className={`${plusJakartaSans.className} min-h-screen flex flex-col bg-white text-slate-900 antialiased`} suppressHydrationWarning>
        <Preloader />

        {/* Top Announcement Bar - Ditto match to reference screenshot */}
        <div className="bg-[#EEF6FD] text-slate-600 py-2.5 text-xs border-b border-sky-100/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
            {/* Phone numbers & Email */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs font-medium text-slate-700">
              <a href="tel:+919813503419" className="hover:text-blue-600 transition-colors">
                +91 9813503419
              </a>
              <span className="text-sky-300 font-bold">•</span>
              <a href="tel:+919813503420" className="hover:text-blue-600 transition-colors">
                +91 9813503420
              </a>
              <span className="text-sky-300 font-bold">•</span>
              <a href="mailto:drkkj.2k@gmail.com" className="hover:text-blue-600 transition-colors">
                drkkj.2k@gmail.com
              </a>
            </div>

            {/* Free Home Sample Collection link */}
            <div className="flex items-center gap-2">
              <a href="tel:+919813503420" className="text-xs font-medium text-[#1D64D8] hover:underline">
                Free home sample collection
              </a>
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <Navbar />

        {/* Direct Connect Moving Bar */}
        <ContactTicker />

        {/* Main Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer - Ditto Match to User Reference Screenshot */}
        <footer className="bg-[#EEF6FD] text-slate-600 pt-10 pb-8 sm:pt-12 sm:pb-10 border-t border-sky-100/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
              
              {/* Column 1: Branding & Logo matching Navbar */}
              <div className="space-y-3.5">
                <Link href="/" className="inline-flex items-center gap-2.5 sm:gap-3 group">
                  <img
                    src="/logo.png"
                    alt="Jangra Diagnostics"
                    className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="font-extrabold text-lg sm:text-xl tracking-tight transition-colors leading-none">
                      <span className="text-[#0A1938]">Jangra </span>
                      <span className="text-[#1D64D8]">Diagnostics</span>
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 tracking-[0.14em] uppercase mt-1">
                      Diagnostic &amp; Dental Care Centre
                    </span>
                  </div>
                </Link>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs font-normal">
                  Accurate diagnostics. Better health. Pathology partner: MAX LAB
                </p>
              </div>

              {/* Column 2: Quick Links (Paired with dots matching screenshot) */}
              <div>
                <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-3 flex items-center gap-2">
                  <span>QUICK LINKS</span>
                  <span className="text-slate-300 font-normal">/</span>
                  <span>EXPLORE</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-600 font-normal">
                  <div className="flex items-center gap-2">
                    <Link href="/" className="hover:text-[#1D64D8] transition-colors">Home</Link>
                    <span className="text-slate-400">·</span>
                    <Link href="/about" className="hover:text-[#1D64D8] transition-colors">About</Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href="/services" className="hover:text-[#1D64D8] transition-colors">Our Services</Link>
                    <span className="text-slate-400">·</span>
                    <Link href="/prices" className="hover:text-[#1D64D8] transition-colors">Health Packages</Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href="/doctors" className="hover:text-[#1D64D8] transition-colors">Doctors</Link>
                    <span className="text-slate-400">·</span>
                    <Link href="/contact" className="hover:text-[#1D64D8] transition-colors">Contact</Link>
                  </div>
                </div>
              </div>

              {/* Column 3: Contact Us */}
              <div>
                <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-3 flex items-center gap-2">
                  <span>CONTACT US</span>
                  <span className="text-slate-300 font-normal">/</span>
                  <span>HELPDESK</span>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 font-normal">
                  <div>
                    <a href="tel:+919813503419" className="hover:text-[#1D64D8] transition-colors">+91 9813503419</a>
                    <span> / </span>
                    <a href="tel:+919813503420" className="hover:text-[#1D64D8] transition-colors">9813503420</a>
                  </div>
                  <div>
                    <a href="mailto:drkkj.2k@gmail.com" className="hover:text-[#1D64D8] transition-colors">drkkj.2k@gmail.com</a>
                  </div>
                  <div className="leading-relaxed pt-0.5 max-w-sm">
                    91-1/22K, Near India’s First Elevated Railway Track,<br />
                    Sonipat Road, Rohtak, Haryana – 124001
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Copyright matching reference screenshot */}
            <div className="mt-8 sm:mt-10 text-xs text-slate-400 font-normal">
              © 2026 Jangra Diagnostics &amp; Dental Care Centre. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
