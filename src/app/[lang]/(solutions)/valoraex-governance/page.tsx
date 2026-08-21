import ContentBlock from '@/components/ContentBlock';

export default async function VGovernancePage({
    params
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params;

    return (
        <main>
            <ContentBlock
                title="ValoraEX Governance"
                subtitle="V-Governance: Readiness Beyond a Single Project"
                graphicRef="MKT-WEB-G09"
                ctas={[{ href: `/${lang}/contact`, text: 'Talk to Us About V-Governance', variant: 'primary' }]}
            >
                <p>Asset-transition information should not have to disappear when a project closes.</p>
                <p>V-Governance provides a recurring readiness, evidence-quality and lifecycle-visibility layer.</p>

                <h3 className="mt-8">Core Pillars</h3>
                <ul>
                    <li><strong>Maintain Readiness:</strong> Keep relevant asset information and route considerations better organised and prepared.</li>
                    <li><strong>Strengthen Evidence:</strong> Support more consistent records and evidence discipline over time.</li>
                    <li><strong>Preserve History:</strong> Maintain visibility of original outcomes and subsequent asset transitions.</li>
                </ul>
                <blockquote>Original Outcome → Subsequent Transition → Current Status → Governance History</blockquote>
            </ContentBlock>

            <ContentBlock
                title="Financial-Year Readiness"
                graphicRef="MKT-WEB-G10"
                reverseLayout
            >
                <p>Better ESG and sustainability-report preparation should not have to begin at year-end. Asset-transition information is created throughout the year.</p>

                <p>Relevant records may include:</p>
                <ul>
                    <li>asset information;</li>
                    <li>route decisions;</li>
                    <li>activity records;</li>
                    <li>handover information;</li>
                    <li>available evidence;</li>
                    <li>project outcomes;</li>
                    <li>subsequent transitions.</li>
                </ul>

                <p>V-Governance can help maintain more organised source information before internal review, ESG reporting or sustainability-report preparation begins.</p>
                <blockquote>Build readiness throughout the year, rather than reconstructing the story at the end.</blockquote>
            </ContentBlock>

            <ContentBlock
                title="Evidence Readiness & Plans"
                graphicRef="MKT-WEB-G11"
            >
                <p>Evidence can be difficult to reconstruct after activity has been completed. ValoraEX therefore encourages relevant evidence requirements to be considered before and during execution.</p>
                <blockquote>Better reporting starts with better source information and evidence discipline.</blockquote>

                <h3 className="mt-8">V-Governance Plans</h3>
                <p><strong>Basic</strong> — For organisations establishing a practical recurring governance and readiness foundation.</p>
                <p><strong>Advanced</strong> — For organisations requiring greater review depth, evidence discipline and lifecycle visibility.</p>
                <p><strong>Premium</strong> — For organisations requiring more comprehensive governance support across broader or more complex requirements.</p>

                <h3 className="mt-6">Enterprise / Custom Solutions</h3>
                <p>For larger organisations, multi-site environments or more complex project and governance requirements, ValoraEX can develop a customised scope based on organisational needs.</p>

                <blockquote>V-ONE activates the workflow. V-Governance sustains readiness, evidence quality and continuity.</blockquote>
            </ContentBlock>
        </main>
    );
}