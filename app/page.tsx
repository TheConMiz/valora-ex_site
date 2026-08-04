import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="content-section pt-12 md:pt-20 lg:pt-28 border-b border-gray-200">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[var(--foreground)] leading-tight mb-6">
            Make every asset transition more visible, traceable and better prepared.
          </h1>
          <p className="text-xl text-[var(--text-muted)] mb-4">
            Visible assets. Transparent information. Structured evidence.
          </p>
          <p className="text-lg font-medium text-[var(--accent-teal)] mb-10">
            From asset transition to governance-ready evidence.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Demonstration
          </Link>
        </div>

        {/* Connected Flow Graphic (Replacing separate boxes) */}
        <div className="mt-16 md:mt-24 p-6 md:p-10 bg-white border border-gray-200 rounded-lg overflow-x-auto">
          <div className="min-w-[700px] flex items-center justify-between relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -z-10 -translate-y-1/2"></div>
            
            {[
              "Asset Visibility",
              "Readiness",
              "Route Consideration",
              "Execution Evidence",
              "Close-Out"
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 bg-white px-2">
                <div className="w-4 h-4 rounded-full bg-[var(--accent-teal)] outline outline-4 outline-white"></div>
                <span className="text-sm font-medium text-[var(--foreground)] text-center w-24">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PHASE 1 FF&E & USE CASES */}
      <section id="ffe-use-cases" className="content-section">
        <div className="mb-12">
          <h2 className="text-3xl font-medium mb-4">Phase 1 Capability: FF&E</h2>
          <p className="text-[var(--text-muted)] max-w-2xl">
            ValoraEX is currently focused on Furniture, Fixtures, and Equipment (FF&E).
          </p>
        </div>
        
        <div className="content-grid">
          {[
            { title: "Office Clearances", desc: "Structured extraction of large-scale corporate environments." },
            { title: "Relocation & Restriping", desc: "Managing assets transitioning between ongoing operational spaces." },
            { title: "Consolidation", desc: "Combining multiple floors or sites into a smaller footprint." },
            { title: "Asset Refresh", desc: "Rolling updates of task seating, workstations, or IT peripheral bases." }
          ].map((useCase, idx) => (
            <div key={idx} className="flex flex-col border border-gray-200 bg-white p-8 h-full rounded-sm">
              <div className="w-8 h-8 mb-6 text-[var(--accent-teal)]">
                {/* Minimalist abstract icon replacing furniture photos */}
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-lg font-medium label-priority mb-2">{useCase.title}</h3>
              <p className="text-sm text-[var(--text-muted)] mt-auto">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. COMPACT JOURNEY STRIP */}
      <section className="bg-white border-y border-gray-200">
        <div className="content-section py-12 text-center">
          <h2 className="text-2xl font-medium text-[var(--accent-teal)]">
            Start with a project. Build Governance over time.
          </h2>
        </div>
      </section>

      {/* 4. VALORAEX ONE (Continuous Workflow) */}
      <section id="one" className="content-section">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-medium mb-4">ValoraEX ONE</h2>
          <p className="text-[var(--text-muted)]">
            Individual project workflow linking transition readiness to execution evidence.
          </p>
        </div>

        <div className="relative border-l-2 border-[var(--accent-teal)] ml-4 md:ml-0 md:border-l-0 pl-6 md:pl-0">
          <div className="md:flex md:items-start md:gap-4 overflow-x-auto pb-4">
            {[
              { label: "Project Entry", detail: "Scoping and baseline capture." },
              { label: "Responsibilities", detail: "Assigning ecosystem roles." },
              { label: "Activity Status", detail: "Live transition tracking." },
              { label: "Route Execution", detail: "Managing downstream paths." },
              { label: "Evidence", detail: "Capturing supporting docs." },
              { label: "Close-Out", detail: "Finalizing project records." }
            ].map((stage, idx) => (
              <div key={idx} className="relative md:flex-1 md:min-w-[160px] mb-8 md:mb-0">
                {/* Mobile timeline dot */}
                <div className="md:hidden absolute -left-[31px] top-1 w-3 h-3 bg-[var(--background)] border-2 border-[var(--accent-teal)] rounded-full"></div>
                {/* Desktop connecting line (hidden on mobile) */}
                <div className="hidden md:block absolute top-4 left-0 w-full h-[2px] bg-gray-200 -z-10"></div>
                {/* Desktop timeline dot */}
                <div className="hidden md:block w-3 h-3 bg-[var(--accent-teal)] rounded-full mb-4 outline outline-4 outline-[var(--background)]"></div>
                
                <h4 className="font-medium text-sm text-[var(--foreground)] label-priority mb-1">{stage.label}</h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{stage.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VALORAEX GOVERNANCE (Overarching Layer) */}
      <section id="governance" className="content-section bg-gray-50 border-y border-gray-200">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-medium mb-4">ValoraEX Governance</h2>
          <p className="text-[var(--text-muted)]">
            Recurring readiness and cross-project oversight.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Overarching Governance Box */}
          <div className="w-full bg-[var(--accent-teal)] text-white p-6 md:p-8 rounded-sm text-center mb-8 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 text-sm">
              <span className="font-medium">Policy Alignment</span>
              <span className="font-medium">Baseline Controls</span>
              <span className="font-medium">Provider Vetting</span>
              <span className="font-medium">Data Aggregation</span>
              <span className="font-medium col-span-2 md:col-span-1">Periodic Review</span>
            </div>
          </div>

          {/* Connection Lines */}
          <div className="flex gap-16 md:gap-32 mb-8">
            <div className="w-[2px] h-12 bg-[var(--accent-teal)] opacity-30"></div>
            <div className="w-[2px] h-12 bg-[var(--accent-teal)] opacity-30 hidden sm:block"></div>
            <div className="w-[2px] h-12 bg-[var(--accent-teal)] opacity-30"></div>
          </div>

          {/* Underlying ONE Projects */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <div className="flex-1 min-w-[120px] max-w-[200px] bg-white border border-gray-200 p-4 text-center text-xs text-[var(--text-muted)] rounded-sm">Project A</div>
            <div className="flex-1 min-w-[120px] max-w-[200px] bg-white border border-gray-200 p-4 text-center text-xs text-[var(--text-muted)] rounded-sm hidden sm:block">Project B</div>
            <div className="flex-1 min-w-[120px] max-w-[200px] bg-white border border-gray-200 p-4 text-center text-xs text-[var(--text-muted)] rounded-sm">Project C</div>
          </div>
        </div>
      </section>

      {/* 6. PLATFORM NEUTRALITY (Ecosystem) */}
      <section id="neutrality" className="content-section">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium mb-4">Platform Neutrality</h2>
          <p className="text-[var(--text-muted)]">
            Logistics, storage, resale, and recycling providers are independent ecosystem participants, not ValoraEX departments. We coordinate; we do not control.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto p-4 md:p-12">
          {/* Central ValoraEX Node */}
          <div className="relative z-10 w-full md:w-auto mx-auto bg-white border-2 border-[var(--accent-teal)] p-6 text-center rounded-sm shadow-sm md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <h3 className="font-bold text-lg mb-2">ValoraEX</h3>
            <p className="text-xs text-[var(--text-muted)] font-medium">Workflow • Evidence • Governance • Coordination</p>
          </div>

          {/* Surrounding Ecosystem Nodes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 md:mt-0 md:min-h-[400px] md:relative">
            {[
              { label: "Logistics", pos: "md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2" },
              { label: "Storage", pos: "md:absolute md:top-1/4 md:right-0" },
              { label: "Repair / Refurb", pos: "md:absolute md:bottom-1/4 md:right-0" },
              { label: "Recycling", pos: "md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2" },
              { label: "Donation", pos: "md:absolute md:bottom-1/4 md:left-0" },
              { label: "Resale", pos: "md:absolute md:top-1/4 md:left-0" }
            ].map((node, idx) => (
              <div key={idx} className={`${node.pos} bg-gray-50 border border-gray-200 p-3 text-center text-sm text-[var(--text-muted)] rounded-sm`}>
                {node.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MATCHING WINDOW (Timeline) */}
      <section id="matching-window" className="content-section bg-white border-y border-gray-200">
        <div className="mb-12">
          <h2 className="text-3xl font-medium mb-4">The Matching Window</h2>
          <p className="text-[var(--text-muted)] max-w-3xl">
            Time is the critical variable in finding next-use pathways.
          </p>
        </div>

        <div className="flex flex-col gap-8 max-w-4xl">
          {/* Early Visibility */}
          <div>
            <h4 className="text-sm font-bold mb-2">Early Visibility (Months prior to exit)</h4>
            <div className="flex items-center w-full h-8 bg-gray-100 rounded-sm overflow-hidden">
              <div className="h-full bg-[var(--accent-teal)]/20 w-3/4 flex items-center px-4">
                <span className="text-xs text-[var(--accent-teal)] font-medium">Wide window for route matching</span>
              </div>
              <div className="h-full bg-gray-200 w-1/4 border-l border-white"></div>
            </div>
          </div>

          {/* Late Visibility */}
          <div>
            <h4 className="text-sm font-bold mb-2">Late Visibility (Weeks prior to exit)</h4>
            <div className="flex items-center w-full h-8 bg-gray-100 rounded-sm overflow-hidden">
              <div className="h-full bg-gray-200 w-3/4 border-r border-white"></div>
              <div className="h-full bg-[var(--accent-gold)]/30 w-1/4 flex items-center px-4">
                <span className="text-xs text-[var(--foreground)] font-medium">Restricted options</span>
              </div>
            </div>
          </div>
        </div>

        <small className="disclaimer mt-8 max-w-2xl border-l-2 border-gray-300 pl-4">
          Disclaimer: No buyer, recipient, route, value or outcome is guaranteed. Earlier visibility improves coordination but does not automatically produce a second-life outcome.
        </small>
      </section>

      {/* 8. FINANCIAL-YEAR READINESS */}
      <section id="fy-readiness" className="content-section">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium mb-4">Financial-Year Readiness</h2>
          <p className="text-[var(--text-muted)]">
            Continuous preparation over annual reporting cycles.
          </p>
        </div>

        <div className="max-w-4xl mx-auto border border-gray-200 bg-white p-6 md:p-12 rounded-sm overflow-x-auto">
          <div className="min-w-[600px] relative">
            <div className="flex justify-between text-xs font-bold text-[var(--text-muted)] border-b border-gray-200 pb-2 mb-6">
              <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4 (Year-End)</span>
            </div>
            
            {/* Project Activity (Continuous) */}
            <div className="w-full bg-gray-100 p-3 mb-4 rounded-sm flex items-center">
              <span className="text-sm font-medium w-48">Project Activity</span>
              <div className="h-2 bg-[var(--accent-teal)]/40 flex-grow rounded-full mx-4"></div>
            </div>

            {/* Evidence Capture (Continuous) */}
            <div className="w-full bg-gray-100 p-3 mb-4 rounded-sm flex items-center">
              <span className="text-sm font-medium w-48">Evidence Capture</span>
              <div className="h-2 bg-[var(--accent-teal)] flex-grow rounded-full mx-4"></div>
            </div>

            {/* Periodic Governance Review (Point-in-time) */}
            <div className="w-full bg-gray-100 p-3 mb-4 rounded-sm flex items-center relative">
              <span className="text-sm font-medium w-48">Governance Review</span>
              <div className="flex-grow flex justify-around mx-4">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            {/* Year-End Prep */}
            <div className="w-full bg-[var(--accent-teal)]/10 p-3 rounded-sm flex items-center">
              <span className="text-sm font-medium w-48 text-[var(--accent-teal)]">Year-End Prep</span>
              <div className="flex-grow flex justify-end mx-4">
                <div className="h-2 bg-[var(--accent-teal)] w-1/4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. 5R METHODOLOGY (Structured, non-circular) */}
      <section id="5r-framework" className="content-section bg-white border-y border-gray-200">
        <div className="mb-12">
          <h2 className="text-3xl font-medium mb-4">Route Framework (5R)</h2>
          <p className="text-[var(--text-muted)] max-w-2xl">
            Structured outcome categorization dependent on asset condition, market timing, and logistics feasibility.
          </p>
        </div>

        <div className="flex flex-col gap-2 max-w-3xl">
          {[
            { title: "Reuse", desc: "Internal redeployment within the organization." },
            { title: "Resale", desc: "Sale to secondary markets or staff." },
            { title: "Refurbishment or Repurposing", desc: "Repair or modification for extended life." },
            { title: "Recycling", desc: "Material recovery and processing." }
          ].map((route, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center border border-gray-200 p-4 gap-4 bg-gray-50">
              <span className="font-bold text-[var(--accent-teal)] w-48">{route.title}</span>
              <span className="text-sm text-[var(--text-muted)]">{route.desc}</span>
            </div>
          ))}
          {/* Secondary positioning for Responsible Disposal */}
          <div className="flex flex-col sm:flex-row sm:items-center border border-dashed border-gray-300 p-4 gap-4 mt-4 opacity-70">
            <span className="font-medium text-gray-500 w-48">Responsible Disposal</span>
            <span className="text-sm text-gray-500">Compliant end-of-life processing where other routes are not viable.</span>
          </div>
        </div>
      </section>

      {/* 10. DATA & EVIDENCE STACK */}
      <section id="evidence-stack" className="content-section">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium mb-4">Evidence & Documentation</h2>
          <p className="text-[var(--text-muted)]">
            Transparent estimates are more useful than unsupported claims.
          </p>
        </div>

        <div className="flex flex-col max-w-md mx-auto gap-2">
          {[
            "Governance Output",
            "Limitations & Disclaimers",
            "Methods & Assumptions",
            "Route Evidence",
            "Project Records",
            "Source Information (Baseline)"
          ].map((layer, idx) => (
            <div 
              key={idx} 
              className="w-full text-center py-3 px-4 border border-gray-200 text-sm font-medium"
              style={{ backgroundColor: `rgba(15, 118, 110, ${0.1 * (6 - idx)})` }} // Gradual teal fade
            >
              {layer}
            </div>
          ))}
        </div>
      </section>

      {/* 11. ROADMAP (Biased to NOW) */}
      <section id="roadmap" className="content-section bg-gray-50 border-y border-gray-200">
        <div className="mb-12">
          <h2 className="text-3xl font-medium mb-4">Development Roadmap</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* NOW - Visually Dominant */}
          <div className="col-span-1 md:col-span-2 bg-white border-2 border-[var(--accent-teal)] p-8 rounded-sm shadow-sm">
            <h3 className="text-xl font-bold mb-4 label-priority">Now — Phase 1 FF&E</h3>
            <p className="text-sm text-[var(--text-muted)]">
              Full deployment of ValoraEX ONE and Governance for Furniture, Fixtures, and Equipment. Focus on physical asset visibility, structured project workflows, and evidence capture for standard corporate transitions.
            </p>
          </div>

          {/* NEXT & FUTURE - Visually Reduced */}
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-gray-200 p-6 rounded-sm opacity-80">
              <h3 className="text-sm font-bold mb-2 text-gray-700">Next (Conditional)</h3>
              <p className="text-xs text-gray-500">ITAD & Electronics supply-chain capability.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-sm opacity-60">
              <h3 className="text-sm font-bold mb-2 text-gray-600">Future (Conditional)</h3>
              <p className="text-xs text-gray-500">Specialist technical equipment and complex supply chains.</p>
            </div>
          </div>
        </div>
        
        <small className="disclaimer mt-8 max-w-2xl">
          Roadmap disclaimer: Future capabilities are indicative, subject to change, and conditional on technical feasibility and market requirements.
        </small>
      </section>

      {/* 12. FAQ */}
      <section id="faq" className="content-section pb-24">
        <div className="mb-12">
          <h2 className="text-3xl font-medium mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl flex flex-col gap-4">
          {[
            { q: "Is ValoraEX a logistics provider?", a: "No. ValoraEX provides workflow and governance software. Physical movement is handled by independent ecosystem partners." },
            { q: "Do you guarantee a resale buyer or donation recipient?", a: "No. Outcomes depend on asset condition, timing, and independent market demand." },
            { q: "Is ValoraEX an ESG certification body?", a: "No. We provide structured evidence and workflow data that organizations can use to support their own governance and reporting." },
            { q: "What types of assets do you handle?", a: "Currently, our framework is restricted to commercial Furniture, Fixtures, and Equipment (FF&E)." },
            { q: "How is ValoraEX Governance different from ValoraEX ONE?", a: "ONE manages individual project workflows from entry to close-out. Governance provides an overarching layer for cross-project oversight and readiness checks." },
            { q: "Who selects the outcome route?", a: "Routes are identified collaboratively based on condition and timing, but final decisions rely on client policy and market realities." }
          ].map((faq, idx) => (
            <details key={idx} className="group border border-gray-200 bg-white rounded-sm open:bg-gray-50 transition-colors">
              <summary className="cursor-pointer p-5 font-medium text-[var(--foreground)] list-none flex justify-between items-center">
                {faq.q}
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-[var(--text-muted)] border-t border-gray-100 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
        
        <div className="mt-8">
          <Link href="/faq" className="btn-secondary">
            View all FAQs
          </Link>
        </div>
      </section>

    </div>
  );
}