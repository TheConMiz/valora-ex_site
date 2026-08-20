'use client';

import { useState } from 'react';
import type { FaqItem } from '@/lib/data';
import styles from './FaqAccordion.module.scss';

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
	const [openId, setOpenId] = useState<string | null>(null);

	const toggleFaq = (id: string) => {
		setOpenId((prevId) => (prevId === id ? null : id));
	};

	return (
		<div className={styles.accordionGroup}>
			{faqs.map((faq) => (
				<div
					key={faq.id}
					className={`${styles.accordionItem} ${openId === faq.id ? styles.open : ''}`}
				>
					<button
						className={styles.accordionTrigger}
						onClick={() => toggleFaq(faq.id)}
						aria-expanded={openId === faq.id}
					>
						<span className={styles.question}>{faq.question}</span>
						<span className={styles.icon}>{openId === faq.id ? '−' : '+'}</span>
					</button>

					<div
						className={styles.accordionPanel}
						hidden={openId !== faq.id}
					>
						{faq.answer.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>
				</div>
			))}
		</div>
	);
}