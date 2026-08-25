import ContentBlock from '@/components/ContentBlock';
import FaqAccordion from '@/components/FaqAccordion';
import { getFaqData } from '@/lib/data';
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
		title: dict.nav.faq, // <-- 3. Change this key for each page
	};
}

export default async function FaqPage({
	params
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params;

	// Fetch localized dictionary and FAQ data
	const dict = await getDictionary(lang as Locale);
	const localizedFaqs = getFaqData(lang as Locale);

	return (
		<main>
			<ContentBlock
				title={dict.nav.faq}
				isPageHeader={true}
				ctas={[{ href: `/${lang}/contact`, text: dict.common.talk_to_us, variant: 'primary' }]}
			>
				<FaqAccordion faqs={localizedFaqs} />
			</ContentBlock>
		</main>
	);
}