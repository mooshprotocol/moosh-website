"use client";

import React from "react";
import { useI18n } from "@/components/I18nProvider";

interface ClientTextProps {
  k: string;
  defaultValue?: string;
  className?: string;
}

export default function ClientText({ k, defaultValue, className }: ClientTextProps) {
  const { t } = useI18n();
  return <span className={className}>{t(k, defaultValue ?? k)}</span>;
}


