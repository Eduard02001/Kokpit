import { api } from './api'

export interface RegisterUserPayload {
  fullName: string
  username: string
  cpf: string
  password: string
  confirmPassword: string
}

export async function registerUser(payload: RegisterUserPayload): Promise<void> {
  await api.post('/users', payload)
}
