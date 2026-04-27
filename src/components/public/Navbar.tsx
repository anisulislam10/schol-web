'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin, GraduationCap, Lock, Globe } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stable SVG Icons for Socials
  const SocialIcon = ({ path }: { path: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d={path} />
    </svg>
  );

  const socials = [
    { name: 'Facebook', path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8.05 9.77v-6.91h-2.5v-2.86h2.5v-2.2c0-2.47 1.49-3.83 3.73-3.83 1.08 0 2.2.19 2.2.19v2.41h-1.24c-1.23 0-1.61.76-1.61 1.54v1.86h2.72l-.44 2.87h-2.28v6.91C18.56 20.87 22 16.84 22 12z" },
    { name: 'Twitter', path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
    { name: 'Instagram', path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000]">
      {/* 1. Top Info Bar (Dark Navy) */}
      <div className={`bg-[#061727] text-white/80 py-2 px-6 hidden lg:block border-b border-white/5 transition-all ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] font-medium">
          <div className="flex gap-6 items-center">
             <span className="flex items-center gap-2"><MapPin size={12} className="text-[#17a2b8]" /> Satellite Town, Rawalpindi, Pakistan</span>
             <span className="flex items-center gap-2"><Phone size={12} className="text-[#17a2b8]" /> +92 (051) 1234567</span>
             <span className="flex items-center gap-2"><Mail size={12} className="text-[#17a2b8]" /> info@gcsrawalpindi.edu.pk</span>
          </div>
          <div className="flex gap-4 items-center">
             <div className="flex gap-3 border-r border-white/10 pr-4 mr-2">
                {socials.map((social, i) => (
                  <a key={i} href="#" className="hover:text-[#17a2b8] transition-colors"><SocialIcon path={social.path} /></a>
                ))}
             </div>
             <Link href="/contact" className="text-white hover:text-[#17a2b8] font-bold">Apply Now</Link>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className={`transition-all duration-300 px-6 ${scrolled ? 'bg-white shadow-2xl py-3' : 'bg-white py-5 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
             <div className="w-16 h-16 relative flex items-center justify-center p-1 bg-white border border-slate-100 rounded-sm">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" onError={(e) => e.currentTarget.src = 'https://gcsrawalpindi.edu.pk/wp-content/uploads/2021/06/cropped-GCS-Logo-1.png'} />
             </div>
             <div className="flex flex-col">
                <div className="text-[#061727] font-black text-xl leading-none tracking-tight">GOVT. GRADUATE COLLEGE</div>
                <div className="text-[#17a2b8] font-black text-[15px] leading-tight mt-0.5">SATELLITE TOWN, RAWALPINDI</div>
             </div>
          </Link>

          <div className="hidden xl:flex items-center gap-8">
            {[
              { n: 'Home', h: '/' },
              { n: 'About Us', h: '/about' },
              { n: 'Admission', h: '/admissions' },
              { n: 'Examination', h: '/contact' },
              { n: 'Downloads', h: '/contact' },
              { n: 'Contact Us', h: '/contact' },
            ].map(l => (
              <Link key={l.n} href={l.h} className="text-[#061727] hover:text-[#17a2b8] font-black text-[13px] uppercase tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-[#17a2b8] after:transition-all hover:after:w-full">
                {l.n}
              </Link>
            ))}
            <Link href="/admin/login" className="bg-[#17a2b8] text-white px-8 py-3 rounded-md font-black text-[13px] uppercase hover:bg-[#061727] transition-all shadow-lg hover:shadow-[#17a2b8]/20 flex items-center gap-2">
               Portal Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
