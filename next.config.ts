// Check if the build is running inside GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// GitHub Pages requires unoptimized images. Google Cloud will use built-in optimization.
		unoptimized: isGithubActions, 
	},
	
	// Dynamically use the exact base path injected by GitHub's configure-pages action
	basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;