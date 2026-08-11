/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true, // Required because GitHub Pages won't support Next.js built-in image optimization API
	},
	// If your repository is not a custom domain (e.g., username.github.io/repo-name)
	// basePath: '/repo-name', 
};

export default nextConfig;