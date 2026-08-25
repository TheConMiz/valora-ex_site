'use client';

import { useParams } from 'next/navigation';
import { getManagementData } from '../lib/data';
import { Locale } from '@/lib/dictionaries';
import LeadershipCard from './LeadershipCard';
import Carousel from './Carousel';

export default function LeadershipCarousel({ ctaText }: { ctaText: string }) {
	// Grab the current language from the URL route
	const params = useParams();
	const lang = (params.lang as Locale) || 'en';

	// Fetch the localized data
	const localizedManagementData = getManagementData(lang);

	return (
		<div className="w-full max-w-6xl mx-auto">
			<Carousel
				items={localizedManagementData}
				itemsPerViewMobile={1}
				itemsPerViewTablet={2}
				itemsPerViewDesktop={3}
				renderItem={(leader) => <LeadershipCard leader={leader} ctaText={ctaText} />}
			/>
		</div>
	);
}