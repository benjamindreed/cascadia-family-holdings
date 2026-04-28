export interface ContactBody {
  firstName: string
  lastName: string
  email: string
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(body: Partial<ContactBody>): string | null {
  const { firstName, lastName, email, message } = body

  if (!firstName?.trim()) return 'First name is required'
  if (!lastName?.trim()) return 'Last name is required'
  if (!email?.trim()) return 'Email is required'
  if (!message?.trim()) return 'Message is required'
  if (!EMAIL_RE.test(email)) return 'Invalid email address'

  return null
}
