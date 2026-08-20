import React from 'react';

const partners = [
  { name: 'Spider Logistics', slug: 'spider-logistics' },
  { name: 'Alpha Master', slug: 'alpha-master' },
  { name: 'Deartree', slug: 'deartree' },
  { name: 'HKMU', slug: 'hkmu' },
  { name: 'InvestHK', slug: 'investhk' },
  { name: 'PolyU', slug: 'polyu' },
  { name: 'SERA', slug: 'sera' },
];

export default function PartnerCarousel() {
  return (
    <section className="partner-section">
      <h2 className="partner-title">Our Partners</h2>
      <ul className="partner-track">
        {partners.map((partner) => (
          <li key={partner.slug} className="partner-item">
            {/* The div below acts as a structural placeholder for a future <a> tag */}
            <div className="partner-link-placeholder">
              <picture>
                <source 
                  srcSet={`/assets/logos/partner-${partner.slug}-standard.webp`} 
                  type="image/webp" 
                />
                <img 
                  src={`/assets/logos/partner-${partner.slug}-standard.png`} 
                  alt={`${partner.name} Partner Logo`} 
                  className="partner-logo" 
                  loading="lazy" 
                />
              </picture>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}