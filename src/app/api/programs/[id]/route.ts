import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Program from '@/lib/models/Program';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const body = await req.json();
  const data = await Program.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(data);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  await Program.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
