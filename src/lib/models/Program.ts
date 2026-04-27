import mongoose, { Schema, Document } from 'mongoose';

export interface IProgram extends Document {
  title: string;
  department: string;
  duration: string;
  eligibility: string;
  description: string;
  isActive: boolean;
  order: number;
}

const ProgramSchema: Schema = new Schema({
  title: { type: String, required: true },
  department: { type: String, required: true },
  duration: { type: String, required: true },
  eligibility: { type: String, required: true },
  description: { type: String },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Program || mongoose.model<IProgram>('Program', ProgramSchema);
