import React from 'react';
import Image from 'next/image';

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
	// Duplicate the array to create a seamless infinite loop
	const rollingPartners = [...partners, ...partners];

	return (
		<div className="w-full overflow-hidden bg-gray-50 py-8 group flex">
			{/* The animate-marquee class will scroll the content, pausing on hover */}
			<div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] items-center w-max">
				{rollingPartners.map((partner, index) => (
					<div
						key={`${partner.slug}-${index}`}
						className="mx-8 md:mx-16 relative h-[50px] md:h-[70px] w-[160px] md:w-[240px] shrink-0"
					>
						<Image
							src={`/assets/logos/partner-${partner.slug}-standard.png`}
							alt={`${partner.name} logo`}
							fill
							className="object-contain"
							sizes="(max-width: 768px) 160px, 240px"
						/>
					</div>
				))}
			</div>
		</div>
	);
}