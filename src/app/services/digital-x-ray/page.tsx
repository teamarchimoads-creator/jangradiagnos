import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowLeft, CheckCircle2, Calendar, Phone, Sparkles, ShieldCheck, 
  AlertTriangle, HelpCircle, FileText, Activity, Clock
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital X-Ray in Rohtak | Jangra Diagnostics",
  description: "Comprehensive guide to Digital X-Rays in Rohtak at Jangra Diagnostics: General & Special X-rays, HSG, Contrast studies, patient preparation, radiation safety protocols, and prompt radiologist reports.",
};

export default function DigitalXRayPage() {
  const xrayUses = [
    {
      title: "Broken Bones & Fractures",
      desc: "Fast, accurate detection of fractures, hairline cracks, dislocations, and bone trauma after injury."
    },
    {
      title: "Cause of Pain & Swelling",
      desc: "Identifying underlying joint effusion, arthritis, degenerative changes, or soft-tissue swelling."
    },
    {
      title: "Foreign Object Localization",
      desc: "Locating radio-opaque foreign bodies lodged in soft tissues, respiratory passages, or the digestive tract."
    },
    {
      title: "Bone & Joint Structural Problems",
      desc: "Evaluating spinal alignment (scoliosis, lordosis), joint spaces, bone density loss, and congenital deformities."
    },
    {
      title: "Treatment Planning & Monitoring",
      desc: "Pre-surgical planning, verifying orthopedic implant alignment, and tracking bone healing post-casting or surgery."
    },
    {
      title: "Screenings & Disease Detection",
      desc: "Chest X-rays for pneumonia, tuberculosis, pulmonary infections, cardiomegaly, and routine medical fitness."
    }
  ];

  const xrayTypes = [
    {
      type: "Bone & Skeletal X-Rays",
      desc: "High-contrast digital radiographs of extremities, skull, pelvis, and joints (knee, hip, shoulder, ankle, wrist) to detect fractures, bone infections, or arthritis."
    },
    {
      type: "Chest X-Ray (PA & AP Views)",
      desc: "Standard non-invasive imaging evaluating lung fields, airways, heart silhouette, mediastinum, and chest wall."
    },
    {
      type: "Abdominal & KUB X-Rays",
      desc: "Visualizing bowel gas patterns, intestinal obstructions, fluid levels, and radio-opaque kidney or urinary bladder calculi."
    },
    {
      type: "Spine Investigations",
      desc: "Cervical, thoracic, and lumbosacral spine series (AP, Lateral, Flexion/Extension) assessing disc spaces, spondylosis, and vertebral alignment."
    },
    {
      type: "Digital Dental X-Rays (RVG)",
      desc: "High-resolution intraoral radiographs providing detailed views of tooth roots, bone levels, and hidden interproximal decay."
    },
    {
      type: "Special Contrast Studies & HSG",
      desc: "Specialized investigations including Hysterosalpingography (HSG for uterine and fallopian tube patency) and GI contrast examinations."
    }
  ];

  const preparationPoints = [
    {
      label: "Health History & Allergies",
      text: "Always inform the radiographer or doctor about your health history, prior allergies, asthma, and any ongoing medications."
    },
    {
      label: "Pregnancy Precaution (Critical)",
      text: "Radiation from an X-ray can harm your developing fetus. If you are pregnant or think you might be pregnant, tell your healthcare provider before undergoing any X-ray."
    },
    {
      label: "Bone X-Rays (General)",
      text: "Standard bone and joint X-rays usually require zero advance preparation. You can eat, drink, and take routine medications normally."
    },
    {
      label: "Clothing & Metal Objects",
      text: "Wear comfortable, loose clothing. Remove all metal items before the scan (jewelry, piercings, hairpins, watches, belts, coins, and hearing aids) to prevent imaging artifacts."
    },
    {
      label: "Avoid Creams & Lotions",
      text: "Do not apply body lotions, cosmetic creams, or perfumes over the area being imaged, as these can mimic calcifications on digital films."
    },
    {
      label: "GI & Contrast Studies",
      text: "For gastrointestinal (GI) X-rays or contrast examinations, your doctor will advise you to stop eating or drinking for several hours beforehand."
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
            <span>DIGITAL RADIOGRAPHY</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>LOW RADIATION</span>
            <span className="text-slate-300 font-normal">/</span>
            <span>ROHTAK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14]">
            <span className="text-[#0A1938]">X-Rays: </span>
            <span className="text-[#1D64D8]">What Should You Know?</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-3xl leading-relaxed mt-3">
            An X-ray is a fast, painless imaging test that takes pictures of bones, joints, and soft tissues using safe, controlled amounts of radiation. At Jangra Diagnostics Rohtak, our digital X-ray suite delivers instant high-contrast imaging under senior radiologist supervision.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Machine & Overview Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] space-y-6">
              <div className="aspect-16/9 rounded-2xl overflow-hidden bg-slate-100 relative">
                <img
                  src="/enhanced/operator.png"
                  alt="Allengers High-Frequency Digital X-Ray Suite at Jangra Diagnostics Rohtak"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#0A1938]/85 text-white text-[11px] font-medium px-3.5 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>On-Site High-Frequency Digital X-Ray Machine</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1D64D8] uppercase tracking-wider bg-[#EBF5FE] px-3 py-1 rounded-full">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Fast • High Precision • Safe Radiation</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1938] tracking-tight">
                  Clear Bone and Soft Tissue Imaging for Accurate Diagnostics
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  X-rays use safe, controlled amounts of radiation to create sharp diagnostic pictures of bones and soft tissues. These images help healthcare providers diagnose fractures, joint dislocations, chest infections, and internal structural problems, guiding prompt and effective clinical treatments.
                </p>
              </div>
            </div>

            {/* Uses of X-Rays */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-[#1D64D8] tracking-widest uppercase">Clinical Indications</span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938] mt-1">
                  Common Uses: Why Does a Doctor Order an X-Ray?
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {xrayUses.map((use, idx) => (
                  <div key={idx} className="bg-[#FAFDFE] p-4 rounded-2xl border border-sky-100/60 space-y-1">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0A1938]">
                      <CheckCircle2 className="w-4 h-4 text-[#1D64D8] shrink-0" />
                      <span>{use.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 pl-6 leading-relaxed">
                      {use.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Types of X-Ray Studies */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-[#1D64D8] tracking-widest uppercase">Modality Overview</span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938] mt-1">
                  What are the Types of X-Ray Studies?
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Several types of X-rays capture images of different anatomical areas:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {xrayTypes.map((item, idx) => (
                  <div key={idx} className="bg-[#F8FAFD] p-5 rounded-2xl border border-slate-100 space-y-1.5">
                    <h3 className="text-base font-bold text-[#0A1938]">{item.type}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* X-Ray with Contrast Material */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] space-y-4">
              <span className="text-xs font-bold text-[#1D64D8] tracking-widest uppercase">Special Procedures</span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938]">
                What is an X-Ray with Contrast Material?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Some special X-rays utilize a contrast material (also called contrast agent or dye) to highlight specific organs, blood vessels, or hollow tracts with greater clarity. Depending on the test, contrast dye may be administered:
              </p>

              <div className="grid sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-[#F8FAFD] p-4 rounded-2xl border border-slate-100 text-center space-y-1">
                  <div className="text-xs font-bold text-[#1D64D8] uppercase">Orally</div>
                  <p className="text-[11px] text-slate-500">Taken by mouth as a liquid drink (e.g., Barium swallow / meal)</p>
                </div>
                <div className="bg-[#F8FAFD] p-4 rounded-2xl border border-slate-100 text-center space-y-1">
                  <div className="text-xs font-bold text-[#1D64D8] uppercase">Intravenous (IV)</div>
                  <p className="text-[11px] text-slate-500">Injected through an IV line into a vein (e.g., IVP renal studies)</p>
                </div>
                <div className="bg-[#F8FAFD] p-4 rounded-2xl border border-slate-100 text-center space-y-1">
                  <div className="text-xs font-bold text-[#1D64D8] uppercase">Rectally (Enema)</div>
                  <p className="text-[11px] text-slate-500">Administered via enema for lower gastrointestinal imaging</p>
                </div>
              </div>

              <div className="bg-sky-50/80 rounded-2xl p-4 border border-sky-100 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#1D64D8] shrink-0 mt-0.5" />
                <div>
                  <strong>Note on IV Contrast:</strong> When your provider gives you dye through an IV injection, you may briefly feel flushed or warm all over, or experience a mild metallic taste in your mouth. These normal sensations typically pass within a few minutes.
                </div>
              </div>
            </div>

            {/* Preparation & Pregnancy Safety Warning */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-[#1D64D8] tracking-widest uppercase">Patient Guidance</span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938] mt-1">
                  How Do I Prepare for an X-Ray?
                </h2>
              </div>

              {/* Critical Pregnancy Alert */}
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-5 text-red-900 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-sm text-red-700">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                  <span>CRITICAL PREGNANCY WARNING</span>
                </div>
                <p className="text-xs text-red-800 leading-relaxed">
                  <strong>Radiation from an X-ray can harm your developing fetus.</strong> If you are pregnant or think you might be pregnant, you must inform your doctor and our radiographer <em>before</em> getting an X-ray. Alternative non-radiation imaging (such as ultrasound) will be recommended whenever possible.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {preparationPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#FAFDFE] p-3.5 rounded-2xl border border-slate-100 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#1D64D8] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A1938]">{pt.label}: </strong>
                      <span className="text-slate-600">{pt.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Post-Care & Risks */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_24px_rgba(29,100,216,0.04)] space-y-5">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938]">
                What to Expect After Your X-Ray &amp; Safety Risks
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>After an X-ray with contrast dye:</strong> Drink plenty of water throughout the day to flush the contrast material naturally from your body. A small number of patients may experience mild side effects such as nausea, temporary stomach cramps, mild diarrhea, or headaches.
                </p>
                <p>
                  <strong>Allergic Reactions (Rare):</strong> Rarely, an allergic reaction to contrast dye can occur. Individuals with pre-existing allergies or asthma have a slightly higher risk. Call your provider right away if you develop hives, itching, or breathing difficulty.
                </p>
                <p>
                  <strong>Radiation Risk Overview:</strong> Although X-rays use radiation, modern digital systems utilize minimal radiation doses tailored specifically to the body part (ALARA - As Low As Reasonably Achievable). There is a very low risk of overexposure, and digital X-rays are universally regarded as safe and highly effective for patients of all ages.
                </p>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0A1938] text-white rounded-3xl p-6 sm:p-7 shadow-xl sticky top-24 space-y-5">
              <div className="text-xs font-bold tracking-widest text-[#38BDF8] uppercase">
                INSTANT DIGITAL X-RAY
              </div>
              <h3 className="text-2xl font-extrabold leading-snug">
                Book a Digital X-Ray
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Walk-in X-rays and specialized investigations available Monday to Sunday with minimal wait times.
              </p>

              <div className="space-y-3 text-xs text-slate-200 border-t border-slate-700/60 pt-4">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>ALARA Radiation Safety Protocol</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>Instant High-Definition Digital Preview</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>Walk-ins Welcome: 8:00 AM – 7:30 PM</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href="https://wa.me/919813503420?text=Hello%20Jangra%20Diagnostics%2C%20I%20want%20to%20enquire%20about%20a%20Digital%20X-Ray."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1D64D8] hover:bg-[#1554B8] text-white font-semibold py-3.5 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Enquire on WhatsApp (9813503420)</span>
                </a>

                <a
                  href="tel:+919813503419"
                  className="w-full bg-white/10 hover:bg-white/15 text-white font-medium py-3 rounded-2xl transition-all flex items-center justify-center gap-2 text-xs border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Direct Helpdesk: +91 9813503419</span>
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
