'use client';

import { m, useReducedMotion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/components/I18nProvider';

type ModuleId = 'controller' | 'vault' | 'risk' | 'liquidation';

interface Module {
  id: ModuleId;
  title: string;
  points: string[];
  icon?: React.ReactNode;
}

interface CoreModulesFocusProps {
  modules: Module[];
  defaultActive?: ModuleId;
  autoRotate?: boolean;
  intervalMs?: number;
}

export default function CoreModulesFocus({
  modules,
  defaultActive = 'controller',
  autoRotate = false,
  intervalMs = 7000,
}: CoreModulesFocusProps) {
  const [activeModule, setActiveModule] = useState<ModuleId>(defaultActive);
  const [previousModule, setPreviousModule] = useState<ModuleId | null>(null);
  const [transitionPhase, setTransitionPhase] = useState<'idle' | 'dimming' | 'zooming' | 'drawing' | 'annotating' | 'updating'>('idle');
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const lastInteractionRef = useRef<number>(0);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const { t } = useI18n();

  // IntersectionObserver for visibility-based animation control
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotation logic
  useEffect(() => {
    if (!autoRotate || isPaused || !isVisible) return;

    const now = Date.now();
    if (now - lastInteractionRef.current < 30000) return; // Pause 30s after interaction

    const interval = setInterval(() => {
      setActiveModule((current) => {
        const currentIndex = modules.findIndex((m) => m.id === current);
        const nextIndex = (currentIndex + 1) % modules.length;
        return modules[nextIndex].id;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [autoRotate, isPaused, isVisible, intervalMs, modules]);

  // Handle module switching with proper timeline
  const switchToModule = (moduleId: ModuleId) => {
    if (moduleId === activeModule || transitionPhase !== 'idle') return;

    lastInteractionRef.current = Date.now();
    setPreviousModule(activeModule);

    if (shouldReduceMotion) {
      // Reduced motion: skip timeline, just fade
      setActiveModule(moduleId);
      setTransitionPhase('idle');
      return;
    }

    // Timeline: 0-900ms
    // Phase 1: 0-120ms - Dim current module
    setTransitionPhase('dimming');

    setTimeout(() => {
      // Phase 2: 120-360ms - Camera zoom/pan
      setTransitionPhase('zooming');
    }, 120);

    setTimeout(() => {
      // Phase 3: 360-560ms - Draw stroke (switch module here)
      setTransitionPhase('drawing');
      setActiveModule(moduleId);
    }, 360);

    setTimeout(() => {
      // Phase 4: 560-760ms - Annotations fade in
      setTransitionPhase('annotating');
    }, 560);

    setTimeout(() => {
      // Phase 5: 760-900ms - Info bar update
      setTransitionPhase('updating');
    }, 760);

    setTimeout(() => {
      // Complete
      setTransitionPhase('idle');
      setPreviousModule(null);
    }, 900);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      const currentIndex = modules.findIndex((m) => m.id === activeModule);
      const nextIndex =
        e.key === 'ArrowRight'
          ? (currentIndex + 1) % modules.length
          : (currentIndex - 1 + modules.length) % modules.length;
      switchToModule(modules[nextIndex].id);
    }
  };

  // Touch/swipe navigation (mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;

    // Only register horizontal swipes (abs(deltaX) > abs(deltaY))
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      const currentIndex = modules.findIndex((m) => m.id === activeModule);
      const nextIndex =
        deltaX > 0
          ? (currentIndex - 1 + modules.length) % modules.length // Swipe right = previous
          : (currentIndex + 1) % modules.length; // Swipe left = next
      switchToModule(modules[nextIndex].id);
    }
  };

  const currentModule = modules.find((m) => m.id === activeModule) || modules[0];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#090A0A] overflow-hidden"
      style={{ minHeight: 'max(80vh, 720px)' }}
      onKeyDown={handleKeyDown}
    >
      {/* Blueprint Canvas Container */}
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 flex flex-col justify-center min-h-[80vh]">
        {/* Central Blueprint Canvas */}
        <m.div
          ref={canvasRef}
          className="relative w-full max-w-7xl mx-auto"
          style={{ height: 'clamp(400px, 60vh, 700px)' }}
          animate={
            !shouldReduceMotion && transitionPhase === 'zooming'
              ? {
                  scale: [1, 1.06, 1],
                  x: [0, 12, 0],
                  y: [0, -8, 0],
                }
              : {}
          }
          transition={{ duration: 0.24, ease: [0.22, 0.61, 0.36, 1] }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main SVG Blueprint */}
          <m.svg
            className="w-full h-full"
            viewBox="0 0 1200 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            animate={
              transitionPhase === 'dimming' && previousModule
                ? { opacity: 0.65 }
                : { opacity: 1 }
            }
            transition={{ duration: 0.12 }}
          >
            <defs>
              {/* Gradient for particles */}
              <radialGradient id="particleGlow">
                <stop offset="0%" stopColor="#30EFA0" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#30EFA0" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Central Energy Cube (always visible) */}
            <CentralCube isVisible={isVisible} shouldReduceMotion={shouldReduceMotion} />

            {/* Module-specific blueprints */}
            <AnimatePresence mode="wait">
              {activeModule === 'controller' && (
                <ControllerBlueprint
                  key="controller"
                  isTransitioning={transitionPhase === 'drawing'}
                  shouldReduceMotion={shouldReduceMotion}
                />
              )}
              {activeModule === 'vault' && (
                <VaultBlueprint
                  key="vault"
                  isTransitioning={transitionPhase === 'drawing'}
                  shouldReduceMotion={shouldReduceMotion}
                />
              )}
              {activeModule === 'risk' && (
                <RiskBlueprint
                  key="risk"
                  isTransitioning={transitionPhase === 'drawing'}
                  shouldReduceMotion={shouldReduceMotion}
                />
              )}
              {activeModule === 'liquidation' && (
                <LiquidationBlueprint
                  key="liquidation"
                  isTransitioning={transitionPhase === 'drawing'}
                  shouldReduceMotion={shouldReduceMotion}
                />
              )}
            </AnimatePresence>
          </m.svg>

          {/* Navigation Anchors (positioned absolutely on desktop) */}
          <div className="absolute inset-0 pointer-events-none">
            {modules.map((module, index) => (
              <ModuleAnchor
                key={module.id}
                module={module}
                index={index}
                isActive={activeModule === module.id}
                onClick={() => switchToModule(module.id)}
              />
            ))}
          </div>
        </m.div>

        {/* Mobile/Tablet Navigation Bar - Bottom anchors */}
        <div className="md:hidden flex justify-center gap-6 mt-8">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => switchToModule(module.id)}
              className="group focus:outline-none relative"
              style={{ minWidth: '44px', minHeight: '44px' }}
              aria-label={`Switch to ${module.title}`}
              aria-selected={activeModule === module.id}
              role="tab"
            >
              <svg width="32" height="32" viewBox="0 0 32 32">
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="#30EFA0"
                  strokeWidth="1"
                  fill="none"
                  opacity={activeModule === module.id ? '0.6' : '0.25'}
                  className="transition-opacity duration-300"
                />
                {activeModule === module.id && (
                  <polygon
                    points="16,3 27,10 27,22 16,29 5,22 5,10"
                    stroke="#30EFA0"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.4"
                  />
                )}
              </svg>
              <span className="sr-only">{module.title}</span>
              {/* Focus ring */}
              <span
                className="absolute inset-0 rounded-full opacity-0 group-focus-visible:opacity-100 transition-opacity"
                style={{
                  boxShadow: '0 0 0 1px rgba(231, 242, 238, 0.6), 0 0 0 6px rgba(48, 239, 160, 0.2)',
                }}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>

        {/* Info Bar (HUD) - Bottom */}
        <InfoBar module={currentModule} isTransitioning={transitionPhase === 'updating'} />
      </div>
    </section>
  );
}

