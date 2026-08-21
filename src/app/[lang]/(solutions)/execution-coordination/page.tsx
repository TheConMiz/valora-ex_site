import ContentBlock from '@/components/ContentBlock';

export default async function ExecutionCoordinationPage({
    params
}: {
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params;

    return (
        <main>
            <ContentBlock
                title="Execution & Coordination Services"
                subtitle="From Structured Workflow to Practical Execution"
                graphicRef="MKT-WEB-G21"
                ctas={[
                    { href: `/${lang}/contact`, text: 'Talk to Us About Project Support', variant: 'primary' },
                    { href: `/${lang}/solutions/valoraex-one`, text: 'Explore V-ONE', variant: 'secondary' }
                ]}
            >
                <p>Asset transition does not end with route planning. Projects often require on-site preparation, information capture, stakeholder coordination and specialist execution capabilities before an agreed route can be completed effectively.</p>
                <p>ValoraEX provides project-based support that connects structured workflow with practical execution.</p>
                <p>Depending on the agreed scope, ValoraEX may directly support activities such as asset stocktake, information capture, Route Readiness review, project coordination, evidence management and close-out.</p>
                <p>Where specialist capabilities are required, ValoraEX can coordinate suitable independent ecosystem providers according to project requirements.</p>
                <blockquote>One structured workflow. The right capabilities at the right stage.</blockquote>

                <h3 className="mt-8">On-Site & Project Support</h3>
                <ul>
                    <li><strong>Asset Stocktake & Inventory Capture:</strong> Support identification and structured capture of relevant assets, quantities, locations and project information.</li>
                    <li><strong>Condition & Information Capture:</strong> Capture available condition information, photographs, dimensions, attributes and other relevant asset details.</li>
                    <li><strong>Route Readiness Review:</strong> Review whether assets, available information, timing and operational conditions are sufficiently prepared for potential 5R routes.</li>
                    <li><strong>Project Coordination:</strong> Coordinate relevant project stakeholders, activities, responsibilities, timing and information flows.</li>
                    <li><strong>Evidence & Handover Records:</strong> Support structured evidence capture, handover information and relevant project records throughout execution.</li>
                    <li><strong>Exception & Issue Tracking:</strong> Record and follow up relevant exceptions, changes or issues that may affect the agreed transition workflow.</li>
                    <li><strong>Close-Out Support:</strong> Support structured project close-out and consolidation of available route, activity and evidence records.</li>
                </ul>
            </ContentBlock>

            <ContentBlock title="Ecosystem Coordination" reverseLayout>
                <h3>Specialist Ecosystem Coordination</h3>
                <p>Where relevant to the agreed scope, ValoraEX can help coordinate independent providers for activities such as:</p>
                <ul>
                    <li>dismantling and disassembly;</li>
                    <li>packing and handling;</li>
                    <li>transportation and logistics;</li>
                    <li>temporary storage and warehousing;</li>
                    <li>resale support;</li>
                    <li>refurbishment;</li>
                    <li>repurposing and upcycling;</li>
                    <li>recycling;</li>
                    <li>community or NGO reuse;</li>
                    <li>responsible disposal;</li>
                    <li>other project-specific specialist services.</li>
                </ul>

                <h3 className="mt-8">Platform-Neutral Coordination</h3>
                <p>ValoraEX is not restricted to one designated logistics company, recycler, refurbishment provider or downstream channel.</p>
                <p>Suitable independent providers may be considered according to:</p>
                <ul>
                    <li>project requirements;</li>
                    <li>capability;</li>
                    <li>route suitability;</li>
                    <li>timing;</li>
                    <li>location;</li>
                    <li>operational feasibility;</li>
                    <li>evidence requirements;</li>
                    <li>other relevant project or commercial considerations.</li>
                </ul>

                <blockquote>ValoraEX coordinates the workflow and relevant ecosystem capabilities. Specialist activities are delivered by suitable independent providers according to project requirements.</blockquote>
                <blockquote>Stocktake → Readiness → Route → Partner Coordination → Execution Evidence → Close-Out</blockquote>
            </ContentBlock>
        </main>
    );
}