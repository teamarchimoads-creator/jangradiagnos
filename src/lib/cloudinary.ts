import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'puvsvkoq',
  api_key: process.env.CLOUDINARY_API_KEY || '388449499332398',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'vrjDdt2xL1BVgXHeio654qJeFLk',
});

export default cloudinary;
