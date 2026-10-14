export interface TestCategory {
  category: string;
  tests: string;
}

export interface HealthPackage {
  id: string;
  name: string;
  subtitle?: string;
  totalTests: number;
  actualPrice: number;
  offerPrice?: number;
  priceForOne?: number;
  priceForFamily?: number; // 1+1
  isFamilyOffer?: boolean;
  highlightBadge?: string;
  smartReport?: boolean;
  categories: TestCategory[];
}

export const maxCarePackages: HealthPackage[] = [
  {
    id: "max-care-1",
    name: "Max Care Health Check 1",
    totalTests: 37,
    actualPrice: 2890,
    offerPrice: 1299,
    highlightBadge: "Essential Health Check",
    smartReport: true,
    categories: [
      {
        category: "Detailed Diabetes Test",
        tests: "Fasting Blood Sugar"
      },
      {
        category: "Heart Detailed Profile",
        tests: "Cholesterol, Triglycerides, HDL, LDL, VLDL, Non-HDL Cholesterol, HDL/LDL (Calculated), Cholesterol Total/HDL Ratio"
      },
      {
        category: "Thyroid Detailed Profile",
        tests: "T3, T4, TSH"
      },
      {
        category: "Liver Detailed Profile",
        tests: "Bilirubin (Total, Direct, Indirect), SGOT - AST, SGPT - ALT, AST/ALT Ratio, Alkaline Phosphatase, Total Protein with Albumin, Globulin, GGTP, A/G Ratio"
      },
      {
        category: "Kidney Detailed Profile",
        tests: "Urea, Creatinine, e-GFR, Sodium, Potassium Chloride, B.U.N., B.U.N./Creatinine Ratio"
      },
      {
        category: "Bone Health",
        tests: "Calcium, Phosphorus"
      },
      {
        category: "Arthritis",
        tests: "Uric Acid"
      },
      {
        category: "Iron Studies",
        tests: "Iron"
      }
    ]
  },
  {
    id: "max-care-2",
    name: "Max Care Health Check 2",
    totalTests: 60,
    actualPrice: 3590,
    offerPrice: 1650,
    highlightBadge: "Popular Comprehensive Check",
    smartReport: true,
    categories: [
      {
        category: "Detailed Diabetes Test",
        tests: "Fasting Blood Sugar, Glycosylated Haemoglobin (HbA1c) - Average Glucose Value For the Last 3 Months"
      },
      {
        category: "Heart Detailed Profile",
        tests: "Cholesterol, Triglycerides, HDL, LDL, VLDL, Non-HDL Cholesterol, HDL/LDL (Calculated), Cholesterol Total/HDL Ratio"
      },
      {
        category: "Thyroid Detailed Profile",
        tests: "T3, T4, TSH"
      },
      {
        category: "Liver Detailed Profile",
        tests: "Bilirubin (Total, Direct, Indirect), SGOT - AST, SGPT - ALT, AST/ALT Ratio, Alkaline Phosphatase, Total Protein with Albumin, Globulin, GGTP, A/G Ratio"
      },
      {
        category: "Complete Blood Count",
        tests: "Haemoglobin, WBC, RBC, Platelet"
      },
      {
        category: "Kidney Detailed Profile",
        tests: "Urea, Creatinine, e-GFR, Sodium, Potassium Chloride, B.U.N., B.U.N./Creatinine Ratio"
      },
      {
        category: "Bone Health",
        tests: "Calcium, Phosphorus"
      },
      {
        category: "Iron Studies",
        tests: "Iron"
      },
      {
        category: "Arthritis",
        tests: "Uric Acid"
      }
    ]
  },
  {
    id: "max-care-3",
    name: "Max Care Health Check 3",
    totalTests: 62,
    actualPrice: 5490,
    priceForOne: 2250,
    priceForFamily: 4000,
    isFamilyOffer: true,
    highlightBadge: "FAMILY OFFER BUY 1 GET 1",
    smartReport: true,
    categories: [
      {
        category: "Detailed Diabetes Test",
        tests: "Fasting Blood Sugar, Glycosylated Haemoglobin (HbA1c) - Average Glucose Value For the Last 3 Months"
      },
      {
        category: "Heart Detailed Profile",
        tests: "Cholesterol, Triglycerides, HDL, LDL, VLDL, Non-HDL Cholesterol, HDL/LDL (Calculated), Cholesterol Total/HDL Ratio"
      },
      {
        category: "Thyroid Detailed Profile",
        tests: "T3, T4, TSH"
      },
      {
        category: "Liver Detailed Profile",
        tests: "Bilirubin (Total, Direct, Indirect), SGOT - AST, SGPT - ALT, AST/ALT Ratio, Alkaline Phosphatase, Total Protein with Albumin, Globulin, GGTP, A/G Ratio"
      },
      {
        category: "Kidney Detailed Profile",
        tests: "Urea, Creatinine, e-GFR, Sodium, Potassium Chloride, B.U.N., B.U.N./Creatinine Ratio"
      },
      {
        category: "Arthritis",
        tests: "Uric Acid"
      },
      {
        category: "Complete Blood Count",
        tests: "Haemoglobin, WBC, RBC, Platelet"
      },
      {
        category: "Complete Bone Health",
        tests: "Calcium, Phosphorus, Vitamin D"
      },
      {
        category: "Iron Studies",
        tests: "Iron"
      },
      {
        category: "Nervous System",
        tests: "Vitamin B12"
      }
    ]
  },
  {
    id: "max-care-4",
    name: "Max Care Health Check 4",
    totalTests: 80,
    actualPrice: 5960,
    priceForOne: 2700,
    priceForFamily: 5000,
    isFamilyOffer: true,
    highlightBadge: "FAMILY OFFER BUY 1 GET 1",
    smartReport: true,
    categories: [
      {
        category: "Detailed Diabetes Test",
        tests: "Fasting Blood Sugar, Glycosylated Haemoglobin (HbA1c) - Average Glucose Value For the Last 3 Months"
      },
      {
        category: "Heart Detailed Profile",
        tests: "Cholesterol, Triglycerides, HDL, LDL, VLDL, Non-HDL Cholesterol, HDL/LDL (Calculated), Cholesterol Total/HDL Ratio"
      },
      {
        category: "Thyroid Detailed Profile",
        tests: "T3, T4, TSH"
      },
      {
        category: "Liver Detailed Profile",
        tests: "Bilirubin (Total, Direct, Indirect), SGOT - AST, SGPT - ALT, AST/ALT Ratio, Alkaline Phosphatase, Total Protein with Albumin, Globulin, GGTP, A/G Ratio"
      },
      {
        category: "Kidney Detailed Profile",
        tests: "Urea, Creatinine, e-GFR, Sodium, Potassium Chloride, B.U.N., B.U.N./Creatinine Ratio"
      },
      {
        category: "Arthritis",
        tests: "Uric Acid"
      },
      {
        category: "Complete Blood Count",
        tests: "Haemoglobin, WBC, RBC, Platelet"
      },
      {
        category: "Complete Bone Health",
        tests: "Calcium, Phosphorus, Vitamin D"
      },
      {
        category: "Iron Studies",
        tests: "Iron"
      },
      {
        category: "Nervous System",
        tests: "Vitamin B12"
      },
      {
        category: "Inflammation",
        tests: "C- Reactive Protein (CRP)"
      },
      {
        category: "Complete Urine Analysis",
        tests: "Urine Routine and Microscopy"
      }
    ]
  },
  {
    id: "max-care-5",
    name: "Max Care Health Check 5",
    totalTests: 94,
    actualPrice: 8970,
    priceForOne: 3200,
    priceForFamily: 6000,
    isFamilyOffer: true,
    highlightBadge: "MOST ADVANCED FAMILY OFFER BUY 1 GET 1",
    smartReport: true,
    categories: [
      {
        category: "Detailed Diabetes Tests Including HOMA-IR",
        tests: "HOMA-IR (Glucose - Fasting, Insulin - Fasting, Beta Cell Function, Insulin Sensitivity, Homa IR Index), Glycosylated Haemoglobin (HbA1c) - Average Glucose Value For the Last 3 Months"
      },
      {
        category: "Heart Detailed Profile",
        tests: "Cholesterol, Triglycerides, HDL, LDL, VLDL, Non-HDL Cholesterol, HDL/LDL (Calculated), Cholesterol Total/HDL Ratio"
      },
      {
        category: "Thyroid Detailed Profile",
        tests: "T3, T4, TSH"
      },
      {
        category: "Liver Detailed Profile",
        tests: "Bilirubin (Total, Direct, Indirect), SGOT - AST, SGPT - ALT, AST/ALT Ratio, Alkaline Phosphatase, Total Protein with Albumin, Globulin, GGTP, A/G Ratio"
      },
      {
        category: "Kidney Detailed Profile",
        tests: "Urea, Creatinine, e-GFR, Sodium, Potassium Chloride, B.U.N., B.U.N./Creatinine Ratio"
      },
      {
        category: "Arthritis",
        tests: "Uric Acid"
      },
      {
        category: "Complete Blood Count",
        tests: "Haemoglobin, WBC, RBC, Platelet, ESR, Smear"
      },
      {
        category: "Complete Bone Health",
        tests: "Vitamin D, Phosphorus, Calcium"
      },
      {
        category: "Nervous System",
        tests: "Vitamin B12"
      },
      {
        category: "Iron Studies",
        tests: "Iron, UIBC, TIBC, Transferrin Saturation"
      },
      {
        category: "Cardiac Marker",
        tests: "hsCRP, Apolipoprotein A1, Apolipoprotein B, A1 & B Ratio"
      },
      {
        category: "Pancreas Health",
        tests: "Amylase"
      },
      {
        category: "Inflammation",
        tests: "C- Reactive Protein (CRP)"
      },
      {
        category: "Complete Urine Analysis",
        tests: "Urine Routine and Microscopy"
      }
    ]
  }
];