// ========== CENTRAL CUBE ==========
function CentralCube({
  isVisible,
  shouldReduceMotion,
}: {
  isVisible: boolean;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <m.g
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 0.3 : 0 }}
      transition={{ duration: 1.2 }}
    >
      {/* Wireframe cube in center */}
      <m.path
        d="M 550 300 L 650 300 L 650 400 L 550 400 Z M 570 280 L 670 280 L 670 380 L 570 380 Z M 550 300 L 570 280 M 650 300 L 670 280 M 650 400 L 670 380 M 550 400 L 570 380"
        stroke="#30EFA0"
        strokeWidth="1"
        opacity="0.2"
        fill="none"
        animate={
          !shouldReduceMotion && isVisible
            ? {
                rotate: [0, 6, -6, 0],
                transition: {
                  duration: 75,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }
            : { rotate: 0 }
        }
        style={{ transformOrigin: '600px 340px' }}
      />
    </m.g>
  );
}

// ========== CONTROLLER ENGINE BLUEPRINT ==========
function ControllerBlueprint({
  isTransitioning,
  shouldReduceMotion,
}: {
  isTransitioning: boolean;
  shouldReduceMotion: boolean | null;
}) {
  const pathLength = 600;

  return (
    <m.g
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {/* Control loops: forking and merging arrow paths */}
      <m.path
        d="M 300 350 Q 400 250, 600 350 T 900 350"
        stroke="#30EFA0"
        strokeWidth="1"
        opacity="0.22"
        fill="none"
        strokeDasharray={pathLength}
        strokeDashoffset={isTransitioning ? pathLength : 0}
        animate={isTransitioning ? { strokeDashoffset: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.12, ease: 'easeOut' }}
        style={{
          filter: 'drop-shadow(0 0 8px rgba(48, 239, 160, 0.3))'
        }}
      />

      {/* Arrow heads */}
      <m.polygon
        points="895,345 905,350 895,355"
        fill="#30EFA0"
        opacity="0.22"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ delay: 0.5 }}
      />

      {/* Merge path */}
      <m.path
        d="M 300 450 Q 400 400, 600 450 Q 700 480, 900 450"
        stroke="#30EFA0"
        strokeWidth="1"
        opacity="0.18"
        fill="none"
        strokeDasharray={pathLength}
        strokeDashoffset={isTransitioning ? pathLength : 0}
        animate={isTransitioning ? { strokeDashoffset: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.24, ease: 'easeOut' }}
      />

      {/* Junction nodes */}
      <circle cx="600" cy="350" r="4" fill="#E7F2EE" opacity="0.08" />
      <circle cx="600" cy="450" r="4" fill="#E7F2EE" opacity="0.08" />

      {/* Particles along path (disabled in reduced motion) */}
      {!shouldReduceMotion && (
        <>
          <m.circle
            cx="0"
            cy="0"
            r="3"
            fill="url(#particleGlow)"
            opacity="0.75"
            animate={{
              offsetDistance: ['0%', '100%'],
              transition: {
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            style={{ offsetPath: 'path("M 300 350 Q 400 250, 600 350 T 900 350")' }}
          />
        </>
      )}

      {/* Annotation lines */}
      <m.g
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.56, duration: 0.3 }}
      >
        <line x1="400" y1="250" x2="400" y2="220" stroke="#30EFA0" strokeWidth="1" opacity="0.15" />
        <text x="405" y="215" fill="#9FB4AD" fontSize="11" opacity="0.8">
          Route Logic
        </text>
      </m.g>
    </m.g>
  );
}

