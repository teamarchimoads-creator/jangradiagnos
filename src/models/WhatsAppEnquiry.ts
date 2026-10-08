import mongoose, { Schema, Document } from 'mongoose';

export interface IWhatsAppEnquiry extends Document {
  name: string;
  mobile: string;
  enquiryType: 'Test' | 'Package' | 'Appointment' | 'HomeCollection' | 'General';
  selectedItems?: string[];
  preferredDate?: Date;
  preferredTimeSlot?: string;
  address?: string;
  pincode?: string;
  message?: string;
  status: 'Initiated' | 'Contacted' | 'Confirmed' | 'Closed';
  createdAt: Date;
  updatedAt: Date;
}

const WhatsAppEnquirySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    enquiryType: { 
      type: String, 
      enum: ['Test', 'Package', 'Appointment', 'HomeCollection', 'General'],
      required: true
    },
    selectedItems: [{ type: String }],
    preferredDate: { type: Date },
    preferredTimeSlot: { type: String },
    address: { type: String },
    pincode: { type: String },
    message: { type: String },
    status: { 
      type: String, 
      enum: ['Initiated', 'Contacted', 'Confirmed', 'Closed'],
      default: 'Initiated' 
    },
  },
  { timestamps: true }
);

export default mongoose.models.WhatsAppEnquiry || mongoose.model<IWhatsAppEnquiry>('WhatsAppEnquiry', WhatsAppEnquirySchema);
