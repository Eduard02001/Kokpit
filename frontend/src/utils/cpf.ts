export function formatCpf(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  return digits
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

export function isValidCpf(rawCpf: string): boolean {
  const cpf = rawCpf.replace(/\D/g, '')

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false
  }

  const digits = cpf.split('').map(Number)

  const checkDigit = (length: number): number => {
    const sum = digits
      .slice(0, length)
      .reduce((acc, digit, index) => acc + digit * (length + 1 - index), 0)
    const remainder = (sum * 10) % 11
    return remainder === 10 ? 0 : remainder
  }

  return checkDigit(9) === digits[9] && checkDigit(10) === digits[10]
}
