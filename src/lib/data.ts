import type { Locale } from './dictionaries';

// ---------------------------------------------------------
// 1. Management / Leadership Data
// ---------------------------------------------------------
import type { Locale } from './dictionaries';

// ---------------------------------------------------------
// 1. Management / Leadership Data
// ---------------------------------------------------------
export interface ManagementProfile {
	slug: string;
	name: string;
	title: string;
	summary: string;
	bio: string[];
	role: string[];
	recognition?: string[];
	linkedin: string;
}

const managementDictionary: Record<Locale, ManagementProfile[]> = {
	'en': [
		{
			slug: 'dennis-mak',
			name: 'Dennis Mak',
			title: 'Founder & Chief Executive Officer',
			summary: 'Dennis brings more than 20 years of leadership experience across logistics, supply chain, automation, technology and international business development. A former senior leader with Rhenus Logistics, he previously served as an Industry Advisor to HKSTP for the Mobility & Logistics sector and has received professional recognition from PolyU and industry organisations.',
			bio: [
				'Dennis Mak is the Founder and Chief Executive Officer of ValoraEX.',
				'He brings more than 20 years of leadership and management experience across logistics, supply chain, technology, automation and international business development, with professional experience spanning Hong Kong, Greater China and wider international markets.',
				'His career has included senior leadership roles with Rhenus Logistics, together with earlier experience in logistics, warehousing and distribution management. Across his career, Dennis has worked at the intersection of operational execution, commercial development, technology adoption and organisational transformation, giving him a practical understanding of how better information, preparation and coordination can influence business outcomes.',
				'Dennis previously served as an Industry Advisor to Hong Kong Science and Technology Parks Corporation (HKSTP) for the Mobility & Logistics sector, supporting start-ups and the wider logistics-technology innovation ecosystem.',
				'His cross-disciplinary academic and professional background spans knowledge and technology management, operations and supply chain, global business, public administration and management. This combination has shaped his approach to connecting business execution with technology, governance, sustainability and ecosystem development.',
				'Dennis has also received recognition for his professional leadership, innovation and industry contribution, including being named an Outstanding Alumni of The Hong Kong Polytechnic University, becoming a Fellow of the Social Enterprise Research Academy in 2024, and receiving a number of industry awards relating to logistics, automation, innovation and management excellence.',
				'A core principle behind his work is Creating Shared Value — developing practical ways to connect commercial value with wider environmental and social outcomes.',
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
			summary: 'Keith brings more than 30 years of international leadership experience across banking, financial services, technology, digital transformation and business strategy, with professional experience spanning Europe and Asia. At ValoraEX, he supports strategic growth, international positioning, commercial partnerships, investor engagement and long-term development.',
			bio: [
				'Keith Lowcock is Chief Strategy Officer of ValoraEX, supporting the company’s strategic growth, international positioning, commercial partnerships, investor engagement and long-term development.',
				'He brings more than 30 years of international leadership experience across banking, financial services, corporate strategy, technology, digital transformation and strategic advisory. Throughout his career, Keith has worked with global financial institutions, multinational organisations, executive teams and boards, helping organisations navigate complex change, strengthen governance and develop sustainable growth strategies.',
				'His professional experience includes senior roles with Galaxy Entertainment Group and DBS Bank, together with subsequent investment, board and advisory responsibilities. His career has given him broad exposure to corporate strategy, finance, governance, transformation, investment, stakeholder engagement and cross-border business development across Europe and Asia.',
				'Keith also brings board-level experience through non-executive and advisory roles, contributing to strategy, governance, risk, digital transformation and organisational development. This combination of corporate, financial and board experience provides ValoraEX with an important external perspective as the company develops its business model, partnerships and international positioning.',
				'Keith believes that meaningful circular-economy and ESG outcomes require more than reporting alone. Practical workflows, trusted information, effective governance, technology and collaboration across different parts of the ecosystem are essential to creating durable commercial, environmental and social value.',
				'At ValoraEX, he helps connect long-term corporate strategy with commercial development, strategic partnerships, investor engagement and international market development.',
				'Through his role, Keith supports ValoraEX in building a commercially credible, internationally relevant and scalable circular-economy ecosystem designed to create long-term value for organisations, communities and wider stakeholders.'
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
			summary: 'Brian leads ValoraEX’s information and technology strategy, helping shape a secure, future-ready intelligence ecosystem for asset transition. He brings more than 30 years of technology and management leadership experience across Asia.',
			bio: [
				'Brian Chan serves as Chief Information Officer of ValoraEX, leading the company’s information and technology strategy and helping shape a secure, future-ready intelligence ecosystem for asset transition.',
				'He brings more than 30 years of technology and management leadership experience across Asia, with senior roles at adidas Asia, Carlsberg Asia, PVH Asia, Jebsen & Co. and the Jardine Group. His experience spans technology strategy, innovation, digital transformation and the delivery of enterprise technology initiatives across diverse Asian markets. In recognition of his industry leadership, Brian received the CIO100 ASEAN Award in 2022.',
				'At ValoraEX, Brian focuses on building the information architecture and technology foundations that support the company’s 5R intelligence ecosystem. His role includes strengthening data integrity, information security and business-technology alignment while helping develop intelligent workflows that support asset visibility, monitoring and decision-making from onboarding through transition and close-out.',
				'He also brings a practical perspective on the role of artificial intelligence, using AI-enabled capabilities where appropriate to help transform complex asset information into clearer, more actionable intelligence.',
				'Through this work, Brian supports the continued development of ValoraEX as a scalable, technology-enabled and platform-neutral ecosystem, while maintaining the enterprise discipline required for responsible data use, governance and future growth.'
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
	],
	'zh-hk': [
		{
			slug: 'dennis-mak',
			name: 'Dennis Mak',
			title: '創辦人兼行政總裁',
			summary: 'Dennis 擁有超過 20 年物流、供應鏈、自動化、科技及國際商業發展的領導經驗，曾於 Rhenus Logistics 擔任高級管理職務，亦曾擔任香港科技園公司（HKSTP）物流及移動領域業界顧問，並曾獲香港理工大學及多個業界機構肯定。',
			bio: [
				'Dennis Mak 是 ValoraEX 的創辦人兼行政總裁。',
				'他擁有超過 20 年領導及管理經驗，涵蓋物流、供應鏈、科技、自動化及國際商業發展，專業經驗橫跨香港、大中華區及更廣泛的國際市場。',
				'Dennis 的職業生涯包括於 Rhenus Logistics 擔任高級管理職務，以及早期於物流、倉儲及配送管理方面累積的實務經驗。他長期工作於營運執行、商業發展、科技應用及企業轉型的交匯點，對資訊質素、項目準備及協調如何影響實際商業成果具備深入而務實的理解。',
				'Dennis 曾擔任香港科技園公司（HKSTP）物流及移動領域業界顧問，支援初創企業及更廣泛的物流科技創新生態系統發展。',
				'他的跨學科學術及專業背景涵蓋知識及科技管理、營運與供應鏈、環球商業、公共行政及管理。這種跨領域經驗，塑造了他將商業執行與科技、治理、可持續發展及生態系統發展連結起來的思維。',
				'Dennis 的專業領導、創新及業界貢獻亦獲得不同方面的肯定，包括獲選為香港理工大學傑出校友、於 2024 年成為社會企業研究院院士，以及獲得多項與物流、自動化、創新及管理卓越相關的業界獎項。',
				'Dennis 的核心理念之一是創造共享價值（Creating Shared Value），希望以實際方式將商業價值與更廣泛的環境及社會成果連結起來。',
				'透過 ValoraEX，Dennis 將物流、科技、資產轉型、循環經濟、ESG、治理及生態系統發展經驗結合，建立一個平台中立的 5R 智能生態系統，以支援實際行動、更完善的資訊及跨行業協作。'
			],
			role: [
				'Dennis 負責 ValoraEX 的整體策略、平台及產品方向、商業發展、生態系統成長、策略合作及國際發展。'
			],
			recognition: [
				'理大工業及系統工程學系傑出校友專業成就獎 — 2024',
				'社會企業研究院院士 — 2024',
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
			title: '首席策略官',
			summary: 'Keith 擁有超過 30 年國際領導經驗，涵蓋銀行、金融服務、科技、數碼轉型及商業策略，專業經驗橫跨歐洲及亞洲。在 ValoraEX，他支援策略發展、國際定位、商業合作、投資者交流及長期發展。',
			bio: [
				'Keith Lowcock 擔任 ValoraEX 首席策略官，支援公司的策略增長、國際定位、商業合作、投資者交流及長期發展。',
				'他擁有超過 30 年國際領導經驗，專業領域涵蓋銀行、金融服務、企業策略、科技、數碼轉型及策略顧問。Keith 在其職業生涯中曾與全球金融機構、跨國企業、高級管理團隊及董事會合作，協助企業應對複雜轉型、加強治理，並建立可持續的長期發展策略。',
				'他的專業經驗包括於 Galaxy Entertainment Group 及 DBS Bank 擔任高級職務，其後亦參與投資、董事會及策略顧問工作。這些經驗讓 Keith 在企業策略、金融、治理、企業轉型、投資、持份者協作及跨境商業發展方面累積了廣泛經驗，並橫跨歐洲及亞洲市場。',
				'Keith 亦擁有非執行董事及顧問經驗，參與企業策略、治理、風險、數碼轉型及組織發展。這種結合企業、金融及董事會層面的經驗，為 ValoraEX 在商業模式、合作夥伴關係及國際定位方面的發展提供重要的外部視角。',
				'Keith 認為，真正具意義的循環經濟及 ESG 成果，不能單靠報告產生。實際工作流程、可信資訊、有效治理、科技及整個生態系統內不同參與者之間的協作，都是建立持久商業、環境及社會價值的重要基礎。',
				'在 ValoraEX，Keith 協助將長期企業策略與商業發展、策略合作、投資者交流及國際市場發展連結起來。',
				'透過其角色，Keith 支援 ValoraEX 建立一個具商業可信度、國際視野及擴展能力的循環經濟生態系統，為企業、社區及更廣泛持份者創造長期價值。'
			],
			role: [
				'企業策略；',
				'國際定位；',
				'策略合作；',
				'商業發展；',
				'投資者交流；',
				'市場發展；',
				'治理及策略挑戰；',
				'長期增長規劃。'
			],
			linkedin: 'https://www.linkedin.com/in/keithlowcock/'
		},
		{
			slug: 'brian-chan',
			name: 'Brian Chan',
			title: '首席資訊官',
			summary: 'Brian 負責 ValoraEX 的資訊及科技策略，協助建立一個安全、具前瞻性並支援資產轉型的智能生態系統。他擁有超過 30 年亞洲區科技及管理領導經驗。',
			bio: [
				'Brian Chan 擔任 ValoraEX 首席資訊官，負責公司的資訊及科技策略，並協助建立一個安全、具前瞻性、支援資產轉型的智能生態系統。',
				'Brian 擁有超過 30 年亞洲區科技及管理領導經驗，曾於 adidas Asia、Carlsberg Asia、PVH Asia、Jebsen & Co. 及 Jardine Group 擔任高級管理職務。他的專業經驗涵蓋科技策略、創新、數碼轉型，以及在亞洲不同市場推動企業級科技項目。Brian 並於 2022 年獲得 CIO100 ASEAN Award，肯定其在科技領導及業界發展方面的貢獻。',
				'在 ValoraEX，Brian 專注建立支援公司 5R 智能生態系統的資訊架構及科技基礎。他負責加強數據完整性、資訊安全及商業與科技之間的協調，並推動智能工作流程發展，支援由資產導入、轉型至項目收結各階段的資產可視性、監察及決策。',
				'他亦以務實角度看待人工智能的應用，在合適情況下運用 AI 能力，協助將複雜的資產資訊轉化為更清晰、更具行動價值的情報。',
				'透過這些工作，Brian 支援 ValoraEX 持續發展成為一個具擴展能力、科技驅動並保持平台中立的生態系統，同時維持企業級的數據管理、資訊安全、治理及負責任科技應用標準。'
			],
			role: [
				'資訊及科技策略；',
				'數據架構及資訊治理；',
				'數據完整性及資訊安全；',
				'商業與科技協調；',
				'數碼轉型；',
				'智能工作流程發展；',
				'V-ONE 及 V-Governance 的資訊流程；',
				'與技術交付團隊協調；',
				'未來科技及 AI 能力發展。'
			],
			recognition: [
				'CIO100 ASEAN Award — 2022'
			],
			linkedin: 'https://www.linkedin.com/in/brian-chan-09799412/'
		}
	],
	'zh-cn': [
		{
			slug: 'dennis-mak',
			name: 'Dennis Mak',
			title: '创办人兼行政总裁',
			summary: 'Dennis 拥有超过 20 年物流、供应链、自动化、科技及国际商业发展的领导经验，曾于 Rhenus Logistics 担任高级管理职务，也曾担任香港科技园公司（HKSTP）物流及移动领域行业顾问，并曾获得香港理工大学及多个行业机构肯定。',
			bio: [
				'Dennis Mak 是 ValoraEX 的创办人兼行政总裁。',
				'他拥有超过 20 年领导及管理经验，涵盖物流、供应链、科技、自动化及国际商业发展，专业经验横跨香港、大中华区及更广泛的国际市场。',
				'Dennis 的职业生涯包括于 Rhenus Logistics 担任高级管理职务，以及早期在物流、仓储及配送管理方面积累的实务经验。他长期工作于运营执行、商业发展、科技应用及企业转型的交汇点，对信息质量、项目准备及协调如何影响实际商业成果具备深入而务实的理解。',
				'Dennis 曾担任香港科技园公司（HKSTP）物流及移动领域行业顾问，支持初创企业及更广泛的物流科技创新生态系统发展。',
				'他的跨学科学术及专业背景涵盖知识及科技管理、运营与供应链、全球商业、公共行政及管理。这种跨领域经验，塑造了他将商业执行与科技、治理、可持续发展及生态系统发展连接起来的思维。',
				'Dennis 的专业领导、创新及行业贡献也获得不同方面的肯定，包括获选为香港理工大学杰出校友、于 2024 年成为社会企业研究院院士，以及获得多项与物流、自动化、创新及管理卓越相关的行业奖项。',
				'Dennis 的核心理念之一是创造共享价值（Creating Shared Value），希望以实际方式将商业价值与更广泛的环境及社会成果连接起来。',
				'通过 ValoraEX，Dennis 将物流、科技、资产转型、循环经济、ESG、治理及生态系统发展经验结合，建立一个平台中立的 5R 智能生态系统，以支持实际行动、更完善的信息及跨行业协作。'
			],
			role: [
				'Dennis 负责 ValoraEX 的整体战略、平台及产品方向、商业发展、生态系统增长、战略合作及国际发展。'
			],
			recognition: [
				'理大工业及系统工程学系杰出校友专业成就奖 — 2024',
				'社会企业研究院院士 — 2024',
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
			title: '首席战略官',
			summary: 'Keith 拥有超过 30 年国际领导经验，涵盖银行、金融服务、科技、数字化转型及商业战略，专业经验横跨欧洲及亚洲。在 ValoraEX，他支持战略发展、国际定位、商业合作、投资者交流及长期发展。',
			bio: [
				'Keith Lowcock 担任 ValoraEX 首席战略官，支持公司的战略增长、国际定位、商业合作、投资者交流及长期发展。',
				'他拥有超过 30 年国际领导经验，专业领域涵盖银行、金融服务、企业战略、科技、数字化转型及战略顾问。Keith 在其职业生涯中曾与全球金融机构、跨国企业、高级管理团队及董事会合作，帮助企业应对复杂转型、加强治理，并建立可持续的长期发展战略。',
				'他的专业经验包括于 Galaxy Entertainment Group 及 DBS Bank 担任高级职务，其后也参与投资、董事会及战略顾问工作。这些经验让 Keith 在企业战略、金融、治理、企业转型、投资、利益相关方协作及跨境商业发展方面积累了广泛经验，并横跨欧洲及亚洲市场。',
				'Keith 也拥有非执行董事及顾问经验，参与企业战略、治理、风险、数字化转型及组织发展。这种结合企业、金融及董事会层面的经验，为 ValoraEX 在商业模式、合作伙伴关系及国际定位方面的发展提供重要的外部视角。',
				'Keith 认为，真正具有意义的循环经济及 ESG 成果，不能单靠报告产生。实际工作流程、可信信息、有效治理、科技及整个生态系统内不同参与方之间的协作，都是建立持久商业、环境及社会价值的重要基础。',
				'在 ValoraEX，Keith 协助将长期企业战略与商业发展、战略合作、投资者交流及国际市场发展连接起来。',
				'通过其角色，Keith 支持 ValoraEX 建立一个具有商业可信度、国际视野及扩展能力的循环经济生态系统，为企业、社区及更广泛利益相关方创造长期价值。'
			],
			role: [
				'企业战略；',
				'国际定位；',
				'战略合作；',
				'商业发展；',
				'投资者交流；',
				'市场发展；',
				'治理及战略挑战；',
				'长期增长规划。'
			],
			linkedin: 'https://www.linkedin.com/in/keithlowcock/'
		},
		{
			slug: 'brian-chan',
			name: 'Brian Chan',
			title: '首席信息官',
			summary: 'Brian 负责 ValoraEX 的信息及科技战略，协助建立一个安全、具前瞻性并支持资产转型的智能生态系统。他拥有超过 30 年亚洲区科技及管理领导经验。',
			bio: [
				'Brian Chan 担任 ValoraEX 首席信息官，负责公司的信息及科技战略，并协助建立一个安全、具前瞻性、支持资产转型的智能生态系统。',
				'Brian 拥有超过 30 年亚洲区科技及管理领导经验，曾于 adidas Asia、Carlsberg Asia、PVH Asia、Jebsen & Co. 及 Jardine Group 担任高级管理职务。他的专业经验涵盖科技战略、创新、数字化转型，以及在亚洲不同市场推动企业级科技项目。Brian 并于 2022 年获得 CIO100 ASEAN Award，肯定其在科技领导及行业发展方面的贡献。',
				'在 ValoraEX，Brian 专注建立支持公司 5R 智能生态系统的信息架构及科技基础。他负责加强数据完整性、信息安全及商业与科技之间的协调，并推动智能工作流程发展，支持从资产导入、转型至项目收结各阶段的资产可视性、监控及决策。',
				'他也以务实角度看待人工智能的应用，在合适情况下运用 AI 能力，协助将复杂的资产信息转化为更清晰、更具行动价值的智能信息。',
				'通过这些工作，Brian 支持 ValoraEX 持续发展成为一个具有扩展能力、科技驱动并保持平台中立的生态系统，同时维持企业级的数据管理、信息安全、治理及负责任科技应用标准。'
			],
			role: [
				'信息及科技战略；',
				'数据架构及信息治理；',
				'数据完整性及信息安全；',
				'商业与科技协调；',
				'数字化转型；',
				'智能工作流程发展；',
				'V-ONE 及 V-Governance 的信息流程；',
				'与技术交付团队协调；',
				'未来科技及 AI 能力发展。'
			],
			recognition: [
				'CIO100 ASEAN Award — 2022'
			],
			linkedin: 'https://www.linkedin.com/in/brian-chan-09799412/'
		}
	]
};

export const getManagementData = (lang: Locale): ManagementProfile[] => managementDictionary[lang] || managementDictionary['en'];
// ---------------------------------------------------------
// 2. FAQ Data
// ---------------------------------------------------------
export interface FaqItem {
	id: string;
	question: string;
	answer: string[];
}

const faqDictionary: Record<Locale, FaqItem[]> = {
	'en': [
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
			id: 'is-donation-an-r',
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
			id: 'difference-v-one-v-governance',
			question: '7. What is the difference between V-ONE and V-Governance?',
			answer: [
				'V-ONE focuses on the workflow for a defined asset-transition project.',
				'V-Governance focuses on maintaining readiness, evidence quality and lifecycle continuity beyond individual projects.',
				'V-ONE activates the workflow. V-Governance sustains readiness, evidence quality and continuity.'
			]
		},
		{
			id: 'provide-execution-services',
			question: '8. Does ValoraEX provide logistics, recycling, refurbishment or other execution services?',
			answer: [
				'ValoraEX provides project-based workflow, on-site support and coordination services, while specialist activities such as transportation, warehousing, recycling, refurbishment or other downstream services are generally delivered by suitable independent providers.',
				'Depending on the agreed scope, ValoraEX may directly support activities such as stocktake, asset information capture, Route Readiness review, project coordination, evidence management and close-out.',
				'Where specialist execution is required, ValoraEX can coordinate appropriate ecosystem providers according to project requirements.'
			]
		},
		{
			id: 'is-waste-management-company',
			question: '9. Is ValoraEX a waste-management company?',
			answer: [
				'No.',
				'ValoraEX is not positioned as a waste collector, disposal contractor or traditional waste-management provider.',
				'Its role is to support earlier asset visibility, better Route Readiness, structured 5R decision-making, ecosystem coordination, evidence and governance.'
			]
		},
		{
			id: 'what-is-route-readiness',
			question: '10. What is Route Readiness?',
			answer: [
				'Route Readiness considers whether an asset and the available project information are sufficiently prepared for a potential transition route.',
				'Factors can include asset condition, photographs, dimensions or attributes, timing, handling requirements, available information, buyer or recipient requirements, transport feasibility, downstream requirements and evidence needs.'
			]
		},
		{
			id: 'what-is-matching-window',
			question: '11. What is the Matching Window?',
			answer: [
				'The Matching Window describes the period in which four factors can align:',
				'Asset Availability + Recipient / Market Demand + Route Readiness + Execution Time',
				'Even when a usable asset and a willing recipient both exist, an opportunity may be lost if there is insufficient time to assess, approve, prepare and coordinate the transition.',
				'Earlier visibility creates more time for better routes to become possible.'
			]
		},
		{
			id: 'what-is-financial-year-readiness',
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
			id: 'provide-esg-certification',
			question: '14. Does ValoraEX certify ESG performance?',
			answer: [
				'No.',
				'ValoraEX is not positioned as an ESG certification or independent assurance provider.',
				'Where third-party certification, assurance or another regulated or professional service is required, this would need to be provided by an appropriately qualified independent party.'
			]
		},
		{
			id: 'support-esg-reporting',
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
			id: 'who-do-you-work-with',
			question: '17. Who does ValoraEX work with?',
			answer: [
				'Depending on the project, ValoraEX may engage with organisations and ecosystem participants including corporate clients, logistics and execution providers, resale channels, refurbishment specialists, recyclers, community organisations, educational institutions and other relevant professional or industry participants.',
				'ValoraEX maintains a platform-neutral approach and does not treat any single ecosystem provider as exclusive.'
			]
		},
		{
			id: 'how-to-work-with-valoraex',
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
	],
	'zh-hk': [
		{
			id: 'what-is-valoraex',
			question: '1. ValoraEX 是甚麼？',
			answer: [
				'ValoraEX 是一個為資產轉型而建立的 5R 智能生態系統，連結資產可視性、路徑準備度、結構化工作流程、生態協調、證據及治理，協助企業以更實際及有系統的方式管理資產轉型。',
				'ValoraEX 以家具、固定裝置及設備（FF&E）作為第一階段的驗證類別，同時建立一套可逐步支援更廣泛資產類別的模式。'
			]
		},
		{
			id: 'only-furniture',
			question: '2. ValoraEX 是否只專注於家具？',
			answer: [
				'不是。',
				'FF&E 是第一階段的起點，讓我們在實際項目環境中建立及驗證 ValoraEX 工作流程。',
				'未來發展方向可包括精選電子及科技資產，並在合適情況下逐步延伸至其他資產類別。',
				'這些屬於發展方向，並不代表目前已經提供相關完整服務。'
			]
		},
		{
			id: 'what-are-the-5rs',
			question: '3. 甚麼是 5R？',
			answer: [
				'ValoraEX 的 5R 框架包括：',
				'• 重用；',
				'• 轉售；',
				'• 翻新／再用途；',
				'• 回收；',
				'• 負責任處置。',
				'合適的路徑取決於資產狀況、現有資訊、時間、實際操作可行性及下游準備度等因素。'
			]
		},
		{
			id: 'is-donation-an-r',
			question: '4. 捐贈是否屬於其中一個 R？',
			answer: [
				'不是。',
				'捐贈是外部重用的一種可能形式，而不是第六個 R。',
				'例如，當資產狀況、時間、需求及實際操作安排合適時，相關資產可考慮由社區機構、教育機構或非政府組織繼續使用。'
			]
		},
		{
			id: 'what-is-v-one',
			question: '5. 甚麼是 V-ONE？',
			answer: [
				'ValoraEX ONE（V-ONE）是項目啟動及工作流程層。',
				'其結構化資產轉型流程為：',
				'看清楚 → 建立結構 → 路徑分配 → 協調 → 證據 → 項目收結'
			]
		},
		{
			id: 'what-is-v-governance',
			question: '6. 甚麼是 V-Governance？',
			answer: [
				'ValoraEX Governance（V-Governance）是持續準備度、證據品質及生命週期可視性治理層。',
				'它協助企業在單一項目完成後，繼續維持更有組織的資產轉型資訊、證據管理及相關生命週期記錄。'
			]
		},
		{
			id: 'difference-v-one-v-governance',
			question: '7. V-ONE 與 V-Governance 有甚麼分別？',
			answer: [
				'V-ONE 主要處理特定資產轉型項目的工作流程。',
				'V-Governance 則著重於單一項目以外的持續準備度、證據品質及生命週期連續性。',
				'V-ONE 啟動工作流程；V-Governance 延續準備度、證據品質及治理連續性。'
			]
		},
		{
			id: 'provide-execution-services',
			question: '8. ValoraEX 是否提供物流、回收、翻新或其他執行服務？',
			answer: [
				'ValoraEX 以項目形式提供工作流程、現場支援及協調服務，而運輸、倉儲、回收、翻新或其他下游專業活動，一般由合適的獨立服務供應商提供。',
				'視乎協定的項目範圍，ValoraEX 可直接支援資產盤點、資產資訊收集、路徑準備度檢視、項目協調、證據管理及項目收結等工作。',
				'當項目需要專業執行服務時，ValoraEX 可按項目要求協調合適的生態服務供應商。'
			]
		},
		{
			id: 'is-waste-management-company',
			question: '9. ValoraEX 是廢物管理公司嗎？',
			answer: [
				'不是。',
				'ValoraEX 並不是廢物收集商、處置承辦商或傳統廢物管理服務供應商。',
				'我們的角色是支援更早的資產可視性、更好的路徑準備度、更有結構的 5R 決策、生態協調、證據及治理。'
			]
		},
		{
			id: 'what-is-route-readiness',
			question: '10. 甚麼是路徑準備度？',
			answer: [
				'路徑準備度是指評估一件資產及相關項目資訊，是否已具備足夠條件進入某一個潛在轉型路徑。',
				'相關因素可以包括資產狀況、相片、尺寸或其他屬性、時間、搬運要求、現有資訊、買家或接收方要求、運輸可行性、下游要求及證據需要。'
			]
		},
		{
			id: 'what-is-matching-window',
			question: '11. 甚麼是配對窗口？',
			answer: [
				'配對窗口是指以下四個因素能夠同時配合的時間窗口：',
				'資產供應 + 接收方／市場需求 + 路徑準備度 + 執行時間',
				'即使有可使用的資產，同時亦有願意接收的一方，如果沒有足夠時間進行評估、批准、準備及協調，實際機會仍然可能消失。',
				'越早取得資產可視性，就越有時間讓更好的路徑成為可能。'
			]
		},
		{
			id: 'what-is-financial-year-readiness',
			question: '12. 甚麼是財政年度準備度？',
			answer: [
				'財政年度準備度的核心概念是：ESG 及可持續發展報告準備，不應只在年結時才開始。',
				'資產資訊、路徑決策及相關記錄可以在全年不同項目中逐步整理，令日後進行內部檢視、ESG 報告或可持續發展報告準備時，更容易取得及理解相關來源資訊。'
			]
		},
		{
			id: 'guarantee-outcomes',
			question: '13. ValoraEX 是否保證重用、轉售、回收或 ESG 成果？',
			answer: [
				'不會。',
				'實際成果受到多項因素影響，包括資產狀況、時間、下游需求、項目限制、實際操作可行性，以及獨立服務供應商或接收方的要求。',
				'ValoraEX 支援結構化評估、工作流程、協調及證據準備度，但不保證任何特定路徑或 ESG 成果。'
			]
		},
		{
			id: 'provide-esg-certification',
			question: '14. ValoraEX 是否提供 ESG 認證？',
			answer: [
				'不提供。',
				'ValoraEX 並不是 ESG 認證機構或獨立鑑證服務供應商。',
				'如項目需要第三方認證、鑑證或其他受規管／專業服務，應由具備相關資格的獨立機構或專業人士提供。'
			]
		},
		{
			id: 'support-esg-reporting',
			question: '15. ValoraEX 可以支援 ESG 或可持續發展報告嗎？',
			answer: [
				'ValoraEX 可以協助企業整理相關資產轉型資訊及現有證據，為內部 ESG 或可持續發展報告準備提供更有結構的來源資料。',
				'相關資訊的質素及用途取決於實際可取得的原始資料及記錄。',
				'ValoraEX 本身不提供 ESG 表現的獨立鑑證；如有需要，相關服務應由具備適當資格的獨立服務供應商另行提供。'
			]
		},
		{
			id: 'when-to-engage',
			question: '16. 企業應在甚麼時候與 ValoraEX 開始合作？',
			answer: [
				'當企業能夠在最終退出、搬遷或清場日期之前，及早建立資產可視性、檢視路徑準備度及考慮可能的資產轉型路徑時，ValoraEX 能夠發揮更大的作用。',
				'越早開始，通常越有時間整理資訊、考慮合適的 5R 路徑、協調內外部相關單位，以及準備所需證據。',
				'ValoraEX 亦可支援已經開始的項目，但實際可行的選項可能會受到時間、資產狀況、資訊質素及其他項目限制影響。'
			]
		},
		{
			id: 'who-do-you-work-with',
			question: '17. ValoraEX 與哪些機構合作？',
			answer: [
				'視乎項目需要，ValoraEX 可與不同企業及生態參與者合作，包括企業客戶、物流及執行服務供應商、轉售渠道、翻新專業機構、回收服務供應商、社區機構、教育機構及其他相關專業或業界參與者。',
				'ValoraEX 保持平台中立，並不將任何單一生態服務供應商設定為獨家合作方。'
			]
		},
		{
			id: 'how-to-work-with-valoraex',
			question: '18. 如何與 ValoraEX 合作？',
			answer: [
				'企業及機構可以就以下範疇與 ValoraEX 聯絡：',
				'• 資產轉型項目；',
				'• V-ONE；',
				'• V-Governance；',
				'• 執行及協調服務；',
				'• 生態合作；',
				'• 策略合作；',
				'• 一般查詢。'
			]
		}
	],
	'zh-cn': [
		{
			id: 'what-is-valoraex',
			question: '1. ValoraEX 是什么？',
			answer: [
				'ValoraEX 是一个为资产转型而建立的 5R 智能生态系统，连接资产可视性、路径准备度、结构化工作流程、生态协调、证据及治理，帮助企业以更实际及有系统的方式管理资产转型。',
				'ValoraEX 以家具、固定装置及设备（FF&E）作为第一阶段的验证类别，同时建立一套可逐步支持更广泛资产类别的模式。'
			]
		},
		{
			id: 'only-furniture',
			question: '2. ValoraEX 是否只专注于家具？',
			answer: [
				'不是。',
				'FF&E 是第一阶段的起点，让我们在实际项目环境中建立及验证 ValoraEX 工作流程。',
				'未来发展方向可包括精选电子及科技资产，并在合适情况下逐步延伸至其他资产类别。',
				'这些属于发展方向，并不代表目前已经提供相关完整服务。'
			]
		},
		{
			id: 'what-are-the-5rs',
			question: '3. 什么是 5R？',
			answer: [
				'ValoraEX 的 5R 框架包括：',
				'• 重用；',
				'• 转售；',
				'• 翻新／再用途；',
				'• 回收；',
				'• 负责任处置。',
				'合适的路径取决于资产状况、现有信息、时间、实际操作可行性及下游准备度等因素。'
			]
		},
		{
			id: 'is-donation-an-r',
			question: '4. 捐赠是否属于其中一个 R？',
			answer: [
				'不是。',
				'捐赠是外部重用的一种可能形式，而不是第六个 R。',
				'例如，当资产状况、时间、需求及实际操作安排合适时，相关资产可考虑由社区机构、教育机构或非政府组织继续使用。'
			]
		},
		{
			id: 'what-is-v-one',
			question: '5. 什么是 V-ONE？',
			answer: [
				'ValoraEX ONE（V-ONE）是项目启动及工作流程层。',
				'其结构化资产转型流程为：',
				'看清楚 → 建立结构 → 路径分配 → 协调 → 证据 → 项目收结'
			]
		},
		{
			id: 'what-is-v-governance',
			question: '6. 什么是 V-Governance？',
			answer: [
				'ValoraEX Governance（V-Governance）是持续准备度、证据质量及生命周期可视性治理层。',
				'它帮助企业在单一项目完成后，继续维持更有组织的资产转型信息、证据管理及相关生命周期记录。'
			]
		},
		{
			id: 'difference-v-one-v-governance',
			question: '7. V-ONE 与 V-Governance 有什么区别？',
			answer: [
				'V-ONE 主要处理特定资产转型项目的工作流程。',
				'V-Governance 则着重于单一项目以外的持续准备度、证据质量及生命周期连续性。',
				'V-ONE 启动工作流程；V-Governance 延续准备度、证据质量及治理连续性。'
			]
		},
		{
			id: 'provide-execution-services',
			question: '8. ValoraEX 是否提供物流、回收、翻新或其他执行服务？',
			answer: [
				'ValoraEX 以项目形式提供工作流程、现场支持及协调服务，而运输、仓储、回收、翻新或其他下游专业活动，一般由合适的独立服务供应商提供。',
				'根据协定的项目范围，ValoraEX 可直接支持资产盘点、资产信息收集、路径准备度检视、项目协调、证据管理及项目收结等工作。',
				'当项目需要专业执行服务时，ValoraEX 可按项目要求协调合适的生态服务供应商。'
			]
		},
		{
			id: 'is-waste-management-company',
			question: '9. ValoraEX 是废物管理公司吗？',
			answer: [
				'不是。',
				'ValoraEX 并不是废物收集商、处置承包商或传统废物管理服务供应商。',
				'我们的角色是支持更早的资产可视性、更好的路径准备度、更有结构的 5R 决策、生态协调、证据及治理。'
			]
		},
		{
			id: 'what-is-route-readiness',
			question: '10. 什么是路径准备度？',
			answer: [
				'路径准备度是指评估一件资产及相关项目信息，是否已经具备足够条件进入某一个潜在转型路径。',
				'相关因素可以包括资产状况、照片、尺寸或其他属性、时间、搬运要求、现有信息、买家或接收方要求、运输可行性、下游要求及证据需要。'
			]
		},
		{
			id: 'what-is-matching-window',
			question: '11. 什么是配对窗口？',
			answer: [
				'配对窗口是指以下四个因素能够同时配合的时间窗口：',
				'资产供应 + 接收方／市场需求 + 路径准备度 + 执行时间',
				'即使有可使用的资产，同时也有愿意接收的一方，如果没有足够时间进行评估、批准、准备及协调，实际机会仍然可能消失。',
				'越早取得资产可视性，就越有时间让更好的路径成为可能。'
			]
		},
		{
			id: 'what-is-financial-year-readiness',
			question: '12. 什么是财政年度准备度？',
			answer: [
				'财政年度准备度的核心概念是：ESG 及可持续发展报告准备，不应只在年结时才开始。',
				'资产信息、路径决策及相关记录可以在全年不同项目中逐步整理，让日后进行内部检视、ESG 报告或可持续发展报告准备时，更容易取得及理解相关来源信息。'
			]
		},
		{
			id: 'guarantee-outcomes',
			question: '13. ValoraEX 是否保证重用、转售、回收或 ESG 成果？',
			answer: [
				'不保证。',
				'实际成果受到多项因素影响，包括资产状况、时间、下游需求、项目限制、实际操作可行性，以及独立服务供应商或接收方的要求。',
				'ValoraEX 支持结构化评估、工作流程、协调及证据准备度，但不保证任何特定路径或 ESG 成果。'
			]
		},
		{
			id: 'provide-esg-certification',
			question: '14. ValoraEX 是否提供 ESG 认证？',
			answer: [
				'不提供。',
				'ValoraEX 并不是 ESG 认证机构或独立鉴证服务供应商。',
				'如项目需要第三方认证、鉴证或其他受监管／专业服务，应由具备相关资格的独立机构或专业人士提供。'
			]
		},
		{
			id: 'support-esg-reporting',
			question: '15. ValoraEX 可以支持 ESG 或可持续发展报告吗？',
			answer: [
				'ValoraEX 可以帮助企业整理相关资产转型信息及现有证据，为内部 ESG 或可持续发展报告准备提供更有结构的来源资料。',
				'相关信息的质量及用途取决于实际可取得的原始资料及记录。',
				'ValoraEX 本身不提供 ESG 表现的独立鉴证；如有需要，相关服务应由具备适当资格的独立服务供应商另行提供。'
			]
		},
		{
			id: 'when-to-engage',
			question: '16. 企业应在什么时候与 ValoraEX 开始合作？',
			answer: [
				'当企业能够在最终退出、搬迁或清场日期之前，及早建立资产可视性、检视路径准备度及考虑可能的资产转型路径时，ValoraEX 能够发挥更大的作用。',
				'越早开始，通常越有时间整理信息、考虑合适的 5R 路径、协调内外部相关单位，以及准备所需证据。',
				'ValoraEX 也可以支持已经开始的项目，但实际可行的选项可能会受到时间、资产状况、信息质量及其他项目限制影响。'
			]
		},
		{
			id: 'who-do-you-work-with',
			question: '17. ValoraEX 与哪些机构合作？',
			answer: [
				'根据项目需要，ValoraEX 可与不同企业及生态参与者合作，包括企业客户、物流及执行服务供应商、转售渠道、翻新专业机构、回收服务供应商、社区机构、教育机构及其他相关专业或行业参与者。',
				'ValoraEX 保持平台中立，并不将任何单一生态服务供应商设定为独家合作方。'
			]
		},
		{
			id: 'how-to-work-with-valoraex',
			question: '18. 如何与 ValoraEX 合作？',
			answer: [
				'企业及机构可以就以下领域与 ValoraEX 联系：',
				'• 资产转型项目；',
				'• V-ONE；',
				'• V-Governance；',
				'• 执行及协调服务；',
				'• 生态合作；',
				'• 战略合作；',
				'• 一般查询。'
			]
		}
	]
};

export const getFaqData = (lang: Locale): FaqItem[] => faqDictionary[lang] || faqDictionary['en'];

// ---------------------------------------------------------
// 3. Ecosystem Partners
// ---------------------------------------------------------
export const getEcosystemPartners = (lang: Locale): string[] => {
	// Localize "The Hong Kong Polytechnic University" based on language
	if (lang === 'zh-hk') return ['Deartree', 'SERA', 'InvestHK', 'AML', 'Spider Logistics', 'HKMU', '香港理工大學'];
	if (lang === 'zh-cn') return ['Deartree', 'SERA', 'InvestHK', 'AML', 'Spider Logistics', 'HKMU', '香港理工大学'];
	return ['Deartree', 'SERA', 'InvestHK', 'AML', 'Spider Logistics', 'HKMU', 'The Hong Kong Polytechnic University'];
};