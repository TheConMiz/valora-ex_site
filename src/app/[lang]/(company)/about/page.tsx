import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col w-full">
      
      {/* Page Header */}
      <section className="content-section pt-12 md:pt-20 pb-12 border-b border-gray-200">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-[var(--foreground)]">
            Bridging the gap between asset transition and governance.
          </h1>
          <p className="text-xl text-[var(--text-muted)] leading-relaxed">
            ValoraEX was established to coordinate complex physical asset transitions through structured workflow, ensuring operational execution produces reliable, governance-ready evidence.
          </p>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="content-section py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          {/* Current Purpose (Dominant) */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium mb-2">Our Mission</h2>
            <p className="text-[var(--text-muted)]">
              We bring visibility to end-of-use asset cycles. By connecting baseline inventory data with downstream execution, ValoraEX replaces fragmented spreadsheets and undocumented disposals with a transparent, unified workflow.
            </p>
            <p className="text-[var(--text-muted)]">
              Our starting point is Hong Kong, addressing the immediate challenges of high-density commercial real estate cycles, office clearances, and corporate restriping. By structuring these workflows early, we enable organizations to maximize second-life pathways across the local ecosystem.
            </p>
          </div>

          {/* Future Direction (Trimmed) */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium mb-2">Longer-Term Direction</h2>
            <p className="text-[var(--text-muted)]">
              While our immediate capability focuses strictly on commercial Furniture, Fixtures, and Equipment (FF&E), the architecture of ValoraEX is designed for broader ecosystem alignment. As reporting requirements mature globally, our coordination frameworks will continuously adapt to support additional asset classes and increasingly rigorous governance standards.
            </p>
          </div>

        </div>
      </section>

      {/* Leadership / Pending Section */}
      <section className="content-section py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-medium mb-6">Leadership</h2>
          <div className="border border-dashed border-gray-300 bg-white p-8 rounded-sm text-center">
            <p className="text-sm text-[var(--text-muted)] italic">
              Leadership and staff profile generation is pending further instruction and is not required for this revision.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="content-section py-20 text-center">
        <h2 className="text-2xl font-medium mb-6">Explore the Platform</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary w-full sm:w-auto">
            Request a Demonstration
          </Link>
          <Link href="/#neutrality" className="btn-secondary w-full sm:w-auto">
            Ecosystem Overview
          </Link>
        </div>
      </section>

    </div>
  );
}