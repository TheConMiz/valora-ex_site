import ContentBlock from '@/components/ContentBlock';
import { getDictionary, Locale } from '@/lib/dictionaries';

export default async function InsightsPage({
	params
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);
	const content = dict.insights;

	return (
		<main>
			{/* Header & Categories */}
			<ContentBlock
				title={content.title}
				subtitle={content.subtitle}
			>
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
				<small className="mt-6 block text-[var(--text-muted)] border-l-2 border-gray-300 pl-4">
					{content.categories_note}
				</small>
			</ContentBlock>

			{/* Coming Soon Message */}
			<div className="max-w-7xl mx-auto px-8 py-16 text-center">
				<div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
					<h3 className="text-2xl font-medium text-[var(--foreground)] mb-4">{content.coming_soon_title}</h3>
					<p className="text-[var(--text-muted)]">
						{content.coming_soon_desc}
					</p>
				</div>
			</div>
		</main>
	);
}