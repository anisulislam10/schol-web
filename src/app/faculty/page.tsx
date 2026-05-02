import dbConnect from '@/lib/db';
import Teacher from '@/lib/models/Teacher';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';

export const runtime = 'nodejs';
export const revalidate = 0;

async function getFaculty() {
  await dbConnect();
  const teachers = await Teacher.find({ isActive: true }).sort({ order: 1, name: 1 }).lean();
  return JSON.parse(JSON.stringify(teachers));
}

export default async function FacultyPage() {
  const teachers = await getFaculty();

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Academic Faculty</h1>
          <p className="text-xl text-white/80 font-medium tracking-wide uppercase">Meet Our Distinguished Educators</p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teachers.map((teacher: any) => (
            <div key={teacher._id} className="bg-white rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-slate-100">
              <div className="h-96 overflow-hidden relative">
                <img 
                  src={teacher.photo || '/slider1.jpg'} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002d56]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-black text-[#002d56] mb-1 leading-none uppercase tracking-tighter">{teacher.name}</h3>
                    <p className="text-[#17a2b8] font-black text-[10px] uppercase tracking-widest">{teacher.role}</p>
                  </div>
                </div>
                <p className="text-slate-500 leading-relaxed mb-8 font-medium line-clamp-3">
                  {teacher.bio || "Dedicated faculty member committed to fostering a culture of learning and academic rigor."}
                </p>
                <div className="space-y-3 pt-6 border-t border-slate-100">
                   <div className="flex items-center gap-3 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      <span className="text-[#002d56]">Qualifications:</span> {teacher.qualifications?.join(', ') || 'Post Graduate'}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {teachers.length === 0 && (
          <div className="text-center py-32 bg-white rounded-sm border-2 border-dashed border-slate-200">
            <p className="text-slate-400 text-xl font-medium uppercase tracking-widest">No faculty members found at this time.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
