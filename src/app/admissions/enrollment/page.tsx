import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';

export const runtime = 'nodejs';

export default function EnrollmentPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Current Enrollment</h1>
          <div className="w-24 h-2 bg-[#ffcc00] mx-auto" />
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="prose prose-slate lg:prose-xl max-w-none text-slate-600 font-medium leading-relaxed prose-headings:text-[#002d56] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
          <h2>Enrollment Statistics</h2>
          <p>Govt. Graduate College, Peshawar Road, Rawalpindi  currently has a growing student body across multiple programs.</p>
          <table>
            <thead>
              <tr>
                <th>Program</th>
                <th>Students Enrolled</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FSc Pre-Medical</td>
                <td>250+</td>
              </tr>
              <tr>
                <td>FSc Pre-Engineering</td>
                <td>200+</td>
              </tr>
              <tr>
                <td>ICS</td>
                <td>180+</td>
              </tr>
              <tr>
                <td>FA / I.Com</td>
                <td>150+</td>
              </tr>
              <tr>
                <td>BS Programs</td>
                <td>300+</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>1,000+</strong></td>
              </tr>
            </tbody>
          </table>
          <p><em>Note: These figures are approximate and updated periodically.</em></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
