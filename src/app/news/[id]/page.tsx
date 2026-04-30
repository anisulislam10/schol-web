import dbConnect from '@/lib/db';
import Notice from '@/lib/models/Notice';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { Calendar, Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const runtime = 'nodejs';
export const revalidate = 0;

async function getNotice(id: string) {
  await dbConnect();
  try {
    const notice = await Notice.findById(id).lean();
    return notice ? JSON.parse(JSON.stringify(notice)) : null;
  } catch (err) {
    return null;
  }
}

export default async function NewsDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const notice = await getNotice(id);

  if (!notice || !notice.isActive) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      
      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/news" className="inline-flex items-center gap-2 text-[#ffcc00] font-bold text-xs uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to News
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className={`px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest ${
              notice.priority === 'urgent' ? 'bg-red-500 text-white' : 
              notice.priority === 'important' ? 'bg-[#ffcc00] text-[#002d56]' : 
              'bg-white/10 text-white'
            }`}>
              {notice.priority}
            </span>
            <span className="flex items-center gap-2 text-white/60 font-medium text-sm">
              <Calendar size={16} /> {new Date(notice.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight">{notice.title}</h1>
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-sm shadow-xl border border-slate-100 p-10 md:p-16">
          <div className="prose prose-slate lg:prose-xl max-w-none text-slate-600 font-medium leading-relaxed whitespace-pre-wrap">
            {notice.content}
          </div>

          {notice.attachment && (
            <div className="mt-16 pt-10 border-t border-slate-100">
              <h3 className="text-sm font-black text-[#002d56] uppercase tracking-widest mb-4">Attached Documents</h3>
              <a 
                href={notice.attachment} 
                target="_blank" 
                className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 px-6 py-4 rounded-sm text-[#002d56] font-bold text-xs uppercase tracking-widest hover:border-[#ffcc00] transition-all group"
              >
                <div className="w-8 h-8 flex-shrink-0 bg-[#002d56] text-white rounded-sm flex items-center justify-center group-hover:bg-[#ffcc00] group-hover:text-[#002d56] transition-colors">
                  <Download size={16} />
                </div>
                <div className="flex flex-col text-left max-w-sm">
                   <span className="font-black text-[#002d56]">{notice.title} Document</span>
                   <span className="text-slate-500 font-medium normal-case text-[10px] mt-0.5 line-clamp-1">{notice.content}</span>
                </div>
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
