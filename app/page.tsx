// import { ArrowRight, CheckCircle, Mail, MapPin, LogIn } from 'lucide-react';

// const SITE_DATA = {
//   brand: {
//     name: "ValoraEX",
//     logoText: "V.", 
//   },
//   // Updated to support mixed internal/external routing
//   nav: [
//     { label: "Features", href: "/#features" },
//     { label: "Testimonials", href: "/#testimonials" },
//     { label: "Contact", href: "/#contact" },
//     { label: "Demo", href: "/demo" },
//   ],
//   hero: {
//     headline: "Extend Value Beyond Exit.",
//     subhead: "Strategic corporate exit solutions and ESG governance powered by our proprietary 5R methodology. Optimize asset recovery and minimize waste through ValoraEX ONE and 5R Governance Plans.",
//     ctaPrimary: "Book a Discussion",
//     ctaLogin: "Login"
//   },
//   pitch: {
//     problem: "Traditional corporate exits, office moves, and footprint reductions often result in unrealized asset value, unnecessary waste, and missed ESG targets.",
//     solution: "We provide a strategic, commercially grounded approach to corporate exits that maximizes asset recovery while aligning with rigorous corporate ESG reporting standards.",
//     features: [
//       { title: "ValoraEX ONE 5R Exit Solutions", desc: "Targeted solutions for office moves, liquidations, and footprint reductions, featuring a structured methodology workflow and measurable outcomes." },
//       { title: "ValoraEX 5R Governance Plans", desc: "Ongoing governance solutions providing compliance, seamless ESG integration, and detailed reporting to support long-term enterprise value." },
//       { title: "Proprietary Route Intelligence", desc: "Leveraging our 5R framework—Reuse, Resell, Recycle—to optimize asset recovery and systematically minimize corporate waste." }
//     ]
//   },
//   testimonials: [
//     { quote: "ValoraEX transformed our recent corporate footprint reduction. Their 5R methodology allowed us to recover significant asset value while drastically minimizing landfill waste.", author: "COO, Regional Financial Institution" },
//     { quote: "The ongoing 5R Governance Plan provided us with the exact, quantifiable metrics required for our corporate sustainability reporting. A truly strategic and commercially grounded partner.", author: "Head of ESG & Compliance, Global Enterprise" }
//   ],
//   contact: {
//     title: "Ready to streamline your process?",
//     subtitle: "Drop your details below and we will be in touch.",
//     location: "Hong Kong",
//     email: "hello@valoraex.com"
//   },
//   meta: { year: "2026" }
// };

// export default function LandingPage() {
//   return (
//     <div className="layout-wrapper">
//       <header className="site-header">
//         <div className="brand-container">
//            <div className="brand-logo">
//              {SITE_DATA.brand.logoText}
//            </div>
//            <span className="brand-text">{SITE_DATA.brand.name}</span>
//         </div>
//         {/* <div className="brand-container">
//           <img src="/favicon.ico" alt="ValoraEX Icon" className="w-8 h-8 rounded" />
//           <span className="brand-text">{SITE_DATA.brand.name}</span>
//         </div> */}
//         <nav className="nav-menu">
//           {SITE_DATA.nav.map((item) => (
//             <a key={item.label} href={item.href} className="nav-link">
//               {item.label}
//             </a>
//           ))}
//         </nav>
//         <button className="btn-secondary">
//           <LogIn size={16} />
//           <span>{SITE_DATA.hero.ctaLogin}</span>
//         </button>
//       </header>

//       <section className="hero-section">
//         <h1 className="hero-title">{SITE_DATA.hero.headline}</h1>
//         <p className="hero-subtitle">{SITE_DATA.hero.subhead}</p>
//         <button className="btn-primary">
//           <span>{SITE_DATA.hero.ctaPrimary}</span>
//           <ArrowRight size={18} />
//         </button>
//       </section>

