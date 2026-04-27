import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Admin from '@/lib/models/Admin';
import Teacher from '@/lib/models/Teacher';
import Feature from '@/lib/models/Feature';
import Notice from '@/lib/models/Notice';
import Settings from '@/lib/models/Settings';

export async function POST() {
  await dbConnect();

  // Seed Admin
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@school.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@1234';
  const existingAdmin = await Admin.findOne({ email: adminEmail });
  if (!existingAdmin) {
    await Admin.create({ email: adminEmail, password: adminPassword, name: 'School Admin' });
  }

  // Seed Settings
  const existingSettings = await Settings.findOne();
  if (!existingSettings) {
    await Settings.create({
      schoolName: 'Al-Noor Public School',
      tagline: 'Nurturing Minds, Building Futures',
      address: 'Main GT Road, Peshawar, KPK, Pakistan',
      phone: '+92 91 111 2222',
      email: 'info@alnoorschool.edu.pk',
      established: '1995',
      principalName: 'Mr. Ahmad Khan',
      totalStudents: 1200,
      totalTeachers: 65,
      passRate: 98,
    });
  }

  // Seed Features
  const featuresCount = await Feature.countDocuments();
  if (featuresCount === 0) {
    await Feature.insertMany([
      { title: 'Smart Classrooms', description: 'Equipped with modern projectors and digital boards for interactive learning.', icon: 'Monitor', order: 1 },
      { title: 'Science Labs', description: 'State-of-the-art labs for Physics, Chemistry, and Biology experiments.', icon: 'FlaskConical', order: 2 },
      { title: 'Library & Resource Center', description: 'Over 10,000 books, digital resources, and a quiet study environment.', icon: 'BookOpen', order: 3 },
      { title: 'Sports Facilities', description: 'Cricket ground, basketball court, and indoor sports hall for all students.', icon: 'Trophy', order: 4 },
      { title: 'Computer Lab', description: 'High-speed internet and modern PCs for digital literacy and programming.', icon: 'Laptop', order: 5 },
      { title: 'Safe Environment', description: 'CCTV surveillance, trained staff, and a secure campus for every student.', icon: 'Shield', order: 6 },
    ]);
  }

  // Seed Teachers
  const teachersCount = await Teacher.countDocuments();
  if (teachersCount === 0) {
    await Teacher.insertMany([
      { name: 'Dr. Fatima Malik', role: 'Head of Science', subject: 'Physics', bio: 'PhD in Physics from University of Peshawar with 15 years of teaching excellence.', qualifications: ['PhD Physics', 'MSc Physics', 'BSc Hons'], experience: 15, classes: 'Class 9–FSC', order: 1 },
      { name: 'Mr. Tariq Hassan', role: 'Mathematics Teacher', subject: 'Mathematics', bio: 'Specialist in advanced mathematics, known for making complex concepts simple and engaging.', qualifications: ['MSc Mathematics', 'BSc Hons'], experience: 10, classes: 'Class 6–10', order: 2 },
      { name: 'Ms. Ayesha Noor', role: 'English Language Teacher', subject: 'English', bio: 'MA in English Literature with a passion for creative writing and communication skills.', qualifications: ['MA English', 'BA Hons'], experience: 8, classes: 'Class 1–8', order: 3 },
      { name: 'Mr. Imran Baig', role: 'Computer Science Teacher', subject: 'Computer Science', bio: 'Software engineer turned educator, bringing real-world tech experience to the classroom.', qualifications: ['MS Computer Science', 'BSc Software Engineering'], experience: 6, classes: 'Class 9–FSC', order: 4 },
      { name: 'Ms. Sana Riaz', role: 'Biology Teacher', subject: 'Biology', bio: 'Dedicated biology educator who inspires students with a love for the natural world.', qualifications: ['MSc Biology', 'BSc Hons'], experience: 9, classes: 'FSC Pre-Med', order: 5 },
      { name: 'Mr. Khalid Rehman', role: 'Urdu & Islamiat Teacher', subject: 'Urdu / Islamiat', bio: 'Veteran educator with a deep commitment to language preservation and Islamic studies.', qualifications: ['MA Urdu', 'MA Islamiat'], experience: 18, classes: 'Class 1–10', order: 6 },
    ]);
  }

  // Seed Notices
  const noticesCount = await Notice.countDocuments();
  if (noticesCount === 0) {
    await Notice.insertMany([
      { title: 'Annual Examination Schedule 2024', content: 'Annual examinations will commence from December 1st, 2024. All students must bring their admission cards.', priority: 'urgent', date: new Date() },
      { title: 'Eid ul Fitr Holiday Notice', content: 'The school will remain closed on Eid ul Fitr holidays (3 days). Classes resume as normal after the break.', priority: 'normal', date: new Date(Date.now() - 86400000 * 2) },
      { title: 'Fee Submission Deadline', content: 'Monthly fee must be submitted by the 10th of every month. Late fees will incur a penalty of PKR 200.', priority: 'important', date: new Date(Date.now() - 86400000 * 3) },
      { title: 'Annual Sports Day Registration', content: 'Students wishing to participate in the Annual Sports Day must register with their class teacher by Friday.', priority: 'normal', date: new Date(Date.now() - 86400000 * 5) },
    ]);
  }

  return NextResponse.json({ message: 'Database seeded successfully!' });
}
