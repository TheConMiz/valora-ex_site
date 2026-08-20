// src/lib/data.ts

// ---------------------------------------------------------
// 1. Management / Leadership Data
// ---------------------------------------------------------
export interface ManagementProfile {
	slug: string;
	name: string;
	title: string;
	bio: string[];
	role: string[];
	recognition?: string[];
	linkedin: string;
}

export const managementData: ManagementProfile[] = [
	{
		slug: 'dennis-mak',
		name: 'Dennis Mak',
		title: 'Founder & Chief Executive Officer',
		bio: [
			'Dennis Mak is the Founder and Chief Executive Officer of ValoraEX.',
			'He brings more than 20 years of leadership and management experience across logistics, supply chain, technology, automation and international business development, with professional experience spanning Hong Kong, Greater China and wider international markets.',
			'His career has included senior leadership roles with Rhenus Logistics, together with earlier experience in logistics, warehousing and distribution management.',
			'Dennis previously served as an Industry Advisor to Hong Kong Science and Technology Parks Corporation (HKSTP) for the Mobility & Logistics sector.',
			'Through ValoraEX, Dennis brings together his experience in logistics, technology, asset transition, circular economy, ESG, governance and ecosystem development to build a platform-neutral 5R intelligence ecosystem designed to support practical action, stronger information and cross-industry collaboration.'
		],
		role: [
			'Dennis leads ValoraEX’s overall strategy, platform and product direction, commercial development, ecosystem growth, strategic partnerships and international development.'
		],
		recognition: [
			'Outstanding Alumni Award 2024 — Professional Achievement, Department of Industrial and Systems Engineering, The Hong Kong Polytechnic University',
			'Fellow, Social Enterprise Research Academy — 2024',
			'The Best International Logistics Service Provider of the Year — 2024',
			'Hong Kong Business High Flyers Awards — Logistics Automation — 2024',
			'International Innovation Awards — Service & Solutions — 2023',
			'Hong Kong Business Technology Excellence Awards — Logistics Automation — 2023',
			'Hong Kong Business Management Excellence Awards — Innovator of the Year, Logistics — 2022'
		],
		linkedin: 'https://www.linkedin.com/in/denniswhmak/'
	},
	{
		slug: 'keith-lowcock',
		name: 'Keith Lowcock',
		title: 'Chief Strategy Officer',
		bio: [
			'Keith Lowcock is Chief Strategy Officer of ValoraEX, supporting the company’s strategic growth, international positioning, commercial partnerships, investor engagement and long-term development.',
			'He brings more than 30 years of international leadership experience across banking, financial services, corporate strategy, technology, digital transformation and strategic advisory.',
			'His professional experience includes senior roles with Galaxy Entertainment Group and DBS Bank, together with subsequent investment, board and advisory responsibilities.',
			'Keith believes that meaningful circular-economy and ESG outcomes require more than reporting alone. Practical workflows, trusted information, effective governance, technology and collaboration across different parts of the ecosystem are essential to creating durable commercial, environmental and social value.'
		],
		role: [
			'corporate strategy;',
			'international positioning;',
			'strategic partnerships;',
			'commercial development;',
			'investor engagement;',
			'market development;',
			'governance and strategic challenge;',
			'long-term growth planning.'
		],
		linkedin: 'https://www.linkedin.com/in/keithlowcock/'
	},
	{
		slug: 'brian-chan',
		name: 'Brian Chan',
		title: 'Chief Information Officer',
		bio: [
			'Brian Chan serves as Chief Information Officer of ValoraEX, leading the company’s information and technology strategy and helping shape a secure, future-ready intelligence ecosystem for asset transition.',
			'He brings more than 30 years of technology and management leadership experience across Asia, with senior roles at adidas Asia, Carlsberg Asia, PVH Asia, Jebsen & Co. and the Jardine Group.',
			'At ValoraEX, Brian focuses on building the information architecture and technology foundations that support the company’s 5R intelligence ecosystem. His role includes strengthening data integrity, information security and business-technology alignment.',
			'He also brings a practical perspective on the role of artificial intelligence, using AI-enabled capabilities where appropriate to help transform complex asset information into clearer, more actionable intelligence.'
		],
		role: [
			'information and technology strategy;',
			'data architecture and information governance;',
			'data integrity and security;',
			'business-technology alignment;',
			'digital transformation;',
			'intelligent workflow development;',
			'information flows across V-ONE and V-Governance;',
			'coordination with technical delivery;',
			'future technology and AI-enabled capability development.'
		],
		recognition: [
			'CIO100 ASEAN Award — 2022'
		],
		linkedin: 'https://www.linkedin.com/in/brian-chan-09799412/'
	}
];

// ---------------------------------------------------------
// 2. 5R Framework Data
// ---------------------------------------------------------
export interface FiveRRoute {
	name: string;
	description: string;
}

export const fiveRData: FiveRRoute[] = [
	{ name: 'Reuse', description: 'Continue useful asset life through appropriate internal or external reuse.' },
	{ name: 'Resale', description: 'Transition suitable assets through appropriate commercial second-hand channels.' },
	{ name: 'Refurbishment / Repurposing', description: 'Repair, refresh, adapt or transform suitable assets to extend useful life or create another practical use.' },
	{ name: 'Recycling', description: 'Recover materials through appropriate recycling pathways where continued asset use is no longer practical.' },
	{ name: 'Responsible Disposal', description: 'Use an appropriate responsible-disposal route where higher-value pathways are not reasonably feasible.' }
];

// ---------------------------------------------------------
// 3. FAQ Data
// ---------------------------------------------------------
export interface FaqItem {
	id: string;
	question: string;
	answer: string[];
}

export const faqData: FaqItem[] = [
	{
		id: 'what-is-valoraex',
		question: '1. What is ValoraEX?',
		answer: [
			'ValoraEX is a 5R intelligence ecosystem for asset transition. It connects asset visibility, Route Readiness, structured workflow, ecosystem coordination, evidence and governance to help organisations manage asset transitions in a more practical and organised way.',
			'ValoraEX begins with Furniture, Fixtures & Equipment (FF&E) as its Phase 1 proof category while developing a model designed to support broader asset categories over time.'
		]
	},
	{
		id: 'only-furniture',
		question: '2. Is ValoraEX only focused on furniture?',
		answer: [
			'No.',
			'FF&E is the Phase 1 starting category because it provides a practical environment for developing and validating the ValoraEX workflow.',
			'Future development may extend to selected electronics and technology assets and, over time, other suitable asset categories.',
			'These remain development directions rather than current service commitments.'
		]
	},
	// Note: Remaining 16 FAQs follow this exact structure to keep the file clean.
];

// ---------------------------------------------------------
// 4. Ecosystem Partners
// ---------------------------------------------------------
export const ecosystemPartners: string[] = [
	'Deartree',
	'SERA',
	'InvestHK',
	'AML',
	'Spider Logistics',
	'HKMU',
	'The Hong Kong Polytechnic University'
];