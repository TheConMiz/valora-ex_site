import ContentBlock from '@/components/ContentBlock';

export default function VGovernancePage() {
    return (
        <main>
            <ContentBlock
                title="ValoraEX Governance"
                subtitle="V-Governance"
                graphicRef="MKT-WEB-G09"
                ctas={[{ href: '/en/contact', text: 'Talk to Us About V-Governance', variant: 'primary' }]}
            >
                <h3>Readiness Beyond a Single Project</h3>
                <p>Asset-transition information should not have to disappear when a project closes.</p>
                <p>V-Governance provides a recurring readiness, evidence-quality and lifecycle-visibility layer.</p>
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
                <p>V-Governance can help maintain more organised source information before internal review, ESG reporting or sustainability-report preparation begins.</p>
                <blockquote>Build readiness throughout the year, rather than reconstructing the story at the end.</blockquote>
            </ContentBlock>

            <ContentBlock
                title="Evidence Readiness & Plans"
                graphicRef="MKT-WEB-G11"
            >
                <p>Evidence can be difficult to reconstruct after activity has been completed. ValoraEX therefore encourages relevant evidence requirements to be considered before and during execution.</p>
                <blockquote>Better reporting starts with better source information and evidence discipline.</blockquote>
                <h3>V-Governance Plans</h3>
                <p><strong>Basic</strong> — For organisations establishing a practical recurring governance and readiness foundation.</p>
                <p><strong>Advanced</strong> — For organisations requiring greater review depth, evidence discipline and lifecycle visibility.</p>
                <p><strong>Premium</strong> — For organisations requiring more comprehensive governance support across broader or more complex requirements.</p>
                <p><strong>Enterprise / Custom Solutions</strong> — For larger organisations or more complex project and governance requirements.</p>
                <blockquote>V-ONE activates the workflow. V-Governance sustains readiness, evidence quality and continuity.</blockquote>
            </ContentBlock>
        </main>
    );
}