import mongoose, { Schema, Document } from 'mongoose';

export interface ISiteSettings extends Document {
  centreName: string;
  WhatsAppNumber: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  landmark?: string;
  openingHours?: string;
  mapLink?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  updatedAt: Date;
}

const SiteSettingsSchema: Schema = new Schema(
  {
    centreName: { type: String, required: true, default: 'Jangra Diagnostics' },
    WhatsAppNumber: { type: String, required: true, default: '9813503420' },
    phoneNumber: { type: String, default: '+91 9813503419, +91 9813503420' },
    email: { type: String, default: 'drkkj.2k@gmail.com' },
    address: { type: String, default: '91-1/22K, Near India\'s First Elevated Railway Track, Sonipat Road, Rohtak, Haryana – 124001' },
    landmark: { type: String, default: 'Near India\'s First Elevated Railway Track, Sonipat Road' },
    openingHours: { type: String, default: 'Mon - Sat: 8:00 AM - 8:00 PM, Sun: 8:00 AM - 2:00 PM' },
    mapLink: { type: String, default: 'https://maps.app.goo.gl/qMRGY4v1UGqNN1ce8' },
    socialLinks: {
      facebook: { type: String },
      instagram: { type: String },
      twitter: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.models.SiteSettings || mongoose.model<ISiteSettings>('SiteSettings', SiteSettingsSchema);
