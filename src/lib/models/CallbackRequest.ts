import mongoose, { Schema, Document } from 'mongoose';

export interface ICallbackRequest extends Document {
  requestId: string;
  patientName: string;
  mobileNumber: string;
  preferredTime: string;
  service: string;
  message?: string;
  status: 'New' | 'Called' | 'Interested' | 'Follow-up Required' | 'Completed' | 'Not Interested';
  source: string;
  createdAt: Date;
  updatedAt: Date;
}

const CallbackRequestSchema: Schema = new Schema({
  requestId: { type: String, required: true, unique: true },
  patientName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  preferredTime: { type: String, required: true },
  service: { type: String, required: true },
  message: { type: String },
  status: { type: String, default: 'New' },
  source: { type: String, default: 'Book Via Call' },
}, { timestamps: true });

export default mongoose.models.CallbackRequest || mongoose.model<ICallbackRequest>('CallbackRequest', CallbackRequestSchema);
