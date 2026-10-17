import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactTicker from "@/components/ContactTicker";
import Preloader from "@/components/Preloader";
import Logo from "@/components/Logo";
import FloatingActions from "@/components/FloatingActions";

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
        url: "/gallery/logo.png",
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

        {/* Top Announcement Bar - Clean Single-line Mobile & Full Desktop */}
        <div className="bg-[#EEF6FD] text-slate-600 border-b border-sky-100/90 text-xs">
          {/* Desktop Full View */}
          <div className="hidden sm:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 justify-between items-center gap-2">
            <div className="flex items-center gap-3 sm:gap-4 text-xs font-medium text-slate-700">
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

            <div className="flex items-center gap-2">
              <a href="tel:+919813503420" className="text-xs font-semibold text-[#1D64D8] hover:underline">
                Free home sample collection
              </a>
            </div>
          </div>

          {/* Mobile Clean Single-line View */}
          <div className="flex sm:hidden items-center justify-between px-3.5 py-1.5 text-[11px] font-medium">
            <a href="tel:+919813503419" className="flex items-center gap-1 text-[#0A1938] font-bold hover:text-[#1D64D8]">
              <span className="text-blue-600">📞</span> +91 9813503419
            </a>
            <a href="tel:+919813503420" className="text-[#1D64D8] font-bold flex items-center gap-0.5">
              <span>Home Sample Collection</span>
              <span className="text-[10px]">→</span>
            </a>
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
              
              {/* Column 1: Branding & Logo */}
              <div className="space-y-3.5">
                <Link href="/" className="inline-flex items-center group py-1">
                  <img
                    src="/gallery/logo.png"
                    alt="Jangra Diagnostic Centre"
                    className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                  />
                </Link>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs font-normal">
                  Accurate diagnostics. Better health. Pathology partner: MAX LAB
                </p>
                {/* Social Connect Icons */}
                <div className="flex items-center gap-2.5 pt-1">
                  <a
                    href="https://www.facebook.com/jangradc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Jangra Diagnostics on Facebook"
                    className="w-8 h-8 rounded-full bg-white border border-sky-200/80 text-[#1877F2] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                    title="Follow on Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/919813503419"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="w-8 h-8 rounded-full bg-white border border-sky-200/80 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                    title="Chat on WhatsApp"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:drkkj.2k@gmail.com"
                    aria-label="Email Jangra Diagnostics"
                    className="w-8 h-8 rounded-full bg-white border border-sky-200/80 text-[#1D64D8] hover:bg-[#1D64D8] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                    title="Send Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
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
                    <Link href="/gallery" className="hover:text-[#1D64D8] transition-colors">Photo Gallery</Link>
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
                <div className="space-y-2 text-xs sm:text-sm text-slate-600 font-normal">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#1D64D8] shrink-0" />
                    <a href="tel:+919813503419" className="hover:text-[#1D64D8] transition-colors">+91 9813503419</a>
                    <span>/</span>
                    <a href="tel:+919813503420" className="hover:text-[#1D64D8] transition-colors">9813503420</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#1D64D8] shrink-0" />
                    <a href="mailto:drkkj.2k@gmail.com" className="hover:text-[#1D64D8] transition-colors">drkkj.2k@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <a href="https://wa.me/919813503419" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">WhatsApp: +91 9813503419</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 fill-[#1877F2] shrink-0" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <a href="https://www.facebook.com/jangradc/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors">facebook.com/jangradc</a>
                  </div>
                  <div className="flex items-start gap-2 pt-1 leading-relaxed max-w-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#1D64D8] shrink-0 mt-0.5" />
                    <span>
                      91-1/22K, Near India’s First Elevated Railway Track,<br />
                      Sonipat Road, Rohtak, Haryana – 124001
                    </span>
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

        {/* Global Floating Quick-Actions: Direct Call & WhatsApp */}
        <FloatingActions />
      </body>
    </html>
  );
}
