import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  // Find the generated image in the artifacts directory
  // In a real app, this would be a URL to Cloudinary/S3
  // Here we serve the local generated file
  const artifactDir = '/home/anis/.gemini/antigravity/brain/a6674504-fd65-4c3d-85ea-549f5e5b1c87';
  const files = fs.readdirSync(artifactDir);
  const heroImage = files.find(f => f.startsWith('modern_school_hero') && f.endsWith('.png'));

  if (!heroImage) {
    return new NextResponse('Image not found', { status: 404 });
  }

  const imagePath = path.join(artifactDir, heroImage);
  const imageBuffer = fs.readFileSync(imagePath);

  return new NextResponse(imageBuffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
