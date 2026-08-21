import 'server-only';

// Define the dictionary loading functions
const dictionaries = {
	'en': () => import('../dictionaries/en.json').then((module) => module.default),
	'zh-hk': () => import('../dictionaries/zh-hk.json').then((module) => module.default),
	'zh-cn': () => import('../dictionaries/zh-cn.json').then((module) => module.default),
};

// Define a type for the supported locales
export type Locale = 'en' | 'zh-hk' | 'zh-cn';

// Export the helper function to load the correct dictionary
export const getDictionary = async (locale: Locale) => {
	// Fallback to 'en' if an invalid locale is somehow passed
	const loadDictionary = dictionaries[locale] || dictionaries['en'];
	return loadDictionary();
};