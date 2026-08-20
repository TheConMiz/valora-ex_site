import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'zh-cn', 'zh-hk'];
const defaultLocale = 'en';

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Check if the URL already contains a valid regional locale
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (pathnameHasLocale) return;

	// If no locale exists in the path, redirect to the default (English)
	request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: [
		// Skip Next.js internals and all static files in the public folder
		'/((?!_next|assets|images|favicon.ico|.*\\..*).*)',
	],
};