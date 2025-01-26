import { NextRequest } from "next/server";
import uniqid from 'uniqid';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  // Parse the form data
  const data = await req.formData();
  const file = data.get('file') as File;

  // Create a unique file name
  const newFilename = `${uniqid()}-${file.name}`;

  // Collect file data into a buffer
  const chunks: Uint8Array[] = [];
  const reader = file.stream().getReader();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  // Convert Uint8Array chunks to a Buffer
  const buffer = Buffer.concat(chunks);

  // Upload the file to Cloudinary
  const result = await new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { public_id: newFilename },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    uploadStream.end(buffer);
  });

  // Generate the public URL for the uploaded file
  const publicUrl = (result as any).secure_url;

  // Return the public URL
  return new Response(JSON.stringify({ url: publicUrl }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}