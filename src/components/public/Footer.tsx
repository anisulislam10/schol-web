'use client';

import Link from 'next/link';
import { GraduationCap, Phone, Mail, MapPin, ChevronRight, Globe, Shield } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const SocialIcon = ({ path }: { path: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d={path} />
    </svg>
  );

  return (
    <footer className="bg-white border-t border-slate-100 relative pt-32">
      {/* 1. BRAND BOX (Floating teal block as per GCS style) */}
      <div className="max-w-7xl mx-auto px-6 relative z-20">
         <div className="footer-brand-box grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm overflow-hidden p-1 shadow-sm">
                     <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                     <div className="font-black text-2xl leading-none">GOVT. GRADUATE COLLEGE</div>
                     <div className="font-black text-sm uppercase tracking-widest opacity-80 mt-1">SATELLITE TOWN, RAWALPINDI</div>
                  </div>
               </div>
               <p className="text-white/80 font-medium text-sm max-w-xl">
                  Commitment to high quality Public Education and research. Leading the way in academic excellence in the heart of Rawalpindi.
               </p>
            </div>
            <div className="flex md:justify-end gap-3">
               {[
                 "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8.05 9.77v-6.91h-2.5v-2.86h2.5v-2.2c0-2.47 1.49-3.83 3.73-3.83 1.08 0 2.2.19 2.2.19v2.41h-1.24c-1.23 0-1.61.76-1.61 1.54v1.86h2.72l-.44 2.87h-2.28v6.91C18.56 20.87 22 16.84 22 12z",
                 "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
               ].map((path, i) => (
                 <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#17a2b8] transition-all">
                   <SocialIcon path={path} />
                 </a>
               ))}
            </div>
         </div>
      </div>

      {/* 2. MAIN NAVY FOOTER */}
      <div className="bg-[#061727] pt-32 pb-16 text-white/60 text-sm">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
               <h4 className="text-white font-black text-base mb-8 uppercase tracking-widest italic border-b border-white/5 pb-4">About Us</h4>
               <p className="leading-relaxed font-medium">
                  Government Graduate College for Boys, Satellite Town, Rawalpindi is a premier seat of learning in the region.
               </p>
            </div>
            <div>
               <h4 className="text-white font-black text-base mb-8 uppercase tracking-widest italic border-b border-white/5 pb-4">Quick Links</h4>
               <ul className="space-y-4">
                  {['Admission History', 'Programs Offered', 'Student Societies', 'Public Information (RTI)', 'Download Center'].map(link => (
                    <li key={link}><Link href="#" className="hover:text-[#17a2b8] flex items-center gap-2 group"><ChevronRight size={14} className="text-[#17a2b8] group-hover:translate-x-1 transition-all" /> {link}</Link></li>
                  ))}
               </ul>
            </div>
            <div>
               <h4 className="text-white font-black text-base mb-8 uppercase tracking-widest italic border-b border-white/5 pb-4">Contact Info</h4>
               <ul className="space-y-6">
                  <li className="flex gap-4"><MapPin size={18} className="text-[#17a2b8] shrink-0" /> Block-B, Satellite Town, Rawalpindi.</li>
                  <li className="flex gap-4"><Phone size={18} className="text-[#17a2b8] shrink-0" /> +92 (051) 9290514</li>
                  <li className="flex gap-4"><Mail size={18} className="text-[#17a2b8] shrink-0" /> gcsrawalpindi@gmail.com</li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-black text-base mb-8 uppercase tracking-widest italic border-b border-white/5 pb-4">Official Portals</h4>
               <div className="flex flex-wrap gap-2 text-[10px] items-center">
                  <a href="#" className="bg-white/5 px-4 py-2 rounded hover:bg-[#17a2b8] hover:text-white transition-all font-black text-white">HED PUNJAB</a>
                  <a href="#" className="bg-white/5 px-4 py-2 rounded hover:bg-[#17a2b8] hover:text-white transition-all font-black text-white">PITB</a>
                  <a href="#" className="bg-white/5 px-4 py-2 rounded hover:bg-[#17a2b8] hover:text-white transition-all font-black text-white">BISE RAWALPINDI</a>
                  <a href="#" className="bg-white/5 px-4 py-2 rounded hover:bg-[#17a2b8] hover:text-white transition-all font-black text-white">HEC</a>
               </div>
            </div>
         </div>
         
         <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-black text-[10px] uppercase tracking-[0.2em]">© {year} Government Graduate College, Rawalpindi. Developed by PITB.</div>
            <div className="flex gap-8 font-black text-[10px] uppercase tracking-[0.2em]">
               <Link href="#" className="hover:text-white">Privacy</Link>
               <Link href="#" className="hover:text-white">Terms</Link>
               <Link href="#" className="hover:text-white">Cookie Policy</Link>
            </div>
         </div>
      </div>
    </footer>
  );
}
