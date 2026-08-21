import ContentBlock from '@/components/ContentBlock';
import FaqAccordion from '@/components/FaqAccordion';
import { faqData } from '@/lib/data';

export default async function FaqPage({ 
    params 
}: { 
    params: Promise<{ lang: string }> 
}) {
    const { lang } = await params;

    return (
        <main>
            <ContentBlock
                title="Frequently Asked Questions"
                ctas={[{ href: `/${lang}/contact`, text: 'Talk to Us', variant: 'primary' }]}
            >
                <FaqAccordion faqs={faqData} />
            </ContentBlock>
        </main>
    );
}