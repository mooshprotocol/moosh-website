"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CommunityBackgroundFXProps {
  density?: number; // 0..1, controls particle count
  speed?: number; // base particle speed multiplier
  brightness?: number; // 0..1 alpha multiplier
}

// Lightweight canvas background: drifting micro particles + soft fog strokes
// Performance rules:
// - Only animate transform-like state (draw translations), throttle to ~30-45fps
// - Pause when out of view; respect prefers-reduced-motion
// - Render in devicePixelRatio-aware low res to reduce fill cost
export default function CommunityBackgroundFX({
  density = 0.6,
  speed = 0.8,
  brightness = 0.12,
}: CommunityBackgroundFXProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const inView = useInView(containerRef, { amount: 0.35 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    const container = containerRef.current as HTMLDivElement | null;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const rect = container!.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas!.width = Math.floor(width * dpr * 0.8); // render at 80% resolution for perf
      canvas!.height = Math.floor(height * dpr * 0.8);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale((canvas!.width / width) || 1, (canvas!.height / height) || 1);
    }

    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    // Particle system -------------------------------------------------------
    const baseParticles = Math.floor(((width * height) / (1280 * 720)) * 110 * density);
    const numParticles = Math.max(40, Math.min(160, baseParticles));

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    const particles: Particle[] = new Array(numParticles).fill(0).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() * 0.4 - 0.2) * speed,
      vy: (Math.random() * 0.4 - 0.2) * speed,
      r: Math.random() * 1.6 + 0.4,
      a: Math.random() * 0.35 + 0.15,
    }));

    // Fog strokes (very subtle)
    type Fog = { x: number; y: number; r: number; a: number; t: number };
    const fogs: Fog[] = new Array(3).fill(0).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 160 + 120,
      a: 0.04 * brightness,
      t: Math.random() * Math.PI * 2,
    }));

    // Throttle to ~36fps
    let last = performance.now();
    const targetDelta = 1000 / (reduce ? 20 : 36);

    function step(now: number) {
      if (!running) return;
      const delta = now - last;
      if (delta < targetDelta) {
        raf = requestAnimationFrame(step);
        return;
      }
      last = now;

      ctx!.clearRect(0, 0, width, height);

      // Draw fog
      for (const f of fogs) {
        f.t += 0.002;
        const sx = Math.cos(f.t) * 20;
        const sy = Math.sin(f.t * 0.7) * 16;
        ctx!.beginPath();
        const grd = ctx!.createRadialGradient(f.x + sx, f.y + sy, f.r * 0.1, f.x + sx, f.y + sy, f.r);
        grd.addColorStop(0, `rgba(50, 196, 102, ${f.a})`); // moosh green
        grd.addColorStop(1, `rgba(50, 196, 102, 0)`);
        ctx!.fillStyle = grd;
        ctx!.fillRect(f.x - f.r, f.y - f.r, f.r * 2, f.r * 2);
      }

      // Draw particles
      ctx!.fillStyle = `rgba(50, 196, 102, ${0.22 * brightness})`;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        // gentle wrap
        if (p.x < -8) p.x = width + 8;
        if (p.x > width + 8) p.x = -8;
        if (p.y < -8) p.y = height + 8;
        if (p.y > height + 8) p.y = -8;
        ctx!.globalAlpha = p.a;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;

      raf = requestAnimationFrame(step);
    }

    function start() {
      if (!running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    if (!reduce && inView) start();

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
    };
  }, [density, speed, brightness, inView]);

  return (
    <div ref={containerRef} aria-hidden className="absolute inset-0 pointer-events-none select-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}


