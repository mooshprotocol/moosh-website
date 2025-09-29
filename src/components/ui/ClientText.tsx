"use client";

import React, { useEffect, useState } from "react";
import { useI18n } from "@/components/I18nProvider";

interface ClientTextProps {
  k: string;
  defaultValue?: string;
  className?: string;
}

export default function ClientText({ k, defaultValue, className }: ClientTextProps) {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className={className}>{defaultValue ?? k}</span>;
  }

  return <span className={className}>{t(k, defaultValue ?? k)}</span>;
}


