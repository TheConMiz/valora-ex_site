import Image from 'next/image';
import UniversalCTA from './UniversalCTA';

interface CTAConfig {
	href: string;
	text: string;
	variant?: 'primary' | 'secondary';
}

interface ContentBlockProps {
	title: string;
	subtitle?: string;
	children: React.ReactNode;
	graphicRef?: string;
	ctas?: CTAConfig[];
	reverseLayout?: boolean;
}

// Complete mapping of all MKT-WEB-Gxx graphic references to your public/images/ assets
const imageMap: Record<string, string> = {
	'MKT-WEB-G01': '/images/MKT-WEB-G01_Hero-Connected Asset Governance Journey.png',
	'MKT-WEB-G02': '/images/MKT-WEB-G02_The Practical Execution Gap.png',
	'MKT-WEB-G03': '/images/MKT-WEB-G03_Matching Window.png',
	'MKT-WEB-G04': '/images/MKT-WEB-G04_Upstream Quality Downstream Potential.png',
	'MKT-WEB-G05': '/images/MKT-WEB-G05_End-to-end Asset Transition workflow.png',
	'MKT-WEB-G06': '/images/MKT-WEB-G06_5R Route Framework.png',
	'MKT-WEB-G07': '/images/MKT-WEB-G07_Route Readiness Factors.png',
	'MKT-WEB-G08': '/images/MKT-WEB-G08_V-ONE Workflow Overview.png',
	'MKT-WEB-G09': '/images/MKT-WEB-G09_V-Governance Lifecycle.png',
	'MKT-WEB-G10': '/images/MKT-WEB-G10_Financial-Year Readiness.png',
	'MKT-WEB-G11': '/images/MKT-WEB-G11_Evidence Readiness.png',
	'MKT-WEB-G12': '/images/MKT-WEB-G12_Ecosystem Network.png',
	'MKT-WEB-G14': '/images/MKT-WEB-G14_ValoraEX Strategic Roadmap.png',
	'MKT-WEB-G15': '/images/MKT-WEB-G15_PARTS Values.png',
	'MKT-WEB-G21': '/images/MKT-WEB-G21_Ecosystem Services.png',
};

export default function ContentBlock({
	title,
	subtitle,
	children,
	graphicRef,
	ctas,
	reverseLayout = false
}: ContentBlockProps) {
	
	const resolvedImage = graphicRef ? imageMap[graphicRef] : null;

	return (
		<section className={`animate-fade-in-up opacity-0 flex flex-col md:flex-row gap-12 py-16 px-8 max-w-7xl mx-auto items-center ${reverseLayout ? 'md:flex-row-reverse' : ''}`}>
			<div className="flex-1 w-full">
				<h2 className="text-4xl font-bold mb-2 leading-tight text-[var(--foreground)]">{title}</h2>
				{subtitle && <h3 className="text-xl text-[var(--text-muted)] mb-6 font-medium">{subtitle}</h3>}

				<div className="mb-8 text-lg text-[var(--foreground)] opacity-90 space-y-5 [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:border-l-4 [&>blockquote]:border-[var(--accent-teal)] [&>blockquote]:pl-4 [&>blockquote]:my-8 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2">
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

			{graphicRef && (
				<div className="flex-1 flex justify-center items-center w-full relative min-h-[350px] md:min-h-[450px]">
					{resolvedImage ? (
						<div className="relative w-full h-full min-h-[350px] md:min-h-[450px] rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-white">
							<Image
								src={resolvedImage}
								alt={title}
								fill
								className="object-contain p-2"
								sizes="(max-width: 768px) 100vw, 50vw"
								priority={graphicRef === 'MKT-WEB-G01'}
							/>
						</div>
					) : (
						<div className="w-full min-h-[350px] md:min-h-[450px] bg-[var(--background)] flex flex-col justify-center items-center rounded-lg text-[var(--text-muted)] font-mono text-sm border-2 border-dashed border-gray-300">
							<span>{graphicRef}</span>
							<span className="text-xs mt-2 opacity-70">Asset Pending</span>
						</div>
					)}
				</div>
			)}
		</section>
	);
}