'use client';

import { useState } from 'react';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import NoticeTicker from '@/components/public/NoticeTicker';
import TeacherSection from '@/components/public/TeacherSection';
import Link from 'next/link';
import { 
  Users, BookOpen, ScrollText, GraduationCap, 
  ChevronRight, Calendar, ArrowUpRight, Play, CheckCircle2
} from 'lucide-react';

export default function HomePage({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState('principal');
  const { features, teachers, notices } = data;

  const stats = [
    { label: 'Faculty', count: '150+', icon: Users, color: 'teal' },
    { label: 'Courses', count: '25+', icon: BookOpen, color: 'white' },
    { label: 'Examinations', count: '98%', icon: ScrollText, color: 'teal' },
    { label: 'Students', count: '5000+', icon: GraduationCap, color: 'white' },
  ];

  const tabContent = {
    principal: {
      title: "Principal Message",
      urdu: "ہمارا وژن معیاری تعلیم کی فراہمی ہے",
      text: "Government Graduate College, Satellite Town, Rawalpindi is one of the most prestigious institutions of our country. Our aim is to provide excellence in education while focusing on character building and professional growth of our students.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
    },
    vision: {
      title: "Our Vision",
      urdu: "پاکستان کا روشن مستقبل",
      text: "To be a center of excellence in teaching, learning and research at undergraduate and graduate levels, producing graduates who are leaders in their professions and responsible citizens.",
      image: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=600"
    },
    history: {
      title: "Our History",
      urdu: "روایت اور جدت کا سنگم",
      text: "Founded decades ago, this college has grown from a small preparatory school into a massive graduate institution serving thousands of students from across the Punjab and beyond.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600"
    }
  };

  return (
    <div className="bg-white">
      <Navbar />
      
      {/* 1. GCS HERO CAROUSEL STYLE */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center pt-40 overflow-hidden bg-[#061727]">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img src="/api/image/modern_school_hero" alt="College Campus" className="w-full h-full object-cover opacity-60" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#061727] via-[#061727]/40 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20 text-white w-full">
           <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-[#17a2b8] px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-[#17a2b8]/20">
                <CheckCircle2 size={12} /> Education Through Innovation
              </span>
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1] tracking-tight">
                Empowering <br />
                <span className="text-[#17a2b8]">Generations.</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-12 font-medium">
                Official Institutional Portal of Government Graduate College, Satellite Town, Rawalpindi. Committed to excellence in higher education for a brighter Pakistan.
              </p>
              <div className="flex flex-wrap gap-5">
                 <Link href="/admin/login" className="bg-[#17a2b8] text-white px-10 py-5 rounded-md font-black text-sm uppercase hover:bg-white hover:text-[#17a2b8] transition-all shadow-xl shadow-[#17a2b8]/20">
                   Portal Login
                 </Link>
                 <Link href="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-md font-black text-sm uppercase hover:bg-white hover:text-[#061727] transition-all">
                   Contact Us
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* 2. LATEST NEWS TICKER (Cyan/Navy style) */}
      <section className="relative z-30 bg-[#061727] border-y border-white/5 h-16 flex items-center">
         <div className="bg-[#17a2b8] h-full px-10 flex items-center gap-3 font-black text-sm text-white uppercase tracking-widest relative after:content-[''] after:absolute after:right-[-15px] after:top-0 after:bottom-0 after:w-[15px] after:bg-[#17a2b8] after:clip-path-triangle">
           Latest
         </div>
         <NoticeTicker notices={notices} />
      </section>

      {/* 3. STAT COUNTER (Teal/White cards) */}
      <section className="relative z-40 -mt-10 max-w-7xl mx-auto px-6">
         <div className="grid grid-cols-2 md:grid-cols-4 rounded-xl overflow-hidden shadow-2xl">
            {stats.map((stat, i) => (
              <div key={i} className={`stat-card ${stat.color === 'teal' ? 'stat-card-teal' : 'stat-card-white'}`}>
                 <stat.icon size={32} className={`mx-auto mb-4 ${stat.color === 'teal' ? 'text-white' : 'text-[#17a2b8]'}`} />
                 <div className="text-4xl font-black mb-1">{stat.count}</div>
                 <div className={`text-[11px] font-black uppercase tracking-widest ${stat.color === 'teal' ? 'text-white/70' : 'text-slate-400'}`}>{stat.label}</div>
              </div>
            ))}
         </div>
      </section>

      {/* 4. TABBED INSTITUTIONAL INFO */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <div className="flex gap-2 p-1 bg-slate-100 rounded-lg mb-12 max-w-fit">
                    {Object.keys(tabContent).map((tab) => (
                      <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-3 rounded-md font-black text-xs uppercase tracking-widest transition-all ${activeTab === tab ? 'tab-active shadow-lg' : 'tab-inactive'}`}
                      >
                         {(tabContent as any)[tab].title}
                      </button>
                    ))}
                 </div>
                 
                 <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
                    <h2 className="urdu-text text-4xl text-[#17a2b8] font-bold text-right">
                       {(tabContent as any)[activeTab].urdu}
                    </h2>
                    <h3 className="text-4xl font-black text-[#061727]">
                       {(tabContent as any)[activeTab].title}
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium">
                       {(tabContent as any)[activeTab].text}
                    </p>
                    <Link href="/about" className="inline-flex items-center gap-3 bg-[#061727] text-white px-8 py-4 rounded-md font-black text-xs uppercase tracking-widest hover:bg-[#17a2b8] transition-all">
                       Learn More <ArrowUpRight size={16} />
                    </Link>
                 </div>
              </div>

              <div className="relative">
                 <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10 border-[12px] border-slate-50">
                    <img src={(tabContent as any)[activeTab].image} alt="Institutional" className="w-full h-full object-cover" />
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#17a2b8] rounded-2xl -z-10 animate-pulse opacity-20" />
                 <div className="absolute -top-10 -left-10 w-32 h-32 border-[20px] border-[#061727]/5 rounded-full -z-10" />
              </div>
           </div>
        </div>
      </section>

      {/* 5. PROGRAMS GRID (With ribbons) */}
      <section className="py-32 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-20">
               <div>
                  <span className="text-[#17a2b8] font-black text-xs uppercase tracking-[0.3em] block mb-4">Academic Excellence</span>
                  <h2 className="text-5xl font-black text-[#061727]">Degree Programs</h2>
               </div>
               <button className="text-slate-400 font-bold hover:text-[#17a2b8] flex items-center gap-2">View All Departments <ChevronRight size={18} /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {features.map((f: any) => (
                 <div key={f._id} className="group relative bg-white rounded-xl overflow-hidden shadow-institutional border border-slate-100 hover:border-[#17a2b8] transition-all">
                    <div className="relative h-48 overflow-hidden">
                       <div className="ribbon">BS Program</div>
                       <img src={`https://images.unsplash.com/photo-1523050853064-5a1099684364?auto=format&fit=crop&q=80&w=400&h=300`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={f.title} />
                       <div className="absolute inset-0 bg-[#061727]/20 group-hover:bg-transparent transition-all" />
                    </div>
                    <div className="p-8">
                       <h4 className="font-black text-[#061727] text-lg mb-3 tracking-tight">{f.title}</h4>
                       <p className="text-slate-400 text-xs leading-relaxed mb-6 h-12 overflow-hidden">{f.description}</p>
                       <Link href="/contact" className="text-[#17a2b8] font-black text-[11px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                          View Details <ChevronRight size={14} />
                       </Link>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. LEARNED FACULTY */}
      <section className="py-32">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
               <h2 className="text-5xl font-black text-[#061727]">Expert Faculty</h2>
               <div className="w-24 h-1.5 bg-[#17a2b8] mx-auto mt-6" />
            </div>
            <TeacherSection teachers={teachers.slice(0, 4)} />
         </div>
      </section>

      <Footer />
    </div>
  );
}
