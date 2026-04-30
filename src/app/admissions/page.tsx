import dbConnect from '@/lib/db';
import Admission from '@/lib/models/Admission';
import DynamicPage from '@/lib/models/DynamicPage';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';

export const runtime = 'nodejs';
export const revalidate = 0;

async function getAdmissions() {
  await dbConnect();
  const admissions = await Admission.find({ isActive: true }).sort({ order: 1, createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(admissions));
}

export default async function AdmissionsPage() {
  const admissions = await getAdmissions();

  await dbConnect();
  const rawPage = await DynamicPage.findOne({ slug: 'admissions' }).lean();
  const pageData = rawPage ? JSON.parse(JSON.stringify(rawPage)) : null;

  const pageTitle = pageData?.title || 'Admissions';
  const pageDesc = pageData?.description || 'Join the GGC Family';
  const pageImg = pageData?.image || '/slider1.jpg';

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={pageImg} 
            alt={pageTitle} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#002d56]/60" />
        </div>
        <div className="relative z-10 max-w-4xl px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">{pageTitle}</h1>
          <p className="text-xl text-white/80 font-medium tracking-wide uppercase">{pageDesc}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {admissions.map((item: any) => (
            <div key={item._id} className="group relative bg-slate-50 rounded-sm overflow-hidden border border-slate-100 hover:border-[#ffcc00] transition-all duration-500 shadow-xl">
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={item.poster || '/slider1.jpg'} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002d56] via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="p-10">
                <span className="bg-[#ffcc00] text-[#002d56] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                  Entry 2024
                </span>
                <h3 className="text-3xl font-black text-[#002d56] mb-4 uppercase tracking-tighter leading-none">{item.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">
                  {item.description}
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#002d56] text-white px-8 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-[#ffcc00] hover:text-[#002d56] transition-all shadow-lg">
                    APPLY NOW
                  </button>
                  <button className="border-2 border-[#002d56] text-[#002d56] px-8 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-[#002d56] hover:text-white transition-all">
                    REQUEST INFO
                  </button>
                </div>
              </div>
            </div>
          ))}

          {admissions.length === 0 && (
            <div className="lg:col-span-2 text-center py-32 bg-slate-50 rounded-sm border-2 border-dashed border-slate-200">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <span className="text-4xl text-[#002d56]">🎓</span>
              </div>
              <h3 className="text-3xl font-black text-[#002d56] mb-4 uppercase tracking-tighter">Current Admissions Closed</h3>
              <p className="text-slate-400 text-lg font-medium max-w-md mx-auto">Please stay tuned for upcoming enrollment periods and academic announcements.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
