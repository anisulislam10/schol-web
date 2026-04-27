import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import DynamicPage from '@/lib/models/DynamicPage';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
    const body = await req.json();
    const page = await DynamicPage.findByIdAndUpdate(params.id, body, { new: true });
    return NextResponse.json(page);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await dbConnect();
    await DynamicPage.findByIdAndDelete(params.id);
    return NextResponse.json({ message: 'Deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
