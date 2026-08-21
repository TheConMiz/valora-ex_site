import ContentBlock from '@/components/ContentBlock';

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

    return (
        <main>
            <ContentBlock
                title="[Article Title]"
                subtitle="Category: [Published Category] | Publication Date: [Date]"
                graphicRef="MKT-WEB-G18"
                ctas={[
                    { href: `/${lang}/insights`, text: 'Explore More Insights', variant: 'secondary' },
                    { href: `/${lang}/contact`, text: 'Talk to ValoraEX', variant: 'primary' }
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