'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';
import { 
  Users, BookOpen, ScrollText, GraduationCap, 
  ChevronRight, Calendar, ArrowUpRight, Play, CheckCircle2, X, ChevronLeft, Globe
} from 'lucide-react';

export default function HomePage({ data }: { data: any }) {
  const { features, teachers, notices, popups } = data;
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (popups && popups.length > 0) {
      const timer = setTimeout(() => setShowPopup(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [popups]);

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050853064-5a1099684364?auto=format&fit=crop&q=80&w=1920" 
            alt="Students" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#002d56]/40" />
        </div>
        
        <div className="relative z-10 max-w-5xl px-6 text-white">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight uppercase">
            Building Confidence <br /> Through Support
          </h1>
          <div className="flex justify-center gap-6 mt-12">
            <Link href="/visit" className="bg-[#ffcc00] text-[#002d56] px-10 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
              VISIT US
            </Link>
            <Link href="/apply" className="bg-[#ffcc00] text-[#002d56] px-10 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
              APPLY NOW
            </Link>
          </div>
        </div>

        {/* Carousel Controls (Mock) */}
        <button className="absolute left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all">
          <ChevronLeft size={32} />
        </button>
        <button className="absolute right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all">
          <ChevronRight size={32} />
        </button>
      </section>

      {/* 2. EXPLORE SECTION */}
      <section className="py-24 bg-[#002d56] text-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-16 uppercase tracking-wider">Explore Lausanne</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Lower School', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=600' },
              { title: 'Middle School', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600' },
              { title: 'Upper School', img: 'https://images.unsplash.com/photo-1523050853064-5a1099684364?auto=format&fit=crop&q=80&w=600' },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-sm cursor-pointer">
                <img src={item.img} alt={item.title} className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-left">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">{item.title}</h3>
                  <div className="w-12 h-1 bg-[#ffcc00]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BY THE NUMBERS */}
      <section className="bg-[#4a7729] py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase">
                We Build Character Through <br /> Service to Others
              </h2>
              <Link href="/service" className="inline-block bg-[#ffcc00] text-[#002d56] px-8 py-3 rounded-sm font-black text-xs uppercase tracking-widest mb-16 hover:bg-white transition-all">
                LEARN MORE
              </Link>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-6xl font-black mb-2 tracking-tighter">33%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 leading-relaxed">Lower School Students <br /> Participate in Service</div>
                </div>
                <div>
                  <div className="text-6xl font-black mb-2 tracking-tighter">19</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 leading-relaxed">Student-Led Service <br /> Organizations</div>
                </div>
                <div>
                  <div className="text-6xl font-black mb-2 tracking-tighter">51%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 leading-relaxed">Upper School Students <br /> Exceed Service Hours</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-[500px] object-cover rounded-sm shadow-2xl" 
                alt="Service"
              />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-[10px] border-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. WORLD MAP SECTION */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-slate-400 font-bold text-sm uppercase tracking-[0.3em] block mb-4">A Diverse Global Presence</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#002d56] mb-16 uppercase tracking-tight">Our Students Come From Over 70 Countries</h2>
          <div className="relative h-[500px] w-full bg-contain bg-center bg-no-repeat opacity-80" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')" }}>
             {/* Animated Dots Mock */}
             <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#ffcc00] rounded-full animate-ping" />
             <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#ffcc00] rounded-full animate-ping" />
             <div className="absolute top-1/4 left-3/4 w-3 h-3 bg-[#ffcc00] rounded-full animate-ping" />
          </div>
          <button className="mt-12 bg-[#002d56] text-white px-12 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-[#ffcc00] hover:text-[#002d56] transition-all">
            GLOBAL DIVERSITY
          </button>
        </div>
      </section>

      {/* 5. OPPORTUNITIES SECTION */}
      <section className="relative py-40 overflow-hidden bg-[#002d56]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover opacity-60" alt="Graduation" />
          <div className="absolute inset-0 bg-[#002d56]/60" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-white">
            <span className="text-[#ffcc00] font-black text-sm uppercase tracking-widest block mb-6">Success</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">We Provide <br /> Opportunities <br /> to Succeed</h2>
            <p className="text-xl text-white/80 leading-relaxed font-medium mb-12 max-w-xl">
              At Lausanne, students excel in academics, arts and athletics while developing the skills to succeed in college and beyond.
            </p>
            <Link href="/success" className="bg-[#ffcc00] text-[#002d56] px-10 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
              LEARN MORE
            </Link>
          </div>
          <div className="hidden lg:block relative h-[600px]">
             {/* Decorative Cap Mock */}
             <div className="absolute -top-20 right-0 transform rotate-12">
               < GraduationCap size={200} className="text-white opacity-20" />
             </div>
          </div>
        </div>
      </section>

      {/* 6. GRADUATES SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#002d56] mb-4 uppercase tracking-tighter">Our Graduates Are Following Their Dreams</h2>
          <div className="text-[#17a2b8] font-bold uppercase tracking-widest mb-20 text-sm">Full Admission Profile 2023</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: 'University of Chicago', img: 'https://brand.uchicago.edu/images/primary-logo-reversed.png' },
              { name: 'Stanford University', img: 'https://identity.stanford.edu/wp-content/uploads/sites/3/2020/06/stanford-logo.png' },
              { name: 'Oxford University', img: 'https://www.ox.ac.uk/sites/default/files/styles/image_col_3/public/oxford_logo.png' },
            ].map((uni, i) => (
              <div key={i} className="flex flex-col items-center gap-8 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <div className="h-40 flex items-center justify-center">
                   {/* Placeholder for Uni Logo */}
                   <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center font-black text-[#002d56] text-xl border-4 border-[#002d56]">
                      UNI {i+1}
                   </div>
                </div>
                <p className="text-slate-400 text-sm font-bold max-w-xs leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
          {/* Slider Controls */}
          <div className="mt-20 flex justify-center gap-4">
             <button className="w-10 h-10 border-2 border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-100 transition-all"><ChevronLeft size={20} /></button>
             <button className="w-10 h-10 border-2 border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-100 transition-all"><ChevronRight size={20} /></button>
          </div>
        </div>
      </section>

      {/* 7. NEWS SECTION */}
      <section className="py-32 bg-[#002d56] text-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
           <span className="text-slate-400 font-bold text-xs uppercase tracking-[0.4em] block mb-6">Social Feed</span>
           <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase tracking-tight">What's Happening at Lausanne</h2>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {notices.slice(0, 4).map((notice: any, i: number) => (
                <div key={notice._id} className="bg-white text-[#002d56] text-left rounded-sm overflow-hidden flex flex-col group cursor-pointer">
                   <div className="h-48 bg-slate-100 relative overflow-hidden">
                      <img src={`https://images.unsplash.com/photo-${1550000000000 + i}?auto=format&fit=crop&q=80&w=400&h=300`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="News" />
                   </div>
                   <div className="p-6 flex-grow flex flex-col">
                      <span className="text-[#17a2b8] font-bold text-[10px] uppercase tracking-widest mb-4">Lausanne News</span>
                      <h4 className="font-black text-lg mb-4 line-clamp-2 leading-snug uppercase tracking-tighter">{notice.title}</h4>
                      <p className="text-slate-500 text-[11px] font-medium mb-8 flex-grow line-clamp-3 leading-relaxed">
                        {notice.content}
                      </p>
                      <button className="text-[#002d56] font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all border-b border-[#002d56] pb-1 w-fit">
                        READ STORY
                      </button>
                   </div>
                </div>
              ))}
           </div>
           <button className="mt-20 bg-[#ffcc00] text-[#002d56] px-12 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
             VIEW ALL NEWS
           </button>
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="py-32 bg-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#002d56] mb-8 uppercase tracking-tighter leading-none">Want to be a Part of the Lynx Family?</h2>
          <p className="text-xl text-slate-500 font-medium mb-12">
            The best way to start finding your place at Lausanne is to connect with us in person and see our lively, organic campus community first-hand.
          </p>
          <Link href="/visit" className="bg-[#ffcc00] text-[#002d56] px-12 py-5 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-[#002d56] hover:text-white transition-all shadow-xl">
             PLAN YOUR CAMPUS VISIT
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
