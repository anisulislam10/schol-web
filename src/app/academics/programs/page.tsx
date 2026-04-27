import dbConnect from '@/lib/db';
import Program from '@/lib/models/Program';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';

export const runtime = 'nodejs';
export const revalidate = 0;

async function getPrograms() {
  await dbConnect();
  const programs = await Program.find({ isActive: true }).sort({ department: 1, order: 1 }).lean();
  return JSON.parse(JSON.stringify(programs));
}

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      
      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Degree Programs</h1>
          <p className="text-xl text-white/80 font-medium tracking-wide uppercase">Pathway to Your Professional Career</p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="bg-white rounded-sm shadow-2xl overflow-hidden border border-slate-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#002d56] text-white uppercase text-[11px] font-black tracking-[0.2em]">
                  <th className="px-10 py-6 border-r border-white/10">Sr #</th>
                  <th className="px-10 py-6 border-r border-white/10">Program Title</th>
                  <th className="px-10 py-6 border-r border-white/10">Department</th>
                  <th className="px-10 py-6 border-r border-white/10">Duration</th>
                  <th className="px-10 py-6">Eligibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {programs.map((prog: any, i: number) => (
                  <tr key={prog._id} className="hover:bg-slate-50 transition-all">
                    <td className="px-10 py-8 text-slate-400 font-bold text-sm border-r border-slate-50">{i + 1}</td>
                    <td className="px-10 py-8 border-r border-slate-50">
                       <div className="text-lg font-black text-[#002d56] uppercase tracking-tighter">{prog.title}</div>
                    </td>
                    <td className="px-10 py-8 border-r border-slate-50">
                       <span className="text-[10px] font-black uppercase tracking-widest text-[#17a2b8]">{prog.department}</span>
                    </td>
                    <td className="px-10 py-8 border-r border-slate-50">
                       <span className="text-slate-500 font-bold text-sm">{prog.duration}</span>
                    </td>
                    <td className="px-10 py-8">
                       <p className="text-slate-500 text-sm font-medium line-clamp-2">{prog.eligibility}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {programs.length === 0 && (
            <div className="text-center py-32 bg-slate-50 border-t border-slate-100">
              <p className="text-slate-400 text-xl font-medium uppercase tracking-widest">No degree programs found.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
