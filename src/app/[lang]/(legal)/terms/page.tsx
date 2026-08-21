import ContentBlock from '@/components/ContentBlock';
import { getDictionary, Locale } from '@/lib/dictionaries';

export default async function TermsPage({
	params
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);
	const content = dict.terms;

	return (
		<main>
			<ContentBlock title={content.title} subtitle={content.subtitle}>
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