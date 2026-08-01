import { useState, type FormEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AuthLayout from '../../components/AuthLayout'
import { EyeIcon, EyeOffIcon, LockIcon, TrendBadgeIcon, UserIcon } from '../../assets/icons'
import '../../components/AuthLayout.css'

interface LoginLocationState {
  registered?: boolean
}

function LoginPage() {
  const location = useLocation()
  const { registered } = (location.state as LoginLocationState) ?? {}

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
    <AuthLayout
      cardIcon={<TrendBadgeIcon />}
      title="Bem-vindo de volta!"
      subtitle="Faça login para continuar"
      footer={
        <p className="auth-switch">
          Não tem uma conta? <Link to="/criar-conta">Criar conta</Link>
        </p>
      }
    >
      {registered && (
        <div className="auth-banner auth-banner--success">
          Cadastro realizado com sucesso! Faça login para continuar.
        </div>
      )}

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <label className="auth-field">
          <UserIcon className="auth-field-icon" />
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

        <label className="auth-field">
          <LockIcon className="auth-field-icon" />
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
            className="auth-field-toggle"
            onClick={() => setIsPasswordVisible((visible) => !visible)}
            aria-label={isPasswordVisible ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </label>

        <div className="auth-row">
          <a className="auth-link" href="/esqueci-minha-senha">
            Esqueceu sua senha?
          </a>
        </div>

        <button type="submit" className="auth-submit" disabled={isSubmitting}>
          {isSubmitting ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </AuthLayout>
  )
}

export default LoginPage
