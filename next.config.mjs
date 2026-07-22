/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Static export requires unoptimized images since there is no
    // Node.js image server at request time. Source assets are already
    // pre-compressed/resized (see public/images) to keep payloads small.
    unoptimized: true,
  },
};

export default nextConfig;
