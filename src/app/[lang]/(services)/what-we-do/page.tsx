import ContentBlock from '@/components/ContentBlock';

export default async function WhatWeDoPage({
    params
}: {
    params: Promise<{ lang: string }>
}) {
    // Unwrap the Promise for Next.js 15 compatibility
    const { lang } = await params;

    return (
        <main>
            {/* Intro & Core Areas */}
            <ContentBlock
                title="What We Do"
                subtitle="Workflow, Governance and Practical Coordination for Asset Transition"
            >
                <p>ValoraEX supports asset transition through three connected areas.</p>

                <h3 className="mt-8">Structured Workflow</h3>
                <p>V-ONE provides the project-entry and workflow layer.</p>

                <h3 className="mt-6">Ongoing Governance</h3>
                <p>V-Governance supports recurring readiness, evidence quality and lifecycle continuity.</p>

                <h3 className="mt-6">Practical Execution & Coordination</h3>
                <p>Project-based support connects on-site activity, project coordination and suitable independent ecosystem capabilities.</p>
            </ContentBlock>

            {/* Visibility & Route Readiness */}
            <ContentBlock
                title="Asset Visibility & Route Readiness"
                graphicRef="MKT-WEB-G07"
                reverseLayout
            >
                <h3>Asset Visibility & Stocktake</h3>
                <p>Support clearer visibility of asset type, location, quantity, condition, photographs and relevant project information.</p>

                <h3 className="mt-8">Route Readiness</h3>
                <p>Consider whether the asset, available information, timing and operating conditions are sufficiently prepared for a potential route.</p>
                <p>Relevant factors may include:</p>
                <ul>
                    <li>condition;</li>
                    <li>photographs;</li>
                    <li>dimensions or attributes;</li>
                    <li>timing;</li>
                    <li>handling requirements;</li>
                    <li>buyer or recipient criteria;</li>
                    <li>transport feasibility;</li>
                    <li>downstream requirements;</li>
                    <li>evidence needs.</li>
                </ul>
            </ContentBlock>

            {/* 5R Route Planning */}
            <ContentBlock
                title="5R Route Planning"
                graphicRef="MKT-WEB-G06"
            >
                <p><strong>Reuse</strong> — Continue useful asset life through appropriate internal or external reuse.</p>
                <p><strong>Resale</strong> — Transition suitable assets through appropriate commercial second-hand channels.</p>
                <p><strong>Refurbishment / Repurposing</strong> — Repair, refresh, adapt or transform suitable assets to extend useful life or create another practical use.</p>
                <p><strong>Recycling</strong> — Recover materials through appropriate recycling pathways where continued asset use is no longer practical.</p>
                <p><strong>Responsible Disposal</strong> — Use an appropriate responsible-disposal route where higher-value pathways are not reasonably feasible.</p>

                <p className="mt-6 italic text-[var(--text-muted)]">Donation may form part of an external <strong>Reuse</strong> route. It is not a sixth R.</p>
            </ContentBlock>

            {/* Execution, Evidence & Governance */}
            <ContentBlock
                title="Execution, Evidence & Governance"
                graphicRef="MKT-WEB-G05"
                reverseLayout
                ctas={[{ href: `/${lang}/contact`, text: 'Talk to Us', variant: 'primary' }]}
            >
                <h3>Execution & Ecosystem Coordination</h3>
                <p>Where specialist activities are required, ValoraEX may coordinate suitable independent ecosystem capabilities according to the agreed project scope.</p>

                <h3 className="mt-8">Evidence & Close-Out</h3>
                <p>Support more structured:</p>
                <ul>
                    <li>asset information;</li>
                    <li>route records;</li>
                    <li>supporting documents;</li>
                    <li>handover information;</li>
                    <li>available evidence;</li>
                    <li>project close-out records.</li>
                </ul>

                <h3 className="mt-8">Governance & Reporting Readiness</h3>
                <p>Support recurring readiness, evidence quality, lifecycle visibility, governance history and Financial-Year Readiness.</p>

                <small className="block mt-8 border-l-2 border-gray-300 pl-4 text-[var(--text-disclaimer)]">
                    ValoraEX supports information and evidence readiness. It does not provide third-party ESG assurance or certify sustainability performance unless such services are separately provided by an appropriately qualified independent party.
                </small>
            </ContentBlock>
        </main>
    );
}