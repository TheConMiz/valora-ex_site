import ContentBlock from '@/components/ContentBlock';
import { getDictionary, Locale } from '@/lib/dictionaries';

export function generateStaticParams() {
    // Providing a placeholder so the static export builds successfully
    // You can replace this with actual article data later
    return [
        { 'article-slug': 'coming-soon' }
    ];
}

export default async function ArticleTemplatePage({
    params
}: {
    params: Promise<{ lang: string, 'article-slug': string }>
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as Locale); // Fetch the dictionary

    return (
        <main>
            <ContentBlock
                title="[Article Title]"
                subtitle="Category: [Published Category] | Publication Date: [Date]"
                graphicRef="MKT-WEB-G18"
                ctas={[
                    { href: `/${lang}/insights`, text: dict.insights.article.explore_more, variant: 'secondary' },
                    { href: `/${lang}/contact`, text: dict.insights.article.talk_to_us, variant: 'primary' }
                ]}
            ></ContentBlock>
        </main>
    );
}