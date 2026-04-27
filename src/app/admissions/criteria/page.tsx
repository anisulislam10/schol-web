import dbConnect from '@/lib/db';
import DynamicPage from '@/lib/models/DynamicPage';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';

export const runtime = 'nodejs';
export const revalidate = 0;

async function getPageData(slug: string) {
  await dbConnect();
  const page = await DynamicPage.findOne({ slug, isActive: true }).lean();
  if (!page) return null;
  return JSON.parse(JSON.stringify(page));
}

export default async function AdmissionCriteriaPage() {
  const page = await getPageData('admission-criteria');

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      
      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
            {page?.title || 'Admission Criteria'}
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        {page ? (
          <div 
            className="prose prose-slate lg:prose-xl max-w-none text-slate-600 font-medium leading-relaxed"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        ) : (
          <div className="text-center text-slate-400 font-bold uppercase tracking-widest py-20">
            Information coming soon...
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
