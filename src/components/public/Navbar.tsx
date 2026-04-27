'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Academics', 
      href: '/academics',
      dropdown: [
        { name: 'Departments', href: '/academics/departments' },
        { name: 'Degrees', href: '/academics/degrees' },
        { name: 'Degree Programs', href: '/academics/programs' },
        { name: 'Time Table', href: '/academics/timetable' },
        { name: 'Date Sheets', href: '/academics/datesheets' },
        { name: 'Examination Results', href: '/academics/results' },
      ]
    },
    { 
      name: 'Admissions', 
      href: '/admissions',
      dropdown: [
        { name: 'Fee Structure', href: '/admissions/fee' },
        { name: 'Admission Criteria', href: '/admissions/criteria' },
        { name: 'Admission Process', href: '/admissions/process' },
        { name: 'Student Life', href: '/student-life' },
        { name: 'Current Enrollment', href: '/admissions/enrollment' },
      ]
    },
    { name: 'News & Events', href: '/news' },
    { name: 'Downloads', href: '/downloads' },
    { 
      name: 'About', 
      href: '/about',
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Faculty', href: '/faculty' },
        { name: 'Institute Committees', href: '/about/committees' },
        { name: 'Institute Leadership', href: '/about/leadership' },
        { name: 'Non Teaching Staff', href: '/about/staff' },
        { name: 'Institute Facilities', href: '/about/facilities' },
        { name: 'Vacancy Positions', href: '/about/vacancies' },
      ]
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 font-sans ${scrolled ? 'bg-[#002d56] py-3 shadow-xl' : 'bg-[#002d56]/90 backdrop-blur-md py-4'}`}>
      {/* Top Bar */}
      <div className={`hidden lg:block border-b border-white/10 pb-3 mb-3 transition-all ${scrolled ? 'h-0 opacity-0 overflow-hidden mb-0' : 'h-auto opacity-100'}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center text-[12px] font-medium text-white/80 tracking-wide">
          <div className="flex gap-8">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-[#ffcc00]" /> Satellite Town, Rawalpindi</span>
            <span className="flex items-center gap-2"><Phone size={14} className="text-[#ffcc00]" /> +92 (051) 1234567</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-[#ffcc00]" /> info@ggcstr.edu.pk</span>
          </div>
          <div className="flex gap-6">
            <Link href="/admin/login" className="hover:text-[#ffcc00] transition-colors">Admin Portal</Link>
            <Link href="#" className="hover:text-[#ffcc00] transition-colors">LMS</Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center p-1 shadow-lg group-hover:scale-105 transition-transform">
             <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col text-white">
            <span className="font-bold text-lg leading-tight tracking-tight">GOVT. GRADUATE COLLEGE</span>
            <span className="text-[10px] font-semibold tracking-wide text-[#ffcc00] mt-0.5">SATELLITE TOWN, RAWALPINDI</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href={link.href} 
                className="text-white text-[14px] font-semibold tracking-wide flex items-center gap-1.5 hover:text-[#ffcc00] transition-all py-2"
              >
                {link.name} {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && activeDropdown === link.name && (
                <div className="absolute top-full left-0 mt-0 pt-4 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-md shadow-2xl overflow-hidden border-t-4 border-[#ffcc00]">
                    {link.dropdown.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href}
                        className="block px-6 py-4 text-[#002d56] text-[13px] font-medium hover:bg-slate-50 hover:text-[#ffcc00] transition-all border-b border-slate-50 last:border-0"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link href="/admissions" className="bg-[#ffcc00] text-[#002d56] px-6 py-2.5 rounded-md font-bold text-sm hover:bg-white transition-all shadow-lg">
             Apply Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-[#002d56] z-[999] pt-24 px-6 overflow-y-auto pb-12">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-white/10 pb-4">
                <div className="flex justify-between items-center mb-4">
                   <Link 
                    href={link.href} 
                    className="text-white text-lg font-bold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && <ChevronDown size={20} className="text-white/50" />}
                </div>
                {link.dropdown && (
                  <div className="flex flex-col gap-4 pl-6">
                    {link.dropdown.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href}
                        className="text-white/70 text-sm font-medium hover:text-[#ffcc00]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="/apply" 
              className="bg-[#ffcc00] text-[#002d56] px-12 py-4 rounded-md font-bold text-lg text-center mt-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              APPLY NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
