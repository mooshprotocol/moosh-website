import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const nonce = crypto.randomUUID().replace(/-/g, '');

  const csp = [
    "default-src 'self'",
    // Allow self + inline for now (report-only). Nonce is included for future tightening.
    `script-src 'self' 'unsafe-inline' 'nonce-${nonce}'`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' https: data:",
    "font-src 'self' https: data:",
    "connect-src 'self' https:",
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
  ].join('; ');

  const response = NextResponse.next({
    request: {
      headers: new Headers(request.headers),
    },
  });

  // Expose nonce to the app via request header (for future use)
  response.headers.set('x-nonce', nonce);
  // Report-Only to avoid breaking existing behavior; can switch to enforcing later
  response.headers.set('Content-Security-Policy-Report-Only', csp);

  return response;
}

export const config = {
  matcher: '/:path*',
};


