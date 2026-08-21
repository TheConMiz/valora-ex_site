import ContentBlock from '@/components/ContentBlock';
import { getDictionary, Locale } from '@/lib/dictionaries';

export default async function ExecutionCoordinationPage({
	params
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);
	const content = dict.execution_coordination;

	// Helper to safely preserve the bold formatting for list items
	const renderListItem = (text: string) => {
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
				graphicRef="MKT-WEB-G21"
				ctas={[
					{ href: `/${lang}/contact`, text: content.cta_primary, variant: 'primary' },
					{ href: `/${lang}/solutions/valoraex-one`, text: content.cta_secondary, variant: 'secondary' }
				]}
			>
				<p>{content.p1}</p>
				<p>{content.p2}</p>
				<p>{content.p3}</p>
				<p>{content.p4}</p>
				<blockquote>{content.quote}</blockquote>

				<h3 className="mt-8">{content.onsite_support.title}</h3>
				<ul>
					{content.onsite_support.items.map((item, index) => (
						<li key={index}>{renderListItem(item)}</li>
					))}
				</ul>
			</ContentBlock>

			<ContentBlock title={content.specialist_coordination.title} reverseLayout>
				<p>{content.specialist_coordination.intro}</p>
				<ul>
					{content.specialist_coordination.services.map((service, index) => (
						<li key={index}>{service}</li>
					))}
				</ul>

				<h3 className="mt-8">{content.neutrality.title}</h3>
				<p>{content.neutrality.p1}</p>
				<p>{content.neutrality.factors_intro}</p>
				<ul>
					{content.neutrality.factors.map((factor, index) => (
						<li key={index}>{factor}</li>
					))}
				</ul>

				<blockquote>{content.neutrality.quote}</blockquote>
				<blockquote>{content.neutrality.flow}</blockquote>
			</ContentBlock>
		</main>
	);
}