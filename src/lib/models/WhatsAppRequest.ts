import mongoose, { Schema, Document } from 'mongoose';

export interface IWhatsAppRequest extends Document {
  requestId: string;
  patientName: string;
  mobileNumber: string;
  service: string;
  preferredDate?: Date;
  message?: string;
  status: 'New' | 'WhatsApp Opened' | 'Message Sent' | 'Contacted' | 'Completed';
  source: string;
  createdAt: Date;
  updatedAt: Date;
}

const WhatsAppRequestSchema: Schema = new Schema({
  requestId: { type: String, required: true, unique: true },
  patientName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  service: { type: String, required: true },
  preferredDate: { type: Date },
  message: { type: String },
  status: { type: String, default: 'New' },
  source: { type: String, default: 'WhatsApp Enquiry' },
}, { timestamps: true });

export default mongoose.models.WhatsAppRequest || mongoose.model<IWhatsAppRequest>('WhatsAppRequest', WhatsAppRequestSchema);
