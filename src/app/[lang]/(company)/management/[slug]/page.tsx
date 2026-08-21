import { notFound } from 'next/navigation';
import { managementData } from '@/lib/data';
import ContentBlock from '@/components/ContentBlock';

export function generateStaticParams() {
	return managementData.map((profile) => ({
		slug: profile.slug,
	}));
}

export default async function ManagementProfilePage({
	params
}: {
	params: Promise<{ lang: string, slug: string }>
}) {
	const { lang, slug } = await params;
	const profile = managementData.find((p) => p.slug === slug);

	if (!profile) {
		notFound();
	}

	return (
		<main>
			<ContentBlock
				title={profile.name}
				subtitle={profile.title}
				ctas={[{ href: profile.linkedin, text: 'View LinkedIn Profile', variant: 'secondary' }]}
			>
				{profile.bio.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}

				<h3>Role at ValoraEX</h3>
				<ul>
					{profile.role.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>

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