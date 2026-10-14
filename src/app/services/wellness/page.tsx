import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Calendar, Phone, Sparkles, HeartPulse, ShieldCheck, Activity, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Wellness & Preventive Health Clinic | Jangra Diagnostics | Rohtak",
  description: "Comprehensive preventive health checkups, chronic disease management, and personalized lifestyle wellness consultations at Jangra Diagnostics in Rohtak.",
};

export default function WellnessClinicPage() {
  const wellnessPillars = [
    {
      title: "Comprehensive Preventive Health Screenings",
      desc: "Early detection is the key to longevity. We offer systematic vital checks, routine blood profiles, and targeted organ screenings to identify risks before symptoms appear.",
      points: [
        "Complete vitals check (BP, SpO2, BMI, pulse & temperature)",
        "Advanced metabolic & lipid panel assessments",
        "Liver, kidney, and thyroid function evaluations",
        "Diabetes screening including HbA1c & fasting glucose"
      ]
    },
    {
      title: "Chronic Disease & Lifestyle Management",
      desc: "Evidence-based clinical strategies to monitor and manage long-term conditions with regular follow-ups and personalized medical guidance.",
      points: [
        "Hypertension & cardiovascular risk monitoring",
        "Comprehensive diabetes management programs",
        "Thyroid disorder tracking & medication review",
        "Fatty liver & metabolic syndrome management"
      ]
    },
    {
      title: "Women's & Geriatric Senior Wellness",
      desc: "Specialized care tailored to different stages of life, focusing on bone health, hormonal balance, nutritional sufficiency, and healthy aging.",
      points: [
        "Bone mineral health & Vitamin D/B12 deficiency panels",
        "Anemia and nutritional deficiency screenings",
        "Senior citizen comprehensive annual health checks",
        "Maternal & post-natal wellness monitoring"
      ]
    },
    {
      title: "Holistic Health, Diet & Nutrition Counseling",
      desc: "Actionable dietary and habit recommendations designed to boost natural vitality, reduce chronic inflammation, and maintain a healthy weight.",
      points: [
        "Personalized dietary guidelines based on lab reports",
        "Guidance on physical activity & sustainable habits",
        "Stress reduction & sleep hygiene counseling",
        "Preventive immunity boosting protocols"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBFDFF] pb-12 sm:pb-16">
      {/* Editorial Page Header */}
      <div className="bg-[#F5F9FD] border-b border-sky-100/80 py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-[#1D64D8] hover:text-[#1554B8] mb-3 transition-colors text-xs font-medium">
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Back to All Services
          </Link>
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#1D64D8] mb-2 flex items-center gap-2">
            <span>WELLNESS CLINIC</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>PREVENTIVE HEALTH</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Wellness &amp; </span>
            <span className="text-[#1D64D8]">Preventive Health Clinic</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-2xl leading-relaxed mt-3">
            Proactive health evaluations, lifestyle consultations, and preventive full-body screenings for you and your family.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Banner Image */}
            <div className="aspect-16/9 rounded-2xl overflow-hidden bg-slate-100 relative border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)]">
              <img
                src="/enhanced/doctors.png"
                alt="Dr. Krishan Jangra and Dr. Neha Jangra at Wellness Consultation Suite in Rohtak"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#0A1938]/85 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                Wellness &amp; Consultation Suite
              </div>
            </div>

            {/* Overview Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1D64D8] uppercase tracking-wider mb-2">
                <HeartPulse className="w-4 h-4 text-[#1D64D8]" />
                <span>Proactive Healthcare Philosophy</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0A1938] mb-3">
                Healthcare that Begins Before Illness Strikes
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                At Jangra Diagnostics &amp; Dental Care Centre, our Wellness Clinic bridges the gap between diagnostic investigation and everyday vitality. We believe the best medical care is preventive. By combining high-precision pathology (Max Lab) and advanced ultrasound imaging with personalized health consultations, we help identify early risk factors, manage chronic conditions, and empower healthier living for all age groups.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-[#F5F9FD] rounded-xl p-3.5 border border-sky-100/60">
                  <Activity className="w-5 h-5 text-[#1D64D8] mb-1.5" />
                  <div className="text-xs font-bold text-[#0A1938]">Preventive Checks</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Early detection of metabolic &amp; lifestyle risks</p>
                </div>
                <div className="bg-[#F5F9FD] rounded-xl p-3.5 border border-sky-100/60">
                  <ShieldCheck className="w-5 h-5 text-[#1D64D8] mb-1.5" />
                  <div className="text-xs font-bold text-[#0A1938]">Doctor-Led</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Expert review of all diagnostic reports</p>
                </div>
                <div className="bg-[#F5F9FD] rounded-xl p-3.5 border border-sky-100/60">
                  <Sparkles className="w-5 h-5 text-[#1D64D8] mb-1.5" />
                  <div className="text-xs font-bold text-[#0A1938]">Affordable Packages</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Transparent rates with no hidden charges</p>
                </div>
              </div>
            </div>

            {/* Service Pillars Grid */}
            <div className="grid md:grid-cols-2 gap-5">
              {wellnessPillars.map((pillar, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(10,25,56,0.04)] flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A1938] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4">
                      {pillar.desc}
                    </p>
                  </div>
                  <ul className="space-y-2 border-t border-slate-50 pt-3">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1D64D8] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          {/* Right Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Booking Card */}
            <div className="bg-[#0A1938] text-white rounded-2xl p-6 shadow-xl sticky top-24">
              <div className="text-xs font-bold tracking-widest text-[#38BDF8] uppercase mb-2">
                APPOINTMENTS &amp; WALK-INS
              </div>
              <h3 className="text-xl font-bold mb-2">
                Visit the Wellness Clinic
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Schedule your preventive consultation or full-body health audit today. Same-day walk-ins are also welcome.
              </p>

              <div className="space-y-3 mb-6 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#38BDF8]" />
                  <span>Mon – Sat: 8:00 AM – 7:30 PM</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#38BDF8]" />
                  <span>+91 9813503419 / 9813503420</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-[#38BDF8]" />
                  <span>Consultations for All Age Groups</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href="https://wa.me/919813503420?text=Hello%20Jangra%20Diagnostics%2C%20I%20would%20like%20to%20book%20a%20Wellness%20Clinic%20Consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1D64D8] hover:bg-[#1554B8] text-white font-medium text-xs py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book via WhatsApp</span>
                </a>
                
                <Link
                  href="/prices"
                  className="w-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 border border-white/10"
                >
                  <Sparkles className="w-4 h-4 text-[#38BDF8]" />
                  <span>View Health Packages</span>
                </Link>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-700/60 text-[11px] text-slate-400">
                <p>📍 Sonipat Road, Near India&apos;s First Elevated Railway Track, Rohtak</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
