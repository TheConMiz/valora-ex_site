import ContentBlock from '@/components/ContentBlock';
import LeadershipCarousel from '@/components/LeadershipCarousel';
import PartnerCarousel from '@/components/PartnerCarousel';

export function generateStaticParams() {
	return [{ lang: 'en' }, { lang: 'zh-hk' }, { lang: 'zh-cn' }];
}

export default async function HomePage({
	params
}: {
	params: Promise<{ lang: string }>
}) {
	// Unwrap the Promise
	const { lang } = await params;

	return (
		<main>
			{/* 01 — Hero */}
			<ContentBlock
				title="Extend Value Beyond Exit"
				subtitle="A Practical 5R Intelligence Ecosystem for Asset Transition"
				graphicRef="MKT-WEB-G01"
				ctas={[
					{ href: `/${lang}/valoraex-one`, text: 'Explore ValoraEX', variant: 'primary' },
					{ href: `/${lang}/contact`, text: 'Talk to Us', variant: 'secondary' }
				]}
			>
				<p>ValoraEX connects asset visibility, route decisions, ecosystem coordination, evidence and governance through a structured 5R approach to asset transition.</p>
				<p><strong>Visibility. Workflow. Evidence. Governance.</strong></p>
			</ContentBlock>

			{/* 02 — Why ValoraEX */}
			<ContentBlock
				title="Better Outcomes Start Earlier"
				graphicRef="MKT-WEB-G03"
				reverseLayout
				ctas={[{ href: `/${lang}/why-valoraex`, text: 'Why ValoraEX', variant: 'primary' }]}
			>
				<p>Better circular-economy outcomes depend on more than finding a downstream provider.</p>
				<p>Timing, information, preparation and coordination can determine which asset-transition routes are actually possible.</p>
				<blockquote>Earlier visibility creates more time for better routes to become possible.</blockquote>
			</ContentBlock>

			{/* 03 — How ValoraEX Works */}
			<ContentBlock
				title="One Structured Asset-Transition Journey"
				graphicRef="MKT-WEB-G05"
				ctas={[{ href: `/${lang}/what-we-do`, text: 'What We Do', variant: 'primary' }]}
			>
				<p>ValoraEX provides a structured layer connecting information, decisions, execution and evidence throughout the asset-transition journey.</p>
				<blockquote>Asset Visibility → Route Readiness → Route Assignment → Ecosystem Coordination → Evidence → Close-Out → Governance</blockquote>
			</ContentBlock>

			{/* 04 — Three Ways to Work with ValoraEX */}
			<ContentBlock
				title="Solutions for Different Stages of Asset Transition"
				reverseLayout
			>
				<h3>ValoraEX ONE — V-ONE</h3>
				<p><strong>Project-Entry & Workflow</strong></p>
				<p>Structure a defined asset-transition project from visibility through close-out.</p>
				<p><a href={`/${lang}/valoraex-one`} className="text-[var(--accent-teal)] font-medium hover:underline">Explore V-ONE →</a></p>

				<h3 className="mt-8">ValoraEX Governance — V-Governance</h3>
				<p><strong>Ongoing Readiness & Governance</strong></p>
				<p>Maintain evidence quality, lifecycle visibility and readiness beyond individual projects.</p>
				<p><a href={`/${lang}/valoraex-governance`} className="text-[var(--accent-teal)] font-medium hover:underline">Explore V-Governance →</a></p>

				<h3 className="mt-8">Execution & Coordination Services</h3>
				<p><strong>Project-Based Support</strong></p>
				<p>On-site support, project coordination and access to suitable independent specialist capabilities.</p>
				<p><a href={`/${lang}/execution-coordination`} className="text-[var(--accent-teal)] font-medium hover:underline">Explore Execution & Coordination Services →</a></p>
			</ContentBlock>

			{/* 05 — 5R Framework */}
			<ContentBlock
				title="Five Routes. One Structured Framework."
				subtitle="Reuse · Resale · Refurbishment / Repurposing · Recycling · Responsible Disposal"
				graphicRef="MKT-WEB-G06"
				ctas={[{ href: `/${lang}/why-valoraex`, text: 'Explore the 5R Approach', variant: 'primary' }]}
			>
				<p>Different assets require different routes.</p>
				<p>ValoraEX supports structured assessment and preparation so potential routes can be considered more effectively.</p>
			</ContentBlock>

			{/* 06 — Evidence, Governance & Shared Value */}
			<ContentBlock
				title="Better Information. Better Evidence. Better Continuity."
				graphicRef={['MKT-WEB-G10', 'MKT-WEB-G11']} // <-- Passed securely as an array
				reverseLayout
			></ContentBlock>

			{/* 07 — Development Direction */}
			<ContentBlock
				title="Starting with FF&E. Designed to Go Further."
				graphicRef="MKT-WEB-G14"
			>
				<p><strong>Today:</strong> Furniture, Fixtures & Equipment (FF&E)</p>
				<p><strong>Development Direction:</strong> Selected Electronics & Technology Assets</p>
				<p><strong>Future:</strong> Broader Asset Categories & Connected Lifecycle</p>
				<blockquote>FF&E is our Phase 1 proof category — not the platform ceiling.</blockquote>
				<small>Future directions remain subject to development, validation and applicable requirements.</small>
			</ContentBlock>

			{/* 08 — Management & Insights (Leadership Wrapper) */}
			<section className="py-20 bg-gray-50 border-y border-gray-200">
				<div className="max-w-7xl mx-auto px-8">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4 text-gray-900">Leadership</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">Meet the team driving our platform, strategy, and ecosystem.</p>
					</div>
					{/* Integrated from Task 12 */}
					<LeadershipCarousel />
				</div>
			</section>

			{/* 08 — Management & Insights (Insights Wrapper) */}
			{/* <ContentBlock
				title="Insights & Ecosystem Updates"
				graphicRef={['MKT-WEB-G16', 'MKT-WEB-G17', 'MKT-WEB-G19', 'MKT-WEB-G20']} // <-- Passed securely as an array
				ctas={[
					{ href: `/${lang}/insights`, text: 'View All Insights', variant: 'primary' },
					{ href: 'https://www.youtube.com/@ValoraEX_Ecosystem', text: 'Visit the ValoraEX YouTube Channel', variant: 'secondary' }
				]}
			>

			</ContentBlock> */}

			{/* 09 — Ecosystem Appreciation */}
			<section className="py-20 bg-gray-50 border-t border-gray-200">
				<div className="max-w-7xl mx-auto px-8 text-center mb-12">
					<h2 className="text-4xl font-bold mb-4 text-gray-900">Special Appreciation to Our Ecosystem Players</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						We appreciate the organisations and ecosystem players who support, collaborate with, contribute to or engage with the development of ValoraEX and the wider practical circular-economy ecosystem.
					</p>
				</div>
				<PartnerCarousel />
			</section>

			{/* Final CTA */}
			<ContentBlock
				title="Ready to Make Asset Transition More Structured?"
				graphicRef="MKT-WEB-G13"
				ctas={[{ href: `/${lang}/contact`, text: 'Talk to Us', variant: 'primary' }]}
				reverseLayout
			>
				<p>Talk to ValoraEX about how earlier visibility, structured route decisions, ecosystem coordination and stronger evidence can support your next asset-transition project.</p>
			</ContentBlock>
		</main>
	);
}