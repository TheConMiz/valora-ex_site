import ContentBlock from '@/components/ContentBlock';
import Hero from '@/components/Hero';
import LeadershipCarousel from '@/components/LeadershipCarousel';
import PartnerCarousel from '@/components/PartnerCarousel';
import { getDictionary, Locale } from '@/lib/dictionaries';

export function generateStaticParams() {
	return [{ lang: 'en' }, { lang: 'zh-hk' }, { lang: 'zh-cn' }];
}

export default async function HomePage({
	params
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);

	return (
		<main>
			{/* 01 — Hero */}
			<Hero
				title={dict.home.hero.title}
				subtitle={dict.home.hero.subtitle} // <-- Pass the complete positioning line
				imageSrc="/images/MKT-WEB-G01_Hero-Connected Asset Governance Journey.png"
				imageAlt="Connected Asset Governance Journey graphic"
				ctas={[
					{ href: `/${lang}/valoraex-one`, text: dict.home.hero.cta_primary, variant: 'primary' },
					{ href: `/${lang}/contact`, text: dict.home.hero.cta_secondary, variant: 'secondary' }
				]}
			>
				<p>{dict.home.hero.description}</p>
				<p><strong>{dict.home.hero.tagline}</strong></p>
			</Hero>

			{/* 02 — Why ValoraEX */}
			<ContentBlock
				title={dict.home.why_valoraex.title}
				graphicRef="MKT-WEB-G03"
				reverseLayout
				ctas={[{ href: `/${lang}/why-valoraex`, text: dict.home.why_valoraex.cta, variant: 'primary' }]}
			>
				<p>{dict.home.why_valoraex.p1}</p>
				<p>{dict.home.why_valoraex.p2}</p>
				<blockquote>{dict.home.why_valoraex.quote}</blockquote>
			</ContentBlock>

			{/* 03 — How ValoraEX Works */}
			<ContentBlock
				title={dict.home.how_it_works.title}
				graphicRef="MKT-WEB-G05"
				ctas={[{ href: `/${lang}/what-we-do`, text: dict.home.how_it_works.cta, variant: 'primary' }]}
			>
				<p>{dict.home.how_it_works.description}</p>
				<blockquote>{dict.home.how_it_works.workflow}</blockquote>
			</ContentBlock>

			{/* 04 — Three Ways to Work with ValoraEX */}
			<ContentBlock
				title={dict.home.ways_to_work.title}
				reverseLayout
			>
				<h3>{dict.home.ways_to_work.v_one.title}</h3>
				<p><strong>{dict.home.ways_to_work.v_one.subtitle}</strong></p>
				<p>{dict.home.ways_to_work.v_one.description}</p>
				<p><a href={`/${lang}/valoraex-one`} className="text-[var(--accent-teal)] font-medium hover:underline">{dict.home.ways_to_work.v_one.cta} →</a></p>

				<h3 className="mt-8">{dict.home.ways_to_work.v_governance.title}</h3>
				<p><strong>{dict.home.ways_to_work.v_governance.subtitle}</strong></p>
				<p>{dict.home.ways_to_work.v_governance.description}</p>
				<p><a href={`/${lang}/valoraex-governance`} className="text-[var(--accent-teal)] font-medium hover:underline">{dict.home.ways_to_work.v_governance.cta} →</a></p>

				<h3 className="mt-8">{dict.home.ways_to_work.execution.title}</h3>
				<p><strong>{dict.home.ways_to_work.execution.subtitle}</strong></p>
				<p>{dict.home.ways_to_work.execution.description}</p>
				<p><a href={`/${lang}/execution-coordination`} className="text-[var(--accent-teal)] font-medium hover:underline">{dict.home.ways_to_work.execution.cta} →</a></p>
			</ContentBlock>

			{/* 05 — 5R Framework */}
			<ContentBlock
				title={dict.home.framework_5r.title}
				subtitle={dict.home.framework_5r.subtitle}
				graphicRef="MKT-WEB-G06"
				ctas={[{ href: `/${lang}/why-valoraex`, text: dict.home.framework_5r.cta, variant: 'primary' }]}
			>
				<p>{dict.home.framework_5r.p1}</p>
				<p>{dict.home.framework_5r.p2}</p>
			</ContentBlock>

			{/* 06 — Evidence, Governance & Shared Value */}
			<ContentBlock
				title={dict.home.evidence_governance.title}
				graphicRef={['MKT-WEB-G10', 'MKT-WEB-G11']}
				reverseLayout
			>
				<h3>{dict.home.evidence_governance.info_title}</h3>
				<p>{dict.home.evidence_governance.info_desc}</p>
				<h3 className="mt-8">{dict.home.evidence_governance.evidence_title}</h3>
				<p>{dict.home.evidence_governance.evidence_desc}</p>
				<h3 className="mt-8">{dict.home.evidence_governance.continuity_title}</h3>
				<p>{dict.home.evidence_governance.continuity_desc}</p>
				<p className="mt-8">{dict.home.evidence_governance.summary}</p>
			</ContentBlock>

			{/* 07 — Development Direction */}
			<ContentBlock
				title={dict.home.roadmap.title}
				graphicRef="MKT-WEB-G14"
			>
				<p>{dict.home.roadmap.current}</p>
				<p>{dict.home.roadmap.direction}</p>
				<p>{dict.home.roadmap.future}</p>
				<blockquote>{dict.home.roadmap.quote}</blockquote>
				<small>{dict.home.roadmap.disclaimer}</small>
			</ContentBlock>

			{/* 08 — Leadership Wrapper */}
			<section className="py-20 bg-gray-50 border-y border-gray-200">
				<div className="max-w-7xl mx-auto px-8">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4 text-gray-900">{dict.home.leadership_section.title}</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">{dict.home.leadership_section.subtitle}</p>
					</div>
					<LeadershipCarousel ctaText={dict.common.view_profile} />
				</div>
			</section>

			{/* 09 — Ecosystem Appreciation */}
			<section className="py-20 bg-gray-50 border-t border-gray-200">
				<div className="max-w-7xl mx-auto px-8 text-center mb-12">
					<h2 className="text-4xl font-bold mb-4 text-gray-900">{dict.home.appreciation_section.title}</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						{dict.home.appreciation_section.description}
					</p>
				</div>
				<PartnerCarousel />
			</section>

			{/* Final CTA */}
			<ContentBlock
				title={dict.home.final_cta.title}
				ctas={[{ href: `/${lang}/contact`, text: dict.home.final_cta.cta, variant: 'primary' }]}
				reverseLayout
			>
				<p>{dict.home.final_cta.description}</p>
			</ContentBlock>
		</main>
	);
}