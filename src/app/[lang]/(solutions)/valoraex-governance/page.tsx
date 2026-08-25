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
		title: dict.nav.v_governance, // <-- 3. Change this key for each page
	};
}

export default async function VGovernancePage({
	params
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);
	const content = dict.valoraex_governance;

	// Helper to safely preserve the bold formatting for pillars
	const renderPillarAsHeading = (text: string) => {
		const separator = text.includes('：') ? '：' : ': ';
		const parts = text.split(separator);
		if (parts.length >= 2) {
			const heading = parts.shift();
			const desc = parts.join(separator);
			return (
				<div className="mt-8">
					<h3 className="mb-2">{heading}</h3>
					<p>{desc.trim()}</p>
				</div>
			);
		}
		return <p className="mt-8">{text}</p>;
	};

	// Helper to safely preserve the bold formatting for plans
	const renderPlan = (text: string) => {
		const parts = text.split(' — ');
		if (parts.length === 2) {
			return <><strong className="font-bold">{parts[0]}</strong> — {parts[1]}</>;
		}
		return text;
	};

	return (
		<main>
			<ContentBlock
				title={content.title}
				subtitle={content.subtitle}
				isPageHeader={true}
				graphicRef="MKT-WEB-G09"
				ctas={[{ href: `/${lang}/contact`, text: content.cta, variant: 'primary' }]}
			>
				<p>{content.intro}</p>

				<h3 className="mt-8">{/* Re-using the dictionary key structure logically, we can hardcode the section title or pull from a common key if we had one. Let's just render the list. */}Core Pillars</h3>
				<div className="mt-12">
					{renderPillarAsHeading(content.pillars.readiness)}
					{renderPillarAsHeading(content.pillars.evidence)}
					{renderPillarAsHeading(content.pillars.history)}
				</div>
				<blockquote>{content.flow}</blockquote>
			</ContentBlock>

			<ContentBlock
				title={content.fy_readiness.title}
				graphicRef="MKT-WEB-G10"
				reverseLayout
			>
				<p>{content.fy_readiness.p1}</p>
				<p>{content.fy_readiness.records_intro}</p>
				<ul>
					{content.fy_readiness.records.map((record, index) => (
						<li key={index}>{record}</li>
					))}
				</ul>
				<p>{content.fy_readiness.conclusion}</p>
				<blockquote>{content.fy_readiness.quote}</blockquote>
			</ContentBlock>

			<ContentBlock
				title={content.evidence_readiness.title}
				graphicRef="MKT-WEB-G11"
			>
				<p>{content.evidence_readiness.intro}</p>
				<blockquote>{content.evidence_readiness.quote}</blockquote>

				<div className="mt-8 space-y-4">
					<p>{renderPlan(content.plans.basic)}</p>
					<p>{renderPlan(content.plans.advanced)}</p>
					<p>{renderPlan(content.plans.premium)}</p>
				</div>

				<div className="mt-6 space-y-4">
					<p>{renderPlan(content.plans.enterprise)}</p>
				</div>

				<blockquote>{content.summary}</blockquote>
			</ContentBlock>
		</main>
	);
}