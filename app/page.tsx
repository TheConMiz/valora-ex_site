import { ArrowRight, CheckCircle, Mail, MapPin, LogIn } from 'lucide-react';
// ============================================================================
// 🛠️ DATA ARCHITECTURE 
// Update these variables with your specific product details.
// ============================================================================
const SITE_DATA = {
  brand: {
    name: "ValoraEX",
    logoText: "VEX"
  },
  nav: ["Features", "Testimonials", "Contact"],
  hero: {
    headline: "Extend Value Beyond Exit.",
    subhead: "Strategic corporate exit solutions and ESG governance powered by our proprietary 5R methodology. Optimize asset recovery and minimize waste through ValoraEX ONE and 5R Governance Plans.",
    ctaPrimary: "Book a Discussion",
    ctaLogin: "Login"
  },
  pitch: {
    problem: "Traditional corporate exits, office moves, and footprint reductions often result in unrealized asset value, unnecessary waste, and missed ESG targets.",
    solution: "We provide a strategic, commercially grounded approach to corporate exits that maximizes asset recovery while aligning with rigorous corporate ESG reporting standards.",
    features: [
      { 
        title: "5R Exit Solutions", 
        desc: "Targeted solutions for office moves, liquidations, and footprint reductions, featuring a structured methodology workflow and measurable outcomes." 
      },
      { 
        title: "5R Governance Plans", 
        desc: "Ongoing governance solutions providing compliance, seamless ESG integration, and detailed reporting to support long-term enterprise value." 
      },
      { 
        title: "Proprietary Route Intelligence", 
        desc: "Leveraging our 5R framework—Reuse, Resell, Recycle—to optimize asset recovery and systematically minimize corporate waste." 
      }
    ]
  },
  testimonials: [
    { 
      quote: "ValoraEX transformed our recent corporate footprint reduction. Their 5R methodology allowed us to recover significant asset value while drastically minimizing landfill waste.", 
      author: "COO, Regional Financial Institution" 
    },
    { 
      quote: "The ongoing 5R Governance Plan provided us with the exact, quantifiable metrics required for our corporate sustainability reporting. A truly strategic and commercially grounded partner.", 
      author: "Head of ESG & Compliance, Global Enterprise" 
    },
    { 
      quote: "They did not just clear out our excess footprint; their route intelligence maximized our return and handled the entire exit process with premium B2B professionalism.", 
      author: "VP of Operations, Technology Sector" 
    }
  ],
  contact: {
    title: "Ready to streamline your process?",
    subtitle: "Drop your details below and we will be in touch.",
    location: "Hong Kong",
    email: "hello@yourdomain.com"
  },
  meta: {
    year: "2026"
  }
};
// ============================================================================


