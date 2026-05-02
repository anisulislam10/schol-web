import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { 
  Users, TrendingUp, Award, BarChart3, 
  MapPin, CheckCircle, GraduationCap, School
} from 'lucide-react';

export const runtime = 'nodejs';

const stats = [
  { label: 'Intermediate', value: '780', color: 'bg-blue-600', sub: 'FSc, ICS & FA' },
  { label: 'BS Programs', value: '320', color: 'bg-[#ffcc00]', sub: '8 Major Disciplines' },
  { label: 'Post Graduate', value: '150', color: 'bg-emerald-600', sub: 'Advanced Certifications' },
  { label: 'Total Strength', value: '1,250+', color: 'bg-indigo-600', sub: 'Active Student Body' },
];

const programData = [
  { name: 'FSc Pre-Medical', count: '250', trend: '+12%', icon: '🧬' },
  { name: 'FSc Pre-Engineering', count: '200', trend: '+8%', icon: '⚙️' },
  { name: 'ICS (Comp. Science)', count: '180', trend: '+15%', icon: '💻' },
  { name: 'FA / Humanities', count: '150', trend: '+5%', icon: '📚' },
  { name: 'BS Mathematics', count: '45', trend: '+20%', icon: '📐' },
  { name: 'BS Physics', count: '40', trend: '+10%', icon: '⚛️' },
];

export default function EnrollmentPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#002d56] pt-48 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
            <span className="text-[#ffcc00] font-black text-xs uppercase tracking-[0.4em] block mb-6">Institute Data</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">Current Enrollment</h1>
            <p className="text-white/60 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Tracking our growth and success through academic excellence. GGC Peshawar Road is home to a diverse and thriving student community.
            </p>
        </div>
      </section>

      {/* Top Stats */}
      <section className="relative z-20 mt-[-60px] px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-sm shadow-2xl border-b-4 border-slate-100 hover:border-[#ffcc00] transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 ${s.color} rounded-sm flex items-center justify-center text-white shadow-lg`}>
                   <Users size={24} />
                </div>
                <TrendingUp size={20} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-4xl font-black text-[#002d56] mb-1 tracking-tighter">{s.value}</div>
              <div className="text-sm font-black text-[#002d56] uppercase tracking-tight mb-2">{s.label}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Breakdown Table */}
            <div className="lg:col-span-2">
                <div className="bg-white rounded-sm shadow-xl overflow-hidden">
                    <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                        <h2 className="text-2xl font-black text-[#002d56] uppercase tracking-tighter flex items-center gap-3">
                            <BarChart3 className="text-[#ffcc00]" /> Program Breakdown
                        </h2>
                        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Session 2024-25</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-y border-slate-100">
                                <tr>
                                    <th className="px-8 py-5 text-[11px] font-black text-[#002d56] uppercase tracking-widest">Program Name</th>
                                    <th className="px-8 py-5 text-[11px] font-black text-[#002d56] uppercase tracking-widest">Enrolled</th>
                                    <th className="px-8 py-5 text-[11px] font-black text-[#002d56] uppercase tracking-widest">Growth</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {programData.map((p, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <span className="text-2xl">{p.icon}</span>
                                                <span className="font-bold text-[#002d56] tracking-tight">{p.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="font-black text-lg text-[#002d56]">{p.count}</span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-1 text-emerald-600 font-black text-xs">
                                                <TrendingUp size={14} /> {p.trend}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Side Info */}
            <div className="space-y-8">
                <div className="bg-[#002d56] p-8 rounded-sm text-white shadow-2xl relative overflow-hidden">
                    <GraduationCap className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10" />
                    <h3 className="text-xl font-black mb-6 uppercase tracking-tight">Academic Integrity</h3>
                    <p className="text-white/60 text-sm font-medium leading-relaxed mb-8">
                        Our enrollment process is strictly merit-based, ensuring that every student at GGC represents the highest standards of potential and academic drive.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#ffcc00]">
                            <div className="w-2 h-2 rounded-full bg-[#ffcc00]" /> Transparent Merit
                        </li>
                        <li className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#ffcc00]">
                            <div className="w-2 h-2 rounded-full bg-[#ffcc00]" /> Verified Records
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-8 rounded-sm shadow-xl border border-slate-100">
                    <h3 className="text-lg font-black text-[#002d56] mb-6 uppercase tracking-tight">Growth Outlook</h3>
                    <div className="space-y-6">
                        {[
                          { label: 'Infrastructure', val: 90 },
                          { label: 'Faculty Strength', val: 85 },
                          { label: 'Lab Resources', val: 75 },
                        ].map((bar) => (
                           <div key={bar.label}>
                              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                                 <span>{bar.label}</span>
                                 <span>{bar.val}%</span>
                              </div>
                              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                 <div className="h-full bg-blue-600 rounded-full" style={{ width: `${bar.val}%` }} />
                              </div>
                           </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
