import ContentBlock from '@/components/ContentBlock';
import { getDictionary, Locale } from '@/lib/dictionaries';
import { Metadata } from 'next';

export async function generateMetadata({
	params
}: {
	params: Promise<{ lang: string }>
}): Promise<Metadata> {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);

	return {
		title: dict.nav.what_we_do, // <-- 3. Change this key for each page
	};
}

export default async function WhatWeDoPage({
	params
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);
	const content = dict.what_we_do;

	// Helper to safely preserve the bold formatting for the 5R list
	const render5R = (text: string) => {
		const parts = text.split(' — ');
		if (parts.length === 2) {
			return <><strong className="font-bold">{parts[0]}</strong> — {parts[1]}</>;
		}
		return text;
	};

	return (
		<main>
			{/* Intro & Core Areas */}
			<ContentBlock
				title={content.title}
				subtitle={content.subtitle}
				isPageHeader={true}
			>
				<p>{content.intro}</p>

				<h3 className="mt-8">{content.areas.workflow_title}</h3>
				<p>{content.areas.workflow_desc}</p>

				<h3 className="mt-6">{content.areas.governance_title}</h3>
				<p>{content.areas.governance_desc}</p>

				<h3 className="mt-6">{content.areas.execution_title}</h3>
				<p>{content.areas.execution_desc}</p>
			</ContentBlock>

			{/* Visibility & Route Readiness */}
			<ContentBlock
				title={content.visibility_readiness.title}
				graphicRef="MKT-WEB-G07"
				reverseLayout
			>
				<h3>{content.visibility_readiness.stocktake_title}</h3>
				<p>{content.visibility_readiness.stocktake_desc}</p>

				<h3 className="mt-8">{content.visibility_readiness.readiness_title}</h3>
				<p>{content.visibility_readiness.readiness_desc}</p>
				<p>{content.visibility_readiness.factors_intro}</p>
				<ul>
					{content.visibility_readiness.factors.map((factor, index) => (
						<li key={index}>{factor}</li>
					))}
				</ul>
			</ContentBlock>

			{/* 5R Route Planning */}
			<ContentBlock
				title={content.framework_5r.title}
				graphicRef="MKT-WEB-G06"
			>
				<p>{render5R(content.framework_5r.reuse)}</p>
				<p>{render5R(content.framework_5r.resale)}</p>
				<p>{render5R(content.framework_5r.refurbishment)}</p>
				<p>{render5R(content.framework_5r.recycling)}</p>
				<p>{render5R(content.framework_5r.disposal)}</p>

				<p className="mt-6 italic text-[var(--text-muted)]">
					{/* Utilizing dangerouslySetInnerHTML or simple replacement if internal bolding is needed, 
                        but in this case, the dictionary defines it plainly. */}
					{content.framework_5r.donation_note}
				</p>
			</ContentBlock>

			{/* Execution, Evidence & Governance */}
			<ContentBlock
				title={content.execution_evidence.title}
				graphicRef="MKT-WEB-G05"
				reverseLayout
				ctas={[{ href: `/${lang}/contact`, text: content.execution_evidence.cta, variant: 'primary' }]}
			>
				<h3>{content.execution_evidence.coordination_title}</h3>
				<p>{content.execution_evidence.coordination_desc}</p>

				<h3 className="mt-8">{content.execution_evidence.closeout_title}</h3>
				<p>{content.execution_evidence.closeout_intro}</p>
				<ul>
					{content.execution_evidence.closeout_items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>

				<h3 className="mt-8">{content.execution_evidence.governance_title}</h3>
				<p>{content.execution_evidence.governance_desc}</p>

				<small className="block mt-8 border-l-2 border-gray-300 pl-4 text-[var(--text-disclaimer)]">
					{content.execution_evidence.disclaimer}
				</small>
			</ContentBlock>
		</main>
	);
}