export default function LandingPage() {
  return (
    <div className="layout-wrapper">
      
      {/* 1. Global Header */}
      <header className="site-header">
        <div className="brand-container">
          <div className="brand-logo">
            {SITE_DATA.brand.logoText}
          </div>
          <span className="brand-text">{SITE_DATA.brand.name}</span>
        </div>
        <nav className="nav-menu">
          {SITE_DATA.nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </nav>
        <button className="btn-secondary">
          <LogIn size={16} />
          <span>{SITE_DATA.hero.ctaLogin}</span>
        </button>
      </header>

      {/* 2. Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">{SITE_DATA.hero.headline}</h1>
        <p className="hero-subtitle">{SITE_DATA.hero.subhead}</p>
        <button className="btn-primary">
          <span>{SITE_DATA.hero.ctaPrimary}</span>
          <ArrowRight size={18} />
        </button>
      </section>

      {/* 3. Product Information (Pitch & Features) */}
      <section id="features" className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">The Problem: {SITE_DATA.pitch.problem}</h2>
            <p className="section-subtitle">{SITE_DATA.pitch.solution}</p>
          </div>
          <div className="features-grid">
            {SITE_DATA.pitch.features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <CheckCircle className="feature-icon" size={28} />
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Social Proof */}
      <section id="testimonials" className="testimonials-section">
        <div className="testimonials-grid">
          {SITE_DATA.testimonials.map((test, idx) => (
            <div key={idx} className="testimonial-card">
              <p className="testimonial-quote">"{test.quote}"</p>
              <p className="testimonial-author">— {test.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Lead Generation / Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">{SITE_DATA.contact.title}</h2>
          <p className="feature-desc mb-8">{SITE_DATA.contact.subtitle}</p>
          <form className="contact-form">
            <input type="text" placeholder="Name" className="form-input" />
            <input type="email" placeholder="Work Email" className="form-input" />
            <textarea placeholder="How can we help?" rows={4} className="form-input"></textarea>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* 6. Global Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-contact">
            <span className="footer-item"><MapPin size={16} className="footer-icon"/> {SITE_DATA.contact.location}</span>
            <span className="footer-item"><Mail size={16} className="footer-icon"/> {SITE_DATA.contact.email}</span>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <span>© {SITE_DATA.meta.year} {SITE_DATA.brand.name}</span>
          </div>
        </div>
      </footer>

    </div>
  );
}


// ! Original Landing Page Component
// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
//       {/* 1. Global Header */}
//       <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-200 sticky top-0 z-50">
//         <div className="flex items-center space-x-2">
//           <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center font-bold rounded">
//             {SITE_DATA.brand.logoText}
//           </div>
//           <span className="font-bold text-xl">{SITE_DATA.brand.name}</span>
//         </div>
//         <nav className="hidden md:flex space-x-6">
//           {SITE_DATA.nav.map((item) => (
//             <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-blue-600">
//               {item}
//             </a>
//           ))}
//         </nav>
//         <button className="flex items-center space-x-2 text-sm font-medium bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-md transition">
//           <LogIn size={16} />
//           <span>{SITE_DATA.hero.ctaLogin}</span>
//         </button>
//       </header>

//       {/* 2. Hero Section */}
//       <section className="px-8 py-24 max-w-5xl mx-auto text-center">
//         <h1 className="text-5xl font-extrabold tracking-tight mb-6">{SITE_DATA.hero.headline}</h1>
//         <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">{SITE_DATA.hero.subhead}</p>
//         <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center mx-auto space-x-2">
//           <span>{SITE_DATA.hero.ctaPrimary}</span>
//           <ArrowRight size={18} />
//         </button>
//       </section>

//       {/* 3. Product Information (Pitch & Features) */}
//       <section id="features" className="px-8 py-20 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">The Problem: {SITE_DATA.pitch.problem}</h2>
//             <p className="text-lg text-blue-600 font-medium">{SITE_DATA.pitch.solution}</p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {SITE_DATA.pitch.features.map((feature, idx) => (
//               <div key={idx} className="p-6 border border-slate-100 rounded-xl bg-slate-50 shadow-sm">
//                 <CheckCircle className="text-blue-600 mb-4" size={28} />
//                 <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                 <p className="text-slate-600">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. Social Proof */}
//       <section id="testimonials" className="px-8 py-20 bg-slate-900 text-white">
//         <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
//           {SITE_DATA.testimonials.map((test, idx) => (
//             <div key={idx} className="space-y-4">
//               <p className="text-xl italic text-slate-300">"{test.quote}"</p>
//               <p className="font-medium text-blue-400">— {test.author}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 5. Lead Generation / Contact */}
//       <section id="contact" className="px-8 py-24 bg-white">
//         <div className="max-w-xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4">{SITE_DATA.contact.title}</h2>
//           <p className="text-slate-600 mb-8">{SITE_DATA.contact.subtitle}</p>
//           <form className="space-y-4 text-left">
//             <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
//             <input type="email" placeholder="Work Email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
//             <textarea placeholder="How can we help?" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
//             <button type="submit" className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
//           </form>
//         </div>
//       </section>

//       {/* 6. Global Footer */}
//       <footer className="bg-slate-100 py-12 px-8 border-t border-slate-200 text-slate-600 text-sm">
//         <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
//           <div className="flex items-center space-x-6 mb-4 md:mb-0">
//             <span className="flex items-center"><MapPin size={16} className="mr-2"/> {SITE_DATA.contact.location}</span>
//             <span className="flex items-center"><Mail size={16} className="mr-2"/> {SITE_DATA.contact.email}</span>
//           </div>
//           <div className="space-x-6">
//             <a href="#" className="hover:text-blue-600">Privacy Policy</a>
//             <a href="#" className="hover:text-blue-600">Terms of Service</a>
//             <span>© {SITE_DATA.meta.year} {SITE_DATA.brand.name}</span>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }