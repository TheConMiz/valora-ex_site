import ContentBlock from '@/components/ContentBlock';

// When you connect a CMS or add articles to data.ts, map over their slugs here
export function generateStaticParams() {
    return [];
}

export default function ArticleTemplatePage({
    params
}: {
    params: { lang: string, 'article-slug': string }
}) {
    return (
        <main>
            <ContentBlock
                title="[Article Title]"
                subtitle="Category: [Published Category] | Publication Date: [Date]"
                graphicRef="MKT-WEB-G18"
                ctas={[
                    { href: `/${params.lang}/insights`, text: 'Explore More Insights', variant: 'secondary' },
                    { href: `/${params.lang}/contact`, text: 'Talk to ValoraEX', variant: 'primary' }
                ]}
            >
                <h3>Introduction</h3>
                <p>A short opening paragraph explaining the issue, observation or practical question covered by the article.</p>

                <h3>Main Content</h3>
                <p>Use clear subheadings and practical paragraphs. Where relevant, articles may include operational observations, circular-economy perspectives, and asset-transition considerations.</p>

                <blockquote>
                    Articles should distinguish clearly between factual information, ValoraEX observations or perspectives, future-development ideas, and third-party information or sources.
                </blockquote>
            </ContentBlock>
        </main>
    );
}