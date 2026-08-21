import ContentBlock from '@/components/ContentBlock';
import { getDictionary, Locale } from '@/lib/dictionaries';

export default async function WhyValoraEXPage({
	params
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);
	const content = dict.why_valoraex;

	return (
		<main>
			{/* Intro & The Real Operating Gap */}
			<ContentBlock
				title={content.title}
				subtitle={content.subtitle}
			>
				<p>{content.p1}</p>
				<p>{content.p2}</p>
				<p>{content.p3}</p>

				<h3 className="mt-8">{content.operating_gap.title}</h3>
				<p>{content.operating_gap.intro}</p>
				<ul>
					{content.operating_gap.bullets.map((bullet, index) => (
						<li key={index}>{bullet}</li>
					))}
				</ul>
				<p>{content.operating_gap.conclusion}</p>
			</ContentBlock>

			{/* The Matching Window */}
			<ContentBlock
				title={content.matching_window.title}
				graphicRef="MKT-WEB-G03"
				reverseLayout
			>
				<p>{content.matching_window.intro}</p>
				<blockquote>{content.matching_window.formula}</blockquote>
				<p>{content.matching_window.example_p1}</p>
				<p>{content.matching_window.example_p2}</p>
				<p>{content.matching_window.example_p3}</p>
				<blockquote>{content.matching_window.quote}</blockquote>
			</ContentBlock>

			{/* Better Outcomes Start Upstream */}
			<ContentBlock
				title={content.upstream.title}
				graphicRef="MKT-WEB-G04"
			>
				<p>{content.upstream.p1}</p>
				<p>{content.upstream.p2}</p>
				<p>{content.upstream.risk_intro}</p>
				<ul>
					{content.upstream.risks.map((risk, index) => (
						<li key={index}>{risk}</li>
					))}
				</ul>
				<blockquote>{content.upstream.quote}</blockquote>
			</ContentBlock>

			{/* Better Decisions Need Better Information */}
			<ContentBlock
				title={content.better_decisions.title}
				ctas={[{ href: `/${lang}/what-we-do`, text: content.better_decisions.cta, variant: 'primary' }]}
				reverseLayout
			>
				<p>{content.better_decisions.questions_intro}</p>
				<ul>
					{content.better_decisions.questions.map((question, index) => (
						<li key={index}>{question}</li>
					))}
				</ul>
				<p>{content.better_decisions.conclusion}</p>
				<blockquote>{content.better_decisions.flow}</blockquote>
			</ContentBlock>
		</main>
	);
}