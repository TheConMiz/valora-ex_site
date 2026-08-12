'use client';

import { useState } from 'react';
import { leadershipTeam } from './../lib/data';
import LeadershipCard from './LeadershipCard';

export default function LeadershipCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === leadershipTeam.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? leadershipTeam.length - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-md mx-auto relative px-12">
      
      {/* Current Card */}
      <div className="min-h-[420px]">
        <LeadershipCard leader={leadershipTeam[currentIndex]} />
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md border border-gray-100 text-gray-600 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none"
        aria-label="Previous Leader"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md border border-gray-100 text-gray-600 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none"
        aria-label="Next Leader"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {leadershipTeam.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to leader ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}