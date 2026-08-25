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
		title: dict.footer.links.privacy, // <-- 3. Change this key for each page
	};
}

export default async function PrivacyPage({
	params
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);
	const content = dict.privacy;

	return (
		<main>
			<ContentBlock title={content.title} subtitle={content.subtitle} isPageHeader={true}>
				{content.blocks.map((block: any, index: number) => {
					if (block.type === 'heading') {
						return <h3 key={index} className="mt-8">{block.text}</h3>;
					}
					if (block.type === 'paragraph') {
						return <p key={index} dangerouslySetInnerHTML={{ __html: block.text }} />;
					}
					if (block.type === 'list') {
						return (
							<ul key={index}>
								{block.items.map((item: string, i: number) => (
									<li key={i} dangerouslySetInnerHTML={{ __html: item }} />
								))}
							</ul>
						);
					}
					return null;
				})}
			</ContentBlock>
		</main>
	);
}