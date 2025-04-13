/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["glizzy.s3.us-east-1.amazonaws.com"], // ✅ Allow S3 images
  },
};

export default nextConfig;
