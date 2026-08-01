import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthLayout from '../../components/AuthLayout'
import {
  AtIcon,
  EyeIcon,
  EyeOffIcon,
  IdCardIcon,
  LockIcon,
  TrendBadgeIcon,
  UserIcon,
} from '../../assets/icons'
import { formatCpf, isValidCpf } from '../../utils/cpf'
import { isStrongPassword } from '../../utils/password'
import { registerUser } from '../../services/userService'
import '../../components/AuthLayout.css'

interface FormErrors {
  fullName?: string
  username?: string
  cpf?: string
  password?: string
  confirmPassword?: string
}

function RegisterPage() {
  const navigate = useNavigate()

  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [formError, setFormError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  function validate(): FormErrors {
    const nextErrors: FormErrors = {}

    if (!fullName.trim()) nextErrors.fullName = 'Informe o nome completo'
    if (!username.trim()) nextErrors.username = 'Informe o usuário'
    if (!isValidCpf(cpf)) nextErrors.cpf = 'CPF inválido'
    if (!isStrongPassword(password)) {
      nextErrors.password =
        'Mínimo 8 caracteres, com maiúscula, minúscula e número'
    }
    if (confirmPassword !== password) {
      nextErrors.confirmPassword = 'As senhas não coincidem'
    }

    return nextErrors
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormError('')

    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setIsSubmitting(true)
    try {
      await registerUser({
        fullName,
        username,
        cpf: cpf.replace(/\D/g, ''),
        password,
        confirmPassword,
      })
      navigate('/login', { state: { registered: true } })
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { message } = error.response.data as { message?: string | string[] }
        setFormError(Array.isArray(message) ? message.join(' ') : message ?? 'Erro ao cadastrar.')
      } else {
        setFormError('Não foi possível conectar ao servidor.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AuthLayout
      cardIcon={<TrendBadgeIcon />}
      title="Crie sua conta"
      subtitle="Leva menos de um minuto"
      footer={
        <p className="auth-switch">
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </p>
      }
    >
      {formError && <div className="auth-banner auth-banner--error">{formError}</div>}

      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <div>
          <label className={`auth-field ${errors.fullName ? 'auth-field--invalid' : ''}`}>
            <UserIcon className="auth-field-icon" />
            <input
              type="text"
              name="fullName"
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Nome completo"
            />
          </label>
          {errors.fullName && <p className="auth-field-error">{errors.fullName}</p>}
        </div>

        <div>
          <label className={`auth-field ${errors.username ? 'auth-field--invalid' : ''}`}>
            <AtIcon className="auth-field-icon" />
            <input
              type="text"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Usuário"
            />
          </label>
          {errors.username && <p className="auth-field-error">{errors.username}</p>}
        </div>

        <div>
          <label className={`auth-field ${errors.cpf ? 'auth-field--invalid' : ''}`}>
            <IdCardIcon className="auth-field-icon" />
            <input
              type="text"
              name="cpf"
              inputMode="numeric"
              value={cpf}
              onChange={(e) => setCpf(formatCpf(e.target.value))}
              placeholder="CPF"
            />
          </label>
          {errors.cpf && <p className="auth-field-error">{errors.cpf}</p>}
        </div>

        <div>
          <label className={`auth-field ${errors.password ? 'auth-field--invalid' : ''}`}>
            <LockIcon className="auth-field-icon" />
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              autoComplete="new-password"
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
          {errors.password && <p className="auth-field-error">{errors.password}</p>}
        </div>

        <div>
          <label
            className={`auth-field ${errors.confirmPassword ? 'auth-field--invalid' : ''}`}
          >
            <LockIcon className="auth-field-icon" />
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="confirmPassword"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmar senha"
            />
          </label>
          {errors.confirmPassword && (
            <p className="auth-field-error">{errors.confirmPassword}</p>
          )}
        </div>

        <button type="submit" className="auth-submit" disabled={isSubmitting}>
          {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </AuthLayout>
  )
}

export default RegisterPage
