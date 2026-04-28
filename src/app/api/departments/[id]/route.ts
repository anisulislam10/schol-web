import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Department from '@/lib/models/Department';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  const body = await req.json();
  const data = await Department.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(data);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  await Department.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
