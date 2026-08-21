import Link from 'next/link';

interface UniversalCTAProps {
	href: string;
	text: string;
	variant?: 'primary' | 'secondary';
	className?: string;
}

export default function UniversalCTA({
	href,
	text,
	variant = 'primary',
	className = ''
}: UniversalCTAProps) {
	const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded transition-colors duration-300 font-semibold cursor-pointer text-center";

	// Connected to the official ValoraEX CSS variables
	const primaryStyles = "bg-[var(--accent-teal)] text-white border border-[var(--accent-teal)] hover:bg-[var(--accent-teal-hover)]";
	const secondaryStyles = "bg-transparent text-[var(--foreground)] border border-[var(--foreground)] hover:bg-black/5";

	const appliedStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

	return (
		<Link href={href} className={`${baseStyles} ${appliedStyles} ${className}`}>
			{text}
		</Link>
	);
}