export const fullBodyHealthPlus = {
  name: "Max Care Full-Body Health Plus",
  totalTests: 82,
  actualPrice: 9950,
  offerPrice: 3499,
  cashback: "100% Cashback!*",
  testsList: [
    "CBC", "HbA1c", "Sugar (F)", "Thyroid Profile", "CRP",
    "Lipid Profile", "Liver Profile", "Kidney Profile", "Vitamin D",
    "Ferritin", "Calcium", "Iron Serum", "Vitamin B12", "Urine Routine", "Folate Serum"
  ]
};

export const weekendOffers = [
  {
    title: "Cholesterol | Sugar | Calcium | Uric Acid",
    deal: "Any one test FREE OR avail all 4 tests @ ₹99",
    price: "₹99 for all 4"
  },
  {
    title: "Lipid Profile Basic",
    deal: "Standard basic lipid screening",
    price: "₹199"
  },
  {
    title: "Vitamin D (25-OH)",
    deal: "Bone & immunity screening",
    price: "₹499"
  },
  {
    title: "HbA1c (Glycosylated Haemoglobin)",
    deal: "3-month average blood glucose",
    price: "₹199"
  },
  {
    title: "Thyroid Profile (T3+T4+TSH)",
    deal: "Complete thyroid functional evaluation",
    price: "₹199"
  }
];

export const dailyOfferDTC = {
  name: "DTC* Package",
  subtitle: "Diabetes, Thyroid & Cardiac",
  tests: "Sugar (F) | HbA1c | Lipid Profile Basic | Thyroid Profile",
  price: 599
};

export const labDetails = {
  partner: "MAX LAB",
  organization: "Max Healthcare Institute Limited",
  reportType: "Free SMART Report by MAX Hospitals",
  regionNotice: "Price applicable only for Haryana.",
  homeCollectionPhone: "7988241350",
  whatsapp: "7982100200",
  address: "H.no. 91-1/22k, Jangra Diagnostic Centre, Sonipat Road, Near Railway Crossing, Rohtak, Haryana - 124001",
  website: "www.maxlab.co.in",
  footprints: {
    labs: "45+ Test processing labs",
    cities: "60+ Operational cities",
    professionals: "780+ Team of medical professionals",
    touchpoints: "1400+ Patient touchpoints",
    testsMenu: "2700+ Test menu of routine & multiple subspecialties"
  }
};
