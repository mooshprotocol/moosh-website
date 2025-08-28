// TryMooshButton.tsx
import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { useI18n } from '@/components/I18nProvider';

interface TryMooshButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

// Coming Soon Modal Component with Full Screen Overlay
interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLDivElement>;
  autoCloseDelay?: number; // configurable auto-close delay in ms
}

function ComingSoonModal({ isOpen, onClose, buttonRef, autoCloseDelay = 3000 }: ComingSoonModalProps) {
  const { t } = useI18n();
  const modalRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // Scroll lock - prevent page scrolling when modal is open
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    const handleOverlayClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('modal-overlay')) {
        handleClose();
      }
    };

    // Auto close timer
    const autoCloseTimer = setTimeout(() => {
      handleClose();
    }, autoCloseDelay);

    // Focus management - focus modal on open
    modalRef.current?.focus();

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleOverlayClick);

    return () => {
      document.body.style.overflow = originalStyle;
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleOverlayClick);
      clearTimeout(autoCloseTimer);
    };
  }, [isOpen, autoCloseDelay]);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for exit animation before actually closing
    setTimeout(() => {
      setIsClosing(false);
      onClose();
      // Return focus to button
      buttonRef.current?.focus();
    }, 160);
  };

  if (!isOpen && !isClosing) return null;

  const buttonRect = buttonRef.current?.getBoundingClientRect();

  // Desktop positioning relative to button
  const desktopModalStyle = buttonRect && !isMobile ? {
    position: 'fixed' as const,
    top: buttonRect.bottom + 10,
    left: buttonRect.left + buttonRect.width / 2,
    transform: 'translateX(-50%)',
    width: Math.max(buttonRect.width * 1.3, 160), // 1.3x button width or min 160px
  } : {};

  return (
    <>
      {/* Full Screen Overlay */}
      <div 
        className={`modal-overlay fixed inset-0 z-[9998] ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
        style={{
          background: 'rgba(0, 0, 0, 0.40)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
        }}
      />
      
      {/* Modal Content */}
      <div 
        ref={modalRef}
        className={`fixed z-[9999] outline-none ${isClosing ? 'animate-modal-out' : 'animate-modal-in'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        style={isMobile ? {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '86vw',
        } : desktopModalStyle}
      >
        {/* Modal Container */}
        <div 
          className="relative"
          style={{
            background: 'rgba(0, 0, 0, 0.70)',
            backdropFilter: 'blur(6px) saturate(120%)',
            WebkitBackdropFilter: 'blur(6px) saturate(120%)',
            border: '1px solid rgba(0, 255, 138, 0.30)',
            borderRadius: '12px',
            boxShadow: '0 0 12px rgba(0, 255, 138, 0.35), 0 0 2px rgba(0, 255, 138, 0.60)',
            padding: isMobile ? '14px 24px' : '13px 22px',
            textAlign: 'center' as const,
          }}
        >
          {/* Content */}
          <div 
            id="modal-title"
            style={{
              fontSize: isMobile ? '17px' : '19px',
              fontWeight: 700,
              letterSpacing: '0.03em',
              color: '#FFFFFF',
              textShadow: '0 0 8px rgba(0, 255, 138, 0.50)',
              textTransform: 'uppercase' as const,
              whiteSpace: 'nowrap' as const,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {t('comingSoon', 'COMING SOON')}
          </div>
        </div>

        {/* Arrow for desktop only */}
        {!isMobile && (
          <div 
            className="absolute"
            style={{
              top: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {/* Arrow with glow */}
            <div 
              style={{
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderBottom: '8px solid rgba(0, 0, 0, 0.70)',
                filter: 'drop-shadow(0 0 2px rgba(0, 255, 138, 0.35))',
              }}
            />
            <div 
              className="absolute"
              style={{
                top: '1px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '5px solid transparent',
                borderRight: '5px solid transparent',
                borderBottom: '7px solid rgba(0, 255, 138, 0.30)',
              }}
            />
          </div>
        )}
      </div>

      <style jsx>{`
        /* Overlay animations */
        .animate-fade-in {
          animation: overlayFadeIn 160ms ease-out forwards;
        }
        .animate-fade-out {
          animation: overlayFadeOut 160ms ease-out forwards;
        }

        /* Modal animations */
        .animate-modal-in {
          animation: modalIn 180ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-modal-out {
          animation: modalOut 160ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes overlayFadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: ${isMobile ? 'translate(-50%, -50%) scale(0.96)' : 'translateX(-50%) scale(0.96)'};
          }
          to {
            opacity: 1;
            transform: ${isMobile ? 'translate(-50%, -50%) scale(1.0)' : 'translateX(-50%) scale(1.0)'};
          }
        }

        @keyframes modalOut {
          from {
            opacity: 1;
            transform: ${isMobile ? 'translate(-50%, -50%) scale(1.0)' : 'translateX(-50%) scale(1.0)'};
          }
          to {
            opacity: 0;
            transform: ${isMobile ? 'translate(-50%, -50%) scale(0.96)' : 'translateX(-50%) scale(0.96)'};
          }
        }

        /* Fallback for browsers without backdrop-filter support */
        @supports not (backdrop-filter: blur(5px)) {
          .modal-overlay {
            background: rgba(0, 0, 0, 0.6) !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }
        }

        @supports not (backdrop-filter: blur(6px)) {
          .fixed.z-\\[9999\\] > div {
            background: rgba(0, 0, 0, 0.95) !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default function TryMooshButton({ 
  onClick, 
  className = '', 
  children = 'Try Moosh',
  size = 'sm',
}: TryMooshButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const buttonRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setShowModal(true);
    
    if (onClick) {
      onClick();
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div ref={buttonRef} className="relative">
        <Button
          onClick={handleClick}
          variant="ghost"
          size={size}
          withSlideBg
          slideBgClassName="bg-moosh-green-bright"
          className={`transform-gpu will-change-transform shadow-none hover:shadow-none border-white/70 uppercase text-xs md:text-sm tracking-wide rounded-md md:rounded-lg [text-rendering:optimizeLegibility] antialiased ${className}`}
        >
          {children}
        </Button>
      </div>
      
      <ComingSoonModal 
        isOpen={showModal} 
        onClose={handleClose} 
        buttonRef={buttonRef}
        autoCloseDelay={3000} // 3 seconds auto-close (configurable)
      />
    </>
  );
}