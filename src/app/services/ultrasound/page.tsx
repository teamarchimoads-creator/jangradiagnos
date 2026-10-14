import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowLeft, CheckCircle2, Calendar, Phone, AlertCircle, Sparkles, 
  HelpCircle, Clock, ShieldCheck, HeartPulse, Stethoscope, Activity, FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ultrasound (Sonography) Services in Rohtak | Jangra Diagnostics",
  description: "Comprehensive guide to ultrasound imaging at Jangra Diagnostics Rohtak: Pregnancy ultrasound timeline, NT/NB scan, Level-2 Anomaly scan, 3D/4D Doppler, diagnostic sonography & guided procedures under Dr. Krishan Jangra.",
};

export default function UltrasoundPage() {
  const pregnancyTimeline = [
    {
      timing: "1st Scan (6 – 8 Weeks)",
      title: "Early Pregnancy Viability Scan",
      desc: "Confirms viability, establishes accurate gestational age, determines the number of fetuses (single vs. multiple), and checks implantation site.",
      highlight: "Viability & Dating"
    },
    {
      timing: "2nd Scan (11.3 – 13.6 Weeks)",
      title: "NT/NB Scan & First Trimester Screening",
      desc: "Measures the nuchal translucency (fluid space at the back of the fetus's neck) and checks the presence or absence of the nasal bone. Crucial for early detection of Down syndrome and other congenital heart, abdominal, and skeletal conditions. Frequently paired with the Double Marker blood test.",
      highlight: "Down Syndrome & Chromosomal Screening"
    },
    {
      timing: "3rd Scan (18 – 24 Weeks)",
      title: "Level-II Scan (Targeted Anomaly Scan)",
      desc: "Thorough anatomical survey to evaluate the structural integrity of the fetal brain, spine, heart, kidneys, limbs, facial features, and placenta.",
      highlight: "Comprehensive Structural Evaluation"
    },
    {
      timing: "4th Scan (28 – 34 Weeks)",
      title: "Color Doppler & Fetal Growth Scan",
      desc: "Assesses fetal umbilical blood flow, placental perfusion, and intracranial/cardiac hemodynamics, alongside fetal weight and amniotic fluid volume.",
      highlight: "Fetal Well-being & Hemodynamics"
    }
  ];

  const categories = [
    {
      category: "Diagnostic Ultrasound",
      desc: "Used to view internal organs and soft tissues to investigate unexplained pain, palpated lumps or masses, or abnormal laboratory findings.",
      examples: [
        "Whole abdomen and pelvic organs",
        "Kidney, ureter and urinary bladder (KUB)",
        "Gallbladder, liver, spleen and pancreas",
        "Thyroid, neck, scrotum, and breast sonomammography"
      ]
    },
    {
      category: "Pregnancy Ultrasound",
      desc: "Safe, non-invasive imaging used to monitor every milestone of maternal-fetal development throughout gestation.",
      examples: [
        "Confirming viable pregnancy & gestational age",
        "Evaluating fetal heartbeat and real-time movement",
        "Monitoring amniotic fluid levels & placental location",
        "Targeted screening for congenital conditions"
      ]
    },
    {
      category: "Ultrasound Guidance for Procedures",
      desc: "Real-time acoustic visualization allowing clinicians to guide needles and instruments with pinpoint clinical accuracy.",
      examples: [
        "Fine Needle Aspiration Cytology (FNAC) & biopsy",
        "Drainage of cysts, abscesses, or fluid collections",
        "Organ sampling (liver, kidney, prostate)",
        "Embryo transfer (IVF), nerve blocks & IUD verification"
      ]
    }
  ];

  const conditionsDetected = [
    "Abnormal growths, tumors, and suspicious masses",
    "Fluid collections or intra-abdominal blood clots",
    "Liver conditions (fatty liver, hepatitis, abscess, lesions)",
    "Intrauterine or ectopic pregnancy confirmation",
    "Gallstones and cholecystitis (gallbladder inflammation)",
    "Kidney, ureteric, or urinary bladder stones",
    "Varicocele (enlarged veins in the scrotum) & testicular disorders",
    "Thyroid nodules, goiter, and breast lesions/cysts"
  ];

  const faqs = [
    {
      q: "How do I prepare for an ultrasound?",
      a: "Preparation depends on the specific exam. Many ultrasounds require no preparation at all. For abdominal ultrasounds, you may need to fast (refrain from food or drink except water) for 4–6 hours before your scan. For pelvic, early pregnancy, or KUB ultrasounds, you will be asked to drink 3–4 glasses of water 1 hour prior to ensure a comfortably full bladder for clear acoustic transmission."
    },
    {
      q: "Is an ultrasound painful?",
      a: "External ultrasounds (performed over the skin with warm conductive gel) are completely painless. You will feel slight pressure from the transducer, but you won't feel the sound waves. Having a full bladder may cause mild pressure. Internal ultrasounds (such as transvaginal scans for early pregnancy or gynecology) may cause slight temporary discomfort, but they do not cause sharp pain."
    },
    {
      q: "Are ultrasounds safe? Does it use radiation?",
      a: "Yes. Ultrasound imaging is completely safe and uses non-ionizing high-frequency sound waves—it involves zero radiation. It has no harmful side effects on mothers or developing fetuses. All ultrasounds at Jangra Diagnostics are conducted with medical-grade equipment under ALARA principles."
    },
    {
      q: "What is the difference between 2D, 3D, and 4D ultrasound?",
      a: "Traditional 2D ultrasound produces flat, cross-sectional grayscale images that radiologists use for clinical measurements. 3D ultrasound combines multiple slices into a realistic volumetric surface rendering (showing facial contours, fingers, and toes). 4D ultrasound is a 3D scan in live motion. In line with FDA guidance, 3D/4D scans should always be conducted for medical indications under radiologist supervision rather than for non-medical entertainment."
    },
    {
      q: "Who performs an ultrasound at Jangra Diagnostics?",
      a: "Ultrasounds require advanced clinical training to interpret correctly. At Jangra Diagnostics, all scans are personally performed and interpreted by qualified Consultant Radiologists (Dr. Krishan Jangra - MBBS, DMRD, DNB, Ex-Senior Resident PGIMS Rohtak), ensuring strict adherence to diagnostic accuracy and ethical standards."
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
            <span>CLINICAL SONOGRAPHY</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>PREGNANCY &amp; DOPPLER</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">Ultrasound (Sonography): </span>
            <span className="text-[#1D64D8]">What Should You Know?</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-3xl leading-relaxed mt-3">
            Ultrasound uses high-frequency sound waves to create real-time pictures of internal organs, soft tissues, and blood vessels with zero radiation. Conducted and interpreted by Dr. Krishan Jangra (MBBS, DMRD, DNB) at Jangra Diagnostics, Rohtak.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Banner Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)]">
              <div className="aspect-16/9 rounded-2xl overflow-hidden mb-6 bg-slate-100 relative">
                <img
                  src="/enhanced/ultrasound.png"
                  alt="Ultrasound Diagnostic Suite with Dr. Krishan Jangra at Jangra Diagnostics Rohtak"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0A1938]/85 text-white text-[11px] font-medium px-3.5 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-2">
                  <Stethoscope className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Dr. Krishan Jangra (Consultant Radiologist)</span>
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1D64D8] uppercase tracking-wider bg-[#EBF5FE] px-3 py-1 rounded-full">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Safe • Real-Time • Non-Invasive</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1938] tracking-tight">
                  Clear Visualisation of Soft Tissues Without Radiation
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Ultrasound (also known as <strong>sonography</strong> or <strong>ultrasonography</strong>) enables healthcare providers to examine internal organs, muscles, tendons, and blood vessels in real time without making any cuts or incisions. Because it uses sound waves rather than X-rays, it carries no radiation risk and is completely safe during pregnancy.
                </p>
              </div>
            </div>

            {/* 3 Categories Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] space-y-6">
              <div>
                <span className="text-xs font-bold text-[#1D64D8] tracking-widest uppercase">Imaging Classifications</span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938] mt-1">
                  What are the Different Kinds of Ultrasounds?
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Ultrasound imaging generally falls into three clinical categories:
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {categories.map((cat, idx) => (
                  <div key={idx} className="bg-[#F8FAFD] rounded-2xl p-5 border border-sky-100/60 flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-white text-[#1D64D8] shadow-sm flex items-center justify-center font-bold text-sm mb-3">
                        {idx + 1}
                      </div>
                      <h3 className="text-base font-bold text-[#0A1938] mb-2">{cat.category}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed mb-4">{cat.desc}</p>
                    </div>
                    <ul className="space-y-1.5 border-t border-slate-200/60 pt-3">
                      {cat.examples.map((item, iIdx) => (
                        <li key={iIdx} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-[#1D64D8] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Pregnancy Ultrasound Timeline */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <div className="text-xs font-bold text-[#1D64D8] tracking-widest uppercase flex items-center gap-1.5">
                    <HeartPulse className="w-4 h-4 text-[#1D64D8]" />
                    <span>Maternal-Fetal Care</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938] mt-1">
                    When to Get a Pregnancy Ultrasound Done
                  </h2>
                </div>
                <span className="text-xs text-slate-400">Recommended Timeline</span>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                While your obstetrician will customize your scan schedule based on your individual health, the following four scans form the standard clinical framework during pregnancy:
              </p>

              <div className="space-y-4">
                {pregnancyTimeline.map((item, idx) => (
                  <div key={idx} className="bg-[#FAFDFE] rounded-2xl p-5 border border-sky-100/70 hover:border-[#1D64D8]/30 transition-all flex flex-col md:flex-row gap-4 items-start">
                    <div className="md:w-44 shrink-0">
                      <span className="inline-block bg-[#1D64D8] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-1.5">
                        {item.timing}
                      </span>
                      <div className="text-xs font-bold text-[#0A1938]">{item.highlight}</div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="text-base font-bold text-[#0A1938]">{item.title}</h3>
                      <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-sky-50/70 rounded-2xl p-4 border border-sky-100 text-xs text-slate-600 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#1D64D8] shrink-0 mt-0.5" />
                <span>
                  <strong>Additional Growth Scans:</strong> Growth &amp; liquor monitoring scans may be advised by your gynecologist as and when clinically required during the third trimester.
                </span>
              </div>
            </div>

            {/* 2D vs 3D vs 4D Ultrasound */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] space-y-5">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938]">
                Difference Between 2D, 3D, and 4D Ultrasound
              </h2>
              
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 space-y-2">
                  <div className="text-sm font-bold text-[#1D64D8]">2D Ultrasound</div>
                  <div className="text-xs text-slate-500 font-medium">Standard Grayscale Imaging</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Produces flat, outline-based anatomical slices. Essential for medical diagnostics and biometry measurements of organs and fetus.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 space-y-2">
                  <div className="text-sm font-bold text-[#1D64D8]">3D Ultrasound</div>
                  <div className="text-xs text-slate-500 font-medium">Volumetric Surface Rendering</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Combines multiple sound wave angles to show realistic surface depth, allowing visualization of facial features, hands, and feet.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 space-y-2">
                  <div className="text-sm font-bold text-[#1D64D8]">4D Ultrasound</div>
                  <div className="text-xs text-slate-500 font-medium">3D Ultrasound in Live Motion</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Shows 3D images rendered in streaming real-time video, capturing fetal yawning, kicking, or subtle facial gestures.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50/80 border border-amber-200/70 p-4 rounded-2xl text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Medical Safety Guidance:</strong> While ultrasound is non-invasive and safe with very low risk, the U.S. FDA advises against unnecessary prolonged exposure for commercial &ldquo;keepsake&rdquo; entertainment. Ultrasounds should always be clinically indicated and conducted under trained radiologist supervision.
                </div>
              </div>
            </div>

            {/* Conditions Detected Grid */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938]">
                What Conditions Can Be Detected by Ultrasound?
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Ultrasound assists clinicians in identifying a wide variety of pathological, structural, and physiological conditions:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {conditionsDetected.map((cond, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-[#F8FAFD] p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#1D64D8] shrink-0 mt-0.5" />
                    <span>{cond}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Patient Questions & FAQs */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1D64D8] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Patient Preparation &amp; Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938]">
                Everything You Need to Know Before Your Scan
              </h2>

              <div className="space-y-4 pt-1">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-[#FAFDFE] rounded-2xl p-5 border border-slate-100 space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-[#0A1938] flex items-start gap-2">
                      <span className="text-[#1D64D8] font-extrabold">Q:</span>
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5 font-normal">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="bg-[#F5F9FD] border-l-4 border-[#1D64D8] p-4 rounded-2xl flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-[#1D64D8] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 leading-relaxed">
                <span className="font-semibold text-[#0A1938]">Statutory Compliance: </span>
                All antenatal and pregnancy ultrasounds at Jangra Diagnostics are performed in strict accordance with the Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act. Sex determination is strictly prohibited and not practiced.
              </div>
            </div>

          </div>

          {/* Sidebar CTA Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Booking Card */}
            <div className="bg-[#0A1938] text-white rounded-3xl p-6 sm:p-7 shadow-xl sticky top-24 space-y-5">
              <div className="text-xs font-bold tracking-widest text-[#38BDF8] uppercase">
                RADIOLOGIST-SUPERVISED
              </div>
              <h3 className="text-2xl font-extrabold leading-snug">
                Book Your Ultrasound Scan
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prior appointment ensures zero waiting time. Urgent &amp; walk-in diagnostic cases are also accommodated promptly.
              </p>

              <div className="space-y-3 text-xs text-slate-200 border-t border-slate-700/60 pt-4">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>Report signed by Consultant Radiologist</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>Mon – Sat: 8:00 AM – 7:30 PM</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>ALARA Radiation-Free Safe Protocol</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href="https://wa.me/919813503420?text=Hello%20Jangra%20Diagnostics%2C%20I%20would%20like%20to%20book%20an%20Ultrasound%20appointment."
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
                  <span>Call Helpdesk: +91 9813503419</span>
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