// ========== VAULT KERNEL BLUEPRINT ==========
function VaultBlueprint({
  isTransitioning,
  shouldReduceMotion,
}: {
  isTransitioning: boolean;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <m.g
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {/* Concentric orbital rings */}
      {[180, 240, 300].map((r, i) => (
        <m.circle
          key={r}
          cx="600"
          cy="400"
          r={r}
          stroke="#30EFA0"
          strokeWidth="1"
          opacity={0.24 - i * 0.04}
          fill="none"
          strokeDasharray={isTransitioning ? 2 * Math.PI * r : undefined}
          strokeDashoffset={isTransitioning ? 2 * Math.PI * r : 0}
          animate={isTransitioning ? { strokeDashoffset: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12 + i * 0.08, ease: 'easeOut' }}
          style={{
            filter: 'drop-shadow(0 0 10px rgba(48, 239, 160, 0.22))'
          }}
        />
      ))}

      {/* Radial tick marks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 600 + 180 * Math.cos(angle);
        const y1 = 400 + 180 * Math.sin(angle);
        const x2 = 600 + 195 * Math.cos(angle);
        const y2 = 400 + 195 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#30EFA0"
            strokeWidth="1"
            opacity="0.1"
          />
        );
      })}

      {/* Central vault core */}
      <m.circle
        cx="600"
        cy="400"
        r="28"
        stroke="#30EFA0"
        strokeWidth="1.5"
        opacity="0.3"
        fill="none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      />

      {/* Rotating particle on orbit (disabled in reduced motion) */}
      {!shouldReduceMotion && (
        <m.circle
          cx="780"
          cy="400"
          r="3"
          fill="url(#particleGlow)"
          opacity="0.75"
          animate={{
            rotate: 360,
            transition: {
              duration: 12,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          style={{ transformOrigin: '600px 400px' }}
        />
      )}

      {/* Annotation */}
      <m.g
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.56, duration: 0.3 }}
      >
        <line x1="720" y1="280" x2="750" y2="250" stroke="#30EFA0" strokeWidth="1" opacity="0.15" />
        <text x="755" y="250" fill="#9FB4AD" fontSize="11" opacity="0.8">
          Asset Orbit
        </text>
      </m.g>
    </m.g>
  );
}

// ========== RISK MESH BLUEPRINT ==========
function RiskBlueprint({
  isTransitioning,
  shouldReduceMotion,
}: {
  isTransitioning: boolean;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <m.g
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {/* Grid mesh - sparse, interconnected */}
      {/* Horizontal lines */}
      {[280, 350, 420, 490, 560].map((y, i) => (
        <m.line
          key={`h-${y}`}
          x1="250"
          y1={y}
          x2="950"
          y2={y}
          stroke="#30EFA0"
          strokeWidth="1"
          opacity="0.18"
          strokeDasharray={isTransitioning ? 700 : undefined}
          strokeDashoffset={isTransitioning ? 700 : 0}
          animate={isTransitioning ? { strokeDashoffset: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.12 + i * 0.05, ease: 'easeOut' }}
        />
      ))}

      {/* Vertical lines */}
      {[350, 475, 600, 725, 850].map((x, i) => (
        <m.line
          key={`v-${x}`}
          x1={x}
          y1="280"
          x2={x}
          y2="560"
          stroke="#30EFA0"
          strokeWidth="1"
          opacity="0.18"
          strokeDasharray={isTransitioning ? 280 : undefined}
          strokeDashoffset={isTransitioning ? 280 : 0}
          animate={isTransitioning ? { strokeDashoffset: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.24 + i * 0.05, ease: 'easeOut' }}
        />
      ))}

      {/* Bezier connections between key nodes */}
      <m.path
        d="M 350 350 Q 475 280, 600 350 Q 725 420, 850 350"
        stroke="#30EFA0"
        strokeWidth="1"
        opacity="0.24"
        fill="none"
        strokeDasharray={500}
        strokeDashoffset={isTransitioning ? 500 : 0}
        animate={isTransitioning ? { strokeDashoffset: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.36, ease: 'easeOut' }}
        style={{
          filter: 'drop-shadow(0 0 8px rgba(48, 239, 160, 0.28))'
        }}
      />

      {/* Intersection nodes */}
      {[
        [350, 350],
        [600, 350],
        [850, 350],
        [475, 490],
        [725, 490],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#E7F2EE" opacity="0.08" />
      ))}

      {/* Particles moving through mesh (disabled in reduced motion) */}
      {!shouldReduceMotion && (
        <m.circle
          cx="0"
          cy="0"
          r="2.5"
          fill="url(#particleGlow)"
          opacity="0.7"
          animate={{
            offsetDistance: ['0%', '100%'],
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          style={{ offsetPath: 'path("M 350 350 Q 475 280, 600 350 Q 725 420, 850 350")' }}
        />
      )}

      {/* Annotation */}
      <m.g
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.56, duration: 0.3 }}
      >
        <line x1="475" y1="490" x2="475" y2="530" stroke="#30EFA0" strokeWidth="1" opacity="0.15" />
        <text x="440" y="550" fill="#9FB4AD" fontSize="11" opacity="0.8">
          Validation Node
        </text>
      </m.g>
    </m.g>
  );
}

