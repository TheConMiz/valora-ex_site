import Link from 'next/link';
import styles from './UniversalCTA.module.scss';

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
	return (
		<Link href={href} className={`${styles.cta} ${styles[variant]} ${className}`}>
			{text}
		</Link>
	);
}