import ContentBlock from '@/components/ContentBlock';

export default function ExecutionCoordinationPage() {
    return (
        <main>
            <ContentBlock
                title="Execution & Coordination Services"
                subtitle="From Structured Workflow to Practical Execution"
                graphicRef="MKT-WEB-G21"
                ctas={[
                    { href: '/en/contact', text: 'Talk to Us About Project Support', variant: 'primary' },
                    { href: '/en/solutions/valoraex-one', text: 'Explore V-ONE', variant: 'secondary' }
                ]}
            >
                <p>Asset transition does not end with route planning. Projects often require on-site preparation, information capture, stakeholder coordination and specialist execution capabilities before an agreed route can be completed effectively.</p>
                <p>ValoraEX provides project-based support that connects structured workflow with practical execution.</p>
                <blockquote>One structured workflow. The right capabilities at the right stage.</blockquote>

                <h3>On-Site & Project Support</h3>
                <ul>
                    <li><strong>Asset Stocktake & Inventory Capture:</strong> Support identification and structured capture of relevant assets.</li>
                    <li><strong>Condition & Information Capture:</strong> Capture available condition information, photographs, dimensions, and attributes.</li>
                    <li><strong>Route Readiness Review:</strong> Review whether assets and information are sufficiently prepared for potential 5R routes.</li>
                    <li><strong>Project Coordination:</strong> Coordinate relevant project stakeholders, activities, responsibilities, and timing.</li>
                    <li><strong>Evidence & Handover Records:</strong> Support structured evidence capture and handover information.</li>
                    <li><strong>Exception & Issue Tracking:</strong> Record and follow up relevant exceptions or issues.</li>
                    <li><strong>Close-Out Support:</strong> Support structured project close-out and consolidation of records.</li>
                </ul>

                <h3>Specialist Ecosystem Coordination</h3>
                <p>Where relevant to the agreed scope, ValoraEX can help coordinate independent providers for activities such as dismantling, logistics, warehousing, recycling, refurbishment, and responsible disposal.</p>
                <blockquote>ValoraEX coordinates the workflow and relevant ecosystem capabilities. Specialist activities are delivered by suitable independent providers according to project requirements.</blockquote>
                <blockquote>Stocktake → Readiness → Route → Partner Coordination → Execution Evidence → Close-Out</blockquote>
            </ContentBlock>
        </main>
    );
}