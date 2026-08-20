import ContentBlock from '@/components/ContentBlock';
import FaqAccordion from '@/components/FaqAccordion';
import { faqData } from '@/lib/data';

export default function FaqPage({ params }: { params: { lang: string } }) {
    return (
        <main>
            <ContentBlock
                title="Frequently Asked Questions"
                ctas={[{ href: `/${params.lang}/contact`, text: 'Talk to Us', variant: 'primary' }]}
            >
                {/* The accordion automatically renders all 18 FAQs from our data file */}
                <FaqAccordion faqs={faqData} />
            </ContentBlock>
        </main>
    );
}