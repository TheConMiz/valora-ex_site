import React from 'react';
import Image from 'next/image'; // <-- Import Next Image

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
            <div className="partner-link-placeholder relative h-20 w-48">
              <Image 
                src={`/assets/logos/partner-${partner.slug}-standard.png`} 
                alt={`${partner.name} Partner Logo`} 
                fill
                className="object-contain" 
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}