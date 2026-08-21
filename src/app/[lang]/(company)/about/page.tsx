import ContentBlock from '@/components/ContentBlock';
import LeadershipCarousel from '@/components/LeadershipCarousel';

export default async function AboutPage({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  // Unwrap the Promise for Next.js 15 compatibility
  const { lang } = await params;

  return (
    <main>
      {/* Intro: Who We Are & How it Started */}
      <ContentBlock
        title="About ValoraEX"
        subtitle="Building a Practical Circular-Economy Ecosystem, Starting with Asset Transition"
      >
        <h3 className="mt-8">Who We Are</h3>
        <p>ValoraEX Intelligence Ecosystem Limited is a Hong Kong-based company developing workflow, governance, evidence and ecosystem-coordination capabilities for asset transition.</p>
        <p>We begin with FF&E as our Phase 1 proof category while developing a model designed to support broader asset categories over time.</p>

        <h3 className="mt-8">How ValoraEX Started</h3>
        <p>ValoraEX grew from practical experience with increasing demand for:</p>
        <ul>
          <li>practical ESG solutions;</li>
          <li>greener logistics;</li>
          <li>stronger reuse and recycling practices;</li>
          <li>better information for ESG and sustainability reporting.</li>
        </ul>
        <p>Real projects repeatedly showed that better outcomes depend on more than having a downstream provider.</p>
        <p>Timing, asset visibility, preparation, handling, coordination and evidence can determine whether a potential route is actually achievable.</p>
        <p>A group of professionals therefore came together to develop a more structured, platform-neutral approach linking workflow, technology, ecosystem capability and governance.</p>
      </ContentBlock>

      {/* Mission & Vision */}
      <ContentBlock
        title="Our Mission & Vision"
        reverseLayout
      >
        <h3>Our Mission</h3>
        <blockquote>To build a practical circular-economy ecosystem that connects better information, smarter asset-transition decisions, responsible execution and credible evidence — creating shared commercial, environmental and social value while advancing practical ESG governance.</blockquote>

        <h3 className="mt-8">Our Vision</h3>
        <blockquote>To build a trusted intelligence and governance ecosystem for circular asset transition — connecting organisations, professionals and ecosystem partners to extend value, create practical impact and strengthen the wider ESG community.</blockquote>
      </ContentBlock>

      {/* Name, Logo & Values */}
      <ContentBlock
        title="Our Identity & Values"
        graphicRef="MKT-WEB-G15"
      >
        <h3>Our Name</h3>
        <p>
          <strong>Val</strong> — Value<br />
          <strong>ora</strong> — Aura<br />
          <strong>EX</strong> — Exit · Extension · Ecosystem Exchange
        </p>
        <blockquote>Extending asset value beyond exit through intelligent ecosystem coordination.</blockquote>

        <h3 className="mt-8">Our Logo</h3>
        <p>The ValoraEX logo uses an infinity-inspired form to represent continuity, value extension, route flow and ecosystem connection.</p>

        <h3 className="mt-8">Our Values — PARTS</h3>
        <blockquote>Different parts. Shared direction. Greater value.</blockquote>
        <p><strong>P — Practical Impact:</strong> We focus on solutions that can operate in real business environments and create meaningful practical outcomes.</p>
        <p><strong>A — Awareness & Action:</strong> Better outcomes often begin with earlier visibility, awareness and timely action.</p>
        <p><strong>R — Responsibility:</strong> Responsible outcomes begin upstream through better decisions, preparation, handling and coordination.</p>
        <p><strong>T — Transparency:</strong> We support clearer information, evidence, decisions and accountability throughout the asset-transition process.</p>
        <p><strong>S — Shared Value:</strong> We seek opportunities to create commercial, environmental and social value across the ecosystem.</p>
      </ContentBlock>

      {/* Development Direction */}
      <ContentBlock
        title="Development Direction"
        reverseLayout
      >
        <p><strong>Current:</strong> Furniture, Fixtures & Equipment (FF&E)</p>
        <p><strong>Development Direction:</strong> Selected Electronics & Technology Assets</p>
        <p><strong>Future:</strong> Broader Asset Categories & Connected Lifecycle</p>

        <small className="block mt-6 border-l-2 border-gray-300 pl-4 text-[var(--text-disclaimer)]">
          Future directions do not constitute current service commitments.
        </small>
      </ContentBlock>

      {/* Management Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[var(--foreground)]">Management</h2>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">Meet the team driving our platform, strategy, and ecosystem.</p>
          </div>
          {/* Integrated from Task 12 */}
          <LeadershipCarousel />
        </div>
      </section>
    </main>
  );
}