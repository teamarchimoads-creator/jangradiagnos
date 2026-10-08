/**
 * Utility functions for generating WhatsApp wa.me links for Jangra Diagnostics
 */

interface BaseEnquiry {
  patientName?: string;
  mobile?: string;
}

interface TestEnquiry extends BaseEnquiry {
  testName: string;
  price?: string;
  preferredDate?: string;
  collectionMethod?: 'Centre Visit' | 'Home Collection';
}

interface PackageEnquiry extends BaseEnquiry {
  packageName: string;
  price?: string;
}

interface HomeCollectionEnquiry extends BaseEnquiry {
  address: string;
  pincode: string;
  preferredDate: string;
  preferredTimeSlot?: string;
  selectedTests?: string;
}

export const JANGRA_PRIMARY_PHONE = '9813503419';
export const JANGRA_WHATSAPP_PHONE = '9813503420';

/**
 * Builds a valid wa.me URL
 */
export const buildWhatsAppUrl = (phone: string = JANGRA_WHATSAPP_PHONE, message: string) => {
  const cleanPhone = phone.replace(/\D/g, '');
  const formattedPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;
  
  return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
};

export const generateTestEnquiryUrl = (phone: string = JANGRA_WHATSAPP_PHONE, details: TestEnquiry) => {
  const message = `Hello Jangra Diagnostics,
I want to enquire about the following test:
Test Name: ${details.testName}
${details.price ? `Price: ${details.price}\n` : ''}Patient Name: ${details.patientName || ''}
Preferred Date: ${details.preferredDate || ''}
Collection Method: ${details.collectionMethod || ''}

Please share availability and booking details.`;

  return buildWhatsAppUrl(phone, message);
};

export const generatePackageEnquiryUrl = (phone: string = JANGRA_WHATSAPP_PHONE, details: PackageEnquiry) => {
  const message = `Hello Jangra Diagnostics,
I want to enquire about the following healthcare service/package:
Service Name: ${details.packageName}
${details.price ? `Price: ${details.price}\n` : ''}Patient Name: ${details.patientName || ''}

Please share availability and booking details.`;

  return buildWhatsAppUrl(phone, message);
};

export const generateHomeCollectionUrl = (phone: string = JANGRA_WHATSAPP_PHONE, details: HomeCollectionEnquiry) => {
  const message = `Hello Jangra Diagnostics,
I want to request Free Home Sample Collection:
Patient Name: ${details.patientName || ''}
Mobile: ${details.mobile || ''}
Address: ${details.address}, ${details.pincode}
Preferred Date: ${details.preferredDate}
Preferred Time: ${details.preferredTimeSlot || ''}
${details.selectedTests ? `Tests Required: ${details.selectedTests}\n` : ''}
Please confirm the booking.`;

  return buildWhatsAppUrl(phone, message);
};

export const generateGeneralEnquiryUrl = (phone: string = JANGRA_WHATSAPP_PHONE) => {
  const message = `Hello Jangra Diagnostics, I have an enquiry.`;
  return buildWhatsAppUrl(phone, message);
};