//       <section id="features" className="features-section">
//         <div className="section-container">
//           <div className="section-header">
//             <h2 className="section-title">The Problem: {SITE_DATA.pitch.problem}</h2>
//             <p className="section-subtitle">{SITE_DATA.pitch.solution}</p>
//           </div>
//           <div className="features-grid">
//             {SITE_DATA.pitch.features.map((feature, idx) => (
//               <div key={idx} className="feature-card">
//                 <CheckCircle className="feature-icon" size={28} />
//                 <h3 className="feature-title">{feature.title}</h3>
//                 <p className="feature-desc">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="testimonials" className="testimonials-section">
//         <div className="testimonials-grid">
//           {SITE_DATA.testimonials.map((test, idx) => (
//             <div key={idx} className="testimonial-card">
//               <p className="testimonial-quote">"{test.quote}"</p>
//               <p className="testimonial-author">— {test.author}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section id="contact" className="contact-section">
//         <div className="contact-container">
//           <h2 className="section-title">{SITE_DATA.contact.title}</h2>
//           <p className="feature-desc mb-8">{SITE_DATA.contact.subtitle}</p>
//           <form className="contact-form">
//             <input type="text" placeholder="Name" className="form-input" />
//             <input type="email" placeholder="Work Email" className="form-input" />
//             <textarea placeholder="How can we help?" rows={4} className="form-input"></textarea>
//             <button type="submit" className="btn-submit">Send Message</button>
//           </form>
//         </div>
//       </section>

//       <footer className="site-footer">
//         <div className="footer-container">
//           <div className="footer-contact">
//             <span className="footer-item"><MapPin size={16} className="footer-icon"/> {SITE_DATA.contact.location}</span>
//             <span className="footer-item"><Mail size={16} className="footer-icon"/> {SITE_DATA.contact.email}</span>
//           </div>
//           <div className="footer-links">
//             <a href="#" className="footer-link">Privacy Policy</a>
//             <a href="#" className="footer-link">Terms of Service</a>
//             <span>© {SITE_DATA.meta.year} {SITE_DATA.brand.name}</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SITE_DATA = {
  brand: {
    name: "ValoraEX",
    logoText: "V.",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Solutions", href: "/solutions" },
    { label: "Governance & Data", href: "/governance-data" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" }
  ],
  hero: {
    sectionLabel: "EXTEND VALUE BEYOND EXIT",
    headline: "Make every asset transition more visible, traceable and better prepared.",
    subhead: "ValoraEX connects asset visibility, route readiness, execution evidence and transparent project information through a structured 5R workflow. \n\nVisible assets. Transparent information. Structured evidence.",
    ctaPrimary: "Request a Demonstration",
    ctaSecondary: "Talk to Us"
  }
};

