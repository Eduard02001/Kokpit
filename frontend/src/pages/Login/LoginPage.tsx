import { useState, type FormEvent } from 'react'
import './LoginPage.css'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    // TODO: integrar com o endpoint de autenticação do backend quando definido.
    setIsSubmitting(false)
  }

  return (
    <div className="login-page">
      <aside className="login-art" aria-hidden="true">
        <div className="login-art-placeholder">
          <span className="login-brand">Kokpit</span>
          <p className="login-art-caption">Ilustração em breve</p>
        </div>
      </aside>

      <main className="login-form-side">
        <div className="login-form-column">
          <h1 className="login-title">Bem-vindo(a) de volta</h1>
          <p className="login-subtitle">Entre com sua conta para continuar</p>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <label className="login-field">
              <span className="login-label">E-mail</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@email.com"
              />
            </label>

            <label className="login-field">
              <span className="login-label">Senha</span>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </label>

            <a className="login-forgot" href="/esqueci-minha-senha">
              Esqueci minha senha
            </a>

            <button type="submit" className="login-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <p className="login-signup">
            Não tem uma conta? <a href="/criar-conta">Criar conta</a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default LoginPage
