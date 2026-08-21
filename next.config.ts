// Check if the build is running inside GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

// Define your GitHub repository name
const repoName = 'valora-ex_site';

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// GitHub Pages requires unoptimized images. 
		// Google Cloud will use Next.js's built-in optimization.
		unoptimized: isGithubActions, 
	},
	
	// Only apply the basePath if deploying to GitHub Pages.
	// Google Cloud will use the standard root path ('').
	basePath: isGithubActions ? `/${repoName}` : '',
};

export default nextConfig;