'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useI18n } from '@/components/I18nProvider';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'EN', name: 'English', flag: '🌐' },
  { code: '中', name: '中文', flag: '🇨🇳' },
  { code: 'KR', name: '한국어', flag: '🇰🇷' },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { locale } = useI18n();

  // Get current language
  const currentLanguage = languages.find(lang => 
    (locale === 'en' && lang.code === 'EN') ||
    (locale === 'zh' && lang.code === '中') ||
    (locale === 'ko' && lang.code === 'KR')
  ) || languages[0];

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Focus the dropdown for keyboard navigation
      dropdownRef.current?.focus();
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
        event.preventDefault();
        setIsOpen(true);
        setSelectedIndex(0);
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        setSelectedIndex(prev => (prev + 1) % languages.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setSelectedIndex(prev => (prev - 1 + languages.length) % languages.length);
        break;
      case 'Enter':
        event.preventDefault();
        handleLanguageSelect(languages[selectedIndex]);
        break;
      case 'Tab':
        setIsOpen(false);
        break;
    }
  };

  const handleLanguageSelect = (language: Language) => {
    // Map display codes to actual locale codes
    const localeMap: { [key: string]: string } = {
      'EN': 'en',
      '中': 'zh',
      'KR': 'ko'
    };
    
    const newLocale = localeMap[language.code] || 'en';
    
    // Create new URL with language parameter
    const params = new URLSearchParams(searchParams?.toString() || '');
    if (newLocale === 'en') {
      params.delete('lang'); // Default language, no need for parameter
    } else {
      params.set('lang', newLocale);
    }
    
    const queryString = params.toString();
    const newPath = queryString ? `?${queryString}` : '';
    
    // Force page reload to ensure language change takes effect
    window.location.href = newPath || '/';
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className="relative header-language" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="group flex items-center space-x-2 px-3 py-1.5 rounded-lg font-medium text-sm tracking-wider
                   text-white bg-transparent transition-all duration-200 ease-out
                   hover:bg-white/5 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        {/* Current Language Code */}
        <span className="font-inter font-medium text-white group-hover:text-white">
          {currentLanguage.code}
        </span>
        
        {/* Dropdown Arrow */}
        <svg 
          className={`w-3 h-3 text-white/60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop for blur effect */}
          <div 
            className="fixed inset-0 z-40" 
            aria-hidden="true" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div
            className="absolute right-0 top-full mt-2 w-32 z-50
                       bg-[#151515]/95 backdrop-blur-sm border border-white/10 rounded-lg
                       shadow-2xl overflow-hidden
                       animate-in fade-in-0 zoom-in-95 duration-200"
            role="listbox"
            tabIndex={-1}
            onKeyDown={handleKeyDown}
          >
            {languages.map((language, index) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className={`w-full flex items-center justify-between px-4 py-3 text-left
                           text-sm font-medium transition-all duration-150 ease-out
                           ${selectedIndex === index 
                             ? 'bg-[#202020] text-[#00FF9C]' 
                             : currentLanguage.code === language.code
                             ? 'bg-[#202020] text-[#00FF9C]'
                             : 'text-[#E5E5E5] hover:bg-[#202020] hover:text-[#00FF9C]'
                           }`}
                role="option"
                aria-selected={currentLanguage.code === language.code}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-base">{language.flag}</span>
                  <span className="font-semibold tracking-wider">{language.code}</span>
                </div>
                
                {/* Selected indicator */}
                {currentLanguage.code === language.code && (
                  <svg className="w-4 h-4 text-[#00FF9C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
