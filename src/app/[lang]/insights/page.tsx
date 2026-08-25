import { Metadata } from 'next';
import ContentBlock from '@/components/ContentBlock';
import { getDictionary, Locale } from '@/lib/dictionaries';

export async function generateMetadata({
	params
}: {
	params: Promise<{ lang: string }>
}): Promise<Metadata> {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);

	return {
		title: dict.nav.insights,
	};
}

export default async function InsightsPage({
	params
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);
	const content = dict.insights;

	// Extracting the exact localized strings from the Master Content Packs for the Watch & Explore section
	const watchTitle = lang === 'zh-hk' ? '觀看與探索' : lang === 'zh-cn' ? '观看与探索' : 'Watch & Explore';
	const watchDesc = lang === 'zh-hk' ? '透過影片了解 ValoraEX 生態系統的實務觀點、分享及最新動向。' : lang === 'zh-cn' ? '通过视频了解 ValoraEX 生态系统的实务观点、分享及最新动态。' : 'Videos, practical perspectives and updates from the ValoraEX ecosystem.';

	return (
		<main>
			{/* Header, Intro & Categories */}
			<ContentBlock
				title={content.title}
				subtitle={content.subtitle}
				isPageHeader={true}
			>
				<p>{content.intro}</p>

				<h3 className="mt-8">{content.categories_title}</h3>
				<div className="flex flex-wrap gap-2 mt-4">
					{content.categories.map((category, index) => (
						<span
							key={index}
							className="px-4 py-2 bg-white text-sm text-[var(--foreground)] border border-gray-200 rounded-sm font-medium shadow-sm"
						>
							{category}
						</span>
					))}
				</div>
				<small className="mt-6 block text-[var(--text-disclaimer)] border-l-2 border-gray-300 pl-4">
					{content.categories_note}
				</small>
			</ContentBlock>

			{/* Featured & Latest Insights (Empty State) */}
			{/* Retaining the Coming Soon box to satisfy the "No placeholder articles" rule from the master packs */}
			<div className="max-w-7xl mx-auto px-8 py-8 text-center">
				<div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
					<h3 className="text-2xl font-medium text-[var(--foreground)] mb-4">{content.coming_soon_title}</h3>
					<p className="text-[var(--text-muted)]">
						{content.coming_soon_desc}
					</p>
				</div>
			</div>

			{/* Watch & Explore */}
			<ContentBlock
				title={watchTitle}
				graphicRef="MKT-WEB-G19"
				reverseLayout
				ctas={[
					{ href: "https://www.youtube.com/@ValoraEX_Ecosystem", text: content.youtube_cta, variant: 'primary' }
				]}
			>
				<p>{watchDesc}</p>
			</ContentBlock>
		</main>
	);
}