import { useState, type FormEvent } from 'react'
import KokpitLogo from '../../components/KokpitLogo'
import {
  ArrowTrendIcon,
  BarChartIcon,
  ClockIcon,
  DollarIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  TrendBadgeIcon,
  UserIcon,
  WaveDecoration,
} from '../../assets/icons'
import './LoginPage.css'

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    // TODO: integrar com o endpoint de autenticação do backend quando definido.
    setIsSubmitting(false)
  }

  return (
    <div className="login-page">
      <div className="login-decor" aria-hidden="true">
        <div className="login-dot-grid login-dot-grid--top-left" />
        <ClockIcon className="login-decor-icon login-decor-icon--clock" />
        <BarChartIcon className="login-decor-icon login-decor-icon--bars" />
        <DollarIcon className="login-decor-icon login-decor-icon--dollar" />
        <ArrowTrendIcon className="login-decor-icon login-decor-icon--arrow" />
        <WaveDecoration className="login-wave login-wave--left" />
      </div>

      <aside className="login-brand-side">
        <KokpitLogo size="lg" />
        <p className="login-tagline">
          Seu facilitador de <strong>gestão financeira à vista.</strong>
        </p>
        <span className="login-tagline-underline" />
      </aside>

      <main className="login-form-side">
        <div className="login-card">
          <div className="login-card-icon">
            <TrendBadgeIcon />
          </div>
          <h1 className="login-title">Bem-vindo de volta!</h1>
          <p className="login-subtitle">Faça login para continuar</p>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <label className="login-field">
              <UserIcon className="login-field-icon" />
              <input
                type="text"
                name="username"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Usuário"
              />
            </label>

            <label className="login-field">
              <LockIcon className="login-field-icon" />
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                name="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
              />
              <button
                type="button"
                className="login-field-toggle"
                onClick={() => setIsPasswordVisible((visible) => !visible)}
                aria-label={isPasswordVisible ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </label>

            <div className="login-row">
              <a className="login-forgot" href="/esqueci-minha-senha">
                Esqueceu sua senha?
              </a>
            </div>

            <button type="submit" className="login-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className="login-divider" />

          <p className="login-signup">
            Não tem uma conta? <a href="/criar-conta">Criar conta</a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default LoginPage
