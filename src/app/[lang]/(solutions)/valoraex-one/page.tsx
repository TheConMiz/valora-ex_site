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
		title: dict.nav.v_one, // <-- 3. Change this key for each page
	};
}

export default async function VOnePage({
	params
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);
	const content = dict.valoraex_one;

	// Helper to split the combined string into an H3 heading and a paragraph
	const renderStageAsHeading = (text: string) => {
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
				graphicRef="MKT-WEB-G08"
				ctas={[{ href: `/${lang}/contact`, text: content.cta, variant: 'primary' }]}
			>
				<p>{content.intro}</p>
				<blockquote>{content.flow}</blockquote>

				<div className="mt-12">
					{renderStageAsHeading(content.stages.see)}
					{renderStageAsHeading(content.stages.structure)}
					{renderStageAsHeading(content.stages.route)}
					{renderStageAsHeading(content.stages.coordinate)}
					{renderStageAsHeading(content.stages.evidence)}
					{renderStageAsHeading(content.stages.closeout)}
				</div>

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