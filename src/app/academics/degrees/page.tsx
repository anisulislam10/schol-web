import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';

export const runtime = 'nodejs';

export default function DegreesPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Degrees</h1>
          <div className="w-24 h-2 bg-[#ffcc00] mx-auto" />
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="prose prose-slate lg:prose-xl max-w-none text-slate-600 font-medium leading-relaxed prose-headings:text-[#002d56] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
          <h2>Degree Programs Offered</h2>
          <p>Govt. Graduate College, Satellite Town, Rawalpindi offers a wide range of undergraduate degree programs across multiple disciplines.</p>
          <h3>BS Programs</h3>
          <ul>
            <li>BS Mathematics</li>
            <li>BS Physics</li>
            <li>BS Chemistry</li>
            <li>BS Computer Science</li>
            <li>BS English</li>
            <li>BS Urdu</li>
            <li>BS Economics</li>
            <li>BS Statistics</li>
          </ul>
          <h3>Intermediate Programs</h3>
          <ul>
            <li>FSc Pre-Medical</li>
            <li>FSc Pre-Engineering</li>
            <li>ICS (Intermediate in Computer Science)</li>
            <li>FA (Faculty of Arts)</li>
            <li>I.Com (Intermediate in Commerce)</li>
          </ul>
          <p>For more details on specific programs, please contact the college administration.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
