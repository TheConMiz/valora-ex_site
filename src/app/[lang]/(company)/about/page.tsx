import ContentBlock from '@/components/ContentBlock';
import { getManagementData, ManagementProfile } from '@/lib/data';
import { getDictionary, Locale } from '@/lib/dictionaries';
import Link from 'next/link';
import Image from 'next/image';

export default async function AboutPage({
	params
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);
	const content = dict.about;
	const leadershipContent = dict.home.leadership_section;
	const managementProfiles = getManagementData(lang as Locale);

	// Helper to safely preserve the bold formatting for the PARTS values
	const renderValue = (text: string) => {
		const parts = text.split(': ');
		if (parts.length === 2) {
			return <p><strong>{parts[0]}:</strong> {parts[1]}</p>;
		}
		return <p>{text}</p>;
	};

	return (
		<main>
			{/* Intro: Who We Are & How it Started */}
			<ContentBlock
				title={content.title}
				subtitle={content.subtitle}
			>
				<h3 className="mt-8">{content.who_we_are.title}</h3>
				<p>{content.who_we_are.p1}</p>
				<p>{content.who_we_are.p2}</p>

				<h3 className="mt-8">{content.how_started.title}</h3>
				<p>{content.how_started.p1}</p>
				<ul>
					{content.how_started.points.map((point, index) => (
						<li key={index}>{point}</li>
					))}
				</ul>
				<p>{content.how_started.p2}</p>
				<p>{content.how_started.p3}</p>
				<p>{content.how_started.p4}</p>
			</ContentBlock>

			{/* Mission & Vision */}
			<ContentBlock
				title={content.mission_vision.mission_title}
				reverseLayout
			>
				<blockquote>{content.mission_vision.mission_quote}</blockquote>

				<h3 className="mt-8">{content.mission_vision.vision_title}</h3>
				<blockquote>{content.mission_vision.vision_quote}</blockquote>
			</ContentBlock>

			{/* Name, Logo & Values */}
			<ContentBlock
				title={content.identity.title}
				graphicRef="MKT-WEB-G15"
			>
				<h3>{content.identity.name_title}</h3>
				<p>
					<strong>{content.identity.val.split(' — ')[0]}</strong>{content.identity.val.replace('Val —', ' —')}<br />
					<strong>{content.identity.ora.split(' — ')[0]}</strong>{content.identity.ora.replace('ora —', ' —')}<br />
					<strong>{content.identity.ex.split(' — ')[0]}</strong>{content.identity.ex.replace('EX —', ' —')}
				</p>
				<blockquote>{content.identity.name_quote}</blockquote>

				<h3 className="mt-8">{content.identity.logo_title}</h3>
				<p>{content.identity.logo_desc}</p>

				<h3 className="mt-8">{content.identity.values_title}</h3>
				<blockquote>{content.identity.values_quote}</blockquote>
				{renderValue(content.identity.p)}
				{renderValue(content.identity.a)}
				{renderValue(content.identity.r)}
				{renderValue(content.identity.t)}
				{renderValue(content.identity.s)}
			</ContentBlock>

			{/* Development Direction */}
			<ContentBlock
				title={content.roadmap.title}
				reverseLayout
			>
				<p><strong>{content.roadmap.current.split('：')[0] || content.roadmap.current.split(': ')[0]}</strong> {content.roadmap.current}</p>
				<p><strong>{content.roadmap.direction.split('：')[0] || content.roadmap.direction.split(': ')[0]}</strong> {content.roadmap.direction}</p>
				<p><strong>{content.roadmap.future.split('：')[0] || content.roadmap.future.split(': ')[0]}</strong> {content.roadmap.future}</p>

				<small className="block mt-6 border-l-2 border-gray-300 pl-4 text-[var(--text-disclaimer)]">
					{content.roadmap.disclaimer}
				</small>
			</ContentBlock>

			{/* Management Section (Refactored to show exact titles, no summary, and Meet the Team CTA) */}
			<section className="py-20 bg-gray-50 border-t border-gray-200">
				<div className="max-w-7xl mx-auto px-8">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">{leadershipContent.title}</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
						{managementProfiles.map((leader: ManagementProfile) => {
							const firstName = leader.name.split(' ')[0];
							const imageUrl = `/images/MKT-WEB-G16_${firstName}.png`;

							return (
								<div key={leader.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col p-6 items-center text-center">
									<div className="relative w-28 h-28 rounded-full border-4 border-gray-50 overflow-hidden shadow-sm mb-4 bg-gray-100 shrink-0">
										<Image
											src={imageUrl}
											alt={`${leader.name} profile picture`}
											fill
											className="object-cover"
											sizes="112px"
										/>
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
									<p className="text-sm font-semibold text-[var(--accent-teal)] mb-4">{leader.title}</p>
									<Link
										href={`/${lang}/management/${leader.slug}`}
										className="mt-auto py-2 px-4 bg-gray-50 hover:bg-gray-100 text-sm font-semibold text-gray-800 rounded-lg transition-colors border border-gray-200 w-full"
									>
										View Profile
									</Link>
								</div>
							);
						})}
					</div>

					{/* Meet the Team CTA */}
					<div className="text-center">
						<Link
							href={`/${lang}/about`}
							className="btn-primary"
						>
							Meet the Team
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}