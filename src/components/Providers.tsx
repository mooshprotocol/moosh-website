"use client";

import { MotionConfig, useReducedMotion, LazyMotion, domAnimation } from "framer-motion";
import React, { Suspense } from "react";
import I18nProvider from "./I18nProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  // Honor user OS-level reduced motion preference globally
  const prefersReducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict={false}>
      <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "never"}>
        <Suspense fallback={null}>
          <I18nProvider>{children}</I18nProvider>
        </Suspense>
      </MotionConfig>
    </LazyMotion>
  );
}


