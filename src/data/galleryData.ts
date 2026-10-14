export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "Doctors & Team" | "Ultrasound & Radiology" | "Digital X-Ray" | "Dental Clinic" | "Centre & Facilities";
  caption: string;
  alt: string;
  dimensions: string;
  isCurated: boolean; // Curated for primary display (one per scene)
  burstId?: string; // Links near-duplicates together
}

export const galleryCategories = [
  "All",
  "Doctors & Team",
  "Ultrasound & Radiology",
  "Digital X-Ray",
  "Dental Clinic",
  "Centre & Facilities"
] as const;

export type GalleryCategory = typeof galleryCategories[number];

export const galleryItems: GalleryItem[] = [
  // --- DOCTORS & TEAM ---
  {
    id: "team-hero-suite",
    src: "/enhanced/Hero%20image.png",
    title: "Senior Medical Consultants & Healthcare Team",
    category: "Doctors & Team",
    caption: "Consultant Radiologist Dr. Krishan Jangra and Lead Dental Surgeon Dr. Neha Jangra with their clinical nursing and technical team at the consultation suite.",
    alt: "Medical leadership and clinical assistants team portrait at Jangra Diagnostic Centre",
    dimensions: "1537x1023",
    isCurated: true
  },
  {
    id: "doctors-consult-desk",
    src: "/enhanced/doctors.png",
    title: "Dr. Krishan Jangra & Dr. Neha Jangra Consultation",
    category: "Doctors & Team",
    caption: "Dr. Krishan Jangra and Dr. Neha Jangra at their medical consultation desk reviewing clinical reports and digital imaging.",
    alt: "Dr. Krishan Jangra and Dr. Neha Jangra at their consultation desk in Rohtak",
    dimensions: "1537x1023",
    isCurated: true
  },
  {
    id: "management-clinical-team",
    src: "/enhanced/imageformanagemnt.png",
    title: "Medical Consultants & Diagnostic Clinical Team",
    category: "Doctors & Team",
    caption: "Dr. Krishan Jangra, Dr. Neha Jangra and the healthcare nursing management team at Jangra Diagnostics.",
    alt: "Medical management and clinical nursing team at Jangra Diagnostics Rohtak",
    dimensions: "1600x1064",
    isCurated: true
  },
  {
    id: "team-thumbs-up",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.36.58 PM.jpeg",
    title: "Jangra Healthcare Medical & Clinical Team",
    category: "Doctors & Team",
    caption: "Dr. Krishan Jangra, Dr. Neha Jangra and the dedicated clinical, technical and nursing staff at the Jangra Diagnostics reception desk.",
    alt: "Medical and diagnostic healthcare team at Jangra Diagnostic Centre Rohtak",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "team-reception"
  },
  {
    id: "team-entrance-doors",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.36.59 PM.jpeg",
    title: "Senior Consultants & Staff at Main Entrance",
    category: "Doctors & Team",
    caption: "Consultant Radiologist Dr. Krishan Jangra and Lead Dental Surgeon Dr. Neha Jangra with the nursing team at the entrance of Jangra Diagnostic Centre & Dental Care.",
    alt: "Doctors and staff outside the glass doors of Jangra Diagnostic Centre",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "team-entrance-1"
  },
  {
    id: "team-entrance-steps",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.37.00 PM.jpeg",
    title: "Healthcare Team at Centre Frontage",
    category: "Doctors & Team",
    caption: "The clinical and support team gathered on the entrance steps of the diagnostic centre on Sonipat Road, Rohtak.",
    alt: "Medical team standing on the front steps of Jangra Diagnostic Centre",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "team-entrance-2"
  },
  {
    id: "doctors-and-assistants-desk",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.37.03 PM.jpeg",
    title: "Doctors & Clinical Assistants in Consultation Suite",
    category: "Doctors & Team",
    caption: "The diagnostic and dental clinical team assembled in the consultation suite for morning patient briefing.",
    alt: "Doctors and clinical nursing assistants gathered around the consultation desk",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "doctors-assistants"
  },
  {
    id: "dr-neha-portrait",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.37.04 PM.jpeg",
    title: "Dr. Neha Jangra — Dental Surgeon",
    category: "Doctors & Team",
    caption: "Dr. Neha Jangra (BDS, MMC Ambala, Ex-Intern GDC Rohtak) at her clinical consultation desk, specializing in advanced cosmetic and restorative dentistry.",
    alt: "Dr. Neha Jangra Dental Surgeon portrait at her desk",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "dr-neha-desk"
  },
  {
    id: "dr-krishan-portrait",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.37.14 PM.jpeg",
    title: "Dr. Krishan Jangra — Senior Consultant",
    category: "Doctors & Team",
    caption: "Dr. Krishan Jangra, MIMA & PLM-IRIA member, providing specialized 3D/4D ultrasound, vascular Doppler, and guided intervention reporting.",
    alt: "Portrait of Dr. Krishan Jangra Consultant Radiologist at Jangra Diagnostics",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "dr-krishan-portrait"
  },
  {
    id: "staff-entrance-steps",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.37.08 PM.jpeg",
    title: "Nursing & Technical Staff",
    category: "Doctors & Team",
    caption: "Trained laboratory, radiography, and nursing personnel committed to patient comfort and hygienic healthcare delivery.",
    alt: "Clinical nursing and technical staff at Jangra Diagnostic Centre entrance",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "staff-steps"
  },
  {
    id: "staff-entrance-door",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.37.07 PM.jpeg",
    title: "Patient Care Coordinator",
    category: "Doctors & Team",
    caption: "Our front-office healthcare assistant welcoming patients at the centre entrance.",
    alt: "Healthcare assistant at the entrance of Jangra Diagnostic Centre",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "staff-door"
  },
  {
    id: "staff-member-entrance-1",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.37.06 PM (1).jpeg",
    title: "Clinical Nursing Staff Member",
    category: "Doctors & Team",
    caption: "Dedicated clinical nursing and diagnostic care staff member ensuring compassionate patient assistance and procedural support.",
    alt: "Clinical nursing staff member at the entrance of Jangra Diagnostic Centre",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "staff-portraits"
  },
  {
    id: "staff-member-entrance-2",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.37.07 PM (1).jpeg",
    title: "Healthcare Support & Nursing Staff",
    category: "Doctors & Team",
    caption: "Trained healthcare assistant supporting patient registration, comfort, and clinical examination preparations.",
    alt: "Healthcare support and nursing staff member at Jangra Diagnostic Centre",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "staff-portraits"
  },
  {
    id: "staff-member-entrance-3",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.37.07 PM (2).jpeg",
    title: "Dental & Diagnostic Clinical Assistant",
    category: "Doctors & Team",
    caption: "Clinical care assistant supporting sterilization standards, doctor assistance, and patient care workflows.",
    alt: "Clinical care assistant standing at the entrance of Jangra Diagnostic Centre & Dental Care",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "staff-portraits"
  },

  // --- ULTRASOUND & RADIOLOGY ---
  {
    id: "ultrasound-suite-hq",
    src: "/enhanced/ultrasound.png",
    title: "Diagnostic Sonography & Ultrasound Suite",
    category: "Ultrasound & Radiology",
    caption: "Consultant Radiologist Dr. Krishan Jangra conducting high-resolution real-time diagnostic ultrasound scan in our dedicated clinical sonography suite.",
    alt: "Dr. Krishan Jangra conducting an ultrasound examination with high-resolution probe at Jangra Diagnostics",
    dimensions: "1537x1023",
    isCurated: true
  },

  // --- DIGITAL X-RAY ---
  {
    id: "digital-xray-machine",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.37.10 PM.jpeg",
    title: "Digital X-Ray High-Frequency Generator & Examination Table",
    category: "Digital X-Ray",
    caption: "Allengers Multipose digital X-ray system providing low-dose, high-resolution radiographic imaging for bones, chest, joints, and spine.",
    alt: "Digital X-ray examination table and tube column in the X-ray suite",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "xray-machine"
  },
  {
    id: "digital-cr-operator",
    src: "/enhanced/operator.png",
    title: "Computerized Digital CR Workstation",
    category: "Digital X-Ray",
    caption: "Radiographer processing high-contrast digital chest radiographs with ALARA dose optimization software.",
    alt: "Radiographer at Computerized Digital CR Workstation in Jangra Diagnostics Rohtak",
    dimensions: "1537x1023",
    isCurated: true
  },

  // --- DENTAL CLINIC ---
  {
    id: "dental-procedure-close",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.03.01 PM (1).jpeg",
    title: "Dental Examination & Restoration in Progress",
    category: "Dental Clinic",
    caption: "Dr. Neha Jangra and assistant performing a delicate dental procedure using specialized lighting, magnification loupes, and sterile instrumentation.",
    alt: "Dr. Neha Jangra and dental assistant treating a patient in the dental operatory",
    dimensions: "1600x1068",
    isCurated: true,
    burstId: "dental-close"
  },
  {
    id: "dental-operatory-medium",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.03.01 PM (2).jpeg",
    title: "Patient Care in Modern Dental Suite",
    category: "Dental Clinic",
    caption: "Hygienic dental operatory featuring ergonomic patient chair, digital RVG X-ray display, and autoclaved equipment.",
    alt: "Dental procedure in progress at Jangra Dental Care Rohtak",
    dimensions: "1600x1068",
    isCurated: true,
    burstId: "dental-medium"
  },
  {
    id: "dental-chair-wide",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.03.03 PM.jpeg",
    title: "Fully Equipped Dental Operatory Suite",
    category: "Dental Clinic",
    caption: "Wide view of the dental surgery operatory with electronic delivery unit, LED surgical lamp, ultrasonic scaler, and clean cabinetry.",
    alt: "Wide view of the modern dental operatory room and patient chair unit",
    dimensions: "1600x1068",
    isCurated: true,
    burstId: "dental-wide"
  },
  {
    id: "dental-chairside-surgery",
    src: "/enhanced/dentalDoctor.png",
    title: "Dr. Neha Jangra Chairside Dental Surgery",
    category: "Dental Clinic",
    caption: "Lead Dental Surgeon Dr. Neha Jangra performing advanced dental restoration with clinical loupes and assistant support.",
    alt: "Dr. Neha Jangra performing chairside dental procedure with sterile surgical protocol",
    dimensions: "1535x1025",
    isCurated: true
  },
  {
    id: "dental-operatory-suite",
    src: "/enhanced/dental.png",
    title: "Advanced Dental Operatory Treatment",
    category: "Dental Clinic",
    caption: "Chairside dental restoration and ultrasonic scaling performed in our hygienic operatory suite.",
    alt: "Chairside dental restoration at Jangra Dental Care Rohtak",
    dimensions: "1538x1023",
    isCurated: true
  },
  {
    id: "dental-nursing-reception",
    src: "/enhanced/nursingStation.png",
    title: "Dental Front Desk & Nursing Station",
    category: "Dental Clinic",
    caption: "Dedicated dental clinic front desk and reception counter with educational patient guidance.",
    alt: "Jangra Dental Clinic Front Desk and Reception Station",
    dimensions: "1537x1023",
    isCurated: true
  },

  // --- CENTRE & FACILITIES ---
  {
    id: "centre-entrance-gate",
    src: "/enhanced/entrance.png",
    title: "Main Road Entrance Gate & Campus",
    category: "Centre & Facilities",
    caption: "Exterior entrance gate on Sonipat Road opposite Gymkhana Club with Hindi and English facility signage and patient parking.",
    alt: "Jangra Diagnostic Centre & Dental Clinic Grand Entrance Gate on Sonipat Road Rohtak",
    dimensions: "1537x1023",
    isCurated: true
  },
  {
    id: "pathology-phlebotomy-desk",
    src: "/enhanced/lab.png",
    title: "Pathology Blood Collection & Phlebotomy Station",
    category: "Centre & Facilities",
    caption: "Hygienic blood sampling desk equipped with BD Vacutainer tubes, vacutainer needles, antiseptic prep, and cold-chain sample transport.",
    alt: "Clinical blood sample collection and phlebotomy desk at Jangra Diagnostics",
    dimensions: "1537x1023",
    isCurated: true
  },
  {
    id: "centre-helpdesk-reception",
    src: "/enhanced/helpdesk.png",
    title: "Main Help Desk & Registration Counter",
    category: "Centre & Facilities",
    caption: "Front-office helpdesk team managing fast-track patient registration, test inquiries, and report dispatch.",
    alt: "Front view of the Help Desk counter with registration staff at Jangra Diagnostics",
    dimensions: "1537x1023",
    isCurated: true
  },
  {
    id: "patient-waiting-hall-hq",
    src: "/enhanced/waitingArea.png",
    title: "Air-Conditioned Patient Waiting Lounge",
    category: "Centre & Facilities",
    caption: "Spacious, comfortable waiting hall equipped with plush seating, purified drinking water, ceiling fans, and clear signage leading to diagnostic suites.",
    alt: "Air-conditioned patient waiting lounge at Jangra Diagnostic Centre",
    dimensions: "1537x1023",
    isCurated: true
  },
  {
    id: "patient-counseling-helpdesk",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.37.15 PM.jpeg",
    title: "Patient Assistance & Inquiry Desk",
    category: "Centre & Facilities",
    caption: "Help desk coordinator explaining test packages, preparation instructions, and digital report retrieval to a patient.",
    alt: "Help desk coordinator assisting a patient with test packages and brochure",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "help-desk-inquiry"
  },
  {
    id: "building-entrance-facade",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.37.17 PM (1).jpeg",
    title: "Centre Building Facade & Accessible Entrance",
    category: "Centre & Facilities",
    caption: "Exterior facade on Sonipat Road featuring steps with stainless steel handrails, wheelchair accessibility ramp, and green landscaping.",
    alt: "Front exterior facade and entrance stairs of Jangra Diagnostic Centre Rohtak",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "building-facade"
  },
  {
    id: "driveway-parking-exterior",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.37.18 PM.jpeg",
    title: "Dedicated Parking & Wellness Facility Wing",
    category: "Centre & Facilities",
    caption: "Paved driveway with ample patient vehicle parking and the exterior wing of Dr. Neha Wellness Club & Diagnostic Centre.",
    alt: "Paved parking driveway and building exterior of Jangra Diagnostic Centre",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "driveway-parking"
  },
  {
    id: "green-driveway-approach",
    src: "/newPictures/WhatsApp Image 2026-10-14 at 1.37.19 PM.jpeg",
    title: "Green Tree-Lined Entrance Approach",
    category: "Centre & Facilities",
    caption: "Quiet, peaceful entrance approach lined with lush green trees, situated safely off Sonipat Road near Railway Crossing, Rohtak.",
    alt: "Tree-lined entrance driveway leading into Jangra Diagnostic Centre",
    dimensions: "1600x1064",
    isCurated: true,
    burstId: "green-driveway"
  }
];

export const duplicateAuditLog = {
  totalAudited: 105,
  newPicturesCount: 65,
  uniqueScenes: 26,
  curatedCount: galleryItems.filter(i => i.isCurated).length,
  exactDuplicatesIdentified: [
    {
      description: "Centre Logo File (Same 1421x1107 PNG, 1.25 MB)",
      retainedFile: "/gallery/logo.png",
      duplicatePaths: ["/logo.png", "/logoForNav.png", "/logoNew.png"]
    },
    {
      description: "Wellness Clinic Room Graphic (Same 1200x896 JPG, 898 KB)",
      retainedFile: "/services/wellness.jpg",
      duplicatePaths: ["/wellness_clinic.jpg"]
    }
  ],
  burstNearDuplicatesGroupCount: 26,
  burstPolicy: "In high-traffic sections and default gallery view, the single best, sharpest exposure of each scene is displayed to avoid repetitive thumbnails. All original burst captures remain safely preserved in public/newPictures/."
};
