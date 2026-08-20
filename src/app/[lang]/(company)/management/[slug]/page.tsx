import { notFound } from 'next/navigation';
import { managementData } from '@/lib/data';
import ContentBlock from '@/components/ContentBlock';

// Tell Next.js to pre-render a page for every slug in our data file
export function generateStaticParams() {
	return managementData.map((profile) => ({
		slug: profile.slug,
	}));
}

export default function ManagementProfilePage({
	params
}: {
	params: { lang: string, slug: string }
}) {
	// Find the specific leader's data
	const profile = managementData.find((p) => p.slug === params.slug);

	if (!profile) {
		notFound(); // Triggers a 404 if the slug doesn't exist
	}

	return (
		<main>
			<ContentBlock
				title={profile.name}
				subtitle={profile.title}
				ctas={[{ href: profile.linkedin, text: 'View LinkedIn Profile', variant: 'secondary' }]}
			>
				{/* Render Bio Paragraphs */}
				{profile.bio.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}

				<h3>Role at ValoraEX</h3>
				<ul>
					{profile.role.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>

				{/* Conditionally render recognition only if it exists */}
				{profile.recognition && profile.recognition.length > 0 && (
					<>
						<h3>Selected Recognition</h3>
						<ul>
							{profile.recognition.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</>
				)}
			</ContentBlock>
		</main>
	);
}