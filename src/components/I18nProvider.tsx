"use client";

import React, { createContext, useContext, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import en from "../../messages/en.json";
import zh from "../../messages/zh.json";
import ko from "../../messages/ko.json";

type Messages = Record<string, any>;

type Locale = "en" | "zh" | "ko";

interface I18nContextValue {
  locale: Locale;
  t: <T = string>(key: string, defaultValue?: T) => T;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const LOCALES: Record<Locale, Messages> = {
  en: en as Messages,
  zh: zh as Messages,
  ko: ko as Messages,
};

function getByPath(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const params = useSearchParams();
  const langParam = (params?.get("lang") || "").toLowerCase();
  const locale: Locale = (langParam === "zh" ? "zh" : langParam === "ko" ? "ko" : "en");

  const messages = LOCALES[locale];

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    t: <T = string>(key: string, defaultValue?: T) => {
      const val = getByPath(messages, key);
      return (val !== undefined ? (val as T) : (defaultValue !== undefined ? defaultValue : (key as unknown as T)));
    },
  }), [locale, messages]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}


