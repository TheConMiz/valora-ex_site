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

export default function ContentBlock({
	title,
	subtitle,
	children,
	graphicRef,
	ctas,
	reverseLayout = false
}: ContentBlockProps) {
	return (
		<section className={`flex flex-col md:flex-row gap-12 py-16 px-8 max-w-7xl mx-auto items-center ${reverseLayout ? 'md:flex-row-reverse' : ''}`}>
			<div className="flex-1 w-full">
				<h2 className="text-4xl font-bold mb-2 leading-tight text-gray-900">{title}</h2>
				{subtitle && <h3 className="text-xl text-gray-600 mb-6 font-medium">{subtitle}</h3>}

				{/* We use standard spacing for paragraphs, lists, and blockquotes passed as children */}
				<div className="mb-8 text-lg text-gray-700 space-y-5 [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:pl-4 [&>blockquote]:my-8 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2">
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
				<div className="flex-1 flex justify-center items-center w-full">
					<div className="w-full min-h-[350px] bg-gray-100 flex justify-center items-center rounded-lg text-gray-500 font-mono text-sm border border-gray-200">
						<span>{graphicRef}</span>
					</div>
				</div>
			)}
		</section>
	);
}