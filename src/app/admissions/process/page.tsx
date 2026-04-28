import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';

export const runtime = 'nodejs';

export default function AdmissionProcessPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Admission Process</h1>
          <div className="w-24 h-2 bg-[#ffcc00] mx-auto" />
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="prose prose-slate lg:prose-xl max-w-none text-slate-600 font-medium leading-relaxed prose-headings:text-[#002d56] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
          <h2>How to Apply</h2>
          <ol>
            <li><strong>Obtain Admission Form:</strong> Collect the admission form from the college administration office or download from the website during the admission period.</li>
            <li><strong>Fill the Form:</strong> Complete the admission form with accurate personal and academic details.</li>
            <li><strong>Attach Documents:</strong> Attach attested copies of all required documents along with the admission form.</li>
            <li><strong>Submit the Form:</strong> Submit the completed form with documents at the admissions office within the given deadline.</li>
            <li><strong>Merit List:</strong> Wait for the merit list to be displayed on the college notice board and website.</li>
            <li><strong>Fee Payment:</strong> If selected, pay the admission and tuition fee at the designated bank within the specified time.</li>
            <li><strong>Enrollment:</strong> After fee payment, complete the enrollment process and collect your college ID card.</li>
          </ol>
          <h3>Important Dates</h3>
          <p>Admission dates are announced by the Punjab Higher Education Department. Please check the college notice board and website for the latest schedule.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
