import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';
import { 
  Music, Camera, Trophy, Globe, Heart, 
  Users, Coffee, Laptop, BookOpen, Star 
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Life',
  description: 'Experience a vibrant campus life at GGC. Explore our student societies, sports facilities, arts and culture events, and innovation clubs.',
};

export const runtime = 'nodejs';

const activities = [
  {
    title: 'Student Societies',
    icon: <Users className="w-8 h-8" />,
    desc: 'From debating clubs to dramatic societies, find your tribe and develop leadership skills.',
    color: 'bg-blue-50 border-blue-100 text-blue-600',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Sports & Athletics',
    icon: <Trophy className="w-8 h-8" />,
    desc: 'Compete in inter-college championships and stay active with our state-of-the-art sports facilities.',
    color: 'bg-emerald-50 border-emerald-100 text-emerald-600',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/045/658/844/small/athlete-sport-design-illustration-art-vector.jpg'
  },
  {
    title: 'Arts & Culture',
    icon: <Music className="w-8 h-8" />,
    desc: 'Celebrate diversity through annual festivals, music concerts, and art exhibitions.',
    color: 'bg-purple-50 border-purple-100 text-purple-600',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Tech & Innovation',
    icon: <Laptop className="w-8 h-8" />,
    desc: 'Join the IT club to participate in hackathons and stay ahead in the digital world.',
    color: 'bg-indigo-50 border-indigo-100 text-indigo-600',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
  }
];

const highlights = [
  { label: 'Societies', value: '15+', icon: <Star className="text-amber-400" /> },
  { label: 'Annual Events', value: '25+', icon: <Calendar className="text-rose-400" /> },
  { label: 'Sports Teams', value: '10+', icon: <Trophy className="text-blue-400" /> },
  { label: 'Campus Area', value: 'Acres', icon: <Globe className="text-emerald-400" /> },
];

function Calendar({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}

export default function StudentLifePage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover" 
            alt="Student Life Hero" 
          />
          <div className="absolute inset-0 bg-[#002d56]/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <span className="text-[#ffcc00] font-black text-xs uppercase tracking-[0.4em] block mb-6 animate-fade-in">Experience GGC</span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
            A Vibrant <br /> <span className="text-[#ffcc00]">Campus Life</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            Education at GGC goes beyond the classroom. We provide an environment where students grow as individuals, leaders, and community members.
          </p>
          <div className="w-24 h-1.5 bg-[#ffcc00] mx-auto" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((h) => (
              <div key={h.label} className="text-center">
                <div className="flex justify-center mb-3">
                  {h.icon}
                </div>
                <div className="text-3xl font-black text-[#002d56] mb-1">{h.value}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-black text-[#002d56] uppercase tracking-tighter mb-4">Discover Your Potential</h2>
          <p className="text-slate-500 font-medium max-w-xl">Explore the various opportunities to engage, learn, and lead outside of your academic curriculum.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((item, i) => (
            <div key={i} className="group relative bg-white rounded-sm overflow-hidden flex flex-col md:flex-row h-auto md:h-[300px] shadow-xl border border-slate-100 hover:border-[#ffcc00] transition-all duration-500">
              <div className="w-full md:w-1/2 h-[200px] md:h-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                <div className={`w-14 h-14 rounded-sm ${item.color} flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-[#002d56] mb-4 uppercase tracking-tighter leading-none">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-[#002d56] py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #ffcc00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <span className="text-[#ffcc00] font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Our Community</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-tight">
              A Culture of <br /> Excellence & <br /> Inclusivity
            </h2>
            <p className="text-white/60 text-lg font-medium leading-relaxed mb-10 max-w-lg">
              We celebrate our traditions while embracing progress. Every student at GGC is encouraged to share their unique voice and contribute to our rich collective history.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-[#ffcc00] font-black text-xs uppercase tracking-widest mb-4">Core Values</h4>
                <ul className="space-y-3 text-sm text-white/50 font-bold uppercase tracking-tight">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Integrity</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Respect</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Service</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#ffcc00] font-black text-xs uppercase tracking-widest mb-4">Support</h4>
                <ul className="space-y-3 text-sm text-white/50 font-bold uppercase tracking-tight">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Guidance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Safety</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Growth</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="border-[12px] border-white/5 absolute -top-8 -left-8 w-64 h-64 z-0" />
             <img 
               src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000" 
               className="relative z-10 w-full h-[500px] object-cover rounded-sm shadow-2xl" 
               alt="Student Community"
             />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-[#002d56] uppercase tracking-tighter mb-6 leading-none">Ready to Start Your Journey?</h2>
          <p className="text-slate-500 font-medium mb-12">Join a community where you can thrive and make lifelong memories.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/admissions" className="bg-[#ffcc00] text-[#002d56] px-10 py-5 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-[#002d56] hover:text-white transition-all shadow-xl">
               Apply for Admission
             </Link>
             <Link href="/contact" className="border-2 border-slate-100 text-[#002d56] px-10 py-5 rounded-sm font-black text-sm uppercase tracking-widest hover:border-[#002d56] transition-all">
               Visit Our Campus
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  );
}
