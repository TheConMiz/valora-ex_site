'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ManagementProfile } from '@/lib/data';

export default function LeadershipCard({ leader }: { leader: ManagementProfile }) {
	const params = useParams();
	const lang = params.lang || 'en'; // Default to English if unresolved

	const firstName = leader.name.split(' ')[0];
	const imageUrl = `/images/MKT-WEB-G16_${firstName}.png`;

	return (
		<div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col p-6 transition-all duration-300 hover:shadow-xl w-full h-full min-h-[420px]">

			<div className="relative w-32 h-32 mx-auto rounded-full border-4 border-gray-50 overflow-hidden shadow-sm mb-6 bg-gray-100 shrink-0">
				<Image
					src={imageUrl}
					alt={`${leader.name} profile picture`}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 128px, 128px"
				/>
			</div>

			<div className="flex flex-col flex-grow text-center">
				<h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
				<p className="text-sm font-semibold text-[var(--accent-teal)] mt-1 mb-4">{leader.title}</p>
				<p className="text-gray-600 text-sm leading-relaxed flex-grow">{leader.bio[0]}</p>
			</div>

			<div className="mt-6 pt-6 border-t border-gray-100 flex flex-col items-center gap-4 shrink-0">
				<Link
					href={`/${lang}/management/${leader.slug}`}
					className="w-full text-center py-2 px-4 bg-gray-50 hover:bg-gray-100 text-sm font-semibold text-gray-800 rounded-lg transition-colors border border-gray-200"
				>
					View Full Profile
				</Link>
			</div>
		</div>
	);
}