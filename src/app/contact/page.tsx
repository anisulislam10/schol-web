import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section style={{ background: 'linear-gradient(135deg, #1a3a6e 0%, #0f2347 100%)', padding: '150px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '20px' }}>Contact Us</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>We are here to answer your questions and help with the admissions process.</p>
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px' }}>
            {/* Info Column */}
            <div>
              <div className="section-badge">Get in Touch</div>
              <h2 style={{ fontSize: '2.5rem', color: '#1a3a6e', marginBottom: '40px' }}>Visit Our Campus</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {[
                  { icon: MapPin, title: 'Our Location', detail: 'Main GT Road, Near Ring Road, Peshawar, KPK, Pakistan' },
                  { icon: Phone, title: 'Call Us', detail: '+92 91 111 2222 / +92 333 999 8888' },
                  { icon: Mail, title: 'Email Us', detail: 'info@alnoorschool.edu.pk / admissions@alnoorschool.edu.pk' },
                  { icon: Clock, title: 'Office Hours', detail: 'Mon - Fri: 8:00 AM - 2:00 PM | Sat: 8:00 AM - 12:00 PM' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ flexShrink: 0, width: '50px', height: '50px', background: 'rgba(26, 58, 110, 0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a3a6e' }}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '4px' }}>{item.title}</h4>
                      <p style={{ color: '#718096' }}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <div style={{ background: '#f7f9fc', borderRadius: '40px', padding: '50px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '30px' }}>Send a Message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input type="text" placeholder="Full Name" style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px', outline: 'none' }} />
                  <input type="email" placeholder="Email Address" style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px', outline: 'none' }} />
                </div>
                <input type="text" placeholder="Subject" style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px', outline: 'none' }} />
                <textarea placeholder="Your Message" rows={5} style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px', outline: 'none', resize: 'none' }}></textarea>
                <button type="submit" style={{ background: '#1a3a6e', color: '#fff', padding: '18px', borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ height: '500px', background: '#edf2f7', position: 'relative' }}>
         <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a0aec0' }}>
            [Interactive Map Component Placeholder]
         </div>
      </section>

      <Footer />
    </main>
  );
}
