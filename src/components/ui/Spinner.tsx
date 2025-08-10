import * as React from 'react';
import { mergeClassNames } from '@/lib/classnames';

export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
}

export function Spinner({ className, size = 20, ...props }: SpinnerProps) {
  return (
    <svg
      className={mergeClassNames('animate-spin text-moosh-green', className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="status"
      aria-label="Loading"
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

export default Spinner;


