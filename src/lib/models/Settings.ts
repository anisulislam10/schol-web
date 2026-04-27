import mongoose, { Schema, Document } from 'mongoose';

export interface ISettings extends Document {
  schoolName: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  established: string;
  principalName: string;
  totalStudents: number;
  totalTeachers: number;
  passRate: number;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };
}

const SettingsSchema = new Schema<ISettings>(
  {
    schoolName: { type: String, default: 'Al-Noor Public School' },
    tagline: { type: String, default: 'Nurturing Minds, Building Futures' },
    address: { type: String, default: 'Main Bazaar, Peshawar, KPK, Pakistan' },
    phone: { type: String, default: '+92 91 111 2222' },
    email: { type: String, default: 'info@alnoorschool.edu.pk' },
    established: { type: String, default: '1995' },
    principalName: { type: String, default: 'Mr. Ahmad Khan' },
    totalStudents: { type: Number, default: 1200 },
    totalTeachers: { type: Number, default: 65 },
    passRate: { type: Number, default: 98 },
    socialLinks: {
      facebook: { type: String, default: '' },
      twitter: { type: String, default: '' },
      instagram: { type: String, default: '' },
      youtube: { type: String, default: '' },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Settings || mongoose.model<ISettings>('Settings', SettingsSchema);
