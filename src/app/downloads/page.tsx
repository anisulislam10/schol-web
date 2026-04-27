import dbConnect from '@/lib/db';
import Download from '@/lib/models/Download';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { FileText, FileDown, ExternalLink } from 'lucide-react';

export const runtime = 'nodejs';
export const revalidate = 0;

async function getDownloads() {
  await dbConnect();
  const downloads = await Download.find({ isActive: true }).sort({ order: 1, createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(downloads));
}

export default async function DownloadsPage() {
  const downloads = await getDownloads();

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      
      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Resources & Downloads</h1>
          <p className="text-xl text-white/80 font-medium tracking-wide uppercase">Institutional Documents & Guides</p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-sm shadow-2xl overflow-hidden border border-slate-100">
          <div className="p-10 md:p-20">
            <div className="space-y-8">
              {downloads.map((item: any) => (
                <div key={item._id} className="group flex flex-col md:flex-row md:items-center justify-between p-10 rounded-sm border border-slate-50 hover:border-[#ffcc00] hover:bg-slate-50 transition-all duration-300">
                  <div className="flex items-center gap-8 mb-8 md:mb-0">
                    <div className={`w-16 h-16 rounded-sm flex items-center justify-center shadow-inner ${item.fileType === 'pdf' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                      <FileText size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-[#002d56] mb-1 leading-none uppercase tracking-tighter">{item.title}</h3>
                      <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">{item.description || 'Institutional Resource'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <span className="px-4 py-1.5 bg-white border border-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {item.fileType}
                    </span>
                    <a 
                      href={item.fileUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#002d56] text-white px-10 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-[#ffcc00] hover:text-[#002d56] transition-all shadow-xl"
                    >
                      DOWNLOAD
                    </a>
                  </div>
                </div>
              ))}

              {downloads.length === 0 && (
                <div className="text-center py-32 bg-slate-50 rounded-sm border-2 border-dashed border-slate-200">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <ExternalLink size={32} className="text-slate-300" />
                  </div>
                  <p className="text-slate-400 text-xl font-medium tracking-tight uppercase">No resources available.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
