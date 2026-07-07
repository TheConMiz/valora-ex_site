/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Enables the static export feature
  output: 'export', 

  // Configures subfolder routing for GitHub Pages
  basePath: isProd ? 'https://github.com/TheConMiz/valora-ex_site/' : '', 
  assetPrefix: isProd ? 'https://github.com/TheConMiz/valora-ex_site/' : '',

  // Disables image optimization since Next.js server-side optimization won't work on static hosting
  images: {
    unoptimized: true,
  },
};

export default nextConfig;