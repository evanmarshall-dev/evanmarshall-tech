/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This tells Next.js to create static HTML files
  images: {
    unoptimized: true, // S3 can't do dynamic image optimization
  },
  compress: true,
  poweredByHeader: false,
  trailingSlash: true, // Better for S3 hosting (creates index.html in folders)
};

export default nextConfig;
