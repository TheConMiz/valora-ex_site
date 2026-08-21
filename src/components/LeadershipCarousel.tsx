'use client';

import { useState } from 'react';
import { managementData } from '../lib/data';
import LeadershipCard from './LeadershipCard';

export default function LeadershipCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Helper function to handle the timing of the transition
  const changeProfile = (newIndex: number) => {
    if (isAnimating || newIndex === currentIndex) return;
    
    // 1. Trigger the fade-out animation
    setIsAnimating(true);
    
    // 2. Wait for the CSS transition to finish, swap the data, and trigger fade-in
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 300); // This 300ms must match the Tailwind `duration-300` class below
  };

  const handleNext = () => {
    const newIndex = currentIndex === managementData.length - 1 ? 0 : currentIndex + 1;
    changeProfile(newIndex);
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? managementData.length - 1 : currentIndex - 1;
    changeProfile(newIndex);
  };

  return (
    <div className="w-full max-w-md mx-auto relative px-12">
      
      {/* Current Card Wrapper with Animation Classes */}
      <div 
        className={`min-h-[420px] transition-all duration-300 ease-in-out transform ${
          isAnimating 
            ? 'opacity-0 scale-95 translate-y-4' // State when transitioning out
            : 'opacity-100 scale-100 translate-y-0' // Normal resting state
        }`}
      >
        <LeadershipCard leader={managementData[currentIndex]} />
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={handlePrev}
        disabled={isAnimating}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md border border-gray-100 text-gray-600 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        aria-label="Previous Leader"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={handleNext}
        disabled={isAnimating}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md border border-gray-100 text-gray-600 hover:text-blue-600 hover:scale-110 transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        aria-label="Next Leader"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {managementData.map((_, index) => (
          <button
            key={index}
            onClick={() => changeProfile(index)}
            disabled={isAnimating}
            className={`w-2 h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
              index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to leader ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}