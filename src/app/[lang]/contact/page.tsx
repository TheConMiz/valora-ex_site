import ContentBlock from '@/components/ContentBlock';

export default function ContactPage() {
  return (
    <main>
      <ContentBlock title="Contact ValoraEX">
        <p className="text-xl mb-8">Tell us about the asset transition, governance requirement or ecosystem capability you would like to discuss.</p>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Form Section */}
          <div className="flex-1">
            <form className="flex flex-col gap-5">
              <input type="text" placeholder="Name" className="border border-gray-300 p-3 rounded" required />
              <input type="text" placeholder="Company / Organisation" className="border border-gray-300 p-3 rounded" required />
              <input type="email" placeholder="Email" className="border border-gray-300 p-3 rounded" required />
              <input type="tel" placeholder="Telephone (optional)" className="border border-gray-300 p-3 rounded" />
              <select className="border border-gray-300 p-3 rounded" required>
                <option value="">Select Enquiry Type...</option>
                <option value="corporate">Corporate / Project Enquiry</option>
                <option value="v-one">V-ONE</option>
                <option value="v-governance">V-Governance</option>
                <option value="execution">Execution & Coordination Services</option>
                <option value="partnership">Ecosystem Partnership</option>
                <option value="general">General Enquiry</option>
              </select>
              <textarea placeholder="Message" rows={5} className="border border-gray-300 p-3 rounded" required></textarea>
              <button type="submit" className="bg-black text-white px-6 py-3 rounded font-semibold w-max hover:bg-gray-800 transition-colors">
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* Contact Details & Legal Section */}
          <div className="flex-1 space-y-8">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-1">ValoraEX Intelligence Ecosystem Limited</h3>
              <p className="text-gray-700">延昇智能生態有限公司</p>
              <p className="mt-4 text-gray-700"><strong>Email:</strong> hello@valoraex.com</p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-1">Address:</p>
              <p className="text-gray-700 leading-relaxed">
                Flat B, 17/F, Yuen Long Hi Tech Centre<br />
                11 Wang Yip Street West<br />
                Yuen Long, New Territories<br />
                Hong Kong
              </p>
            </div>
            <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded border border-gray-100">
              <p className="font-bold mb-2 text-gray-700">Personal Information Collection Statement</p>
              <p>Information submitted through this form will be used by ValoraEX Intelligence Ecosystem Limited for responding to your enquiry, communicating with you and administering any related business discussion. Provision of the information is voluntary; however, we may be unable to respond fully if necessary information is not provided...</p>
            </div>
          </div>
        </div>
      </ContentBlock>
    </main>
  );
}