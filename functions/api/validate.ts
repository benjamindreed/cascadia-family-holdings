export interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(body: Partial<ContactBody>): string | null {
  const { name, email, subject, message } = body;
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return 'All fields are required';
  }
  if (!EMAIL_RE.test(email)) {
    return 'Invalid email address';
  }
  return null;
}