export default function LandingPage() {
  return (
    <div className="layout-wrapper font-['Arial',_sans-serif]">
      
      {/* HEADER */}
      <header className="site-header">
        <div className="brand-container">
          <div className="brand-logo">{SITE_DATA.brand.logoText}</div>
          <span className="brand-text">{SITE_DATA.brand.name}</span>
        </div>
        <nav className="nav-menu">
          {SITE_DATA.nav.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link href="/contact?type=demo" className="btn-secondary">
            Request a Demo
          </Link>
        </div>
      </header>

      <main>
        {/* 1. HERO */}
        <section className="hero-section pt-32 pb-24">
          <span className="text-xs font-bold tracking-widest uppercase text-[#91968F] mb-4 block">
            {SITE_DATA.hero.sectionLabel}
          </span>
          <h1 className="hero-title">{SITE_DATA.hero.headline}</h1>
          <p className="hero-subtitle whitespace-pre-line">{SITE_DATA.hero.subhead}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-8">
            <Link href="/contact?type=demo" className="btn-primary">
              <span>{SITE_DATA.hero.ctaPrimary}</span> <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="px-8 py-3 text-sm font-medium text-[#414141] bg-white border border-[#91968F] rounded-lg hover:bg-[#F8FAF5] hover:text-[#AF9066] transition">
              {SITE_DATA.hero.ctaSecondary}
            </Link>
          </div>
        </section>

        {/* 2. OPERATIONAL PROBLEM */}
        <section className="features-section bg-white border-t border-[#91968F]/30">
          <div className="section-container">
            <div className="section-header max-w-3xl mx-auto">
              <h2 className="section-title">Every transition creates information. Few organisations retain the full picture.</h2>
              <p className="feature-desc text-lg mb-4">
                During relocation, refurbishment, consolidation, tenant exit or premises handback, asset records, contractor files, route decisions and completion evidence may be held separately. By the time reporting or close-out begins, the operational story may already be fragmented.
              </p>
              <p className="section-subtitle">
                The challenge is not only moving assets. It is maintaining visibility, readiness and evidence throughout the transition.
              </p>
            </div>
          </div>
        </section>

        {/* 3. VALORAEX ONE */}
        <section className="features-section border-t border-[#91968F]/30">
          <div className="section-container">
            <div className="section-header max-w-4xl mx-auto">
              <span className="text-xs font-bold tracking-widest uppercase text-[#91968F] mb-4 block">VALORAEX ONE</span>
              <h2 className="section-title">One structured workflow from visibility to close-out.</h2>
              <p className="feature-desc text-lg mb-8">
                ValoraEX ONE supports the project-entry and workflow process, helping teams organise asset information, readiness, route consideration, responsibilities, activity records and close-out preparation.
              </p>
              <Link href="/how-it-works" className="nav-link inline-flex items-center border-b border-[#AF9066] pb-1">
                Explore How It Works <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. VALORAEX GOVERNANCE */}
        <section className="features-section bg-white border-t border-[#91968F]/30">
          <div className="section-container">
            <div className="section-header max-w-4xl mx-auto">
              <span className="text-xs font-bold tracking-widest uppercase text-[#91968F] mb-4 block">VALORAEX GOVERNANCE</span>
              <h2 className="section-title">Better readiness supports better route consideration.</h2>
              <p className="feature-desc text-lg mb-4">
                ValoraEX Governance helps organisations prepare asset information, timing, condition, evidence requirements and internal decisions earlier. Earlier preparation may widen the potential matching window and provide more time to consider suitable 5R pathways before exit activity begins.
              </p>
              <p className="section-subtitle mb-8">
                Governance is not only about reporting after the event. It supports better preparation before the event.
              </p>
              <Link href="/governance-data" className="nav-link inline-flex items-center border-b border-[#AF9066] pb-1">
                Explore Governance & Data <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. PLATFORM NEUTRALITY */}
        <section className="features-section border-t border-[#91968F]/30">
          <div className="section-container">
            <div className="section-header max-w-3xl mx-auto">
              <h2 className="section-title">Coordinate the right capabilities without being tied to one provider.</h2>
              <p className="feature-desc text-lg mb-4">
                ValoraEX is designed as a platform-neutral ecosystem. Relevant downstream activities may involve existing or new logistics, storage, resale, donation, repair, refurbishment, recycling or specialist providers, depending on project requirements.
              </p>
              <p className="feature-desc text-lg mb-8">
                ValoraEX provides the workflow, evidence, Governance and coordination layer. Relevant downstream activities may be delivered by suitable ecosystem participants.
              </p>
              <Link href="/contact?type=ecosystem" className="nav-link inline-flex items-center border-b border-[#AF9066] pb-1">
                Explore Ecosystem Collaboration <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. ROUTE READINESS & MATCHING WINDOW */}
        <section className="features-section bg-white border-t border-[#91968F]/30">
          <div className="section-container">
            <div className="section-header max-w-3xl mx-auto">
              <h2 className="section-title">The matching window begins before the assets leave.</h2>
              <p className="feature-desc text-lg mb-4">
                Suitable routes may require time, information, access, logistics, market interest, recipient requirements and coordination. Earlier visibility may create more time to consider potential second-life and recovery pathways.
              </p>
              <p className="text-sm text-[#91968F] italic mb-8">
                No buyer, recipient, route, value or outcome is guaranteed.
              </p>
              <Link href="/how-it-works" className="nav-link inline-flex items-center border-b border-[#AF9066] pb-1">
                Explore Better Route Readiness <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* 7. FINANCIAL-YEAR READINESS */}
        <section className="features-section border-t border-[#91968F]/30">
          <div className="section-container">
            <div className="section-header max-w-3xl mx-auto">
              <h2 className="section-title">Prepare throughout the year—not only when reporting begins.</h2>
              <p className="feature-desc text-lg mb-8">
                Asset-transition activities may occur throughout the financial year, while Governance and sustainability review may take place later. ValoraEX Governance helps structure project activity, evidence, assumptions and limitations as work progresses. This may support clearer internal review and later reporting preparation.
              </p>
              <Link href="/contact?type=governance" className="nav-link inline-flex items-center border-b border-[#AF9066] pb-1">
                Discuss Governance Readiness <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* 8. PHASE 1 FF&E */}
        <section className="features-section bg-white border-t border-[#91968F]/30">
          <div className="section-container">
            <div className="section-header max-w-4xl mx-auto">
              <span className="text-xs font-bold tracking-widest uppercase text-[#91968F] mb-4 block">PHASE 1</span>
              <h2 className="section-title">Furniture, Fixtures & Equipment</h2>
              <p className="feature-desc text-lg max-w-2xl mx-auto">
                ValoraEX begins with FF&E asset transition across relocation, refurbishment, consolidation, tenant exit, premises handback and other defined workplace-transition projects.
              </p>
            </div>
            
            <div className="features-grid md:grid-cols-2 mt-12">
              <div className="feature-card">
                <h3 className="feature-title text-[#456963]">Workplace relocation</h3>
                <p className="feature-desc">Create earlier visibility of FF&E assets, route options, responsibilities and evidence requirements before the move begins.</p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title text-[#456963]">Refurbishment</h3>
                <p className="feature-desc">Maintain a clearer record of retained, relocated, released or transitioned assets and the decisions connected to them.</p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title text-[#456963]">Tenant exit and premises handback</h3>
                <p className="feature-desc">Support asset inventory, readiness review, project coordination and close-out evidence before handback.</p>
              </div>
              <div className="feature-card">
                <h3 className="feature-title text-[#456963]">Sustainability initiatives</h3>
                <p className="feature-desc">Translate an asset-transition or circular-economy objective into defined activity, evidence and Governance-ready information.</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/contact?type=ffe" className="btn-primary">
                <span>Discuss an FF&E Project</span> <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* 9. SOLUTIONS JOURNEY */}
        <section className="features-section bg-[#414141] text-[#F8FAF5] border-t border-[#91968F]/30 text-center">
          <div className="section-container">
            <h2 className="text-3xl font-light mb-12 text-white">Start with the project. Build Governance over time.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left md:text-center">
              <div>
                <h3 className="font-bold mb-2 text-[#AF9066]">Start — ValoraEX ONE</h3>
                <p className="text-sm text-[#91968F]">Activate a structured project workflow.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-[#AF9066]">Maintain — Governance</h3>
                <p className="text-sm text-[#91968F]">Maintain readiness, evidence quality and cross-project visibility.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-[#AF9066]">Connect — Ecosystem</h3>
                <p className="text-sm text-[#91968F]">Connect suitable providers to approved project routes.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-[#AF9066]">Prepare — Future Data</h3>
                <p className="text-sm text-[#91968F]">Build more structured asset-transition information.</p>
              </div>
            </div>
            <div className="mt-12">
              <Link href="/solutions" className="inline-flex items-center text-sm font-medium text-white hover:text-[#AF9066] transition border-b border-[#AF9066] pb-1">
                Explore Solutions <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* 10. NOW / NEXT / FUTURE */}
        <section className="features-section border-t border-[#91968F]/30">
          <div className="section-container max-w-4xl">
            <h2 className="section-title text-center mb-12">Now. Next. Future.</h2>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-start border-l-2 border-[#456963] pl-6">
                <span className="text-xs font-bold uppercase text-[#91968F] w-24 shrink-0 pt-1">Now</span>
                <div>
                  <h3 className="feature-title mb-1">Furniture, Fixtures & Equipment</h3>
                  <p className="feature-desc">Current Phase 1 focus: FF&E workflow, evidence, Governance and ecosystem coordination.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start border-l-2 border-[#91968F]/30 pl-6">
                <span className="text-xs font-bold uppercase text-[#91968F] w-24 shrink-0 pt-1">Next</span>
                <div>
                  <h3 className="feature-title mb-1">Selected electronic and technology assets</h3>
                  <p className="feature-desc">A planned future category, subject to asset identity, condition, data security, handling, compliance, chain-of-custody and downstream requirements.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start border-l-2 border-[#91968F]/30 pl-6">
                <span className="text-xs font-bold uppercase text-[#91968F] w-24 shrink-0 pt-1">Future</span>
                <div>
                  <h3 className="feature-title mb-1">Connected lifecycle and digital supply-chain readiness</h3>
                  <p className="feature-desc">ValoraEX aims to support more structured asset identity and lifecycle information as international data and product-information requirements evolve.</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#91968F] text-center mt-12 italic">Roadmap content describes intended future direction only.</p>
          </div>
        </section>

        {/* 11. DATA AND EVIDENCE TRUST */}
        <section className="features-section bg-white border-t border-[#91968F]/30 text-center">
          <div className="section-container max-w-3xl">
            <h2 className="section-title">Know where the numbers come from.</h2>
            <p className="feature-desc text-lg mb-6">
              ValoraEX helps structure project information with its sources, methods, assumptions and limitations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 py-6">
              <span className="px-4 py-2 bg-[#F8FAF5] border border-[#91968F]/50 rounded-md text-sm text-[#414141] font-medium">Project Data</span>
              <span className="px-4 py-2 bg-[#F8FAF5] border border-[#91968F]/50 rounded-md text-sm text-[#414141] font-medium">Route Evidence</span>
              <span className="px-4 py-2 bg-[#F8FAF5] border border-[#91968F]/50 rounded-md text-sm text-[#414141] font-medium">Reference Data</span>
              <span className="px-4 py-2 bg-[#F8FAF5] border border-[#91968F]/50 rounded-md text-sm text-[#414141] font-medium">Assumptions & Controls</span>
            </div>
            <p className="section-subtitle mb-2 mt-4">
              Transparent estimates are more useful than unsupported claims.
            </p>
            <p className="text-sm text-[#91968F] mb-8">
              Data quality depends on the information available from clients, suppliers, ecosystem participants and other sources.
            </p>
            <Link href="/governance-data" className="nav-link inline-flex items-center border-b border-[#AF9066] pb-1">
              Explore Governance & Data <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className="contact-section border-t border-[#91968F]/30">
          <div className="contact-container max-w-2xl">
            <h2 className="section-title">Start with the transition you need to manage.</h2>
            <p className="feature-desc mb-8">
              Discuss your FF&E project, Governance needs or ecosystem capability with ValoraEX.
            </p>
            {/* FIX APPLIED HERE: Replaced space-y/space-x with gap-4 and used !mx-0 to override the global class safely */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact?type=demo" className="btn-primary !mx-0">
                <span>Request a Demonstration</span>
              </Link>
              <Link href="/contact" className="px-8 py-3 text-sm font-medium text-[#414141] bg-white border border-[#91968F] rounded-lg hover:bg-[#F8FAF5] hover:text-[#AF9066] transition">
                Talk to Us
              </Link>
            </div>
          </div>
        </section>

        {/* 13. FAQ PREVIEW */}
        <section className="features-section bg-white border-t border-[#91968F]/30">
          <div className="section-container max-w-3xl mx-auto">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {['What is ValoraEX?', 'Is ValoraEX a logistics or waste company?', 'What is ValoraEX ONE?', 'What is ValoraEX Governance?', 'Can ValoraEX work with existing providers?', 'Does ValoraEX guarantee route outcomes?'].map((q, i) => (
                <div key={i} className="p-4 bg-[#F8FAF5] border border-[#91968F]/30 rounded-md text-[#414141] font-medium text-sm">
                  {q}
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/faq" className="nav-link inline-flex items-center border-b border-[#AF9066] pb-1">
                View All Questions <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-container">
          <span className="text-[#91968F] mb-4 md:mb-0 text-center md:text-left">
            © 2026 ValoraEX Intelligence Ecosystem Limited. All rights reserved.
          </span>
          <div className="footer-links flex justify-center">
            <Link href="/privacy" className="footer-link">Privacy Notice</Link>
            <Link href="/terms" className="footer-link">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}