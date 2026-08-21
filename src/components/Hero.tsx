import Image from 'next/image';
import UniversalCTA from './UniversalCTA';

interface CTAConfig {
    href: string;
    text: string;
    variant?: 'primary' | 'secondary';
}

interface HeroProps {
    title: string;
    children?: React.ReactNode;
    imageSrc: string;
    imageAlt: string;
    ctas?: CTAConfig[];
}

export default function Hero({ title, children, imageSrc, imageAlt, ctas }: HeroProps) {
    return (
        <section className="animate-fade-in-up flex flex-col md:flex-row gap-12 py-16 lg:py-24 px-8 max-w-7xl mx-auto items-center w-full">

            {/* Text & CTAs Side */}
            <div className="flex-1 w-full">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[var(--foreground)]">
                    {title}
                </h1>

                <div className="mb-8 text-lg text-[var(--foreground)] opacity-90 space-y-5">
                    {children}
                </div>

                {ctas && ctas.length > 0 && (
                    <div className="flex gap-4 flex-wrap">
                        {ctas.map((cta, index) => (
                            <UniversalCTA key={index} {...cta} />
                        ))}
                    </div>
                )}
            </div>

            {/* Image Side - No borders, shadows, or white box treatments */}
            <div className="flex-1 w-full relative flex justify-center items-center min-h-[350px] md:min-h-[500px]">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-contain"
                    priority /* Prioritize loading the hero image */
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

        </section>
    );
}