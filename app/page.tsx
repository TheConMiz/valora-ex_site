"use client";

import React, { useState, FormEvent } from 'react';

// ============================================================================
// NOTE ON METADATA: 
// Because this is a monolithic file utilizing React state ("use client"), 
// Next.js metadata must be placed in your `app/layout.tsx` file. 
// Please copy the following metadata into your layout.tsx:
//
// export const metadata = {
//   title: 'ValoraEX | Asset Transition Workflow, Evidence and Governance',
//   description: 'Make every asset transition more visible, traceable and better prepared.',
//   icons: { icon: '/favicon.ico' },
//   openGraph: {
//     title: 'ValoraEX | Asset Transition Workflow',
//     description: 'Visible assets. Transparent information. Structured evidence.'
//   }
// };
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
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline ml-2">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  // ============================================================================
  // GLOBAL COMPONENTS
  // ============================================================================

  const Header = () => (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm font-[Arial,Helvetica,sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigateTo('Home')}>
            <span className="font-bold text-2xl tracking-tight text-gray-900">ValoraEX</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => navigateTo(link)}
                className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${
                  currentPage === link ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => navigateTo('Contact')}
              className="text-sm font-medium text-gray-900 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Talk to Us
            </button>
            <button 
              onClick={() => navigateTo('Contact')}
              className="bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Request a Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 p-2"
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
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => navigateTo(link)}
                className={`block w-full text-left px-3 py-4 text-base font-medium border-b border-gray-50 focus:outline-none focus:bg-gray-50 ${
                  currentPage === link ? 'text-gray-900 font-bold' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link}
              </button>
            ))}
            <div className="mt-6 space-y-4 px-3">
              <button 
                onClick={() => navigateTo('Contact')}
                className="w-full bg-gray-900 text-white px-5 py-3 text-base font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Request a Demonstration
              </button>
              <button 
                onClick={() => navigateTo('Contact')}
                className="w-full border border-gray-300 bg-white text-gray-900 px-5 py-3 text-base font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Talk to Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );

  const Footer = () => (
    <footer className="bg-stone-50 border-t border-gray-200 pt-16 pb-8 font-[Arial,Helvetica,sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">ValoraEX</h3>
            <p className="text-sm text-gray-600 mb-1">ValoraEX Intelligence Ecosystem Limited</p>
            <p className="text-sm text-gray-600 mb-6">延昇智能生態有限公司</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Contact</h4>
            <p className="text-sm text-gray-600 mb-2">Email: office@valoraex.com</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Flat B, 17/F, Yuen Long Hi Tech Centre,<br />
              11 Wang Yip Street West,<br />
              Yuen Long, Hong Kong
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map(link => (
                <li key={link}>
                  <button onClick={() => navigateTo(link)} className="text-sm text-gray-600 hover:text-gray-900">{link}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">More</h4>
            <ul className="space-y-2">
              {navLinks.slice(4).map(link => (
                <li key={link}>
                  <button onClick={() => navigateTo(link)} className="text-sm text-gray-600 hover:text-gray-900">{link}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            © 2026 ValoraEX Intelligence Ecosystem Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <button onClick={() => navigateTo('Privacy Notice')} className="hover:text-gray-900">Privacy Notice</button>
            <button onClick={() => navigateTo('Terms of Use')} className="hover:text-gray-900">Terms of Use</button>
          </div>
        </div>
      </div>
    </footer>
  );

  const FAQAccordion = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b border-gray-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left py-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
          aria-expanded={isOpen}
        >
          <span className="text-lg font-medium text-gray-900">{question}</span>
          <span className="ml-6 flex-shrink-0 text-gray-400">
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </span>
        </button>
        {isOpen && (
          <div className="pb-6 pr-12">
            <p className="text-base text-gray-600 leading-relaxed">{answer}</p>
          </div>
        )}
      </div>
    );
  };

  // ============================================================================
  // PAGE VIEWS
  // ============================================================================

  const HomeView = () => (
    <div className="font-[Arial,Helvetica,sans-serif]">
      {/* Section 1 - Hero */}
      <section className="bg-stone-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 block">EXTEND VALUE BEYOND EXIT</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Make every asset transition more visible, traceable and better prepared.
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ValoraEX connects asset visibility, route readiness, execution evidence and transparent project information through a structured 5R workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button onClick={() => navigateTo('Contact')} className="bg-gray-900 text-white px-6 py-4 text-sm font-medium hover:bg-gray-800 transition-colors text-center">
                  Request a Demonstration
                </button>
                <button onClick={() => navigateTo('Contact')} className="border-2 border-gray-900 text-gray-900 px-6 py-4 text-sm font-medium hover:bg-gray-100 transition-colors text-center">
                  Talk to Us
                </button>
              </div>
              <p className="text-sm font-bold text-gray-900">Visible assets. Transparent information. Structured evidence.</p>
            </div>
            {/* Custom Workflow Illustration (Pure UI) */}
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <div className="flex flex-col space-y-4 relative">
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200 z-0"></div>
                {['Asset Visibility', 'Readiness', 'Route Consideration', 'Execution Evidence', 'Close-Out'].map((step, idx) => (
                  <div key={idx} className="flex items-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {idx + 1}
                    </div>
                    <div className="ml-6 p-4 bg-stone-50 border border-gray-100 w-full font-medium text-gray-800">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Operational problem */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Every transition creates information. Few organisations retain the full picture.</h2>
            <p className="text-lg text-gray-600 mb-6">During relocation, refurbishment, consolidation, tenant exit or premises handback, asset records, contractor files, route decisions and completion evidence may be held separately.</p>
            <p className="text-lg text-gray-600">By the time reporting or close-out begins, the operational story may already be fragmented.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {['Asset Records', 'Route Decisions', 'Contractor Activity', 'Completion Evidence'].map((label, idx) => (
              <div key={idx} className="border border-gray-200 p-6 text-center bg-stone-50">
                <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>

          <div className="bg-stone-100 p-8 text-center border-l-4 border-gray-900">
            <p className="text-xl font-medium text-gray-900">The challenge is not only moving assets. It is maintaining visibility, readiness and evidence throughout the transition.</p>
          </div>
        </div>
      </section>

      {/* Section 3 - ValoraEX ONE */}
      <section className="py-24 bg-stone-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 block">VALORAEX ONE</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 max-w-2xl">One structured workflow from visibility to close-out.</h2>
            <p className="text-lg text-gray-600 max-w-3xl">ValoraEX ONE supports the project-entry and workflow process, helping teams organise asset information, readiness, route consideration, responsibilities, activity records and close-out preparation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { num: '1', title: 'Capture', desc: 'Create structured visibility of relevant assets and project information.' },
              { num: '2', title: 'Assess', desc: 'Review condition, timing, access, requirements and available information.' },
              { num: '3', title: 'Prepare', desc: 'Consider potential routes, responsibilities, evidence needs and dependencies.' },
              { num: '4', title: 'Coordinate', desc: 'Support approved activities across internal teams and suitable ecosystem participants.' },
              { num: '5', title: 'Evidence', desc: 'Maintain activity records, supporting information and project evidence.' },
              { num: '6', title: 'Close Out', desc: 'Prepare a clearer record of actions, assumptions, limitations and outcomes.' }
            ].map((stage) => (
              <div key={stage.num} className="bg-white p-8 border border-gray-200">
                <div className="text-gray-400 text-sm font-bold mb-4">{stage.num}. {stage.title}</div>
                <p className="text-gray-700">{stage.desc}</p>
              </div>
            ))}
          </div>
          
          <button onClick={() => navigateTo('How It Works')} className="text-gray-900 font-bold hover:underline flex items-center">
            Explore How It Works <ArrowRightIcon />
          </button>
        </div>
      </section>

      {/* Section 4 - ValoraEX Governance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 block">VALORAEX GOVERNANCE</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Build readiness before the next transition begins.</h2>
              <p className="text-lg text-gray-600 mb-6">ValoraEX Governance helps organisations maintain asset-transition readiness, evidence quality and cross-project visibility over time.</p>
              <p className="text-lg text-gray-600 mb-10">It supports earlier preparation of asset information, timing, condition, evidence requirements and internal decisions before exit activity begins.</p>
              <div className="bg-stone-100 p-6 border-l-4 border-gray-900 mb-8">
                <p className="text-lg font-medium text-gray-900">Governance is not only about reporting after the event. It supports better preparation before the event.</p>
              </div>
              <button onClick={() => navigateTo('Governance & Data')} className="text-gray-900 font-bold hover:underline flex items-center">
                Explore Governance & Data <ArrowRightIcon />
              </button>
            </div>
            <div className="space-y-6">
              {[
                { title: 'Readiness', desc: 'Maintain clearer information before projects begin.' },
                { title: 'Evidence Quality', desc: 'Apply more consistent evidence requirements across activities.' },
                { title: 'Cross-Project Visibility', desc: 'Review recurring transition activity across projects and periods.' },
                { title: 'Governance Review', desc: 'Structure assumptions, limitations, responsibilities and follow-up actions.' },
                { title: 'Reporting Preparation', desc: 'Support clearer internal review and future sustainability-reporting preparation.' }
              ].map((item, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-4">
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - ONE and Governance relationship */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">Start with a project. Build Governance over time.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { phase: 'Start', title: 'ValoraEX ONE', desc: 'Activate a structured project workflow.' },
              { phase: 'Maintain', title: 'Governance', desc: 'Maintain readiness, evidence quality and cross-project visibility.' },
              { phase: 'Connect', title: 'Ecosystem', desc: 'Coordinate suitable capabilities around approved project requirements.' },
              { phase: 'Prepare', title: 'Future Data', desc: 'Build more structured asset-transition information over time.' }
            ].map((stage, idx) => (
              <div key={idx} className="bg-gray-800 p-8 border-t-4 border-stone-400">
                <span className="text-stone-400 text-xs font-bold uppercase tracking-wider block mb-2">{stage.phase} — {stage.title}</span>
                <p className="text-white text-sm">{stage.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={() => navigateTo('Solutions')} className="bg-white text-gray-900 px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
              Explore Solutions <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>

      {/* Section 6 - Platform Neutrality */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 max-w-3xl mx-auto">Coordinate the right capabilities without being tied to one provider.</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-4xl mx-auto">ValoraEX is designed as a platform-neutral ecosystem.</p>
          <p className="text-lg text-gray-600 mb-6 max-w-4xl mx-auto">Relevant downstream activities may involve existing or new logistics, storage, resale, donation, repair, refurbishment, recycling or specialist providers, depending on project requirements.</p>
          <p className="text-lg text-gray-600 mb-16 max-w-4xl mx-auto">ValoraEX provides the workflow, evidence, Governance and coordination layer. Relevant downstream activities may be delivered by suitable ecosystem participants.</p>
          
          {/* Ecosystem Map Diagram */}
          <div className="relative max-w-4xl mx-auto bg-white p-8 md:p-16 border border-gray-200 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-gray-600 mb-12">
              {['Client Teams', 'Logistics', 'Storage', 'Repair & Refurbishment'].map((label, i) => (
                <div key={i} className="p-4 bg-stone-50 border border-gray-200 text-center">{label}</div>
              ))}
            </div>
            
            <div className="mx-auto w-full max-w-md bg-gray-900 text-white p-6 shadow-md border border-gray-900">
              <h3 className="font-bold text-xl mb-2">ValoraEX</h3>
              <p className="text-xs uppercase tracking-widest text-stone-300">Workflow • Evidence • Governance • Coordination</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-gray-600 mt-12">
              {['Resale', 'Donation', 'Recycling', 'Specialist Providers'].map((label, i) => (
                <div key={i} className="p-4 bg-stone-50 border border-gray-200 text-center">{label}</div>
              ))}
            </div>
          </div>

          <button onClick={() => navigateTo('Solutions')} className="text-gray-900 font-bold hover:underline inline-flex items-center">
            Explore Ecosystem Collaboration <ArrowRightIcon />
          </button>
        </div>
      </section>

      {/* Section 7 - Matching window */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The matching window begins before the assets leave.</h2>
              <p className="text-lg text-gray-600 mb-6">Suitable routes may require time, information, access, logistics, market interest, recipient requirements and coordination.</p>
              <p className="text-lg text-gray-600 mb-8">Earlier visibility may create more time to consider potential second-life and recovery pathways.</p>
              <p className="text-xs text-gray-500 italic mb-8 border-l-2 border-gray-300 pl-4">No buyer, recipient, route, value or outcome is guaranteed.</p>
              <button onClick={() => navigateTo('How It Works')} className="bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors inline-flex items-center">
                Explore Better Route Readiness
              </button>
            </div>
            <div className="space-y-8">
              <div className="bg-stone-50 p-8 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm border-b border-gray-200 pb-2">Late Visibility</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start"><span className="text-red-500 mr-2">×</span> Limited preparation time</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">×</span> Fewer practical route options</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">×</span> More pressure near the exit date</li>
                </ul>
              </div>
              <div className="bg-white p-8 border-2 border-gray-900 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-sm border-b border-gray-200 pb-2">Earlier Visibility</h4>
                <ul className="space-y-3 text-gray-900 font-medium">
                  <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> More time to organise information</li>
                  <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> More time to assess potential routes</li>
                  <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> More time for matching and coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 - Financial-year */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto">Prepare throughout the year—not only when reporting begins.</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-4xl mx-auto">Asset-transition activities may occur throughout the financial year, while Governance and sustainability review may take place later.</p>
          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">ValoraEX Governance helps structure project activity, evidence, assumptions and limitations as work progresses. This may support clearer internal review and later reporting preparation.</p>
          
          <div className="bg-white p-8 border border-gray-200 mb-12 max-w-4xl mx-auto shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-700 space-y-4 md:space-y-0 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
              {['Project Activity', 'Evidence Capture', 'Periodic Governance Review', 'Year-End Preparation'].map((label, i) => (
                <div key={i} className="bg-white px-4 py-2 border border-gray-300 rounded shadow-sm z-10 w-full md:w-auto">
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 text-white p-6 max-w-3xl mx-auto mb-10">
            <p className="text-lg font-medium">Maintain the operational story as work happens, rather than reconstructing it later.</p>
          </div>
          <button onClick={() => navigateTo('Contact')} className="text-gray-900 font-bold hover:underline inline-flex items-center">
            Discuss Governance Readiness <ArrowRightIcon />
          </button>
        </div>
      </section>

      {/* Section 9 - Phase 1 FF&E */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 block">PHASE 1</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Furniture, Fixtures & Equipment</h2>
            <p className="text-lg text-gray-600 max-w-3xl">ValoraEX begins with FF&E asset transition across relocation, refurbishment, consolidation, tenant exit, premises handback and other defined workplace-transition projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Workplace Relocation', copy: 'Create earlier visibility of FF&E assets, route options, responsibilities and evidence requirements before the move begins.' },
              { title: 'Refurbishment', copy: 'Maintain a clearer record of retained, relocated, released or transitioned assets and the decisions connected to them.' },
              { title: 'Consolidation', copy: 'Support asset review and transition planning when teams, locations or facilities are consolidated.' },
              { title: 'Tenant Exit and Premises Handback', copy: 'Support asset inventory, readiness review, project coordination and close-out evidence before handback.' },
              { title: 'Defined Sustainability Initiatives', copy: 'Translate an asset-transition or circular-economy objective into defined activity, evidence and Governance-ready information.' }
            ].map((useCase, idx) => (
              <div key={idx} className="bg-stone-50 p-8 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">{useCase.title}</h4>
                <p className="text-gray-600 text-sm">{useCase.copy}</p>
              </div>
            ))}
          </div>
          <button onClick={() => navigateTo('Contact')} className="bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 inline-flex items-center">
            Discuss an FF&E Project
          </button>
        </div>
      </section>

      {/* Section 10 - 5R Methodology */}
      <section className="py-24 bg-stone-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 block">THE VALORAEX 5R METHODOLOGY</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Consider the most appropriate pathway based on the asset and the project.</h2>
            <p className="text-lg text-gray-600 mb-6">The ValoraEX 5R methodology provides a structured framework for considering potential asset-transition pathways.</p>
            <p className="text-lg text-gray-600">The appropriate route depends on available information, asset condition, timing, market or recipient requirements, operational feasibility and project priorities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {[
              { label: 'Reuse', desc: 'Continue using the asset within the same organisation, group or operating environment where practical.' },
              { label: 'Resale', desc: 'Consider potential commercial second-life routes where suitable demand and practical conditions exist.' },
              { label: 'Refurbishment or Repurposing', desc: 'Explore whether repair, refurbishment, adaptation or alternative use may extend the asset’s useful life.' },
              { label: 'Recycling', desc: 'Consider material-recovery routes where continued use or second-life options are not practical.' },
              { label: 'Responsible Disposal', desc: 'Use an appropriate controlled disposal route where higher-value options are not practical or available.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 border border-gray-200 shadow-sm h-full">
                <h4 className="font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">{item.label}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-4 bg-stone-200 border-l-4 border-gray-400 max-w-4xl">
            <p className="text-xs text-gray-600 italic">The 5R methodology supports route consideration and preparation. It does not guarantee the availability or success of any particular route.</p>
          </div>
        </div>
      </section>

      {/* Section 11 - Now / Next / Future */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Now. Next. Future.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="border-l-2 border-gray-900 pl-6">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">NOW</span>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Furniture, Fixtures & Equipment</h4>
              <p className="text-gray-600 text-sm">Current Phase 1 focus: FF&E workflow, evidence, Governance and ecosystem coordination.</p>
            </div>
            <div className="border-l-2 border-gray-300 pl-6 opacity-80">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">NEXT</span>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Selected Electronic and Technology Assets</h4>
              <p className="text-gray-600 text-sm">A planned future category, subject to asset identity, condition, data security, handling, compliance, chain-of-custody and downstream requirements.</p>
            </div>
            <div className="border-l-2 border-gray-200 pl-6 opacity-60">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">FUTURE</span>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Connected Lifecycle and Digital Supply-Chain Readiness</h4>
              <p className="text-gray-600 text-sm">ValoraEX aims to support more structured asset identity and lifecycle information as international data and product-information requirements evolve.</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 italic">Roadmap content describes intended future direction only.</p>
        </div>
      </section>

      {/* Section 12 - Data and evidence trust */}
      <section className="py-24 bg-stone-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Know where the numbers come from.</h2>
              <p className="text-lg text-gray-600 mb-8">ValoraEX helps structure project information with its sources, methods, assumptions and limitations.</p>
              <div className="bg-gray-900 p-8 text-white mb-8">
                <p className="text-xl font-medium">Transparent estimates are more useful than unsupported claims.</p>
              </div>
              <p className="text-xs text-gray-500 italic mb-8 border-l-2 border-gray-300 pl-4">Data quality depends on the information available from clients, suppliers, ecosystem participants and other sources.</p>
              <button onClick={() => navigateTo('Governance & Data')} className="text-gray-900 font-bold hover:underline inline-flex items-center">
                Explore Governance & Data <ArrowRightIcon />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Source Information', desc: 'Information supplied by clients, providers and other relevant sources.' },
                { title: 'Project Records', desc: 'Asset, activity, timing, responsibility and project-status information.' },
                { title: 'Route Evidence', desc: 'Available evidence connected to approved activities and routes.' },
                { title: 'Methods and Assumptions', desc: 'The basis used for calculations, classifications and estimates.' },
                { title: 'Limitations', desc: 'Known information gaps, dependencies and data-quality constraints.' },
                { title: 'Governance Output', desc: 'Structured information prepared for internal review and future reporting preparation.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 14 - Homepage FAQ preview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="mb-10">
            <FAQAccordion question="What is ValoraEX?" answer="ValoraEX is a workflow, Governance and ecosystem-coordination platform that helps organisations manage asset transition with clearer visibility, route readiness, execution evidence and close-out preparation." />
            <FAQAccordion question="Is ValoraEX a logistics or waste company?" answer="No. ValoraEX provides the workflow, evidence, Governance and coordination layer. Relevant logistics, storage, repair, resale, donation, recycling or other activities may be delivered by suitable ecosystem participants." />
            <FAQAccordion question="What is ValoraEX ONE?" answer="ValoraEX ONE is the project-entry and workflow layer used to organise asset information, readiness, route consideration, responsibilities, activity records and close-out preparation." />
            <FAQAccordion question="What is ValoraEX Governance?" answer="ValoraEX Governance supports recurring readiness, evidence quality, cross-project visibility, internal review and later reporting preparation." />
            <FAQAccordion question="Can ValoraEX work with our existing providers?" answer="Yes. ValoraEX is designed to remain platform-neutral and may support projects involving existing or new providers, depending on client requirements and project needs." />
            <FAQAccordion question="Does ValoraEX guarantee route outcomes?" answer="No. ValoraEX supports better information, preparation, coordination and evidence. Buyers, recipients, routes, values and other outcomes depend on project-specific conditions and cannot be guaranteed." />
          </div>
          <div className="text-center">
            <button onClick={() => navigateTo('FAQ')} className="text-gray-900 font-bold hover:underline inline-flex items-center">
              View All Questions <ArrowRightIcon />
            </button>
          </div>
        </div>
      </section>

      {/* Section 13 - Final CTA */}
      <section className="py-24 bg-gray-900 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Start with the transition you need to manage.</h2>
          <p className="text-lg text-stone-300 mb-10">Discuss your FF&E project, Governance needs or ecosystem capability with ValoraEX.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => navigateTo('Contact')} className="bg-white text-gray-900 px-8 py-4 text-sm font-medium hover:bg-gray-100 transition-colors">
              Request a Demonstration
            </button>
            <button onClick={() => navigateTo('Contact')} className="border-2 border-white text-white px-8 py-4 text-sm font-medium hover:bg-gray-800 transition-colors">
              Talk to Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const HowItWorksView = () => (
    <div className="font-[Arial,Helvetica,sans-serif] bg-white pt-16 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 block">HOW IT WORKS</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">A structured workflow from asset visibility to close-out preparation.</h1>
          <p className="text-lg text-gray-600">ValoraEX helps organisations organise the information, decisions, responsibilities, activities and evidence connected to an asset-transition project.</p>
        </div>
        
        <div className="space-y-12 mb-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gray-200">
          {[
            { step: '1. Define the transition', copy: 'Establish the project scope, timing, locations, responsibilities, asset categories and key requirements.' },
            { step: '2. Organise asset information', copy: 'Create a structured view of the relevant assets, including available identity, location, quantity, condition and supporting information.' },
            { step: '3. Assess route readiness', copy: 'Review timing, condition, access, operational constraints, evidence needs and other factors that may affect potential routes.' },
            { step: '4. Consider potential pathways', copy: 'Use the ValoraEX 5R methodology to support structured consideration of potential reuse, resale, refurbishment or repurposing, recycling and responsible-disposal pathways.' },
            { step: '5. Coordinate execution', copy: 'Support approved activities across internal teams and suitable ecosystem participants, while maintaining project responsibilities and status information.' },
            { step: '6. Capture activity evidence', copy: 'Maintain available records connected to activities, providers, routes, quantities, dates and project completion.' },
            { step: '7. Prepare the project record', copy: 'Structure project information, evidence, assumptions, limitations and outstanding items for internal review and close-out preparation.' }
          ].map((item, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                {idx + 1}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-stone-50 p-6 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{item.step}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-stone-100 p-6 border-l-4 border-gray-400 text-sm text-gray-600 italic">
          ValoraEX supports workflow, preparation, coordination and evidence structure. It does not guarantee any specific route, buyer, recipient, value, environmental result or downstream outcome.
        </div>
      </div>
    </div>
  );

  const SolutionsView = () => (
    <div className="font-[Arial,Helvetica,sans-serif]">
      <section className="bg-stone-50 py-20 border-b border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 block">SOLUTIONS</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Start with the project. Build stronger Governance over time.</h1>
          <p className="text-lg text-gray-600">ValoraEX provides a connected workflow and Governance structure for organisations managing asset transition.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Solution 1 */}
            <div className="bg-stone-50 p-8 border border-gray-200 shadow-sm flex flex-col h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">ValoraEX ONE</h2>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6 pb-4 border-b border-gray-200">The project-entry and workflow layer.</h3>
              <p className="text-gray-700 mb-8 flex-grow">ValoraEX ONE helps teams organise asset information, readiness, route consideration, responsibilities, activity records and close-out preparation within a defined asset-transition project.</p>
              <div className="bg-white p-6 border border-gray-200">
                <span className="text-xs font-bold text-gray-900 uppercase block mb-3">Suitable for</span>
                <ul className="text-sm text-gray-600 space-y-2">
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
            <div className="bg-stone-50 p-8 border border-gray-200 shadow-sm flex flex-col h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">ValoraEX Governance</h2>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6 pb-4 border-b border-gray-200">The recurring readiness, evidence-quality and oversight layer.</h3>
              <p className="text-gray-700 mb-8 flex-grow">ValoraEX Governance helps organisations maintain clearer readiness, evidence requirements, cross-project visibility, review controls and reporting-preparation information over time.</p>
              <div className="bg-white p-6 border border-gray-200">
                <span className="text-xs font-bold text-gray-900 uppercase block mb-3">Suitable for</span>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Recurring asset-transition activity</li>
                  <li>• Portfolio or multi-site oversight</li>
                  <li>• Internal Governance review</li>
                  <li>• Evidence-quality improvement</li>
                  <li>• Future sustainability-reporting preparation</li>
                </ul>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="bg-stone-50 p-8 border border-gray-200 shadow-sm flex flex-col h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Ecosystem Coordination</h2>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6 pb-4 border-b border-gray-200">Connect suitable capabilities around approved project needs.</h3>
              <p className="text-gray-700 flex-grow">ValoraEX may support coordination across internal teams and suitable external providers, while preserving client choice and Platform Neutrality.</p>
            </div>
          </div>

          <div className="bg-gray-900 p-10 max-w-4xl mx-auto text-center">
            <p className="text-white text-lg font-medium mb-4">ONE supports the individual project workflow.</p>
            <p className="text-stone-300 text-lg font-medium mb-4">Governance supports recurring readiness, quality and visibility across projects.</p>
            <p className="text-stone-400 text-lg font-medium">Ecosystem coordination supports the approved execution activities around them.</p>
          </div>
        </div>
      </section>
    </div>
  );

  const GovernanceView = () => (
    <div className="font-[Arial,Helvetica,sans-serif]">
      <section className="bg-stone-50 py-20 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4 block">GOVERNANCE & DATA</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Better evidence begins with better preparation.</h1>
          <p className="text-lg text-gray-600">ValoraEX Governance helps organisations prepare, structure and review asset-transition information throughout the year—not only when reporting begins.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Governance supports</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Asset-transition readiness', 'Evidence requirements', 'Roles and responsibilities', 
                  'Cross-project visibility', 'Data-source awareness', 'Methods and assumptions', 
                  'Limitations and dependencies', 'Internal review', 'Future reporting preparation'
                ].map((item, idx) => (
                  <li key={idx} className="bg-stone-50 p-4 border border-gray-200 text-sm text-gray-700 font-medium flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-3 shrink-0"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-stone-100 p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-300 pb-4">What Governance is not</h2>
              <p className="text-gray-700 mb-4">ValoraEX Governance is not an audit, certification or third-party assurance service.</p>
              <p className="text-gray-700">It does not independently certify ESG performance, carbon outcomes, diversion, resale, donation or other project results.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understand the source of every important figure.</h2>
              <p className="text-gray-700 mb-4 text-lg">Project information may come from clients, asset records, suppliers, logistics providers, recipients, downstream providers, reference sources and other relevant parties.</p>
              <p className="text-gray-700 text-lg">ValoraEX helps maintain clearer source attribution and data-quality awareness.</p>
            </div>
            <div className="bg-white p-8 border-2 border-gray-900">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Make assumptions and limitations visible.</h2>
              <p className="text-gray-700 mb-4">Where complete primary information is not available, estimates or reference data may be used.</p>
              <p className="text-gray-700 font-bold bg-stone-100 p-4 border-l-4 border-gray-900">The relevant method, assumption and limitation should be clearly identified.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutView = () => (
    <div className="font-[Arial,Helvetica,sans-serif]">
      <section className="bg-gray-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4 block">ABOUT VALORAEX</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Turning asset-transition ambition into practical, better-governed action.</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ValoraEX is developing a 5R intelligence ecosystem that helps organisations manage asset transition with greater visibility, better route readiness, stronger evidence and more structured Governance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beginning with Furniture, Fixtures & Equipment, ValoraEX connects asset records, workflow, route planning, project coordination, evidence capture and Governance-ready information.
            </p>
          </div>

          <div className="bg-stone-50 p-8 md:p-12 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider border-b border-gray-200 pb-4">Why this matters</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Useful assets may leave offices, schools, institutions and commercial properties without enough time, information or coordination to support an appropriate next use.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              By the time an asset reaches its exit point, the practical matching window may already be limited.
            </p>
            <p className="text-xl font-medium text-gray-900 border-l-4 border-gray-900 pl-6 py-2">
              ValoraEX was created around a simple belief: value should not end when an asset leaves its original place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-16">
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Mission</h3>
              <p className="text-gray-900 font-medium text-lg leading-relaxed">
                Our mission is to help organisations make asset transition more visible, better prepared and more accountable through structured workflow, evidence and ecosystem coordination.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Vision</h3>
              <p className="text-gray-900 font-medium text-lg leading-relaxed">
                Our vision is to support a more connected asset lifecycle in which organisations can make better-informed transition decisions, prepare potential second-life pathways earlier and build stronger Governance information over time.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-16 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hong Kong starting point</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">Starting from Hong Kong, ValoraEX aims to connect practical operational action, technology and ecosystem capability.</p>
              <p className="text-gray-700 leading-relaxed">Hong Kong’s role as a connector between organisations, markets, service providers and regional opportunities provides a strong environment for developing more structured asset-transition practices.</p>
            </div>
            <div className="bg-stone-100 p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Longer-term direction</h3>
              <p className="text-gray-700 text-sm leading-relaxed">ValoraEX begins with FF&E and aims to develop toward selected additional asset categories and more connected lifecycle and digital supply-chain readiness in the future.</p>
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
      <div className="font-[Arial,Helvetica,sans-serif] bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h1>
          <div className="border-t border-gray-200">
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
      // Simulate network request
      setTimeout(() => {
        setFormStatus('success');
        // If testing error state, set to 'error' conditionally instead
      }, 1500);
    };

    return (
      <div className="font-[Arial,Helvetica,sans-serif] bg-stone-50 py-20 min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Talk to ValoraEX</h1>
              <p className="text-lg text-gray-600 mb-12">Tell us about the asset transition, Governance requirement or ecosystem capability you would like to discuss.</p>
              
              <div className="bg-white p-8 border border-gray-200 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Direct contact</h3>
                <p className="text-gray-600 mb-6">Email: office@valoraex.com</p>
                <address className="not-italic text-gray-600 leading-relaxed border-l-2 border-gray-200 pl-4">
                  ValoraEX Intelligence Ecosystem Limited<br />
                  Flat B, 17/F, Yuen Long Hi Tech Centre<br />
                  11 Wang Yip Street West<br />
                  Yuen Long, Hong Kong
                </address>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 border border-gray-200 shadow-md">
              {formStatus === 'success' ? (
                <div className="h-full flex items-center justify-center text-center p-8">
                  <div>
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">✓</div>
                    <p className="text-lg font-medium text-gray-900">Thank you. Your enquiry has been received and the ValoraEX team will respond as soon as practicable.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStatus === 'error' && (
                    <div className="bg-red-50 text-red-700 p-4 border border-red-200 text-sm">
                      We were unable to submit your enquiry. Please try again or contact office@valoraex.com.
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                      <input required type="text" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Work Email *</label>
                      <input required type="email" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Company or Organisation *</label>
                      <input required type="text" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Job Title *</label>
                      <input required type="text" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Enquiry Type *</label>
                    <select required className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 bg-white">
                      <option value="">Select an option</option>
                      <option value="Request a Demonstration">Request a Demonstration</option>
                      <option value="Discuss an FF&E Project">Discuss an FF&E Project</option>
                      <option value="Discuss Governance Readiness">Discuss Governance Readiness</option>
                      <option value="Ecosystem Partnership">Ecosystem Partnership</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Project Location *</label>
                      <input required type="text" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Expected Timing *</label>
                      <input required type="text" className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Brief Description *</label>
                    <textarea required rows={4} className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"></textarea>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-200 pt-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Estimated Asset Quantity (Optional)</label>
                      <input type="text" className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Number of Locations (Optional)</label>
                      <input type="text" className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">How Did You Hear About Us? (Optional)</label>
                      <input type="text" className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-xs text-gray-500 mb-6">
                      By submitting this form, you agree that ValoraEX may use the information provided to respond to your enquiry in accordance with its Privacy Notice.
                    </p>
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-gray-900 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-70 disabled:cursor-not-allowed"
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
    <div className="font-[Arial,Helvetica,sans-serif] bg-white py-32 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
        <div className="bg-stone-50 p-8 border border-gray-200">
          <p className="text-gray-600 text-sm">
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