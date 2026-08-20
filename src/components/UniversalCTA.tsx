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
	const primaryStyles = "bg-black text-white border border-black hover:bg-gray-800";
	const secondaryStyles = "bg-transparent text-black border border-black hover:bg-gray-100";

	const appliedStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

	return (
		<Link href={href} className={`${baseStyles} ${appliedStyles} ${className}`}>
			{text}
		</Link>
	);
}