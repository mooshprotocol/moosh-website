'use client'
import { useEffect } from 'react';

// Best-effort idle prefetch for non-critical sections without changing UI.
// It hints the browser to fetch split chunks when the main thread is idle.
export default function IdlePrefetch() {
  useEffect(() => {
    const rIC = (cb: () => void) => {
      if (typeof (window as any).requestIdleCallback === 'function') {
        (window as any).requestIdleCallback(cb, { timeout: 2500 });
      } else {
        setTimeout(cb, 1200);
      }
    };

    rIC(async () => {
      try {
        // Prefetch non-hero sections. These match the dynamic imports on the page.
        await Promise.all([
          import('@/components/ManifestoSection'),
          import('@/components/PrinciplesSection'),
          import('@/components/ProtocolSection'),
          import('@/components/BuildersSection'),
          import('@/components/CareersSection'),
          import('@/components/CommunitySection'),
        ]);
      } catch {
        // Silently ignore; this is a hint, not critical.
      }
    });
  }, []);

  return null;
}