// ========== LIQUIDATION CORE BLUEPRINT ==========
function LiquidationBlueprint({
  isTransitioning,
  shouldReduceMotion,
}: {
  isTransitioning: boolean;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <m.g
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {/* One-way valve symbol */}
      <m.g>
        {/* Valve body */}
        <m.rect
          x="550"
          y="330"
          width="100"
          height="60"
          stroke="#30EFA0"
          strokeWidth="1"
          opacity="0.22"
          fill="none"
          rx="8"
          strokeDasharray={320}
          strokeDashoffset={isTransitioning ? 320 : 0}
          animate={isTransitioning ? { strokeDashoffset: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.12, ease: 'easeOut' }}
        />

        {/* Directional arrow inside valve */}
        <m.polygon
          points="570,350 585,360 570,370"
          fill="#30EFA0"
          opacity="0.2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 0.5 }}
        />
        <m.polygon
          points="605,350 620,360 605,370"
          fill="#30EFA0"
          opacity="0.2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 0.5 }}
        />
      </m.g>

      {/* Recycling loop path */}
      <m.path
        d="M 650 360 L 820 360 Q 880 360, 880 420 L 880 520 Q 880 560, 840 560 L 360 560 Q 320 560, 320 520 L 320 360 Q 320 330, 350 330 L 550 330"
        stroke="#30EFA0"
        strokeWidth="1"
        opacity="0.2"
        fill="none"
        strokeDasharray={1400}
        strokeDashoffset={isTransitioning ? 1400 : 0}
        animate={isTransitioning ? { strokeDashoffset: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        style={{
          filter: 'drop-shadow(0 0 8px rgba(48, 239, 160, 0.25))'
        }}
      />

      {/* Arrows along loop */}
      <m.polygon
        points="815,357 825,360 815,363"
        fill="#30EFA0"
        opacity="0.18"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ delay: 0.7 }}
      />
      <m.polygon
        points="323,520 320,510 317,520"
        fill="#30EFA0"
        opacity="0.18"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ delay: 0.7 }}
      />

      {/* Particles moving through recycling loop (disabled in reduced motion) */}
      {!shouldReduceMotion && (
        <>
          <m.circle
            cx="0"
            cy="0"
            r="2.5"
            fill="url(#particleGlow)"
            opacity="0.75"
            animate={{
              offsetDistance: ['0%', '100%'],
              transition: {
                duration: 14,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            style={{
              offsetPath:
                'path("M 650 360 L 820 360 Q 880 360, 880 420 L 880 520 Q 880 560, 840 560 L 360 560 Q 320 560, 320 520 L 320 360 Q 320 330, 350 330 L 550 330")',
            }}
          />
          <m.circle
            cx="0"
            cy="0"
            r="2.5"
            fill="url(#particleGlow)"
            opacity="0.75"
            animate={{
              offsetDistance: ['50%', '150%'],
              transition: {
                duration: 14,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            style={{
              offsetPath:
                'path("M 650 360 L 820 360 Q 880 360, 880 420 L 880 520 Q 880 560, 840 560 L 360 560 Q 320 560, 320 520 L 320 360 Q 320 330, 350 330 L 550 330")',
            }}
          />
        </>
      )}

      {/* Annotation */}
      <m.g
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.56, duration: 0.3 }}
      >
        <line x1="600" y1="330" x2="600" y2="300" stroke="#30EFA0" strokeWidth="1" opacity="0.15" />
        <text x="550" y="290" fill="#9FB4AD" fontSize="11" opacity="0.8">
          Recovery Pipeline
        </text>
      </m.g>
    </m.g>
  );
}

// ========== MODULE ANCHOR (Navigation Point) ==========
function ModuleAnchor({
  module,
  index,
  isActive,
  onClick,
}: {
  module: Module;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  // Position anchors in 4 corners (Desktop) - clockwise from top-left
  // On tablet/mobile, show as bottom row
  const positions = [
    { top: '8%', left: '4%' }, // top-left
    { top: '8%', right: '4%' }, // top-right
    { bottom: '18%', right: '4%' }, // bottom-right
    { bottom: '18%', left: '4%' }, // bottom-left
  ];

  const position = positions[index % 4];

  return (
    <m.button
      className="absolute pointer-events-auto group focus:outline-none md:block hidden"
      style={{
        ...position,
        minWidth: '44px',
        minHeight: '44px',
      }}
      onClick={onClick}
      aria-label={`Switch to ${module.title}`}
      aria-selected={isActive}
      role="tab"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Ring outline */}
      <div className="relative flex items-center justify-center">
        <svg width="36" height="36" viewBox="0 0 36 36" className="absolute">
          <circle
            cx="18"
            cy="18"
            r="16"
            stroke="#30EFA0"
            strokeWidth="1"
            fill="none"
            opacity={isActive ? '0.6' : '0.25'}
            className="transition-opacity duration-300"
          />
          {/* Hexagon variant for active state */}
          {isActive && (
            <polygon
              points="18,4 30,11 30,25 18,32 6,25 6,11"
              stroke="#30EFA0"
              strokeWidth="1.5"
              fill="none"
              opacity="0.4"
            />
          )}
        </svg>

        {/* Short label below */}
        <span
          className={`absolute top-10 left-1/2 -translate-x-1/2 text-[10px] font-medium whitespace-nowrap transition-all duration-300 ${
            isActive ? 'text-[#E7F2EE] opacity-100' : 'text-[#9FB4AD] opacity-60 group-hover:opacity-80'
          }`}
        >
          {module.title.split(' ')[0]}
        </span>
      </div>

      {/* Focus ring (accessibility) */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-focus-visible:opacity-100 transition-opacity"
        style={{
          boxShadow: '0 0 0 1px rgba(231, 242, 238, 0.6), 0 0 0 6px rgba(48, 239, 160, 0.2)',
        }}
        aria-hidden="true"
      />
    </m.button>
  );
}

// ========== INFO BAR (HUD) ==========
function InfoBar({ module, isTransitioning }: { module: Module; isTransitioning: boolean }) {
  return (
    <div
      className="mt-8 md:mt-12 mx-auto w-full max-w-6xl rounded-2xl"
      style={{
        height: 'clamp(84px, 12vh, 96px)',
        background: 'rgba(15, 20, 19, 0.6)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(48, 239, 160, 0.12)',
      }}
    >
      <div className="h-full flex items-center justify-between px-6 md:px-8 lg:px-10">
        {/* Left: Module name + icon */}
        <AnimatePresence mode="wait">
          <m.div
            key={module.id}
            className="flex items-center gap-3 md:gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, delay: isTransitioning ? 0.76 : 0 }}
          >
            {module.icon && <div className="text-[#30EFA0] opacity-80">{module.icon}</div>}
            <h3 className="text-base md:text-lg font-bold text-[#E7F2EE] tracking-tight">
              {module.title}
            </h3>
          </m.div>
        </AnimatePresence>

        {/* Right: Key points (bullet separated) */}
        <AnimatePresence mode="wait">
          <m.div
            key={module.id}
            className="hidden md:flex items-center gap-3 lg:gap-4 text-xs lg:text-sm text-[#9FB4AD]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25, delay: isTransitioning ? 0.76 : 0 }}
          >
            {module.points.slice(0, 3).map((point, i) => (
              <span key={i} className="flex items-center gap-3">
                {i > 0 && <span className="text-[#30EFA0] opacity-40">·</span>}
                <span>{point}</span>
              </span>
            ))}
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
