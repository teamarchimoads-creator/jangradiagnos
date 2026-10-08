import mongoose, { Schema, Document } from 'mongoose';

export interface IClickStats extends Document {
  linkName: string;
  clicks: number;
  lastClickedAt: Date;
}

const ClickStatsSchema: Schema = new Schema({
  linkName: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
  lastClickedAt: { type: Date, default: Date.now },
});

export default mongoose.models.ClickStats || mongoose.model<IClickStats>('ClickStats', ClickStatsSchema);
