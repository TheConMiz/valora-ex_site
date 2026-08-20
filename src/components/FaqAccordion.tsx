'use client';

import { useState } from 'react';
import type { FaqItem } from '@/lib/data';

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
	const [openId, setOpenId] = useState<string | null>(null);

	const toggleFaq = (id: string) => {
		setOpenId((prevId) => (prevId === id ? null : id));
	};

	return (
		<div className="flex flex-col gap-4 max-w-4xl mx-auto w-full">
			{faqs.map((faq) => (
				<div
					key={faq.id}
					className={`border rounded-md overflow-hidden transition-colors duration-300 ${openId === faq.id ? 'border-gray-400' : 'border-gray-200'}`}
				>
					<button
						className="w-full flex justify-between items-center bg-gray-50 hover:bg-gray-100 p-5 cursor-pointer text-left transition-colors duration-200"
						onClick={() => toggleFaq(faq.id)}
						aria-expanded={openId === faq.id}
					>
						<span className="font-semibold text-gray-900 pr-4 text-lg">{faq.question}</span>
						<span className="text-2xl text-gray-500 leading-none">{openId === faq.id ? '−' : '+'}</span>
					</button>

					<div
						className="p-6 bg-white border-t border-gray-200 text-gray-700 space-y-4"
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