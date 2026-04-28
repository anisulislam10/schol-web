import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Download from '@/lib/models/Download';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const body = await req.json();
  const data = await Download.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(data);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  await Download.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
