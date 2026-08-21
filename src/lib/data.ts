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
	{
		id: 'what-are-the-5rs',
		question: '3. What are the 5Rs?',
		answer: [
			'The ValoraEX 5R framework consists of:',
			'• Reuse',
			'• Resale',
			'• Refurbishment / Repurposing',
			'• Recycling',
			'• Responsible Disposal',
			'The appropriate route depends on factors including asset condition, available information, timing, operational feasibility and downstream readiness.'
		]
	},
	{
		id: 'is-donation-a-route',
		question: '4. Is donation one of the 5Rs?',
		answer: [
			'No.',
			'Donation is treated as one possible form of external Reuse.',
			'For example, an appropriate asset may potentially be reused by a community organisation, educational institution or NGO where requirements, condition, timing and operational arrangements align.'
		]
	},
	{
		id: 'what-is-v-one',
		question: '5. What is V-ONE?',
		answer: [
			'ValoraEX ONE (V-ONE) is the project-entry and workflow layer.',
			'It supports a structured asset-transition workflow:',
			'See → Structure → Route → Coordinate → Evidence → Close-Out'
		]
	},
	{
		id: 'what-is-v-governance',
		question: '6. What is V-Governance?',
		answer: [
			'ValoraEX Governance (V-Governance) is the recurring readiness, evidence-quality and lifecycle-visibility layer.',
			'It is designed to help organisations maintain more organised asset-transition information, strengthen evidence discipline and preserve relevant transition history beyond a single project.'
		]
	},
	{
		id: 'v-one-vs-v-governance',
		question: '7. What is the difference between V-ONE and V-Governance?',
		answer: [
			'V-ONE focuses on the workflow for a defined asset-transition project.',
			'V-Governance focuses on maintaining readiness, evidence quality and lifecycle continuity beyond individual projects.',
			'V-ONE activates the workflow. V-Governance sustains readiness, evidence quality and continuity.'
		]
	},
	{
		id: 'execution-services',
		question: '8. Does ValoraEX provide logistics, recycling, refurbishment or other execution services?',
		answer: [
			'ValoraEX provides project-based workflow, on-site support and coordination services, while specialist activities such as transportation, warehousing, recycling, refurbishment or other downstream services are generally delivered by suitable independent providers.',
			'Depending on the agreed scope, ValoraEX may directly support activities such as stocktake, asset information capture, Route Readiness review, project coordination, evidence management and close-out.',
			'Where specialist execution is required, ValoraEX can coordinate appropriate ecosystem providers according to project requirements.'
		]
	},
	{
		id: 'waste-management',
		question: '9. Is ValoraEX a waste-management company?',
		answer: [
			'No.',
			'ValoraEX is not positioned as a waste collector, disposal contractor or traditional waste-management provider.',
			'Its role is to support earlier asset visibility, better Route Readiness, structured 5R decision-making, ecosystem coordination, evidence and governance.'
		]
	},
	{
		id: 'route-readiness',
		question: '10. What is Route Readiness?',
		answer: [
			'Route Readiness considers whether an asset and the available project information are sufficiently prepared for a potential transition route.',
			'Factors can include asset condition, photographs, dimensions or attributes, timing, handling requirements, available information, buyer or recipient requirements, transport feasibility, downstream requirements and evidence needs.'
		]
	},
	{
		id: 'matching-window',
		question: '11. What is the Matching Window?',
		answer: [
			'The Matching Window describes the period in which four factors can align:',
			'Asset Availability + Recipient / Market Demand + Route Readiness + Execution Time',
			'Even when a usable asset and a willing recipient both exist, an opportunity may be lost if there is insufficient time to assess, approve, prepare and coordinate the transition.',
			'Earlier visibility creates more time for better routes to become possible.'
		]
	},
	{
		id: 'fy-readiness',
		question: '12. What is Financial-Year Readiness?',
		answer: [
			'Financial-Year Readiness is the principle that ESG and sustainability-report preparation should not have to begin only at year-end.',
			'Asset information, route decisions and supporting records can be organised progressively during the year so that relevant source information is easier to review later.'
		]
	},
	{
		id: 'guarantee-outcomes',
		question: '13. Does ValoraEX guarantee reuse, resale, recycling or ESG outcomes?',
		answer: [
			'No.',
			'Actual outcomes depend on multiple factors including asset condition, timing, downstream demand, project constraints, operational feasibility and the requirements of independent providers or recipients.',
			'ValoraEX supports structured assessment, workflow, coordination and evidence readiness, but does not guarantee a particular route or ESG outcome.'
		]
	},
	{
		id: 'certify-esg',
		question: '14. Does ValoraEX certify ESG performance?',
		answer: [
			'No.',
			'ValoraEX is not positioned as an ESG certification or independent assurance provider.',
			'Where third-party certification, assurance or another regulated or professional service is required, this would need to be provided by an appropriately qualified independent party.'
		]
	},
	{
		id: 'sustainability-reporting',
		question: '15. Can ValoraEX support ESG or sustainability reporting?',
		answer: [
			'ValoraEX can support the organisation of relevant asset-transition information and available evidence that may contribute to internal ESG or sustainability-report preparation.',
			'The quality and usefulness of that information depends on the underlying records and data available.',
			'ValoraEX does not provide independent assurance of ESG performance unless such services are separately delivered by an appropriately qualified independent provider.'
		]
	},
	{
		id: 'when-to-engage',
		question: '16. When should an organisation engage ValoraEX?',
		answer: [
			'ValoraEX is most useful when organisations engage early enough to create asset visibility, assess Route Readiness and prepare possible transition pathways before the final exit or clearance date.',
			'Earlier engagement generally provides more time to organise information, consider suitable 5R routes, coordinate internal and external parties and prepare relevant evidence.',
			'ValoraEX can also support projects already underway, although available options may be affected by timing, asset condition, information quality and other project constraints.'
		]
	},
	{
		id: 'who-we-work-with',
		question: '17. Who does ValoraEX work with?',
		answer: [
			'Depending on the project, ValoraEX may engage with organisations and ecosystem participants including corporate clients, logistics and execution providers, resale channels, refurbishment specialists, recyclers, community organisations, educational institutions and other relevant professional or industry participants.',
			'ValoraEX maintains a platform-neutral approach and does not treat any single ecosystem provider as exclusive.'
		]
	},
	{
		id: 'how-to-work-with-us',
		question: '18. How can I work with ValoraEX?',
		answer: [
			'Organisations can contact ValoraEX regarding:',
			'• asset-transition projects;',
			'• V-ONE;',
			'• V-Governance;',
			'• Execution & Coordination Services;',
			'• ecosystem collaboration;',
			'• strategic partnership discussions;',
			'• general enquiries.'
		]
	}
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