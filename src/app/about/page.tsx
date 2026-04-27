'use client';

import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { Target, History, Award, BookOpen, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* GCS Styled Header */}
      <section className="relative pt-48 pb-24 bg-[#061727] text-white">
        <div className="absolute inset-0 z-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=1200" alt="About" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-[#17a2b8] font-black text-xs uppercase tracking-[0.4em] mb-6 block">Our Institutional Identity</span>
          <h1 className="text-6xl font-black tracking-tight mb-8">
            Decades of <span className="text-[#17a2b8]">Academic Legacy.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-white/70 leading-relaxed font-medium">
            Discover the history, values, and vision that drive one of Rawalpindi's most respected educational institutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision: High Contrast Navy Cards */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-16 border border-slate-100 bg-white rounded-2xl shadow-institutional relative group overflow-hidden">
            <div className="w-16 h-16 bg-[#17a2b8]/10 rounded-xl flex items-center justify-center mb-10 group-hover:bg-[#17a2b8] transition-all">
               <Target className="text-[#17a2b8] group-hover:text-white" size={36} />
            </div>
            <h2 className="text-3xl font-black text-[#061727] mb-8">The Mission</h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10">
              To empower students with a balanced education that values both intellectual growth and social responsibility, enabling them to lead with integrity in an evolving world.
            </p>
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-10 group-hover:bg-[#17a2b8]/5 transition-all" />
          </div>

          <div className="p-16 border border-slate-100 bg-white rounded-2xl shadow-institutional relative group overflow-hidden">
            <div className="w-16 h-16 bg-[#17a2b8]/10 rounded-xl flex items-center justify-center mb-10 group-hover:bg-[#17a2b8] transition-all">
               <History className="text-[#17a2b8] group-hover:text-white" size={36} />
            </div>
            <h2 className="text-3xl font-black text-[#061727] mb-8">The Tradition</h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium mb-10">
              Built on a foundation of discipline and merit, we take pride in our heritage of producing notable alumni who serve the nation across all professional sectors.
            </p>
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -z-10 group-hover:bg-[#17a2b8]/5 transition-all" />
          </div>
        </div>
      </section>

      {/* Values Grid: Navy Theme */}
      <section className="py-32 bg-[#061727] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black tracking-tight mb-6">Institutional Pillars</h2>
            <div className="w-24 h-1.5 bg-[#17a2b8] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {[
              { icon: ShieldCheck, title: 'Integrity', desc: 'Upholding the highest moral and academic standards.' },
              { icon: Heart, title: 'Service', desc: 'Dedicated to the community and national development.' },
              { icon: BookOpen, title: 'Excellence', desc: 'Striving for perfection in every academic pursuit.' },
              { icon: Award, title: 'Merit', desc: 'Ensuring fair opportunities for all based on talent.' }
            ].map((v, i) => (
              <div key={i} className="text-center group">
                 <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:bg-[#17a2b8] group-hover:border-[#17a2b8] transition-all duration-300">
                    <v.icon className="text-[#17a2b8] group-hover:text-white" size={32} />
                 </div>
                 <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                 <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
