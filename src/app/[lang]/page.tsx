import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LeadershipCarousel from '@/components/LeadershipCarousel';
import PartnerCarousel from '@/components/PartnerCarousel';


export default function Home() {
	return (
		<div className="flex flex-col w-full">
			{/* 1. Hero Section (Picture 1 - FF&E Workflow) */}
			<section className="relative w-full min-h-[80vh] md:min-h-[85vh] flex items-center bg-gray-100 border-b border-gray-200 overflow-hidden">

				{/* Background Image (Picture 1) */}
				<div className="absolute inset-0 w-full h-full z-0">
					<Image
						src="/valoraex-hero-ffe-workflow.webp"
						alt=""
						fill
						className="object-cover object-[70%_center] md:object-center"
						priority
					/>
					{/* Subtle gradient overlay to protect text legibility on the left negative space */}
					<div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/80 to-transparent md:w-2/3"></div>
				</div>

				{/* Hero Content */}
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
					<div className="max-w-2xl pt-12 md:pt-0">
						{/* Reusing the cautious, platform-neutral positioning */}
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--foreground)] mb-6 leading-tight">
							Calm, intelligent FF&E lifecycle governance.
						</h1>
						<p className="text-lg md:text-xl text-[var(--text-muted)] mb-10 max-w-xl leading-relaxed">
							We provide the workflow and governance coordination layer for structured commercial environments. Independent execution, unified oversight.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								href="/contact"
								className="inline-flex justify-center items-center px-8 py-3.5 text-sm font-medium rounded-sm text-white bg-[var(--accent-teal)] hover:bg-teal-700 transition-colors shadow-sm"
							>
								Request a Demo
							</Link>
							<Link
								href="#one"
								className="inline-flex justify-center items-center px-8 py-3.5 text-sm font-medium rounded-sm text-[var(--foreground)] bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
							>
								Explore Platform
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* 2. PHASE 1 FF&E & USE CASES */}
			{/* 2. ValoraEX ONE Workflow Section (Picture 2) */}
			<section id="one" className="py-20 md:py-28 bg-[var(--background)]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

					{/* Section Header */}
					<div className="mb-12 max-w-3xl">
						<h2 className="text-sm font-bold text-[var(--accent-teal)] tracking-widest uppercase mb-3">
							ValoraEX ONE
						</h2>
						<h3 className="text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-6">
							The core workflow.
						</h3>
						<p className="text-lg text-[var(--text-muted)] leading-relaxed">
							A single, controlled sequence from initial asset visibility to final governance reporting. We
							standardize the data; our ecosystem partners handle the physical execution.
						</p>
					</div>

					{/* Visual Base & Image - Now Scrollable on Mobile */}
					<div className="w-full rounded-sm overflow-x-auto overflow-y-hidden bg-gray-100 shadow-sm">
						{/* Minimum width forces the image to stay large on mobile, enabling horizontal scroll */}
						<div className="relative min-w-[800px] md:min-w-full w-full h-[50vh] md:h-[70vh]">
							<Image src="/images/7-stage-workflow.jpg" alt="ValoraEX ONE 7-stage workflow visualization" fill
								className="object-cover object-left md:object-center" />
						</div>
					</div>
				</div>
			</section>

			{/* 3. COMPACT JOURNEY STRIP */}
			<section className="bg-white border-y border-gray-200">
				<div className="content-section py-12 text-center">
					<h2 className="text-2xl font-medium text-[var(--accent-teal)]">
						Start with a project. Build Governance over time.
					</h2>
				</div>
			</section>

			{/* 4. VALORAEX ONE (Continuous Workflow) */}
			<section id="one" className="content-section">
				<div className="mb-12 max-w-3xl">
					<h2 className="text-3xl font-medium mb-4">ValoraEX ONE</h2>
					<p className="text-[var(--text-muted)]">
						Individual project workflow linking transition readiness to execution evidence.
					</p>
				</div>

				<div className="relative border-l-2 border-[var(--accent-teal)] ml-4 md:ml-0 md:border-l-0 pl-6 md:pl-0">
					<div className="md:flex md:items-start md:gap-4 overflow-x-auto pb-4">
						{[
							{ label: "Project Entry", detail: "Scoping and baseline capture." },
							{ label: "Responsibilities", detail: "Assigning ecosystem roles." },
							{ label: "Activity Status", detail: "Live transition tracking." },
							{ label: "Route Execution", detail: "Managing downstream paths." },
							{ label: "Evidence", detail: "Capturing supporting docs." },
							{ label: "Close-Out", detail: "Finalizing project records." }
						].map((stage, idx) => (
							<div key={idx} className="relative md:flex-1 md:min-w-[160px] mb-8 md:mb-0">
								{/* Mobile timeline dot */}
								<div className="md:hidden absolute -left-[31px] top-1 w-3 h-3 bg-[var(--background)] border-2 border-[var(--accent-teal)] rounded-full"></div>
								{/* Desktop connecting line (hidden on mobile) */}
								<div className="hidden md:block absolute top-4 left-0 w-full h-[2px] bg-gray-200 -z-10"></div>
								{/* Desktop timeline dot */}
								<div className="hidden md:block w-3 h-3 bg-[var(--accent-teal)] rounded-full mb-4 outline outline-4 outline-[var(--background)]"></div>

								<h4 className="font-medium text-sm text-[var(--foreground)] label-priority mb-1">{stage.label}</h4>
								<p className="text-xs text-[var(--text-muted)] leading-relaxed">{stage.detail}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 5. VALORAEX GOVERNANCE (Overarching Layer) */}
			<section id="governance" className="content-section bg-gray-50 border-y border-gray-200">
				<div className="mb-12 max-w-3xl">
					<h2 className="text-3xl font-medium mb-4">ValoraEX Governance</h2>
					<p className="text-[var(--text-muted)]">
						Recurring readiness and cross-project oversight.
					</p>
				</div>

				<div className="flex flex-col items-center">
					{/* Overarching Governance Box */}
					<div className="w-full bg-[var(--accent-teal)] text-white p-6 md:p-8 rounded-sm text-center mb-8 shadow-sm">
						<div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 text-sm">
							<span className="font-medium">Policy Alignment</span>
							<span className="font-medium">Baseline Controls</span>
							<span className="font-medium">Provider Vetting</span>
							<span className="font-medium">Data Aggregation</span>
							<span className="font-medium col-span-2 md:col-span-1">Periodic Review</span>
						</div>
					</div>

					{/* Connection Lines */}
					<div className="flex gap-16 md:gap-32 mb-8">
						<div className="w-[2px] h-12 bg-[var(--accent-teal)] opacity-30"></div>
						<div className="w-[2px] h-12 bg-[var(--accent-teal)] opacity-30 hidden sm:block"></div>
						<div className="w-[2px] h-12 bg-[var(--accent-teal)] opacity-30"></div>
					</div>

					{/* Underlying ONE Projects */}
					<div className="flex flex-wrap justify-center gap-4 w-full">
						<div className="flex-1 min-w-[120px] max-w-[200px] bg-white border border-gray-200 p-4 text-center text-xs text-[var(--text-muted)] rounded-sm">Project A</div>
						<div className="flex-1 min-w-[120px] max-w-[200px] bg-white border border-gray-200 p-4 text-center text-xs text-[var(--text-muted)] rounded-sm hidden sm:block">Project B</div>
						<div className="flex-1 min-w-[120px] max-w-[200px] bg-white border border-gray-200 p-4 text-center text-xs text-[var(--text-muted)] rounded-sm">Project C</div>
					</div>
				</div>
			</section>

			{/* 6. PLATFORM NEUTRALITY (Ecosystem) */}
			<section id="neutrality" className="content-section">
				<div className="mb-12 text-center max-w-3xl mx-auto">
					<h2 className="text-3xl font-medium mb-4">Platform Neutrality</h2>
					<p className="text-[var(--text-muted)]">
						Logistics, storage, resale, and recycling providers are independent ecosystem participants, not ValoraEX departments. We coordinate; we do not control.
					</p>
				</div>

				<div className="relative max-w-4xl mx-auto p-4 md:p-12">
					{/* Central ValoraEX Node */}
					<div className="relative z-10 w-full md:w-auto mx-auto bg-white border-2 border-[var(--accent-teal)] p-6 text-center rounded-sm shadow-sm md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
						<h3 className="font-bold text-lg mb-2">ValoraEX</h3>
						<p className="text-xs text-[var(--text-muted)] font-medium">Workflow • Evidence • Governance • Coordination</p>
					</div>

					{/* Surrounding Ecosystem Nodes */}
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 md:mt-0 md:min-h-[400px] md:relative">
						{[
							{ label: "Logistics", pos: "md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2" },
							{ label: "Storage", pos: "md:absolute md:top-1/4 md:right-0" },
							{ label: "Repair / Refurb", pos: "md:absolute md:bottom-1/4 md:right-0" },
							{ label: "Recycling", pos: "md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2" },
							{ label: "Donation", pos: "md:absolute md:bottom-1/4 md:left-0" },
							{ label: "Resale", pos: "md:absolute md:top-1/4 md:left-0" }
						].map((node, idx) => (
							<div key={idx} className={`${node.pos} bg-gray-50 border border-gray-200 p-3 text-center text-sm text-[var(--text-muted)] rounded-sm`}>
								{node.label}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 7. MATCHING WINDOW (Timeline) */}
			<section id="matching-window" className="content-section bg-white border-y border-gray-200">
				<div className="mb-12">
					<h2 className="text-3xl font-medium mb-4">The Matching Window</h2>
					<p className="text-[var(--text-muted)] max-w-3xl">
						Time is the critical variable in finding next-use pathways.
					</p>
				</div>

				<div className="flex flex-col gap-8 max-w-4xl">
					{/* Early Visibility */}
					<div>
						<h4 className="text-sm font-bold mb-2">Early Visibility (Months prior to exit)</h4>
						<div className="flex items-center w-full h-8 bg-gray-100 rounded-sm overflow-hidden">
							<div className="h-full bg-[var(--accent-teal)]/20 w-3/4 flex items-center px-4">
								<span className="text-xs text-[var(--accent-teal)] font-medium">Wide window for route matching</span>
							</div>
							<div className="h-full bg-gray-200 w-1/4 border-l border-white"></div>
						</div>
					</div>

					{/* Late Visibility */}
					<div>
						<h4 className="text-sm font-bold mb-2">Late Visibility (Weeks prior to exit)</h4>
						<div className="flex items-center w-full h-8 bg-gray-100 rounded-sm overflow-hidden">
							<div className="h-full bg-gray-200 w-3/4 border-r border-white"></div>
							<div className="h-full bg-[var(--accent-gold)]/30 w-1/4 flex items-center px-4">
								<span className="text-xs text-[var(--foreground)] font-medium">Restricted options</span>
							</div>
						</div>
					</div>
				</div>

				<small className="disclaimer mt-8 max-w-2xl border-l-2 border-gray-300 pl-4">
					Disclaimer: No buyer, recipient, route, value or outcome is guaranteed. Earlier visibility improves coordination but does not automatically produce a second-life outcome.
				</small>
			</section>

			{/* 8. FINANCIAL-YEAR READINESS */}
			<section id="fy-readiness" className="content-section">
				<div className="mb-12 text-center">
					<h2 className="text-3xl font-medium mb-4">Financial-Year Readiness</h2>
					<p className="text-[var(--text-muted)]">
						Continuous preparation over annual reporting cycles.
					</p>
				</div>

				<div className="max-w-4xl mx-auto border border-gray-200 bg-white p-6 md:p-12 rounded-sm overflow-x-auto">
					<div className="min-w-[600px] relative">
						<div className="flex justify-between text-xs font-bold text-[var(--text-muted)] border-b border-gray-200 pb-2 mb-6">
							<span>Q1</span><span>Q2</span><span>Q3</span><span>Q4 (Year-End)</span>
						</div>

						{/* Project Activity (Continuous) */}
						<div className="w-full bg-gray-100 p-3 mb-4 rounded-sm flex items-center">
							<span className="text-sm font-medium w-48">Project Activity</span>
							<div className="h-2 bg-[var(--accent-teal)]/40 flex-grow rounded-full mx-4"></div>
						</div>

						{/* Evidence Capture (Continuous) */}
						<div className="w-full bg-gray-100 p-3 mb-4 rounded-sm flex items-center">
							<span className="text-sm font-medium w-48">Evidence Capture</span>
							<div className="h-2 bg-[var(--accent-teal)] flex-grow rounded-full mx-4"></div>
						</div>

						{/* Periodic Governance Review (Point-in-time) */}
						<div className="w-full bg-gray-100 p-3 mb-4 rounded-sm flex items-center relative">
							<span className="text-sm font-medium w-48">Governance Review</span>
							<div className="flex-grow flex justify-around mx-4">
								<div className="w-3 h-3 bg-gray-400 rounded-full"></div>
								<div className="w-3 h-3 bg-gray-400 rounded-full"></div>
								<div className="w-3 h-3 bg-gray-400 rounded-full"></div>
							</div>
						</div>

						{/* Year-End Prep */}
						<div className="w-full bg-[var(--accent-teal)]/10 p-3 rounded-sm flex items-center">
							<span className="text-sm font-medium w-48 text-[var(--accent-teal)]">Year-End Prep</span>
							<div className="flex-grow flex justify-end mx-4">
								<div className="h-2 bg-[var(--accent-teal)] w-1/4 rounded-full"></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 9. 5R METHODOLOGY (Structured, non-circular) */}
			<section id="5r-framework" className="content-section bg-white border-y border-gray-200">
				<div className="mb-12">
					<h2 className="text-3xl font-medium mb-4">Route Framework (5R)</h2>
					<p className="text-[var(--text-muted)] max-w-2xl">
						Structured outcome categorization dependent on asset condition, market timing, and logistics feasibility.
					</p>
				</div>

				<div className="flex flex-col gap-2 max-w-3xl">
					{[
						{ title: "Reuse", desc: "Internal redeployment within the organization." },
						{ title: "Resale", desc: "Sale to secondary markets or staff." },
						{ title: "Refurbishment or Repurposing", desc: "Repair or modification for extended life." },
						{ title: "Recycling", desc: "Material recovery and processing." }
					].map((route, idx) => (
						<div key={idx} className="flex flex-col sm:flex-row sm:items-center border border-gray-200 p-4 gap-4 bg-gray-50">
							<span className="font-bold text-[var(--accent-teal)] w-48">{route.title}</span>
							<span className="text-sm text-[var(--text-muted)]">{route.desc}</span>
						</div>
					))}
					{/* Secondary positioning for Responsible Disposal */}
					<div className="flex flex-col sm:flex-row sm:items-center border border-dashed border-gray-300 p-4 gap-4 mt-4 opacity-70">
						<span className="font-medium text-gray-500 w-48">Responsible Disposal</span>
						<span className="text-sm text-gray-500">Compliant end-of-life processing where other routes are not viable.</span>
					</div>
				</div>
			</section>

			{/* 10. DATA & EVIDENCE STACK */}
			<section id="evidence-stack" className="content-section">
				<div className="mb-12 text-center max-w-3xl mx-auto">
					<h2 className="text-3xl font-medium mb-4">Evidence & Documentation</h2>
					<p className="text-[var(--text-muted)]">
						Transparent estimates are more useful than unsupported claims.
					</p>
				</div>

				<div className="flex flex-col max-w-md mx-auto gap-2">
					{[
						"Governance Output",
						"Limitations & Disclaimers",
						"Methods & Assumptions",
						"Route Evidence",
						"Project Records",
						"Source Information (Baseline)"
					].map((layer, idx) => (
						<div
							key={idx}
							className="w-full text-center py-3 px-4 border border-gray-200 text-sm font-medium"
							style={{ backgroundColor: `rgba(15, 118, 110, ${0.1 * (6 - idx)})` }} // Gradual teal fade
						>
							{layer}
						</div>
					))}
				</div>
			</section>

			{/* 11. ROADMAP (Biased to NOW) */}
			<section id="roadmap" className="content-section bg-gray-50 border-y border-gray-200">
				<div className="mb-12">
					<h2 className="text-3xl font-medium mb-4">Development Roadmap</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* NOW - Visually Dominant */}
					<div className="col-span-1 md:col-span-2 bg-white border-2 border-[var(--accent-teal)] p-8 rounded-sm shadow-sm">
						<h3 className="text-xl font-bold mb-4 label-priority">Now — Phase 1 FF&E</h3>
						<p className="text-sm text-[var(--text-muted)]">
							Full deployment of ValoraEX ONE and Governance for Furniture, Fixtures, and Equipment. Focus on physical asset visibility, structured project workflows, and evidence capture for standard corporate transitions.
						</p>
					</div>

					{/* NEXT & FUTURE - Visually Reduced */}
					<div className="flex flex-col gap-4">
						<div className="bg-white border border-gray-200 p-6 rounded-sm opacity-80">
							<h3 className="text-sm font-bold mb-2 text-gray-700">Next (Conditional)</h3>
							<p className="text-xs text-gray-500">ITAD & Electronics supply-chain capability.</p>
						</div>
						<div className="bg-white border border-gray-200 p-6 rounded-sm opacity-60">
							<h3 className="text-sm font-bold mb-2 text-gray-600">Future (Conditional)</h3>
							<p className="text-xs text-gray-500">Specialist technical equipment and complex supply chains.</p>
						</div>
					</div>
				</div>

				<small className="disclaimer mt-8 max-w-2xl">
					Roadmap disclaimer: Future capabilities are indicative, subject to change, and conditional on technical feasibility and market requirements.
				</small>
			</section>
			{/* 12. Leadership */}
			<section className="w-full max-w-6xl mx-auto px-6 py-16">
				<h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Meet Our Leadership</h2>
				{/* Render the paginated carousel */}
				<LeadershipCarousel />
			</section>
			{/* 13. FAQ */}
			<section id="faq" className="content-section pb-24">
				<div className="mb-12">
					<h2 className="text-3xl font-medium mb-4">Frequently Asked Questions</h2>
				</div>

				<div className="max-w-3xl flex flex-col gap-4">
					{[
						{ q: "Is ValoraEX a logistics provider?", a: "No. ValoraEX provides workflow and governance software. Physical movement is handled by independent ecosystem partners." },
						{ q: "Do you guarantee a resale buyer or donation recipient?", a: "No. Outcomes depend on asset condition, timing, and independent market demand." },
						{ q: "Is ValoraEX an ESG certification body?", a: "No. We provide structured evidence and workflow data that organizations can use to support their own governance and reporting." },
						{ q: "What types of assets do you handle?", a: "Currently, our framework is restricted to commercial Furniture, Fixtures, and Equipment (FF&E)." },
						{ q: "How is ValoraEX Governance different from ValoraEX ONE?", a: "ONE manages individual project workflows from entry to close-out. Governance provides an overarching layer for cross-project oversight and readiness checks." },
						{ q: "Who selects the outcome route?", a: "Routes are identified collaboratively based on condition and timing, but final decisions rely on client policy and market realities." }
					].map((faq, idx) => (
						<details key={idx} className="group border border-gray-200 bg-white rounded-sm open:bg-gray-50 transition-colors">
							<summary className="cursor-pointer p-5 font-medium text-[var(--foreground)] list-none flex justify-between items-center">
								{faq.q}
								<span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
							</summary>
							<div className="px-5 pb-5 text-sm text-[var(--text-muted)] border-t border-gray-100 pt-3">
								{faq.a}
							</div>
						</details>
					))}
				</div>

				{/* <div className="mt-8">
					<Link href="/faq" className="btn-secondary">
						View all FAQs
					</Link>
				</div> */}
			</section>

			{/* Render the Partner Carousel */}
			<PartnerCarousel />

		</div>
	);
}