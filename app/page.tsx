import { ArrowRight, CheckCircle, Mail, MapPin, LogIn } from 'lucide-react';

const SITE_DATA = {
  brand: {
    name: "ValoraEX",
    logoText: "V.", 
  },
  // Updated to support mixed internal/external routing
  nav: [
    { label: "Features", href: "/#features" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact", href: "/#contact" },
    { label: "Demo", href: "/demo" },
  ],
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
      { title: "ValoraEX ONE 5R Exit Solutions", desc: "Targeted solutions for office moves, liquidations, and footprint reductions, featuring a structured methodology workflow and measurable outcomes." },
      { title: "ValoraEX 5R Governance Plans", desc: "Ongoing governance solutions providing compliance, seamless ESG integration, and detailed reporting to support long-term enterprise value." },
      { title: "Proprietary Route Intelligence", desc: "Leveraging our 5R framework—Reuse, Resell, Recycle—to optimize asset recovery and systematically minimize corporate waste." }
    ]
  },
  testimonials: [
    { quote: "ValoraEX transformed our recent corporate footprint reduction. Their 5R methodology allowed us to recover significant asset value while drastically minimizing landfill waste.", author: "COO, Regional Financial Institution" },
    { quote: "The ongoing 5R Governance Plan provided us with the exact, quantifiable metrics required for our corporate sustainability reporting. A truly strategic and commercially grounded partner.", author: "Head of ESG & Compliance, Global Enterprise" }
  ],
  contact: {
    title: "Ready to streamline your process?",
    subtitle: "Drop your details below and we will be in touch.",
    location: "Hong Kong",
    email: "hello@valoraex.com"
  },
  meta: { year: "2026" }
};

export default function LandingPage() {
  return (
    <div className="layout-wrapper">
      <header className="site-header">
        <div className="brand-container">
           <div className="brand-logo">
             {SITE_DATA.brand.logoText}
           </div>
           <span className="brand-text">{SITE_DATA.brand.name}</span>
        </div>
        {/* <div className="brand-container">
          <img src="/favicon.ico" alt="ValoraEX Icon" className="w-8 h-8 rounded" />
          <span className="brand-text">{SITE_DATA.brand.name}</span>
        </div> */}
        <nav className="nav-menu">
          {SITE_DATA.nav.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <button className="btn-secondary">
          <LogIn size={16} />
          <span>{SITE_DATA.hero.ctaLogin}</span>
        </button>
      </header>

      <section className="hero-section">
        <h1 className="hero-title">{SITE_DATA.hero.headline}</h1>
        <p className="hero-subtitle">{SITE_DATA.hero.subhead}</p>
        <button className="btn-primary">
          <span>{SITE_DATA.hero.ctaPrimary}</span>
          <ArrowRight size={18} />
        </button>
      </section>

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