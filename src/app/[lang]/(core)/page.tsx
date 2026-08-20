import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PartnerCarousel from '../components/PartnerCarousel';

export default function Home() {
	return (
		<div className="flex flex-col w-full">

			{/* 1. Hero Section (Picture 1 Implementation) */}
			<section className="relative w-full min-h-[80vh] md:min-h-[85vh] flex items-center bg-gray-100 border-b border-gray-200 overflow-hidden">

				{/* Background Image (Picture 1) */}
				<div className="absolute inset-0 w-full h-full z-0">
					<Image
						src="/valoraex-hero-ffe-workflow.webp"
						alt="Premium commercial FF&E setting with tagged assets and subtle data overlays"
						fill
						className="object-cover object-[70%_center] md:object-center"
						priority
					/>
					{/* Gradient overlay for text readability on left negative space */}
					<div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/85 to-transparent md:w-2/3"></div>
				</div>

				{/* Hero Content */}
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
					<div className="max-w-2xl">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[var(--foreground)] leading-tight mb-6">
							Make every asset transition more visible, traceable and better prepared.[cite: 1]
						</h1>
						<p className="text-xl text-[var(--text-muted)] mb-4">
							Visible assets. Transparent information. Structured evidence.[cite: 1]
						</p>
						<p className="text-lg font-medium text-[var(--accent-teal)] mb-10">
							From asset transition to governance-ready evidence.[cite: 1]
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link href="/contact" className="btn-primary text-center">
								Request a Demonstration
							</Link>
							<Link href="/one" className="btn-secondary text-center bg-white">
								Explore ValoraEX ONE
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* 2. Platform Overview Strip */}
			<section className="content-section py-20">
				<div className="max-w-3xl mb-16">
					<h2 className="text-3xl font-medium mb-4">A Structured Ecosystem Approach</h2>
					<p className="text-[var(--text-muted)]">
						ValoraEX coordinates complex commercial FF&E transitions through a disciplined framework, separating individual project workflows from cross-project governance.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<Link href="/one" className="group border border-gray-200 bg-white p-8 rounded-sm hover:border-[var(--accent-teal)] transition-colors">
						<h3 className="text-lg font-medium label-priority mb-2 group-hover:text-[var(--accent-teal)] transition-colors">ValoraEX ONE</h3>
						<p className="text-sm text-[var(--text-muted)]">Seven-stage individual project workflow from visibility to close-out.</p>
					</Link>

					<Link href="/governance" className="group border border-gray-200 bg-white p-8 rounded-sm hover:border-[var(--accent-teal)] transition-colors">
						<h3 className="text-lg font-medium label-priority mb-2 group-hover:text-[var(--accent-teal)] transition-colors">Governance</h3>
						<p className="text-sm text-[var(--text-muted)]">Recurring readiness, baseline controls, and cross-project oversight.</p>
					</Link>

					<Link href="/ecosystem" className="group border border-gray-200 bg-white p-8 rounded-sm hover:border-[var(--accent-teal)] transition-colors">
						<h3 className="text-lg font-medium label-priority mb-2 group-hover:text-[var(--accent-teal)] transition-colors">Ecosystem</h3>
						<p className="text-sm text-[var(--text-muted)]">Independent downstream participants for logistics, repair, and secondary pathways.</p>
					</Link>
				</div>
			</section>

			{/* Render the Partner Carousel */}
			<PartnerCarousel />

		</div>
	);
}