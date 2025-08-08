import { headers } from 'next/headers';

// Read per-request nonce injected by middleware via `x-nonce` header.
// Server Components can call this to pass nonce to scripts or other sinks.
export async function getRequestNonce(): Promise<string | undefined> {
  try {
    const h = await headers();
    const nonce = h.get('x-nonce') || undefined;
    return nonce;
  } catch {
    return undefined;
  }
}


