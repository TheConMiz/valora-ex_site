'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface CarouselProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    itemsPerViewMobile?: number;
    itemsPerViewTablet?: number;
    itemsPerViewDesktop?: number;
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

export default function Carousel<T>({
    items,
    renderItem,
    itemsPerViewMobile = 1,
    itemsPerViewTablet = 1,
    itemsPerViewDesktop = 1,
    autoPlay = false,
    autoPlayInterval = 5000,
}: CarouselProps<T>) {
    // Initialize to mobile first to prevent hydration mismatch
    const [visibleCount, setVisibleCount] = useState(itemsPerViewMobile);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Detect screen size to adjust how many items show at once
    useEffect(() => {
        const checkLayout = () => {
            if (window.innerWidth >= 1024) {
                setVisibleCount(itemsPerViewDesktop);
            } else if (window.innerWidth >= 768) {
                setVisibleCount(itemsPerViewTablet);
            } else {
                setVisibleCount(itemsPerViewMobile);
            }
        };
        
        checkLayout();
        window.addEventListener('resize', checkLayout);
        return () => window.removeEventListener('resize', checkLayout);
    }, [itemsPerViewDesktop, itemsPerViewTablet, itemsPerViewMobile]);

    const maxIndex = Math.max(0, items.length - visibleCount);

    const next = useCallback(() => {
        setCurrentIndex((prev) => {
            if (prev >= maxIndex) return autoPlay ? 0 : maxIndex;
            return prev + 1;
        });
    }, [maxIndex, autoPlay]);

    const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

    // Auto-Play Timer
    useEffect(() => {
        if (!autoPlay || maxIndex === 0) return;

        const timer = setInterval(() => {
            next();
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [autoPlay, autoPlayInterval, maxIndex, next, currentIndex]);

    // Safety fallback: if viewport shifts and current index is out of bounds, reset it
    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [maxIndex, currentIndex]);

    if (!items || items.length === 0) return null;

    return (
        <div className="relative w-full overflow-hidden group pb-12 pt-2">
            {/* Sliding Track */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="shrink-0 px-3"
                        style={{ width: `${100 / visibleCount}%` }}
                    >
                        {renderItem(item, index)}
                    </div>
                ))}
            </div>

            {/* Navigation & Pagination */}
            {items.length > visibleCount && (
                <>
                    <button
                        onClick={prev}
                        disabled={currentIndex === 0 && !autoPlay}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow border border-gray-200 text-gray-800 disabled:opacity-0 opacity-0 group-hover:opacity-100 transition-all z-10 focus:outline-none"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={next}
                        disabled={currentIndex === maxIndex && !autoPlay}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow border border-gray-200 text-gray-800 disabled:opacity-0 opacity-0 group-hover:opacity-100 transition-all z-10 focus:outline-none"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                    
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[var(--accent-teal)] w-6' : 'bg-gray-300 w-2 hover:bg-gray-400'}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}