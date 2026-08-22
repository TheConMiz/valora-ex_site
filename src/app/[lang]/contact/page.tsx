import ContentBlock from '@/components/ContentBlock';
import { getDictionary, Locale } from '@/lib/dictionaries';

export default async function ContactPage({
	params
}: {
	params: Promise<{ lang: string }>
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang as Locale);
	const content = dict.contact;

	return (
		<main>
			<ContentBlock 
				title={content.title}
				isPageHeader={true}
				>
				<p className="text-xl mb-8">{content.subtitle}</p>

				<div className="flex flex-col md:flex-row gap-16">
					{/* Form Section */}
					<div className="flex-1">
						<form className="flex flex-col gap-5">
							<input type="text" placeholder={content.form.name_placeholder} className="border border-gray-300 p-3 rounded" required />
							<input type="text" placeholder={content.form.company_placeholder} className="border border-gray-300 p-3 rounded" required />
							<input type="email" placeholder={content.form.email_placeholder} className="border border-gray-300 p-3 rounded" required />
							<input type="tel" placeholder={content.form.phone_placeholder} className="border border-gray-300 p-3 rounded" />
							<select className="border border-gray-300 p-3 rounded bg-white text-gray-700" required defaultValue="">
								<option value="" disabled>{content.form.type_placeholder}</option>
								<option value="corporate">{content.form.types.corporate}</option>
								<option value="v-one">{content.form.types.v_one}</option>
								<option value="v-governance">{content.form.types.v_governance}</option>
								<option value="execution">{content.form.types.execution}</option>
								<option value="partnership">{content.form.types.partnership}</option>
								<option value="general">{content.form.types.general}</option>
							</select>
							<textarea placeholder={content.form.message_placeholder} rows={5} className="border border-gray-300 p-3 rounded" required></textarea>
							<button type="submit" className="bg-[var(--accent-teal)] text-white px-6 py-3 rounded font-semibold w-max hover:bg-[var(--accent-teal-hover)] transition-colors">
								{content.form.submit_btn}
							</button>
						</form>
					</div>

					{/* Contact Details & Legal Section */}
					<div className="flex-1 space-y-8">
						<div>
							<h3 className="font-bold text-lg text-gray-900 mb-1">{content.info.company_name}</h3>
							<p className="mt-4 text-gray-700"><strong>{content.info.email_label}</strong> hello@valoraex.com</p>
						</div>
						<div>
							<p className="font-bold text-gray-900 mb-1">{content.info.address_label}</p>
							<p className="text-gray-700 leading-relaxed whitespace-pre-line">
								{content.info.address}
							</p>
						</div>
						<div className="text-sm text-gray-600 bg-gray-50 p-5 rounded border border-gray-200">
							<p className="font-bold mb-2 text-gray-900">{content.pics.title}</p>
							<p className="leading-relaxed">{content.pics.text}</p>
						</div>
					</div>
				</div>
			</ContentBlock>
		</main>
	);
}