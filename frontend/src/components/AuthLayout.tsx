import type { ReactNode } from 'react'
import KokpitLogo from './KokpitLogo'
import {
  ArrowTrendIcon,
  BarChartIcon,
  ClockIcon,
  DollarIcon,
  WaveDecoration,
} from '../assets/icons'
import './AuthLayout.css'

interface AuthLayoutProps {
  cardIcon: ReactNode
  title: string
  subtitle: string
  children: ReactNode
  footer?: ReactNode
}

function AuthLayout({ cardIcon, title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="auth-page">
      <div className="auth-decor" aria-hidden="true">
        <div className="auth-dot-grid auth-dot-grid--top-left" />
        <ClockIcon className="auth-decor-icon auth-decor-icon--clock" />
        <BarChartIcon className="auth-decor-icon auth-decor-icon--bars" />
        <DollarIcon className="auth-decor-icon auth-decor-icon--dollar" />
        <ArrowTrendIcon className="auth-decor-icon auth-decor-icon--arrow" />
        <BarChartIcon className="auth-decor-icon auth-decor-icon--bars-r" />
        <DollarIcon className="auth-decor-icon auth-decor-icon--dollar-r" />
        <ClockIcon className="auth-decor-icon auth-decor-icon--clock-r" />
        <ArrowTrendIcon className="auth-decor-icon auth-decor-icon--arrow-r" />
        <WaveDecoration className="auth-wave" />
      </div>

      <aside className="auth-brand-side">
        <KokpitLogo size="lg" />
        <p className="auth-tagline">
          Seu facilitador de <strong>gestão financeira à vista.</strong>
        </p>
        <span className="auth-tagline-underline" />
      </aside>

      <main className="auth-form-side">
        <div className="auth-card">
          <div className="auth-card-icon">{cardIcon}</div>
          <h1 className="auth-title">{title}</h1>
          <p className="auth-subtitle">{subtitle}</p>

          {children}

          {footer && (
            <>
              <div className="auth-divider" />
              {footer}
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default AuthLayout
