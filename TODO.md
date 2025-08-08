# Optimization TODO

## Completed
- [x] Introduce global Providers with MotionConfig to honor reduced motion
- [x] Convert home page to Server Component and dynamically import sections
- [x] Add type="button" to header CTA to avoid unintended form submits
- [x] Add security headers (HSTS, XFO, Referrer-Policy, Permissions-Policy, X-CTO)
- [x] CSP scaffold: middleware with nonce + Report-Only policy

## In Progress
- [x] Optimize ParallaxBackground for mobile and reduced-motion users
- [x] Tailwind optimizations: safelist, fonts via next/font, reduce CSS bloat
- [x] Accessibility: mark decorative elements with aria-hidden
- [x] Performance: Adopt framer-motion LazyMotion + domAnimation (app-wide)
- [x] Performance: Pause offscreen animation loops using useInView gates
- [x] Performance: Enable optimizePackageImports for framer-motion (Next 15)

## Planned
- [x] Abstract common UI primitives (Button, Card, SectionHeader) and refactor usage (initial pass)
- [x] Introduce I18nProvider and useI18n hook; replace hardcoded strings with message keys
- [ ] CSP + next/script nonce strategy scaffolding for future third-party scripts (optional)
- [x] Replace eligible images with next/image and audit asset caching (optional) — evaluated: no <img> usages to convert; caching headers added for static assets
- [x] Performance: Defer non-critical sections with idle prefetch (no visual changes)
- [ ] Build: ensure productionBrowserSourceMaps disabled
- [ ] Dependencies: prune unused heavy deps (three, @react-three/*) if confirmed unused


