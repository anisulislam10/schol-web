import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';
import { Target, Eye, ShieldCheck, Zap, BookOpen, Users, Compass, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the legacy, mission, and vision of Govt. Graduate College. Our commitment to excellence in higher education has served students for decades.',
};
import dbConnect from '@/lib/db';
import Settings from '@/lib/models/Settings';

export const revalidate = 0;

async function getSettings() {
  await dbConnect();
  return await Settings.findOne({}).lean();
}

export default async function AboutPage() {
  const settings = await getSettings();
  
  return (
    <div className="bg-slate-50 min-h-screen font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/slider1.jpg" alt="About GGC Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#002d56]/80 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[#ffcc00] font-black uppercase tracking-[0.3em] text-xs mb-6 px-4 py-1.5 border border-[#ffcc00]/50 rounded-full inline-flex">Who We Are</span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none drop-shadow-2xl">
            Legacy Of <br /> Excellence
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl px-4">
            Established with the mission to provide quality higher education, Govt. Graduate College for Women, Peshawar Road, Rawalpindi has been serving students from diverse backgrounds for decades.
          </p>
        </div>
      </section>

      {/* Intro Stats Bar */}
      <section className="relative z-20 -mt-16 px-6">
        <div className="max-w-[1200px] mx-auto bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          {[
            { value: `Est. ${settings?.established || '1950'}`, label: 'Rich History & Heritage' },
            { value: `${settings?.totalStudents || '5,000'}+`, label: 'Enrolled Students' },
            { value: `${settings?.totalTeachers || '120'}+`, label: 'Distinguished Faculty' },
          ].map((stat, i) => (
            <div key={i} className="flex-1 p-10 text-center border-b md:border-b-0 md:border-r border-slate-100 last:border-0 hover:bg-[#fafafa] transition-colors">
              <h3 className="text-4xl font-black text-[#002d56] uppercase tracking-tighter mb-2">{stat.value}</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Mission */}
          <div className="bg-white p-12 lg:p-16 rounded-xl shadow-xl border border-slate-100 group hover:border-[#ffcc00] transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 transform translate-x-4 -translate-y-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target size={160} />
            </div>
            <div className="w-16 h-16 bg-[#002d56] rounded-2xl flex items-center justify-center text-[#ffcc00] mb-10 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <Target size={32} />
            </div>
            <h2 className="text-4xl font-black text-[#002d56] uppercase tracking-tighter mb-6 relative z-10">Our Mission</h2>
            <p className="text-slate-600 font-medium leading-relaxed text-lg relative z-10">
              To provide accessible, affordable, and quality education that prepares students for professional careers and higher studies. We are committed to fostering an environment of academic excellence, character building, and social responsibility.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#002d56] p-12 lg:p-16 rounded-xl shadow-xl group transition-all relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 p-8 transform translate-x-4 -translate-y-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye size={160} />
            </div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#ffcc00] mb-10 shadow-lg group-hover:scale-110 transition-transform duration-500">
              <Eye size={32} />
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 relative z-10 flex items-center gap-4">
              Our Vision <span className="w-16 h-1 bg-[#ffcc00] block" />
            </h2>
            <p className="text-white/80 font-medium leading-relaxed text-lg relative z-10">
              To be recognized as a premier institution of higher learning that produces competent graduates equipped with knowledge, skills, and values to contribute positively to society on a global scale.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
             <span className="text-[#ffcc00] font-black text-xs uppercase tracking-[0.3em] block mb-4">6 Principles We Live By</span>
             <h2 className="text-4xl md:text-6xl font-black text-[#002d56] uppercase tracking-tighter">Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: 'Academic Excellence', desc: 'Commitment to the highest standards of teaching, research, and collaborative learning.' },
              { icon: ShieldCheck, title: 'Integrity', desc: 'Upholding strict ethical values, honesty, and transparency in all institutional operations.' },
              { icon: Users, title: 'Inclusivity', desc: 'Providing equal opportunities, a welcoming campus, and a safe space for all students.' },
              { icon: Zap, title: 'Innovation', desc: 'Embracing modern teaching methodologies, technologies, and visionary strategies.' },
              { icon: Compass, title: 'Community Service', desc: 'Encouraging students to give back to society and develop strong moral responsibilities.' },
              { icon: Target, title: 'Leadership', desc: 'Cultivating confident, ethical leaders who inspire positive change in society and the nation.' },
            ].map((val, i) => (
              <div key={i} className="group p-10 border border-slate-100 rounded-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-slate-50 hover:bg-white text-center flex flex-col items-center">
                 <div className="w-20 h-20 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#17a2b8] mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:text-[#002d56]">
                   <val.icon size={32} />
                 </div>
                 <h3 className="text-xl font-black text-[#002d56] uppercase tracking-tighter mb-4">{val.title}</h3>
                 <p className="text-slate-500 font-medium leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-32 px-6 bg-slate-50 overflow-hidden relative">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#ffcc00] rounded-full blur-[120px] opacity-20 pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#17a2b8] rounded-full blur-[120px] opacity-10 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-[#002d56] uppercase tracking-tighter">Explore Campus</h2>
              <p className="text-slate-500 font-medium mt-4 max-w-xl">Find details on our leadership, departments, and career opportunities right here at Govt. Graduate College.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { title: 'Faculty', href: '/faculty', desc: 'Meet our distinguished educators' },
              { title: 'Institute Committees', href: '/about/committees', desc: 'College committees and their roles' },
              { title: 'Institute Leadership', href: '/about/leadership', desc: 'Our leadership team & management' },
              { title: 'Non Teaching Staff', href: '/about/staff', desc: 'Our dedicated support staff members' },
              { title: 'Institute Facilities', href: '/about/facilities', desc: 'Library, Labs, and Campus Resources' },
              { title: 'Vacancy Positions', href: '/about/vacancies', desc: 'Current job openings and careers' },
            ].map((item, index) => (
              <Link key={item.href} href={item.href} className="flex flex-col bg-white p-10 rounded-xl border border-slate-100 hover:border-[#ffcc00] transition-all duration-300 shadow-md hover:shadow-2xl group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -mr-10 -mt-10 group-hover:bg-[#ffcc00]/10 transition-colors" />
                <h3 className="text-2xl font-black text-[#002d56] uppercase tracking-tighter mb-3 relative z-10">{item.title}</h3>
                <p className="text-slate-500 font-medium mb-12 relative z-10">{item.desc}</p>
                <div className="mt-auto flex justify-end">
                   <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-[#002d56] group-hover:bg-[#002d56] group-hover:text-[#ffcc00] group-hover:border-[#002d56] transform group-hover:translate-x-2 transition-all duration-300">
                     <ChevronRight size={20} />
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
