'use client'
import { useEffect } from 'react';

// Idle prefetch scaffold. Previously attempted to import Server Components on the client,
// which can cause runtime errors. Keep a harmless idle no-op to reserve the hook for future use.
export default function IdlePrefetch() {
  useEffect(() => {
    const schedule = (cb: () => void) => {
      if (typeof (window as any).requestIdleCallback === 'function') {
        (window as any).requestIdleCallback(cb, { timeout: 2500 });
      } else {
        setTimeout(cb, 1200);
      }
    };
    schedule(() => {
      // no-op: placeholder for future client-safe prefetches
    });
  }, []);

  return null;
}


