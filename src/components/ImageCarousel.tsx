'use client';

import Image from 'next/image';
import Carousel from './Carousel';

export default function ImageCarousel({ images, altText }: { images: string[], altText: string }) {
    if (images.length === 0) return null;

    return (
        <div className="w-full h-full min-h-[350px] md:min-h-[450px] flex items-center bg-white rounded-lg">
            <Carousel
                items={images}
                itemsPerViewMobile={1}
                itemsPerViewDesktop={1}
                autoPlay={true}       // Enable auto-play
                autoPlayInterval={4000} // Set rotation speed (4 seconds)
                renderItem={(src, index) => (
                    <div className="relative w-full h-[350px] md:h-[450px]">
                        <Image
                            src={src}
                            alt={`${altText} - slide ${index + 1}`}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                )}
            />
        </div>
    );
}