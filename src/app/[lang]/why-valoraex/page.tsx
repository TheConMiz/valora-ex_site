import ContentBlock from '@/components/ContentBlock';

export default async function WhyValoraEXPage({
    params
}: {
    params: Promise<{ lang: string }>
}) {
    // Unwrap the Promise for Next.js 15 compatibility
    const { lang } = await params;

    return (
        <main>
            {/* Intro & The Real Operating Gap */}
            <ContentBlock
                title="Why ValoraEX?"
                subtitle="Practical Circular-Economy Outcomes Need More Than Good Intentions"
            >
                <p>More organisations are looking for practical ways to strengthen ESG performance — from greener logistics and better reuse and recycling practices to stronger information for ESG and sustainability reporting.</p>
                <p>The challenge is often not the lack of a downstream solution.</p>
                <p>The challenge is whether the right information, people, assets and time can come together early enough.</p>

                <h3 className="mt-8">The Real Operating Gap</h3>
                <p>Real projects may face:</p>
                <ul>
                    <li>late asset information;</li>
                    <li>unclear condition;</li>
                    <li>route decisions made too close to exit;</li>
                    <li>insufficient preparation time;</li>
                    <li>unknown downstream requirements;</li>
                    <li>poor handling;</li>
                    <li>fragmented evidence.</li>
                </ul>
                <p>These issues can reduce the number of practical routes available even when potentially useful assets still exist.</p>
            </ContentBlock>

            {/* The Matching Window */}
            <ContentBlock
                title="The Matching Window"
                graphicRef="MKT-WEB-G03"
                reverseLayout
            >
                <p>Circular-economy opportunities become practical only when four factors can align:</p>
                <blockquote>Asset Availability + Recipient / Market Demand + Route Readiness + Execution Time → Matching Window</blockquote>
                <p>A company may have usable furniture becoming available.</p>
                <p>An NGO, school, community organisation or buyer may also have a genuine need.</p>
                <p>But if the asset only becomes visible shortly before the final clearance date, the receiving party may not have enough time to assess suitability, obtain approval, organise storage or coordinate transport.</p>
                <blockquote>Earlier visibility creates more time for better routes to become possible.</blockquote>
            </ContentBlock>

            {/* Better Outcomes Start Upstream */}
            <ContentBlock
                title="Better Outcomes Start Upstream"
                graphicRef="MKT-WEB-G04"
            >
                <p>Whether an asset can ultimately be reused, resold, refurbished or recycled can depend heavily on what happens before it reaches the downstream specialist.</p>
                <p>Poor dismantling, handling, storage, sorting, packaging, loading, transport or information transfer may reduce asset condition or material quality.</p>
                <p>This can result in:</p>
                <ul>
                    <li>damaged usable assets;</li>
                    <li>mixed or contaminated materials;</li>
                    <li>additional sorting;</li>
                    <li>double handling;</li>
                    <li>increased downstream cost;</li>
                    <li>reduced resale or refurbishment potential;</li>
                    <li>weaker recycling feasibility.</li>
                </ul>
                <blockquote>Responsible recovery begins before the recycler, reseller or recipient receives the asset.</blockquote>
            </ContentBlock>

            {/* Better Decisions Need Better Information */}
            <ContentBlock
                title="Better Decisions Need Better Information"
                ctas={[{ href: `/${lang}/what-we-do`, text: 'Discover What We Do', variant: 'primary' }]}
                reverseLayout
            >
                <p>Practical questions include:</p>
                <ul>
                    <li>What assets exist?</li>
                    <li>Where are they?</li>
                    <li>What condition are they in?</li>
                    <li>When must they move?</li>
                    <li>What information is available?</li>
                    <li>Which routes may be feasible?</li>
                    <li>What does the next party need?</li>
                    <li>What evidence may be required?</li>
                </ul>
                <p>ValoraEX brings these considerations into a more structured workflow.</p>
                <blockquote>Asset Visibility → Route Readiness → Route Assignment → Ecosystem Coordination → Evidence → Close-Out → Governance</blockquote>
            </ContentBlock>
        </main>
    );
}