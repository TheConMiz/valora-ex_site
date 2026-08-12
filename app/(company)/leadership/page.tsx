'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { leadershipTeam } from './../../lib/data';

export default function LeadershipPage() {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Check URL hash on initial load to set the correct profile based on homepage click
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const hash = window.location.hash.replace('#', '');
			if (hash) {
				const index = leadershipTeam.findIndex((l) => l.id === hash);
				if (index !== -1) {
					// Defer the state update to the next tick to avoid synchronous cascading renders
					setTimeout(() => {
						setCurrentIndex(index);
					}, 0);
				}
			}
		}
	}, []);

	const handleNext = () => {
		setCurrentIndex((prev) => (prev === leadershipTeam.length - 1 ? 0 : prev + 1));
	};

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev === 0 ? leadershipTeam.length - 1 : prev - 1));
	};

	const currentLeader = leadershipTeam[currentIndex];

	return (
		<main className="min-h-screen bg-white py-12 px-6 sm:py-24 flex flex-col">
			<div className="max-w-4xl mx-auto w-full flex-grow">

				{/* Responsive Back to Home Button */}
				<div className="mb-10 sm:mb-16 flex justify-start">
					<Link
						href="/"
						className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 hover:text-gray-900 hover:-translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						aria-label="Back to Home"
					>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
						</svg>
						Back to Home
					</Link>
				</div>

				{/* Profile Container (Paginated) */}
				<div className="flex flex-col md:flex-row gap-10 items-start min-h-[500px]">

					{/* Next.js Optimized Image */}
					<div className="w-full md:w-1/3 aspect-square relative bg-gray-100 rounded-2xl flex-shrink-0 border border-gray-200 overflow-hidden shadow-inner">
						<Image
							src={currentLeader.imageUrl}
							alt={`${currentLeader.name} - ${currentLeader.role}`}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 33vw"
							priority // Prioritizes loading this image above the fold
						/>
					</div>

					{/* Content & Bio */}
					<div className="w-full md:w-2/3 flex flex-col justify-center">
						<h1 className="text-4xl font-extrabold text-gray-900">{currentLeader.name}</h1>
						<p className="text-xl font-medium text-blue-600 mt-2 mb-6">{currentLeader.role}</p>

						<div className="mb-8">
							{currentLeader.bio.map((paragraph, index) => (
								<p key={index} className="text-gray-700 leading-relaxed mb-4">
									{paragraph}
								</p>
							))}
						</div>

						{/* Social Links */}
						<div className="flex gap-6">
							<a
								href={currentLeader.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-sm font-semibold text-[#0A66C2] hover:text-blue-800 transition-colors"
							>
								LinkedIn &rarr;
							</a>
							{/* <a
								href={currentLeader.xUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-black transition-colors"
							>
								X (Twitter) &rarr;
							</a> */}
						</div>
					</div>
				</div>

				{/* Subpage Pagination Controls */}
				<div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
					<button
						onClick={handlePrev}
						className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						&larr; Previous Profile
					</button>

					<span className="text-sm font-medium text-gray-400">
						{currentIndex + 1} of {leadershipTeam.length}
					</span>

					<button
						onClick={handleNext}
						className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Next Profile &rarr;
					</button>
				</div>

			</div>
		</main>
	);
}