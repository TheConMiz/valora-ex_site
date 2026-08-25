import ContentBlock from '@/components/ContentBlock';
import { getDictionary, Locale } from '@/lib/dictionaries';

export default async function VOnePage({
	params
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);
	const content = dict.valoraex_one;

	// Helper to safely preserve the bold formatting for stages
	const renderStage = (text: string) => {
		const parts = text.split(': ');
		if (parts.length === 2) {
			return <><strong className="font-bold">{parts[0]}:</strong> {parts[1]}</>;
		}
		return text;
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
				graphicRef="MKT-WEB-G08"
				ctas={[{ href: `/${lang}/contact`, text: content.cta, variant: 'primary' }]}
			>
				<p>{content.intro}</p>
				<blockquote>{content.flow}</blockquote>

				<ul className="mt-8">
					<li>{renderStage(content.stages.see)}</li>
					<li>{renderStage(content.stages.structure)}</li>
					<li>{renderStage(content.stages.route)}</li>
					<li>{renderStage(content.stages.coordinate)}</li>
					<li>{renderStage(content.stages.evidence)}</li>
					<li>{renderStage(content.stages.closeout)}</li>
				</ul>

				<div className="mt-8 space-y-4">
					<p>{renderPlan(content.plans.foundation)}</p>
					<p>{renderPlan(content.plans.standard)}</p>
					<p>{renderPlan(content.plans.enhanced)}</p>
				</div>

				<small className="block mt-8 border-l-2 border-gray-300 pl-4 text-[var(--text-disclaimer)]">
					{content.disclaimer}
				</small>
			</ContentBlock>
		</main>
	);
}