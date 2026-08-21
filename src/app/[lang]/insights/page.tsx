import ContentBlock from '@/components/ContentBlock';

export default async function InsightsPage({
    params
}: {
    params: Promise<{ lang: string }>
}) {
    // Unwrap the Promise for Next.js 15 compatibility
    const { lang } = await params;

    const categories = [
        'Practical ESG', 'Circular Economy', 'Asset Transition',
        '5R & Route Readiness', 'Governance & Evidence',
        'Green Logistics & Execution', 'Shared Value',
        'Technology & Data', 'Ecosystem & Community'
    ];

    return (
        <main>
            {/* Header & Categories */}
            <ContentBlock
                title="ValoraEX Insights"
                subtitle="Ideas, Practical Perspectives and Developments Across Asset Transition, Circular Economy, ESG Governance and the ValoraEX Ecosystem"
            >
                <h3 className="mt-8">Content Categories</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                    {categories.map((category) => (
                        <span
                            key={category}
                            className="px-4 py-2 bg-white text-sm text-[var(--foreground)] border border-gray-200 rounded-sm font-medium shadow-sm"
                        >
                            {category}
                        </span>
                    ))}
                </div>
                <small className="mt-6 block text-[var(--text-muted)] border-l-2 border-gray-300 pl-4">
                    * Note: Categories will automatically filter to display only those containing published content.
                </small>
            </ContentBlock>

            {/* Featured Insight Container */}
            <ContentBlock
                title="Featured Insight"
                graphicRef="MKT-WEB-G17"
                reverseLayout
                ctas={[{ href: `/${lang}/insights`, text: 'Read More', variant: 'primary' }]}
            >
                <div className="border-l-4 border-[var(--accent-teal)] pl-4 py-3 bg-gray-50 rounded-r-sm">
                    <p className="text-[var(--text-muted)] italic mb-0">
                        [Content Framework Ready: Featured article or perspective will populate here upon publication.]
                    </p>
                </div>
            </ContentBlock>

            {/* Latest Insights Container */}
            <ContentBlock
                title="Latest Insights"
                graphicRef="MKT-WEB-G18"
            >
                <div className="border-l-4 border-gray-300 pl-4 py-3 bg-gray-50 rounded-r-sm">
                    <p className="text-[var(--text-muted)] italic mb-0">
                        [Content Framework Ready: Up to three recent published items will populate here.]
                    </p>
                </div>
            </ContentBlock>

            {/* Watch & Explore */}
            <ContentBlock
                title="Watch & Explore"
                graphicRef="MKT-WEB-G19"
                reverseLayout
                ctas={[{ href: 'https://www.youtube.com/@ValoraEX_Ecosystem', text: 'Visit the ValoraEX YouTube Channel', variant: 'primary' }]}
            >
                <p>Videos, practical perspectives and updates from the ValoraEX ecosystem.</p>
            </ContentBlock>
        </main>
    );
}