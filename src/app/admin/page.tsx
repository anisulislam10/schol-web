'use client';

import { Users, Bell, Star, Image as ImageIcon, TrendingUp, AlertCircle } from 'lucide-react';
import { useSession } from 'next-auth/react';

export default function AdminDashboard() {
  const { data: session } = useSession();

  const stats = [
    { label: 'Teachers', value: '6', icon: Users, color: '#1a3a6e' },
    { label: 'Active Notices', value: '4', icon: Bell, color: '#e8a020' },
    { label: 'Features', value: '6', icon: Star, color: '#10b981' },
    { label: 'Gallery Items', value: '12', icon: ImageIcon, color: '#8b5cf6' },
  ];

  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '8px' }}>Welcome back, {session?.user?.name || 'Admin'}</h1>
        <p style={{ color: '#718096' }}>Here is what's happening at Al-Noor Public School today.</p>
      </div>

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ background: '#fff', padding: '24px', borderRadius: '24px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `${stat.color}10`, color: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <stat.icon size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a3a6e' }}>{stat.value}</div>
              <div style={{ fontSize: '0.85rem', color: '#718096', fontWeight: 600 }}>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        {/* Recent Activity / Quick Actions */}
        <div style={{ background: '#fff', borderRadius: '30px', padding: '30px', border: '1px solid #e2e8f0' }}>
           <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TrendingUp size={20} color="#e8a020" /> Recent Updates
           </h3>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
             {[
               { type: 'Teacher', name: 'Dr. Fatima Malik', action: 'added to department', time: '2 hours ago' },
               { type: 'Notice', name: 'Annual Examination', action: 'published to board', time: '5 hours ago' },
               { type: 'Settings', name: 'School Address', action: 'updated by admin', time: 'Yesterday' }
             ].map((item, i) => (
               <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: '#f7f9fc', borderRadius: '16px' }}>
                 <div>
                   <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#1a3a6e', background: 'rgba(26, 58, 110, 0.1)', padding: '2px 8px', borderRadius: '4px', marginRight: '10px' }}>{item.type}</span>
                   <span style={{ fontWeight: 600, color: '#4a5568' }}>{item.name}</span> <span style={{ color: '#718096', fontSize: '0.9rem' }}>{item.action}</span>
                 </div>
                 <div style={{ fontSize: '0.8rem', color: '#a0aec0' }}>{item.time}</div>
               </div>
             ))}
           </div>
        </div>

        {/* System Status */}
        <div style={{ background: '#fff', borderRadius: '30px', padding: '30px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '24px' }}>System Status</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
             <div style={{ padding: '16px', background: '#ecfdf5', borderRadius: '16px', border: '1px solid #d1fae5', display: 'flex', gap: '12px' }}>
                <div style={{ color: '#059669' }}><Star size={20} /></div>
                <div>
                  <div style={{ fontWeight: 700, color: '#065f46', fontSize: '0.9rem' }}>Database Connected</div>
                  <div style={{ fontSize: '0.75rem', color: '#059669' }}>Operational - mongodb://localhost</div>
                </div>
             </div>
             <div style={{ padding: '16px', background: '#fff7ed', borderRadius: '16px', border: '1px solid #ffedd5', display: 'flex', gap: '12px' }}>
                <div style={{ color: '#d97706' }}><AlertCircle size={20} /></div>
                <div>
                  <div style={{ fontWeight: 700, color: '#9a3412', fontSize: '0.9rem' }}>Media Storage</div>
                  <div style={{ fontSize: '0.75rem', color: '#b45309' }}>Local storage active. Consider Cloudinary.</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
