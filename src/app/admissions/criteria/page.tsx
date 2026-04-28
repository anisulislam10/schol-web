import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';

export const runtime = 'nodejs';

export default function AdmissionCriteriaPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Admission Criteria</h1>
          <div className="w-24 h-2 bg-[#ffcc00] mx-auto" />
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="prose prose-slate lg:prose-xl max-w-none text-slate-600 font-medium leading-relaxed prose-headings:text-[#002d56] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
          <h2>Eligibility Requirements</h2>
          <h3>Intermediate Programs</h3>
          <ul>
            <li>Matriculation / SSC with minimum 50% marks from a recognized board</li>
            <li>Age limit as per Punjab Board regulations</li>
            <li>Original documents required at the time of admission</li>
          </ul>
          <h3>BS Programs (4-Year)</h3>
          <ul>
            <li>Intermediate / HSSC with minimum 45% marks in relevant subjects</li>
            <li>Equivalence certificate (if applicable)</li>
            <li>Merit-based selection</li>
          </ul>
          <h3>Required Documents</h3>
          <ul>
            <li>Matric / Inter original certificates and DMCs</li>
            <li>Character certificate from last institution</li>
            <li>CNIC / B-Form copy</li>
            <li>Domicile certificate</li>
            <li>4 passport-size photographs</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
