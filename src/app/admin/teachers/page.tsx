'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Loader2, User, ChevronRight } from 'lucide-react';

interface Teacher {
  _id: string;
  name: string;
  role: string;
  subject: string;
  bio: string;
  qualifications: string[];
  experience: number;
  classes: string;
  isActive: boolean;
}

export default function TeachersAdminPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Teacher> | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/teachers');
      const data = await res.json();
      setTeachers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const method = editing?._id ? 'PUT' : 'POST';
    const url = editing?._id ? `/api/teachers/${editing._id}` : '/api/teachers';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editing),
      });
      if (res.ok) {
        setEditing(null);
        fetchTeachers();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this teacher?')) return;
    try {
      await fetch(`/api/teachers/${id}`, { method: 'DELETE' });
      fetchTeachers();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading && teachers.length === 0) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}><Loader2 className="animate-spin" size={40} color="#1a3a6e" /></div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '8px' }}>Manage Teachers</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#718096', fontSize: '0.9rem' }}>
            Admin <ChevronRight size={14} /> Teachers
          </div>
        </div>
        <button 
          onClick={() => setEditing({ name: '', role: '', subject: '', bio: '', qualifications: [], experience: 0, classes: '', isActive: true })}
          style={{ background: '#1a3a6e', color: '#fff', padding: '12px 24px', borderRadius: '12px', border: 'none', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Plus size={20} /> Add New Teacher
        </button>
      </div>

      <div style={{ background: '#fff', borderRadius: '30px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ background: '#f7f9fc', borderBottom: '1px solid #e2e8f0' }}>
            <tr>
              <th style={{ padding: '20px', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', textTransform: 'uppercase' }}>Teacher</th>
              <th style={{ padding: '20px', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', textTransform: 'uppercase' }}>Subject</th>
              <th style={{ padding: '20px', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', textTransform: 'uppercase' }}>Status</th>
              <th style={{ padding: '20px', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', textTransform: 'uppercase' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#edf2f7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a0aec0' }}>
                      <User size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1a3a6e' }}>{teacher.name}</div>
                      <div style={{ fontSize: '0.8rem', color: '#718096' }}>{teacher.role}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '20px', color: '#4a5568', fontWeight: 500 }}>{teacher.subject}</td>
                <td style={{ padding: '20px' }}>
                  <span style={{ background: teacher.isActive ? '#ecfdf5' : '#fff1f2', color: teacher.isActive ? '#059669' : '#e11d48', padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800 }}>
                    {teacher.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={() => setEditing(teacher)} style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#f7f9fc', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a3a6e' }}><Edit2 size={16} /></button>
                    <button onClick={() => handleDelete(teacher._id)} style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#fff1f2', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e11d48' }}><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Tooltip/Form */}
      {editing && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(15, 35, 71, 0.4)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ background: '#fff', width: '100%', maxWidth: '700px', borderRadius: '30px', padding: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.2)', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
            <button onClick={() => setEditing(null)} style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', cursor: 'pointer', color: '#718096' }}><X size={24} /></button>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1a3a6e', marginBottom: '32px' }}>{editing._id ? 'Edit Teacher' : 'Add New Teacher'}</h2>
            
            <form onSubmit={handleSave} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div style={{ gridColumn: 'span 1' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Full Name</label>
                <input required type="text" value={editing.name || ''} onChange={e => setEditing({...editing, name: e.target.value})} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }} />
              </div>
              <div style={{ gridColumn: 'span 1' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Role / Designation</label>
                <input required type="text" value={editing.role || ''} onChange={e => setEditing({...editing, role: e.target.value})} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }} />
              </div>
              <div style={{ gridColumn: 'span 1' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Primary Subject</label>
                <input required type="text" value={editing.subject || ''} onChange={e => setEditing({...editing, subject: e.target.value})} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }} />
              </div>
              <div style={{ gridColumn: 'span 1' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Classes Taught</label>
                <input type="text" value={editing.classes || ''} onChange={e => setEditing({...editing, classes: e.target.value})} placeholder="e.g. 9, 10, FSC" style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Biography / Profile Summary</label>
                <textarea rows={4} value={editing.bio || ''} onChange={e => setEditing({...editing, bio: e.target.value})} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none', resize: 'none' }}></textarea>
              </div>
              <div style={{ gridColumn: 'span 1' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1a3a6e', marginBottom: '8px' }}>Active Status</label>
                <select value={editing.isActive ? 'true' : 'false'} onChange={e => setEditing({...editing, isActive: e.target.value === 'true'})} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }}>
                  <option value="true">Active (Visile on site)</option>
                  <option value="false">Inactive (Hidden)</option>
                </select>
              </div>
              <div style={{ gridColumn: 'span 2', marginTop: '20px' }}>
                <button disabled={saving} type="submit" style={{ width: '100%', background: '#1a3a6e', color: '#fff', padding: '16px', borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />} {editing._id ? 'Update Teacher Profile' : 'Create Teacher Profile'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
