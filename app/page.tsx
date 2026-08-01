"use client";

import React, { useState, FormEvent } from 'react';

// ============================================================================
// NOTE ON METADATA: 
// Metadata must be placed in your `app/layout.tsx` file. 
// ============================================================================

export default function ValoraExSite() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    'Home',
    'How It Works',
    'Solutions',
    'Governance & Data',
    'About',
    'FAQ',
    'Contact'
  ];

  // Global SVG Icons
  const MenuIcon = () => (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  const CloseIcon = () => (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-inline">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  const BackButton = () => (
    <button onClick={() => navigateTo('Home')} className="btn-back">
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      Back to Home
    </button>
  );

  // ============================================================================
  // GLOBAL COMPONENTS
  // ============================================================================

  const Header = () => (
    <header className="header-base">
      <div className="container-wide">
        <div className="header-content">
          <div className="header-logo" onClick={() => navigateTo('Home')}>
            <span>ValoraEX</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => navigateTo(link)}
                className={`nav-link ${currentPage === link ? 'nav-link-active' : 'nav-link-inactive'}`}
              >
                {link}
              </button>
            ))}
          </nav>

          <div className="desktop-actions">
            <button onClick={() => navigateTo('Contact')} className="btn-text-nav">
              Talk to Us
            </button>
            <button onClick={() => navigateTo('Contact')} className="btn-dark-small">
              Request a Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-btn">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn-icon"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-links">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => navigateTo(link)}
                className={`mobile-nav-link ${currentPage === link ? 'mobile-nav-active' : 'mobile-nav-inactive'}`}
              >
                {link}
              </button>
            ))}
            <div className="mobile-drawer-actions">
              <button onClick={() => navigateTo('Contact')} className="btn-dark-full">
                Request a Demonstration
              </button>
              <button onClick={() => navigateTo('Contact')} className="btn-outline-full">
                Talk to Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );

  const Footer = () => (
    <footer className="footer-base">
      <div className="container-wide">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">ValoraEX</h3>
            <p className="footer-text">ValoraEX Intelligence Ecosystem Limited</p>
            <p className="footer-text mb-6">延昇智能生態有限公司</p>
          </div>
          <div>
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-text">Email: office@valoraex.com</p>
            <p className="footer-text">
              Flat B, 17/F, Yuen Long Hi Tech Centre,<br />
              11 Wang Yip Street West,<br />
              Yuen Long, Hong Kong
            </p>
          </div>
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              {navLinks.slice(0, 4).map(link => (
                <li key={link}>
                  <button onClick={() => navigateTo(link)} className="footer-link">{link}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">More</h4>
            <ul className="footer-links">
              {navLinks.slice(4).map(link => (
                <li key={link}>
                  <button onClick={() => navigateTo(link)} className="footer-link">{link}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 ValoraEX Intelligence Ecosystem Limited. All rights reserved.
          </p>
          <div className="footer-legal">
            <button onClick={() => navigateTo('Privacy Notice')} className="footer-link">Privacy Notice</button>
            <button onClick={() => navigateTo('Terms of Use')} className="footer-link">Terms of Use</button>
          </div>
        </div>
      </div>
    </footer>
  );

  // Updated FAQ Accordion with smooth transitions
  const FAQAccordion = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="accordion-item">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="accordion-button"
          aria-expanded={isOpen}
        >
          <span className="accordion-question">{question}</span>
          <span className={`accordion-icon ${isOpen ? 'accordion-icon-rotated' : ''}`}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="accordion-answer">
            <p className="text-body">{answer}</p>
          </div>
        </div>
      </div>
    );
  };

  // ============================================================================
  // PAGE VIEWS
  // ============================================================================

  const HomeView = () => (
    <div className="page-wrapper">
      {/* Section 1 - Hero */}
      <section className="section-warm">
        <div className="container-wide">
          <div className="grid-2 items-center">
            <div>
              <span className="text-label">EXTEND VALUE BEYOND EXIT</span>
              <h1 className="heading-1">
                Make every asset transition more visible, traceable and better prepared.
              </h1>
              <p className="text-body-large">
                ValoraEX connects asset visibility, route readiness, execution evidence and transparent project information through a structured 5R workflow.
              </p>
              <div className="button-group">
                <button onClick={() => navigateTo('Contact')} className="btn-dark">
                  Request a Demonstration
                </button>
                <button onClick={() => navigateTo('Contact')} className="btn-outline">
                  Talk to Us
                </button>
              </div>
              <p className="text-proof">Visible assets. Transparent information. Structured evidence.</p>
            </div>
            {/* Custom Workflow Illustration */}
            <div className="hero-illustration">
              <div className="workflow-diagram">
                <div className="workflow-line"></div>
                {['Asset Visibility', 'Readiness', 'Route Consideration', 'Execution Evidence', 'Close-Out'].map((step, idx) => (
                  <div key={idx} className="workflow-diagram-step">
                    <div className="workflow-diagram-node">{idx + 1}</div>
                    <div className="workflow-diagram-card">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Operational problem */}
      <section className="section-light">
        <div className="container-wide">
          <div className="center-content-narrow">
            <h2 className="heading-2">Every transition creates information. Few organisations retain the full picture.</h2>
            <p className="text-body">During relocation, refurbishment, consolidation, tenant exit or premises handback, asset records, contractor files, route decisions and completion evidence may be held separately.</p>
            <p className="text-body">By the time reporting or close-out begins, the operational story may already be fragmented.</p>
          </div>
          
          <div className="grid-4 mb-16">
            {['Asset Records', 'Route Decisions', 'Contractor Activity', 'Completion Evidence'].map((label, idx) => (
              <div key={idx} className="card-warm text-center py-6">
                <span className="text-label-dark">{label}</span>
              </div>
            ))}
          </div>

          <div className="statement-box">
            <p className="statement-text">The challenge is not only moving assets. It is maintaining visibility, readiness and evidence throughout the transition.</p>
          </div>
        </div>
      </section>

      {/* Section 3 - ValoraEX ONE */}
      <section className="section-warm border-top">
        <div className="container-wide">
          <div className="mb-16">
            <span className="text-label">VALORAEX ONE</span>
            <h2 className="heading-2 max-w-2xl">One structured workflow from visibility to close-out.</h2>
            <p className="text-body-large">ValoraEX ONE supports the project-entry and workflow process, helping teams organise asset information, readiness, route consideration, responsibilities, activity records and close-out preparation.</p>
          </div>

          <div className="grid-3 mb-12">
            {[
              { num: '1', title: 'Capture', desc: 'Create structured visibility of relevant assets and project information.' },
              { num: '2', title: 'Assess', desc: 'Review condition, timing, access, requirements and available information.' },
              { num: '3', title: 'Prepare', desc: 'Consider potential routes, responsibilities, evidence needs and dependencies.' },
              { num: '4', title: 'Coordinate', desc: 'Support approved activities across internal teams and suitable ecosystem participants.' },
              { num: '5', title: 'Evidence', desc: 'Maintain activity records, supporting information and project evidence.' },
              { num: '6', title: 'Close Out', desc: 'Prepare a clearer record of actions, assumptions, limitations and outcomes.' }
            ].map((stage) => (
              <div key={stage.num} className="card-light">
                <div className="card-number">{stage.num}. {stage.title}</div>
                <p className="card-desc">{stage.desc}</p>
              </div>
            ))}
          </div>
          
          <button onClick={() => navigateTo('How It Works')} className="btn-text">
            Explore How It Works <ArrowRightIcon />
          </button>
        </div>
      </section>

      {/* Section 4 - ValoraEX Governance */}
      <section className="section-light">
        <div className="container-wide">
          <div className="grid-2">
            <div>
              <span className="text-label">VALORAEX GOVERNANCE</span>
              <h2 className="heading-2">Build readiness before the next transition begins.</h2>
              <p className="text-body">ValoraEX Governance helps organisations maintain asset-transition readiness, evidence quality and cross-project visibility over time.</p>
              <p className="text-body mb-10">It supports earlier preparation of asset information, timing, condition, evidence requirements and internal decisions before exit activity begins.</p>
              <div className="statement-box mb-8">
                <p className="statement-text">Governance is not only about reporting after the event. It supports better preparation before the event.</p>
              </div>
              <button onClick={() => navigateTo('Governance & Data')} className="btn-text">
                Explore Governance & Data <ArrowRightIcon />
              </button>
            </div>
            <div className="list-spaced">
              {[
                { title: 'Readiness', desc: 'Maintain clearer information before projects begin.' },
                { title: 'Evidence Quality', desc: 'Apply more consistent evidence requirements across activities.' },
                { title: 'Cross-Project Visibility', desc: 'Review recurring transition activity across projects and periods.' },
                { title: 'Governance Review', desc: 'Structure assumptions, limitations, responsibilities and follow-up actions.' },
                { title: 'Reporting Preparation', desc: 'Support clearer internal review and future sustainability-reporting preparation.' }
              ].map((item, idx) => (
                <div key={idx} className="list-item-bordered">
                  <h4 className="list-item-title">{item.title}</h4>
                  <p className="list-item-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - ONE and Governance relationship */}
      <section className="section-dark">
        <div className="container-wide">
          <h2 className="heading-2 text-center text-white mb-16">Start with a project. Build Governance over time.</h2>
          <div className="grid-4 mb-16">
            {[
              { phase: 'Start', title: 'ValoraEX ONE', desc: 'Activate a structured project workflow.' },
              { phase: 'Maintain', title: 'Governance', desc: 'Maintain readiness, evidence quality and cross-project visibility.' },
              { phase: 'Connect', title: 'Ecosystem', desc: 'Coordinate suitable capabilities around approved project requirements.' },
              { phase: 'Prepare', title: 'Future Data', desc: 'Build more structured asset-transition information over time.' }
            ].map((stage, idx) => (
              <div key={idx} className="card-dark">
                <span className="card-dark-label">{stage.phase} — {stage.title}</span>
                <p className="card-dark-desc">{stage.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={() => navigateTo('Solutions')} className="btn-light">
              Explore Solutions <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>

      {/* Section 6 - Platform Neutrality */}
      <section className="section-warm">
        <div className="container-wide text-center">
          <h2 className="heading-2 max-w-3xl mx-auto">Coordinate the right capabilities without being tied to one provider.</h2>
          <p className="text-body max-w-4xl mx-auto">ValoraEX is designed as a platform-neutral ecosystem.</p>
          <p className="text-body max-w-4xl mx-auto">Relevant downstream activities may involve existing or new logistics, storage, resale, donation, repair, refurbishment, recycling or specialist providers, depending on project requirements.</p>
          <p className="text-body max-w-4xl mx-auto mb-16">ValoraEX provides the workflow, evidence, Governance and coordination layer. Relevant downstream activities may be delivered by suitable ecosystem participants.</p>
          
          {/* Ecosystem Map Diagram */}
          <div className="ecosystem-map">
            <div className="grid-4 mb-12">
              {['Client Teams', 'Logistics', 'Storage', 'Repair & Refurbishment'].map((label, i) => (
                <div key={i} className="ecosystem-node">{label}</div>
              ))}
            </div>
            
            <div className="ecosystem-center">
              <h3 className="ecosystem-title">ValoraEX</h3>
              <p className="ecosystem-subtitle">Workflow • Evidence • Governance • Coordination</p>
            </div>

            <div className="grid-4 mt-12">
              {['Resale', 'Donation', 'Recycling', 'Specialist Providers'].map((label, i) => (
                <div key={i} className="ecosystem-node">{label}</div>
              ))}
            </div>
          </div>

          <button onClick={() => navigateTo('Solutions')} className="btn-text">
            Explore Ecosystem Collaboration <ArrowRightIcon />
          </button>
        </div>
      </section>

      {/* Section 7 - Matching window */}
      <section className="section-light border-top">
        <div className="container-wide">
          <div className="grid-2 items-center">
            <div>
              <h2 className="heading-2">The matching window begins before the assets leave.</h2>
              <p className="text-body">Suitable routes may require time, information, access, logistics, market interest, recipient requirements and coordination.</p>
              <p className="text-body">Earlier visibility may create more time to consider potential second-life and recovery pathways.</p>
              <p className="disclaimer-text">No buyer, recipient, route, value or outcome is guaranteed.</p>
              <button onClick={() => navigateTo('How It Works')} className="btn-dark">
                Explore Better Route Readiness
              </button>
            </div>
            <div className="list-spaced">
              <div className="card-warm border-standard">
                <h4 className="card-title-bordered">Late Visibility</h4>
                <ul className="bullet-list">
                  <li><span className="text-red">×</span> Limited preparation time</li>
                  <li><span className="text-red">×</span> Fewer practical route options</li>
                  <li><span className="text-red">×</span> More pressure near the exit date</li>
                </ul>
              </div>
              <div className="card-highlight">
                <h4 className="card-title-bordered">Earlier Visibility</h4>
                <ul className="bullet-list font-medium text-gray-900">
                  <li><span className="text-green">✓</span> More time to organise information</li>
                  <li><span className="text-green">✓</span> More time to assess potential routes</li>
                  <li><span className="text-green">✓</span> More time for matching and coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 - Financial-year */}
      <section className="section-gray">
        <div className="container-wide text-center">
          <h2 className="heading-2 max-w-3xl mx-auto">Prepare throughout the year—not only when reporting begins.</h2>
          <p className="text-body max-w-4xl mx-auto">Asset-transition activities may occur throughout the financial year, while Governance and sustainability review may take place later.</p>
          <p className="text-body max-w-4xl mx-auto mb-12">ValoraEX Governance helps structure project activity, evidence, assumptions and limitations as work progresses. This may support clearer internal review and later reporting preparation.</p>
          
          <div className="timeline-container">
            <div className="timeline-wrapper">
              <div className="timeline-line"></div>
              {['Project Activity', 'Evidence Capture', 'Periodic Governance Review', 'Year-End Preparation'].map((label, i) => (
                <div key={i} className="timeline-node">
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="statement-box-dark mx-auto max-w-3xl mb-10">
            <p className="statement-text-dark">Maintain the operational story as work happens, rather than reconstructing it later.</p>
          </div>
          <button onClick={() => navigateTo('Contact')} className="btn-text">
            Discuss Governance Readiness <ArrowRightIcon />
          </button>
        </div>
      </section>

      {/* Section 9 - Phase 1 FF&E */}
      <section className="section-light">
        <div className="container-wide">
          <div className="mb-16">
            <span className="text-label">PHASE 1</span>
            <h2 className="heading-2 max-w-3xl">Furniture, Fixtures & Equipment</h2>
            <p className="text-body-large">ValoraEX begins with FF&E asset transition across relocation, refurbishment, consolidation, tenant exit, premises handback and other defined workplace-transition projects.</p>
          </div>
          <div className="grid-3 mb-12">
            {[
              { title: 'Workplace Relocation', copy: 'Create earlier visibility of FF&E assets, route options, responsibilities and evidence requirements before the move begins.' },
              { title: 'Refurbishment', copy: 'Maintain a clearer record of retained, relocated, released or transitioned assets and the decisions connected to them.' },
              { title: 'Consolidation', copy: 'Support asset review and transition planning when teams, locations or facilities are consolidated.' },
              { title: 'Tenant Exit and Premises Handback', copy: 'Support asset inventory, readiness review, project coordination and close-out evidence before handback.' },
              { title: 'Defined Sustainability Initiatives', copy: 'Translate an asset-transition or circular-economy objective into defined activity, evidence and Governance-ready information.' }
            ].map((useCase, idx) => (
              <div key={idx} className="card-warm border-standard">
                <h4 className="card-title">{useCase.title}</h4>
                <p className="card-desc">{useCase.copy}</p>
              </div>
            ))}
          </div>
          <button onClick={() => navigateTo('Contact')} className="btn-dark">
            Discuss an FF&E Project
          </button>
        </div>
      </section>

      {/* Section 10 - 5R Methodology */}
      <section className="section-warm border-top">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <span className="text-label">THE VALORAEX 5R METHODOLOGY</span>
            <h2 className="heading-2">Consider the most appropriate pathway based on the asset and the project.</h2>
            <p className="text-body">The ValoraEX 5R methodology provides a structured framework for considering potential asset-transition pathways.</p>
            <p className="text-body">The appropriate route depends on available information, asset condition, timing, market or recipient requirements, operational feasibility and project priorities.</p>
          </div>

          <div className="grid-5 mb-12">
            {[
              { label: 'Reuse', desc: 'Continue using the asset within the same organisation, group or operating environment where practical.' },
              { label: 'Resale', desc: 'Consider potential commercial second-life routes where suitable demand and practical conditions exist.' },
              { label: 'Refurbishment or Repurposing', desc: 'Explore whether repair, refurbishment, adaptation or alternative use may extend the asset’s useful life.' },
              { label: 'Recycling', desc: 'Consider material-recovery routes where continued use or second-life options are not practical.' },
              { label: 'Responsible Disposal', desc: 'Use an appropriate controlled disposal route where higher-value options are not practical or available.' }
            ].map((item, idx) => (
              <div key={idx} className="card-light h-full">
                <h4 className="card-title-bordered">{item.label}</h4>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="disclaimer-box max-w-4xl">
            <p className="disclaimer-text-inline">The 5R methodology supports route consideration and preparation. It does not guarantee the availability or success of any particular route.</p>
          </div>
        </div>
      </section>

      {/* Section 11 - Now / Next / Future */}
      <section className="section-light">
        <div className="container-wide">
          <h2 className="heading-2 mb-12">Now. Next. Future.</h2>
          <div className="grid-3 mb-8">
            <div className="roadmap-column roadmap-now">
              <span className="roadmap-label">NOW</span>
              <h4 className="roadmap-title">Furniture, Fixtures & Equipment</h4>
              <p className="roadmap-desc">Current Phase 1 focus: FF&E workflow, evidence, Governance and ecosystem coordination.</p>
            </div>
            <div className="roadmap-column roadmap-next">
              <span className="roadmap-label">NEXT</span>
              <h4 className="roadmap-title">Selected Electronic and Technology Assets</h4>
              <p className="roadmap-desc">A planned future category, subject to asset identity, condition, data security, handling, compliance, chain-of-custody and downstream requirements.</p>
            </div>
            <div className="roadmap-column roadmap-future">
              <span className="roadmap-label">FUTURE</span>
              <h4 className="roadmap-title">Connected Lifecycle and Digital Supply-Chain Readiness</h4>
              <p className="roadmap-desc">ValoraEX aims to support more structured asset identity and lifecycle information as international data and product-information requirements evolve.</p>
            </div>
          </div>
          <p className="disclaimer-text-inline">Roadmap content describes intended future direction only.</p>
        </div>
      </section>

      {/* Section 12 - Data and evidence trust */}
      <section className="section-warm border-top">
        <div className="container-wide">
          <div className="grid-2">
            <div>
              <h2 className="heading-2">Know where the numbers come from.</h2>
              <p className="text-body-large">ValoraEX helps structure project information with its sources, methods, assumptions and limitations.</p>
              <div className="statement-box-dark mb-8">
                <p className="statement-text-dark">Transparent estimates are more useful than unsupported claims.</p>
              </div>
              <p className="disclaimer-text mb-8">Data quality depends on the information available from clients, suppliers, ecosystem participants and other sources.</p>
              <button onClick={() => navigateTo('Governance & Data')} className="btn-text">
                Explore Governance & Data <ArrowRightIcon />
              </button>
            </div>
            <div className="grid-2-inner">
              {[
                { title: 'Source Information', desc: 'Information supplied by clients, providers and other relevant sources.' },
                { title: 'Project Records', desc: 'Asset, activity, timing, responsibility and project-status information.' },
                { title: 'Route Evidence', desc: 'Available evidence connected to approved activities and routes.' },
                { title: 'Methods and Assumptions', desc: 'The basis used for calculations, classifications and estimates.' },
                { title: 'Limitations', desc: 'Known information gaps, dependencies and data-quality constraints.' },
                { title: 'Governance Output', desc: 'Structured information prepared for internal review and future reporting preparation.' }
              ].map((item, idx) => (
                <div key={idx} className="card-light">
                  <h4 className="card-title text-sm">{item.title}</h4>
                  <p className="card-desc text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 14 - Homepage FAQ preview */}
      <section className="section-light">
        <div className="container-narrow">
          <h2 className="heading-2 text-center mb-10">Frequently Asked Questions</h2>
          <div className="accordion-container">
            <FAQAccordion question="What is ValoraEX?" answer="ValoraEX is a workflow, Governance and ecosystem-coordination platform that helps organisations manage asset transition with clearer visibility, route readiness, execution evidence and close-out preparation." />
            <FAQAccordion question="Is ValoraEX a logistics or waste company?" answer="No. ValoraEX provides the workflow, evidence, Governance and coordination layer. Relevant logistics, storage, repair, resale, donation, recycling or other activities may be delivered by suitable ecosystem participants." />
            <FAQAccordion question="What is ValoraEX ONE?" answer="ValoraEX ONE is the project-entry and workflow layer used to organise asset information, readiness, route consideration, responsibilities, activity records and close-out preparation." />
            <FAQAccordion question="What is ValoraEX Governance?" answer="ValoraEX Governance supports recurring readiness, evidence quality, cross-project visibility, internal review and later reporting preparation." />
            <FAQAccordion question="Can ValoraEX work with our existing providers?" answer="Yes. ValoraEX is designed to remain platform-neutral and may support projects involving existing or new providers, depending on client requirements and project needs." />
            <FAQAccordion question="Does ValoraEX guarantee route outcomes?" answer="No. ValoraEX supports better information, preparation, coordination and evidence. Buyers, recipients, routes, values and other outcomes depend on project-specific conditions and cannot be guaranteed." />
          </div>
          <div className="text-center">
            <button onClick={() => navigateTo('FAQ')} className="btn-text">
              View All Questions <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>

      {/* Section 13 - Final CTA */}
      <section className="section-dark text-center">
        <div className="container-narrow">
          <h2 className="heading-1 text-white mb-6">Start with the transition you need to manage.</h2>
          <p className="text-body-large text-stone-300 mb-10">Discuss your FF&E project, Governance needs or ecosystem capability with ValoraEX.</p>
          <div className="button-group justify-center">
            <button onClick={() => navigateTo('Contact')} className="btn-light">
              Request a Demonstration
            </button>
            <button onClick={() => navigateTo('Contact')} className="btn-outline-light">
              Talk to Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const HowItWorksView = () => (
    <div className="page-wrapper pt-8">
      <div className="container-wide mb-8"><BackButton /></div>
      <div className="container-narrow pb-24">
        <div className="text-center mb-20">
          <span className="text-label">HOW IT WORKS</span>
          <h1 className="heading-1 mb-6">A structured workflow from asset visibility to close-out preparation.</h1>
          <p className="text-body-large">ValoraEX helps organisations organise the information, decisions, responsibilities, activities and evidence connected to an asset-transition project.</p>
        </div>
        
        <div className="workflow-container group">
          {[
            { step: '1. Define the transition', copy: 'Establish the project scope, timing, locations, responsibilities, asset categories and key requirements.' },
            { step: '2. Organise asset information', copy: 'Create a structured view of the relevant assets, including available identity, location, quantity, condition and supporting information.' },
            { step: '3. Assess route readiness', copy: 'Review timing, condition, access, operational constraints, evidence needs and other factors that may affect potential routes.' },
            { step: '4. Consider potential pathways', copy: 'Use the ValoraEX 5R methodology to support structured consideration of potential reuse, resale, refurbishment or repurposing, recycling and responsible-disposal pathways.' },
            { step: '5. Coordinate execution', copy: 'Support approved activities across internal teams and suitable ecosystem participants, while maintaining project responsibilities and status information.' },
            { step: '6. Capture activity evidence', copy: 'Maintain available records connected to activities, providers, routes, quantities, dates and project completion.' },
            { step: '7. Prepare the project record', copy: 'Structure project information, evidence, assumptions, limitations and outstanding items for internal review and close-out preparation.' }
          ].map((item, idx) => (
            <div key={idx} className="workflow-step-wrapper group">
              <div className="workflow-node">
                {idx + 1}
              </div>
              <div className="workflow-card text-left">
                <h3 className="card-title">{item.step}</h3>
                <p className="card-desc">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="disclaimer-box mt-20">
          <p className="disclaimer-text-inline">
            ValoraEX supports workflow, preparation, coordination and evidence structure. It does not guarantee any specific route, buyer, recipient, value, environmental result or downstream outcome.
          </p>
        </div>
      </div>
    </div>
  );

  const SolutionsView = () => (
    <div className="page-wrapper pt-8">
      <div className="container-wide mb-8"><BackButton /></div>
      
      <section className="section-warm border-bottom text-center">
        <div className="container-narrow">
          <span className="text-label">SOLUTIONS</span>
          <h1 className="heading-1 mb-6">Start with the project. Build stronger Governance over time.</h1>
          <p className="text-body-large">ValoraEX provides a connected workflow and Governance structure for organisations managing asset transition.</p>
        </div>
      </section>

      <section className="section-light">
        <div className="container-wide">
          <div className="grid-3 mb-20">
            {/* Solution 1 */}
            <div className="card-warm flex flex-col border-standard h-full p-8">
              <h2 className="heading-3 mb-2">ValoraEX ONE</h2>
              <h3 className="card-subtitle-bordered">The project-entry and workflow layer.</h3>
              <p className="card-body flex-grow">ValoraEX ONE helps teams organise asset information, readiness, route consideration, responsibilities, activity records and close-out preparation within a defined asset-transition project.</p>
              <div className="card-inner-box">
                <span className="card-inner-title">Suitable for</span>
                <ul className="card-inner-list">
                  <li>• Workplace relocation</li>
                  <li>• Refurbishment</li>
                  <li>• Consolidation</li>
                  <li>• Tenant exit</li>
                  <li>• Premises handback</li>
                  <li>• Defined FF&E transition projects</li>
                </ul>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="card-warm flex flex-col border-standard h-full p-8">
              <h2 className="heading-3 mb-2">ValoraEX Governance</h2>
              <h3 className="card-subtitle-bordered">The recurring readiness, evidence-quality and oversight layer.</h3>
              <p className="card-body flex-grow">ValoraEX Governance helps organisations maintain clearer readiness, evidence requirements, cross-project visibility, review controls and reporting-preparation information over time.</p>
              <div className="card-inner-box">
                <span className="card-inner-title">Suitable for</span>
                <ul className="card-inner-list">
                  <li>• Recurring asset-transition activity</li>
                  <li>• Portfolio or multi-site oversight</li>
                  <li>• Internal Governance review</li>
                  <li>• Evidence-quality improvement</li>
                  <li>• Future sustainability-reporting preparation</li>
                </ul>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="card-warm flex flex-col border-standard h-full p-8">
              <h2 className="heading-3 mb-2">Ecosystem Coordination</h2>
              <h3 className="card-subtitle-bordered">Connect suitable capabilities around approved project needs.</h3>
              <p className="card-body flex-grow">ValoraEX may support coordination across internal teams and suitable external providers, while preserving client choice and Platform Neutrality.</p>
            </div>
          </div>

          <div className="statement-box-dark max-w-4xl mx-auto text-center">
            <p className="statement-text-white mb-4">ONE supports the individual project workflow.</p>
            <p className="statement-text-gray mb-4">Governance supports recurring readiness, quality and visibility across projects.</p>
            <p className="statement-text-darker">Ecosystem coordination supports the approved execution activities around them.</p>
          </div>
        </div>
      </section>
    </div>
  );

  const GovernanceView = () => (
    <div className="page-wrapper pt-8">
      <div className="container-wide mb-8"><BackButton /></div>
      
      <section className="section-warm border-bottom text-center">
        <div className="container-narrow">
          <span className="text-label">GOVERNANCE & DATA</span>
          <h1 className="heading-1 mb-6">Better evidence begins with better preparation.</h1>
          <p className="text-body-large">ValoraEX Governance helps organisations prepare, structure and review asset-transition information throughout the year—not only when reporting begins.</p>
        </div>
      </section>

      <section className="section-light">
        <div className="container-wide">
          <div className="grid-2 mb-20">
            <div>
              <h2 className="heading-3 mb-6">What Governance supports</h2>
              <ul className="grid-2-inner gap-4">
                {[
                  'Asset-transition readiness', 'Evidence requirements', 'Roles and responsibilities', 
                  'Cross-project visibility', 'Data-source awareness', 'Methods and assumptions', 
                  'Limitations and dependencies', 'Internal review', 'Future reporting preparation'
                ].map((item, idx) => (
                  <li key={idx} className="list-item-pill">
                    <span className="list-item-dot"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="card-gray border-standard p-8">
              <h2 className="heading-3 mb-6 border-bottom pb-4">What Governance is not</h2>
              <p className="card-body mb-4">ValoraEX Governance is not an audit, certification or third-party assurance service.</p>
              <p className="card-body">It does not independently certify ESG performance, carbon outcomes, diversion, resale, donation or other project results.</p>
            </div>
          </div>

          <div className="grid-2 border-top pt-20">
            <div>
              <h2 className="heading-2 mb-6">Understand the source of every important figure.</h2>
              <p className="text-body-large mb-4">Project information may come from clients, asset records, suppliers, logistics providers, recipients, downstream providers, reference sources and other relevant parties.</p>
              <p className="text-body-large">ValoraEX helps maintain clearer source attribution and data-quality awareness.</p>
            </div>
            <div className="card-highlight-dark p-8">
              <h2 className="heading-3 mb-6">Make assumptions and limitations visible.</h2>
              <p className="card-body mb-4">Where complete primary information is not available, estimates or reference data may be used.</p>
              <p className="statement-box-small">The relevant method, assumption and limitation should be clearly identified.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutView = () => (
    <div className="page-wrapper pt-8">
      <div className="container-wide mb-8"><BackButton /></div>

      <section className="section-dark text-center">
        <div className="container-narrow">
          <span className="text-label text-stone-400">ABOUT VALORAEX</span>
          <h1 className="heading-1 text-white mb-6">Turning asset-transition ambition into practical, better-governed action.</h1>
        </div>
      </section>

      <section className="section-light">
        <div className="container-narrow space-y-16">
          
          <div>
            <p className="text-body-large mb-6">
              ValoraEX is developing a 5R intelligence ecosystem that helps organisations manage asset transition with greater visibility, better route readiness, stronger evidence and more structured Governance.
            </p>
            <p className="text-body-large">
              Beginning with Furniture, Fixtures & Equipment, ValoraEX connects asset records, workflow, route planning, project coordination, evidence capture and Governance-ready information.
            </p>
          </div>

          <div className="card-warm border-standard p-8 md:p-12">
            <h3 className="card-title-bordered text-xl mb-6 pb-4">Why this matters</h3>
            <p className="card-body mb-6">
              Useful assets may leave offices, schools, institutions and commercial properties without enough time, information or coordination to support an appropriate next use.
            </p>
            <p className="card-body mb-8">
              By the time an asset reaches its exit point, the practical matching window may already be limited.
            </p>
            <p className="statement-box-small text-xl border-l-4">
              ValoraEX was created around a simple belief: value should not end when an asset leaves its original place.
            </p>
          </div>

          <div className="grid-2 border-top pt-16">
            <div>
              <h3 className="text-label text-gray-400 mb-4">Mission</h3>
              <p className="text-body-large font-medium text-gray-900">
                Our mission is to help organisations make asset transition more visible, better prepared and more accountable through structured workflow, evidence and ecosystem coordination.
              </p>
            </div>
            <div>
              <h3 className="text-label text-gray-400 mb-4">Vision</h3>
              <p className="text-body-large font-medium text-gray-900">
                Our vision is to support a more connected asset lifecycle in which organisations can make better-informed transition decisions, prepare potential second-life pathways earlier and build stronger Governance information over time.
              </p>
            </div>
          </div>

          <div className="border-top pt-16 space-y-12">
            <div>
              <h3 className="heading-3 mb-4">Hong Kong starting point</h3>
              <p className="text-body mb-4">Starting from Hong Kong, ValoraEX aims to connect practical operational action, technology and ecosystem capability.</p>
              <p className="text-body">Hong Kong’s role as a connector between organisations, markets, service providers and regional opportunities provides a strong environment for developing more structured asset-transition practices.</p>
            </div>
            <div className="card-gray p-8">
              <h3 className="heading-4 mb-3">Longer-term direction</h3>
              <p className="card-desc">ValoraEX begins with FF&E and aims to develop toward selected additional asset categories and more connected lifecycle and digital supply-chain readiness in the future.</p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );

  const FAQView = () => {
    const faqs = [
      { q: '1. What is ValoraEX?', a: 'ValoraEX is a workflow, Governance and ecosystem-coordination platform that helps organisations manage asset transition through clearer asset visibility, route readiness, execution evidence and close-out preparation.' },
      { q: '2. What does ValoraEX currently focus on?', a: 'Phase 1 focuses on Furniture, Fixtures & Equipment across workplace relocation, refurbishment, consolidation, tenant exit, premises handback and other defined transition projects.' },
      { q: '3. What is ValoraEX ONE?', a: 'ValoraEX ONE is the project-entry and workflow layer. It helps organise asset information, readiness, route consideration, responsibilities, activity records, evidence and close-out preparation.' },
      { q: '4. What is ValoraEX Governance?', a: 'ValoraEX Governance is the recurring readiness, evidence-quality and oversight layer. It supports clearer cross-project visibility, internal review and future reporting preparation.' },
      { q: '5. What does 5R mean?', a: 'The ValoraEX 5R methodology supports consideration of potential Reuse, Resale, Refurbishment or Repurposing, Recycling and Responsible Disposal pathways.' },
      { q: '6. Is ValoraEX a logistics provider?', a: 'No. ValoraEX provides the workflow, Governance, evidence and coordination layer. Logistics may be delivered by suitable ecosystem participants according to project requirements.' },
      { q: '7. Is ValoraEX a waste-management or disposal company?', a: 'No. ValoraEX focuses on upstream asset visibility, route readiness, coordination, evidence and Governance. Waste, recycling or disposal providers may form part of a project where appropriate, but they do not define the ValoraEX platform.' },
      { q: '8. Is ValoraEX a marketplace?', a: 'No. ValoraEX is not a public resale or donation marketplace. Potential routes may involve suitable buyers, recipients or providers, but route availability is project-specific.' },
      { q: '9. Can we use our existing providers?', a: 'Yes. ValoraEX is designed to remain platform-neutral and may support projects involving existing or new providers.' },
      { q: '10. Does ValoraEX guarantee a second life for every asset?', a: 'No. The availability of reuse, resale, refurbishment, donation, recycling or other pathways depends on asset condition, timing, demand, recipient requirements, logistics, project information and other factors.' },
      { q: '11. Does ValoraEX guarantee financial recovery?', a: 'No. ValoraEX may support better preparation and route consideration, but no buyer, price, value or commercial recovery is guaranteed.' },
      { q: '12. Does ValoraEX provide ESG certification?', a: 'No. ValoraEX does not provide ESG certification, audit or third-party assurance. It helps structure available project information, evidence, methods, assumptions and limitations.' },
      { q: '13. Can ValoraEX support sustainability reporting?', a: 'ValoraEX may support the preparation of clearer project and Governance information for internal review and later reporting preparation. Final reporting decisions and assurance remain the responsibility of the relevant organisation and professional advisers.' },
      { q: '14. What information is required to begin?', a: 'The starting information may include project scope, timing, locations, asset categories, available asset records, responsibilities, operational constraints and evidence requirements.' },
      { q: '15. What asset categories will ValoraEX support in future?', a: 'ValoraEX currently focuses on FF&E. Selected electronic and technology assets are part of the planned next stage, subject to future development and applicable operational, data-security, chain-of-custody and compliance requirements.' }
    ];

    return (
      <div className="page-wrapper pt-8">
        <div className="container-wide mb-8"><BackButton /></div>
        <div className="container-narrow pb-20">
          <h1 className="heading-1 text-center mb-12">Frequently Asked Questions</h1>
          <div className="accordion-container border-top">
            {faqs.map((faq, index) => (
              <FAQAccordion key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ContactView = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      setFormStatus('submitting');
      setTimeout(() => {
        setFormStatus('success');
      }, 1500);
    };

    return (
      <div className="page-wrapper section-warm pt-8 min-h-[80vh]">
        <div className="container-wide mb-8"><BackButton /></div>
        <div className="container-wide pb-20">
          <div className="grid-2">
            
            <div>
              <h1 className="heading-1 mb-6">Talk to ValoraEX</h1>
              <p className="text-body-large mb-12">Tell us about the asset transition, Governance requirement or ecosystem capability you would like to discuss.</p>
              
              <div className="card-light border-standard p-8">
                <h3 className="text-label-dark mb-4">Direct contact</h3>
                <p className="card-body mb-6">Email: office@valoraex.com</p>
                <address className="contact-address">
                  ValoraEX Intelligence Ecosystem Limited<br />
                  Flat B, 17/F, Yuen Long Hi Tech Centre<br />
                  11 Wang Yip Street West<br />
                  Yuen Long, Hong Kong
                </address>
              </div>
            </div>

            <div className="card-light border-standard p-8 md:p-10 shadow-md">
              {formStatus === 'success' ? (
                <div className="form-success">
                  <div>
                    <div className="form-success-icon">✓</div>
                    <p className="form-success-text">Thank you. Your enquiry has been received and the ValoraEX team will respond as soon as practicable.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="form-container">
                  {formStatus === 'error' && (
                    <div className="form-error">
                      We were unable to submit your enquiry. Please try again or contact office@valoraex.com.
                    </div>
                  )}
                  
                  <div className="grid-2-inner">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input required type="text" className="form-input" />
                    </div>
                    <div>
                      <label className="form-label">Work Email *</label>
                      <input required type="email" className="form-input" />
                    </div>
                  </div>

                  <div className="grid-2-inner">
                    <div>
                      <label className="form-label">Company or Organisation *</label>
                      <input required type="text" className="form-input" />
                    </div>
                    <div>
                      <label className="form-label">Job Title *</label>
                      <input required type="text" className="form-input" />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Enquiry Type *</label>
                    <select required className="form-select bg-white">
                      <option value="">Select an option</option>
                      <option value="Request a Demonstration">Request a Demonstration</option>
                      <option value="Discuss an FF&E Project">Discuss an FF&E Project</option>
                      <option value="Discuss Governance Readiness">Discuss Governance Readiness</option>
                      <option value="Ecosystem Partnership">Ecosystem Partnership</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div className="grid-2-inner">
                    <div>
                      <label className="form-label">Project Location *</label>
                      <input required type="text" className="form-input" />
                    </div>
                    <div>
                      <label className="form-label">Expected Timing *</label>
                      <input required type="text" className="form-input" />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Brief Description *</label>
                    <textarea required rows={4} className="form-textarea"></textarea>
                  </div>

                  <div className="form-optional-section">
                    <div>
                      <label className="form-label-small">Estimated Asset Quantity (Optional)</label>
                      <input type="text" className="form-input-small" />
                    </div>
                    <div>
                      <label className="form-label-small">Number of Locations (Optional)</label>
                      <input type="text" className="form-input-small" />
                    </div>
                    <div>
                      <label className="form-label-small">How Did You Hear About Us? (Optional)</label>
                      <input type="text" className="form-input-small" />
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="form-consent">
                      By submitting this form, you agree that ValoraEX may use the information provided to respond to your enquiry in accordance with its Privacy Notice.
                    </p>
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="btn-submit"
                    >
                      {formStatus === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const LegalPlaceholderView = ({ title }: { title: string }) => (
    <div className="page-wrapper pt-8 min-h-[60vh]">
      <div className="container-wide mb-8"><BackButton /></div>
      <div className="container-narrow pb-32 text-center">
        <h1 className="heading-2 mb-6">{title}</h1>
        <div className="card-warm border-standard p-8">
          <p className="card-desc">
            [Content placeholder for {title}. Final legal wording must be reviewed by professional advisers before publication.]
          </p>
        </div>
      </div>
    </div>
  );

  // Router switch
  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <HomeView />;
      case 'How It Works': return <HowItWorksView />;
      case 'Solutions': return <SolutionsView />;
      case 'Governance & Data': return <GovernanceView />;
      case 'About': return <AboutView />;
      case 'FAQ': return <FAQView />;
      case 'Contact': return <ContactView />;
      case 'Privacy Notice': return <LegalPlaceholderView title="Privacy Notice" />;
      case 'Terms of Use': return <LegalPlaceholderView title="Terms of Use" />;
      default: return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* <Header /> */}
      <main className="flex-grow">
        {renderPage()}
      </main>
      {/* <Footer /> */}
    </div>
  );
}