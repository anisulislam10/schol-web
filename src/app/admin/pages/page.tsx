import dbConnect from '@/lib/db';
import DynamicPage from '@/lib/models/DynamicPage';
import { FileText, Plus, Edit3, Trash2, Globe } from 'lucide-react';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

export const runtime = 'nodejs';

async function getPages() {
  await dbConnect();
  return await DynamicPage.find({}).sort({ updatedAt: -1 }).lean();
}

export default async function AdminPagesManagement() {
  const pages = await getPages();

  async function deletePage(formData: FormData) {
    'use server';
    const id = formData.get('id');
    await dbConnect();
    await DynamicPage.findByIdAndDelete(id);
    revalidatePath('/admin/pages');
  }

  return (
    <div className="p-8 font-sans">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-black text-[#002d56] mb-2 uppercase tracking-tighter">Content Management</h1>
          <p className="text-slate-400 font-medium uppercase text-xs tracking-widest">Manage all informational pages across the site</p>
        </div>
        <Link href="/admin/pages/new" className="bg-[#ffcc00] text-[#002d56] px-8 py-3 rounded-sm font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#002d56] hover:text-white transition-all shadow-lg">
          <Plus size={18} /> Create New Page
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page: any) => (
          <div key={page._id.toString()} className="bg-white rounded-sm shadow-xl border border-slate-100 overflow-hidden flex flex-col hover:border-[#ffcc00] transition-all">
            <div className="p-8 flex-grow">
              <div className="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center mb-6 text-[#002d56]">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-black text-[#002d56] uppercase tracking-tighter mb-2">{page.title}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <Globe size={12} /> Slug: /{page.slug}
              </p>
              <div className="prose prose-sm line-clamp-3 opacity-60 pointer-events-none" dangerouslySetInnerHTML={{ __html: page.content.substring(0, 200) }} />
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
              <Link href={`/admin/pages/edit/${page._id}`} className="text-[#002d56] font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-[#ffcc00] transition-all">
                <Edit3 size={14} /> Edit Content
              </Link>
              <form action={deletePage}>
                <input type="hidden" name="id" value={page._id.toString()} />
                <button type="submit" className="text-red-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-red-700 transition-all">
                  <Trash2 size={14} /> Delete
                </button>
              </form>
            </div>
          </div>
        ))}

        {pages.length === 0 && (
          <div className="col-span-full py-32 text-center border-2 border-dashed border-slate-200 rounded-sm">
            <p className="text-slate-400 font-bold uppercase tracking-widest">No dynamic pages created yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
