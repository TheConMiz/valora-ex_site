import { notFound } from 'next/navigation';
import { getManagementData } from '@/lib/data';
import { Locale } from '@/lib/dictionaries';
import ContentBlock from '@/components/ContentBlock';
import { Metadata } from 'next';



export function generateStaticParams() {
	// The slugs are universal across languages, so we can generate 
	// the static paths using the default English array.
	const profiles = getManagementData('en');
	return profiles.map((profile) => ({
		slug: profile.slug,
	}));
}

export async function generateMetadata({
	params
}: {
	params: Promise<{ lang: string, slug: string }>
}): Promise<Metadata> {
	const { lang, slug } = await params;
	const profiles = getManagementData(lang as Locale);
	const profile = profiles.find((p) => p.slug === slug);

	return {
		title: profile ? profile.name : 'Profile',
	};
}

// Localized headings and buttons for the dynamic profile page
const profileLabels: Record<Locale, { role: string; recognition: string; linkedin: string }> = {
	'en': { role: 'Role at ValoraEX', recognition: 'Selected Recognition', linkedin: 'View LinkedIn Profile' },
	'zh-hk': { role: '在 ValoraEX 的主要角色', recognition: '主要專業肯定', linkedin: '瀏覽 LinkedIn 檔案' },
	'zh-cn': { role: '在 ValoraEX 的主要角色', recognition: '主要专业肯定', linkedin: '访问 LinkedIn 主页' }
};

export default async function ManagementProfilePage({
	params
}: {
	params: Promise<{ lang: string, slug: string }>
}) {
	const { lang, slug } = await params;
	const locale = lang as Locale;

	// Fetch the localized profile list for the current language
	const profiles = getManagementData(locale);
	const profile = profiles.find((p) => p.slug === slug);

	if (!profile) {
		notFound();
	}

	const labels = profileLabels[locale] || profileLabels['en'];

	return (
		<main>
			<ContentBlock
				title={profile.name}
				subtitle={profile.title}
				isPageHeader={true}
				ctas={[{ href: profile.linkedin, text: labels.linkedin, variant: 'secondary' }]}
			>
				{profile.bio.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}
				<h3 className="mt-8">{labels.role}</h3>

				{/* Render intro paragraph if it exists */}
				{profile.roleIntro && <p>{profile.roleIntro}</p>}

				{/* Render the list only if there are role items */}
				{profile.role && profile.role.length > 0 && (
					<ul className={profile.roleIntro ? "mt-2" : ""}>
						{profile.role.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				)}
			</ContentBlock>
		</main>
	);
}