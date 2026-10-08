import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  bookingId: string;
  patientName: string;
  mobileNumber: string;
  age?: number;
  gender?: string;
  collectionType: 'Home Collection' | 'Centre Visit';
  address?: string;
  pincode?: string;
  preferredDate?: Date;
  email?: string;
  service?: string;
  tests: string[];
  notes?: string;
  status: 'New' | 'Contacted' | 'Confirmed' | 'Sample Collected' | 'Completed' | 'Cancelled';
  whatsappStatus: 'Not Opened' | 'WhatsApp Opened';
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema: Schema = new Schema({
  bookingId: { type: String, required: true, unique: true },
  patientName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String },
  service: { type: String },
  age: { type: Number },
  gender: { type: String },
  collectionType: { type: String, enum: ['Home Collection', 'Centre Visit'], default: 'Centre Visit' },
  address: { type: String },
  pincode: { type: String },
  preferredDate: { type: String },
  preferredTime: { type: String },
  tests: [{ type: String }],
  notes: { type: String },
  status: { type: String, default: 'New' },
  whatsappStatus: { type: String, default: 'Not Opened' },
}, { timestamps: true });

export default mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);
