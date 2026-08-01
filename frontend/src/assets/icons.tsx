import type { SVGProps } from 'react'

export function KMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <defs>
        <linearGradient id="kMarkGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6ee094" />
          <stop offset="1" stopColor="#0f6b3a" />
        </linearGradient>
      </defs>
      <polygon points="8,4 24,4 24,60 8,60" fill="url(#kMarkGradient)" />
      <polygon
        points="24,28 50,4 34,4 24,16"
        fill="url(#kMarkGradient)"
        opacity="0.9"
      />
      <polygon
        points="24,34 50,60 34,60 24,46"
        fill="url(#kMarkGradient)"
        opacity="0.75"
      />
    </svg>
  )
}

export function TrendBadgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 16l4.5-5 3.5 3 6.5-7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 6h4v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 19h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  )
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.5 19.5c1.4-3.2 4.2-5 7.5-5s6.1 1.8 7.5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="5"
        y="11"
        width="14"
        height="9"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 11V8a4 4 0 0 1 8 0v3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

export function EyeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="2.75" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function EyeOffIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 3l18 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9.9 5.6A10.5 10.5 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a13.6 13.6 0 0 1-3.1 3.9M6.5 7.4C4 9.1 2.5 12 2.5 12s3.5 6.5 9.5 6.5a9.9 9.9 0 0 0 3.3-.56"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9.9 12a2.75 2.75 0 0 0 3.9 3.9"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M20 11v9l6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function BarChartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M6 34V20M16 34V10M26 34V24M36 34V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function DollarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M20 11v18M24.5 15.5c0-2-2-3-4.5-3s-4.5 1.2-4.5 3.2 2 2.8 4.5 3.3 4.5 1.3 4.5 3.3-2 3.2-4.5 3.2-4.5-1-4.5-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ArrowTrendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M5 28l8-9 6 5 12-15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 9h8v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function WaveDecoration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 160 600 260" width="100%" fill="none" preserveAspectRatio="none" {...props}>
      <defs>
        <linearGradient id="waveGradientLight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a7e6bf" />
          <stop offset="1" stopColor="#22a35e" />
        </linearGradient>
        <linearGradient id="waveGradientDark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#178a4c" />
          <stop offset="1" stopColor="#0b3d24" />
        </linearGradient>
      </defs>
      <path
        d="M0,260 C100,210 200,300 300,240 C420,170 520,260 600,200 L600,420 L0,420 Z"
        fill="url(#waveGradientLight)"
        opacity="0.55"
      />
      <path
        d="M0,320 C120,270 220,350 320,290 C430,225 530,320 600,270 L600,420 L0,420 Z"
        fill="url(#waveGradientDark)"
        opacity="0.9"
      />   
    </svg>
  )
}
