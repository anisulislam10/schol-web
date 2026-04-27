import dbConnect from '@/lib/db';
import DynamicPage from '@/lib/models/DynamicPage';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { notFound } from 'next/navigation';

export const runtime = 'nodejs';

export async function renderDynamicPage(slug: string) {
  await dbConnect();
  const raw = await DynamicPage.findOne({ slug, isActive: true }).lean();
  if (!raw) notFound();
  const page = JSON.parse(JSON.stringify(raw));

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">{page.title}</h1>
          <div className="w-24 h-2 bg-[#ffcc00] mx-auto" />
        </div>
      </section>
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div
          className="prose prose-slate lg:prose-xl max-w-none text-slate-600 font-medium leading-relaxed prose-headings:text-[#002d56] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-strong:text-[#002d56] prose-a:text-[#17a2b8] hover:prose-a:text-[#ffcc00]"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </section>
      <Footer />
    </div>
  );
}
