import type { Locale } from './dictionaries';

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

const managementDictionary: Record<Locale, ManagementProfile[]> = {
	'en': [
		{
			slug: 'dennis-mak',
			name: 'Dennis Mak',
			title: 'Founder & Chief Executive Officer',
			bio: [
				'Dennis Mak is the Founder and Chief Executive Officer of ValoraEX.',
				'He brings more than 20 years of leadership and management experience across logistics, supply chain, technology, automation and international business development, with professional experience spanning Hong Kong, Greater China and wider international markets.',
				'Through ValoraEX, Dennis brings together his experience in logistics, technology, asset transition, circular economy, ESG, governance and ecosystem development to build a platform-neutral 5R intelligence ecosystem designed to support practical action, stronger information and cross-industry collaboration.'
			],
			role: ['Dennis leads ValoraEX’s overall strategy, platform and product direction, commercial development, ecosystem growth, strategic partnerships and international development.'],
			recognition: ['Outstanding Alumni Award 2024 — Professional Achievement, Department of Industrial and Systems Engineering, The Hong Kong Polytechnic University', 'Fellow, Social Enterprise Research Academy — 2024'],
			linkedin: 'https://www.linkedin.com/in/denniswhmak/'
		},
		{
			slug: 'keith-lowcock',
			name: 'Keith Lowcock',
			title: 'Chief Strategy Officer',
			bio: [
				'Keith Lowcock is Chief Strategy Officer of ValoraEX, supporting the company’s strategic growth, international positioning, commercial partnerships, investor engagement and long-term development.',
				'He brings more than 30 years of international leadership experience across banking, financial services, corporate strategy, technology, digital transformation and strategic advisory.'
			],
			role: ['corporate strategy;', 'international positioning;', 'strategic partnerships;', 'commercial development;'],
			linkedin: 'https://www.linkedin.com/in/keithlowcock/'
		},
		{
			slug: 'brian-chan',
			name: 'Brian Chan',
			title: 'Chief Information Officer',
			bio: [
				'Brian Chan serves as Chief Information Officer of ValoraEX, leading the company’s information and technology strategy and helping shape a secure, future-ready intelligence ecosystem for asset transition.',
				'He brings more than 30 years of technology and management leadership experience across Asia.'
			],
			role: ['information and technology strategy;', 'data architecture and information governance;', 'business-technology alignment;'],
			recognition: ['CIO100 ASEAN Award — 2022'],
			linkedin: 'https://www.linkedin.com/in/brian-chan-09799412/'
		}
	],
	'zh-hk': [
		{
			slug: 'dennis-mak',
			name: 'Dennis Mak',
			title: '創辦人兼行政總裁',
			bio: [
				'Dennis Mak 是 ValoraEX 的創辦人兼行政總裁。',
				'他擁有超過 20 年領導及管理經驗，涵蓋物流、供應鏈、科技、自動化及國際商業發展，專業經驗橫跨香港、大中華區及更廣泛的國際市場。',
				'透過 ValoraEX，Dennis 將物流、科技、資產轉型、循環經濟、ESG、治理及生態系統發展經驗結合，建立一個平台中立的 5R 智能生態系統，以支援實際行動、更完善的資訊及跨行業協作。'
			],
			role: ['Dennis 負責 ValoraEX 的整體策略、平台及產品方向、商業發展、生態系統成長、策略合作及國際發展。'],
			recognition: ['理大工業及系統工程學系傑出校友專業成就獎 — 2024', '社會企業研究院院士 — 2024'],
			linkedin: 'https://www.linkedin.com/in/denniswhmak/'
		},
		{
			slug: 'keith-lowcock',
			name: 'Keith Lowcock',
			title: '首席策略官',
			bio: [
				'Keith Lowcock 擔任 ValoraEX 首席策略官，支援公司的策略增長、國際定位、商業合作、投資者交流及長期發展。',
				'他擁有超過 30 年國際領導經驗，專業領域涵蓋銀行、金融服務、企業策略、科技、數碼轉型及策略顧問。'
			],
			role: ['企業策略；', '國際定位；', '策略合作；', '商業發展；'],
			linkedin: 'https://www.linkedin.com/in/keithlowcock/'
		},
		{
			slug: 'brian-chan',
			name: 'Brian Chan',
			title: '首席資訊官',
			bio: [
				'Brian Chan 擔任 ValoraEX 首席資訊官，負責公司的資訊及科技策略，並協助建立一個安全、具前瞻性、支援資產轉型的智能生態系統。',
				'Brian 擁有超過 30 年亞洲區科技及管理領導經驗。'
			],
			role: ['資訊及科技策略；', '數據架構及資訊治理；', '商業與科技協調；'],
			recognition: ['CIO100 ASEAN Award — 2022'],
			linkedin: 'https://www.linkedin.com/in/brian-chan-09799412/'
		}
	],
	'zh-cn': [
		{
			slug: 'dennis-mak',
			name: 'Dennis Mak',
			title: '创办人兼行政总裁',
			bio: [
				'Dennis Mak 是 ValoraEX 的创办人兼行政总裁。',
				'他拥有超过 20 年领导及管理经验，涵盖物流、供应链、科技、自动化及国际商业发展，专业经验横跨香港、大中华区及更广泛的国际市场。',
				'通过 ValoraEX，Dennis 将物流、科技、资产转型、循环经济、ESG、治理及生态系统发展经验结合，建立一个平台中立的 5R 智能生态系统，以支持实际行动、更完善的信息及跨行业协作。'
			],
			role: ['Dennis 负责 ValoraEX 的整体战略、平台及产品方向、商业发展、生态系统增长、战略合作及国际发展。'],
			recognition: ['理大工业及系统工程学系杰出校友专业成就奖 — 2024', '社会企业研究院院士 — 2024'],
			linkedin: 'https://www.linkedin.com/in/denniswhmak/'
		},
		{
			slug: 'keith-lowcock',
			name: 'Keith Lowcock',
			title: '首席战略官',
			bio: [
				'Keith Lowcock 担任 ValoraEX 首席战略官，支持公司的战略增长、国际定位、商业合作、投资者交流及长期发展。',
				'他拥有超过 30 年国际领导经验，专业领域涵盖银行、金融服务、企业战略、科技、数字化转型及战略顾问。'
			],
			role: ['企业战略；', '国际定位；', '战略合作；', '商业发展；'],
			linkedin: 'https://www.linkedin.com/in/keithlowcock/'
		},
		{
			slug: 'brian-chan',
			name: 'Brian Chan',
			title: '首席信息官',
			bio: [
				'Brian Chan 担任 ValoraEX 首席信息官，负责公司的信息及科技战略，并协助建立一个安全、具前瞻性、支持资产转型的智能生态系统。',
				'Brian 拥有超过 30 年亚洲区科技及管理领导经验。'
			],
			role: ['信息及科技战略；', '数据架构及信息治理；', '商业与科技协调；'],
			recognition: ['CIO100 ASEAN Award — 2022'],
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
				'Future development may extend to selected electronics and technology assets and, over time, other suitable asset categories.'
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
				'• Responsible Disposal'
			]
		}
        // * Continue porting the remaining 15 English FAQs here *
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
				'未來發展方向可包括精選電子及科技資產，並在合適情況下逐步延伸至其他資產類別。'
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
				'• 負責任處置。'
			]
		}
        // * Continue porting the remaining 15 Traditional Chinese FAQs here *
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
				'未来发展方向可包括精选电子及科技资产，并在合适情况下逐步延伸至其他资产类别。'
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
				'• 负责任处置。'
			]
		}
        // * Continue porting the remaining 15 Simplified Chinese FAQs here *
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