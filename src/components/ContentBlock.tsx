import UniversalCTA from './UniversalCTA';
import styles from './ContentBlock.module.scss';

interface CTAConfig {
	href: string;
	text: string;
	variant?: 'primary' | 'secondary';
}

interface ContentBlockProps {
	title: string;
	subtitle?: string;
	children: React.ReactNode;
	graphicRef?: string; // e.g., "MKT-WEB-G01"
	ctas?: CTAConfig[];
	reverseLayout?: boolean; // Flips text/image order for alternating rows
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
		<section className={`${styles.block} ${reverseLayout ? styles.reverse : ''}`}>
			<div className={styles.textContent}>
				<h2>{title}</h2>
				{subtitle && <h3>{subtitle}</h3>}

				<div className={styles.body}>
					{children}
				</div>

				{ctas && ctas.length > 0 && (
					<div className={styles.ctaGroup}>
						{ctas.map((cta, index) => (
							<UniversalCTA key={index} {...cta} />
						))}
					</div>
				)}
			</div>

			{graphicRef && (
				<div className={styles.graphicContent}>
					{/* Note: This will be replaced with next/image once assets are provided */}
					<div className={styles.placeholderGraphic}>
						<span>{graphicRef}</span>
					</div>
				</div>
			)}
		</section>
	);
}