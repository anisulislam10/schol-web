import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';

export const runtime = 'nodejs';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      <section className="bg-[#002d56] pt-40 pb-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">About Us</h1>
          <div className="w-24 h-2 bg-[#ffcc00] mx-auto" />
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="prose prose-slate lg:prose-xl max-w-none text-slate-600 font-medium leading-relaxed prose-headings:text-[#002d56] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
          <h2>Govt. Graduate College, Satellite Town, Rawalpindi</h2>
          <p>
            Govt. Graduate College, Satellite Town, Rawalpindi is one of the leading public sector educational institutions in the Rawalpindi region. 
            Established with the mission to provide quality higher education, the college has been serving students from diverse backgrounds for decades.
          </p>
          <h3>Our Mission</h3>
          <p>
            To provide accessible, affordable, and quality education that prepares students for professional careers and higher studies. 
            We are committed to fostering an environment of academic excellence, character building, and social responsibility.
          </p>
          <h3>Our Vision</h3>
          <p>
            To be recognized as a premier institution of higher learning that produces competent graduates equipped with knowledge, 
            skills, and values to contribute positively to society.
          </p>
          <h3>Core Values</h3>
          <ul>
            <li><strong>Academic Excellence</strong> — Commitment to the highest standards of teaching and learning</li>
            <li><strong>Integrity</strong> — Upholding ethical values in all aspects of institutional life</li>
            <li><strong>Inclusivity</strong> — Providing equal opportunities for all students regardless of background</li>
            <li><strong>Innovation</strong> — Embracing modern teaching methodologies and technologies</li>
            <li><strong>Community Service</strong> — Encouraging students to give back to society</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-black text-[#002d56] uppercase tracking-tighter mb-10 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Faculty', href: '/faculty', desc: 'Meet our distinguished educators' },
              { title: 'Institute Committees', href: '/about/committees', desc: 'College committees and their roles' },
              { title: 'Institute Leadership', href: '/about/leadership', desc: 'Our leadership team' },
              { title: 'Non Teaching Staff', href: '/about/staff', desc: 'Our support staff members' },
              { title: 'Institute Facilities', href: '/about/facilities', desc: 'Campus facilities and resources' },
              { title: 'Vacancy Positions', href: '/about/vacancies', desc: 'Current job openings' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="bg-white p-8 rounded-sm border border-slate-100 hover:border-[#ffcc00] transition-all shadow-lg no-underline group">
                <h3 className="text-lg font-black text-[#002d56] uppercase tracking-tighter mb-2 group-hover:text-[#17a2b8] transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
