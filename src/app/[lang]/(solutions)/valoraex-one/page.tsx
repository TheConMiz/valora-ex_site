import ContentBlock from '@/components/ContentBlock';

export default function VOnePage() {
    return (
        <main>
            <ContentBlock
                title="ValoraEX ONE"
                subtitle="V-ONE"
                graphicRef="MKT-WEB-G08"
                ctas={[{ href: '/en/contact', text: 'Talk to Us About V-ONE', variant: 'primary' }]}
            >
                <h3>The Project-Entry & Workflow Layer</h3>
                <p>V-ONE provides a structured starting point for organisations managing a defined asset-transition project.</p>
                <blockquote>See → Structure → Route → Coordinate → Evidence → Close-Out</blockquote>
                <ul>
                    <li><strong>See:</strong> Build clearer visibility of relevant assets and project information.</li>
                    <li><strong>Structure:</strong> Organise asset information, readiness considerations, responsibilities and evidence requirements.</li>
                    <li><strong>Route:</strong> Consider potential 5R pathways based on available information, timing and project requirements.</li>
                    <li><strong>Coordinate:</strong> Support communication, responsibilities and agreed project activity across relevant parties.</li>
                    <li><strong>Evidence:</strong> Capture and organise relevant project records and available evidence throughout execution.</li>
                    <li><strong>Close-Out:</strong> Bring route, activity and supporting records together into a clearer project close-out.</li>
                </ul>
                <h3>V-ONE Plans</h3>
                <p><strong>Foundation</strong> — For focused asset-transition projects requiring a structured starting workflow.</p>
                <p><strong>Standard</strong> — For broader projects requiring greater workflow depth, review and coordination.</p>
                <p><strong>Enhanced</strong> — For larger or more complex projects requiring expanded workflow and support.</p>
                <p><small>V-ONE does not guarantee a particular downstream outcome.</small></p>
            </ContentBlock>
        </main>
    );
}