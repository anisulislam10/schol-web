import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admission Criteria',
  description: 'Find out if you are eligible to join GGC. Detailed qualification and merit criteria for all undergraduate and intermediate programs.',
};

export const runtime = 'nodejs';

const eligibility = [
  {
    level: 'Intermediate Programs',
    badge: 'HSSC / FSc / FA / I.Com',
    color: 'border-[#ffcc00] bg-[#ffcc00]/5',
    badgeColor: 'bg-[#ffcc00] text-[#002d56]',
    iconBg: 'bg-[#ffcc00]',
    icon: '🎓',
    criteria: [
      { label: 'Qualification', value: 'Matriculation / SSC from a recognized board' },
      { label: 'Minimum Marks', value: '50% aggregate marks' },
      { label: 'Age Limit', value: 'As per Punjab Board regulations' },
      { label: 'Selection', value: 'Merit-based selection' },
    ],
  },
  {
    level: 'BS Programs (4-Year)',
    badge: 'BS Degrees · HEC Recognized',
    color: 'border-[#002d56] bg-[#002d56]/5',
    badgeColor: 'bg-[#002d56] text-white',
    iconBg: 'bg-[#002d56]',
    icon: '🏛️',
    criteria: [
      { label: 'Qualification', value: 'Intermediate / HSSC from a recognized board' },
      { label: 'Minimum Marks', value: '45% marks in relevant subjects' },
      { label: 'Equivalence', value: 'Certificate required (if applicable)' },
      { label: 'Selection', value: 'Merit-based selection' },
    ],
  },
];

const documents = [
  { icon: '📄', title: 'Original Certificates', desc: 'Matric & Inter original certificates and DMCs' },
  { icon: '📋', title: 'Character Certificate', desc: 'From the last attended institution' },
  { icon: '🪪', title: 'CNIC / B-Form', desc: 'Attested copy of national identity card or B-Form' },
  { icon: '🏠', title: 'Domicile Certificate', desc: 'Proof of local domicile' },
  { icon: '📸', title: 'Photographs', desc: '4 recent passport-size photographs' },
  { icon: '📝', title: 'Application Form', desc: 'Completed and signed admission application form' },
];

const steps = [
  { step: '01', title: 'Check Eligibility', desc: 'Confirm you meet the minimum marks and qualification requirements for your chosen program.' },
  { step: '02', title: 'Collect Documents', desc: 'Gather all required documents — originals and attested copies.' },
  { step: '03', title: 'Submit Application', desc: 'Visit the college admissions office or apply online through the portal.' },
  { step: '04', title: 'Merit List', desc: 'Wait for the merit list announcement and verify your selection status.' },
  { step: '05', title: 'Fee Deposit', desc: 'Deposit the required fee within the stipulated time to confirm your admission.' },
];

export default function AdmissionCriteriaPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#002d56] pt-44 pb-24 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffcc00 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="max-w-3xl mx-auto relative">
          <p className="text-[#ffcc00] font-black text-[11px] uppercase tracking-[0.4em] mb-5">Admissions</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            Admission<br />Criteria
          </h1>
          <p className="text-white/60 text-base font-medium max-w-lg mx-auto">
            Everything you need to know about eligibility, required documents, and the admission process.
          </p>
          <div className="w-24 h-1 bg-[#ffcc00] mx-auto mt-8" />
        </div>
      </section>

      {/* Eligibility Cards */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="mb-14 text-center">
          <p className="text-[#ffcc00] font-black text-[11px] uppercase tracking-[0.3em] mb-3">Step 01</p>
          <h2 className="text-4xl font-black text-[#002d56] uppercase tracking-tighter">Eligibility Requirements</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eligibility.map((prog) => (
            <div key={prog.level} className={`rounded-sm border-2 p-8 ${prog.color} shadow-xl`}>
              <div className="flex items-start gap-5 mb-8">
                <div className={`w-14 h-14 ${prog.iconBg} rounded-sm flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                  {prog.icon}
                </div>
                <div>
                  <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm mb-2 ${prog.badgeColor}`}>
                    {prog.badge}
                  </span>
                  <h3 className="text-[#002d56] font-black text-xl uppercase tracking-tighter">{prog.level}</h3>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {prog.criteria.map((item) => (
                  <div key={item.label} className="flex justify-between items-start gap-4 py-3 border-b border-black/5 last:border-0">
                    <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 flex-shrink-0">{item.label}</span>
                    <span className="text-[#002d56] font-bold text-sm text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14 text-center">
            <p className="text-[#ffcc00] font-black text-[11px] uppercase tracking-[0.3em] mb-3">Step 02</p>
            <h2 className="text-4xl font-black text-[#002d56] uppercase tracking-tighter">Required Documents</h2>
            <p className="text-slate-500 font-medium mt-3">Bring originals + 2 attested copies of each document</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, i) => (
              <div key={i} className="group flex gap-5 items-start bg-slate-50 rounded-sm p-6 border border-slate-100 hover:border-[#ffcc00]/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-12 h-12 bg-[#002d56] rounded-sm flex items-center justify-center text-2xl flex-shrink-0 shadow-md">
                  {doc.icon}
                </div>
                <div>
                  <h4 className="text-[#002d56] font-black text-[13px] uppercase tracking-tight mb-1">{doc.title}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="mb-14 text-center">
          <p className="text-[#ffcc00] font-black text-[11px] uppercase tracking-[0.3em] mb-3">Process</p>
          <h2 className="text-4xl font-black text-[#002d56] uppercase tracking-tighter">How to Apply</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative bg-white rounded-sm p-6 border border-slate-100 shadow-lg text-center">
              <div className="w-12 h-12 bg-[#ffcc00] rounded-sm flex items-center justify-center font-black text-[#002d56] text-sm mx-auto mb-4 shadow-md">
                {s.step}
              </div>
              <h4 className="text-[#002d56] font-black text-[13px] uppercase tracking-tight mb-2">{s.title}</h4>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#002d56] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Ready to Join Us?</h2>
          <p className="text-white/60 font-medium mb-10">Start your application or contact our admissions office for guidance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="inline-block bg-[#ffcc00] text-[#002d56] px-10 py-5 font-black text-base uppercase tracking-tighter hover:bg-white transition-colors shadow-2xl">
              Apply Now
            </Link>
            <Link href="/contact" className="inline-block border-2 border-white/20 text-white px-10 py-5 font-black text-base uppercase tracking-tighter hover:border-[#ffcc00] hover:text-[#ffcc00] transition-colors">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
