'use client';

import { managementData } from '../lib/data';
import LeadershipCard from './LeadershipCard';
import Carousel from './Carousel';

export default function LeadershipCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Carousel
        items={managementData}
        itemsPerViewMobile={1}
        itemsPerViewTablet={2} 
        itemsPerViewDesktop={3}
        renderItem={(leader) => <LeadershipCard leader={leader} />}
      />
    </div>
  );
}