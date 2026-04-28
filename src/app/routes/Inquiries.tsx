import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface InquiryFormData {
  firstName: string
  lastName: string
  email: string
  message: string
}

export default function Inquiries() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [form, setForm] = useState<InquiryFormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMessage(data.error ?? 'Something went wrong. Please try again.')
        setFormState('error')
      } else {
        setFormState('success')
      }
    } catch {
      setErrorMessage('Unable to send. Please check your connection and try again.')
      setFormState('error')
    }
  }

  if (formState === 'success') {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 bg-[var(--cfh-white)]">
        <div className="max-w-md text-center">
          <div className="w-12 h-px bg-[var(--cfh-teal)] mx-auto mb-8" />
          <h2 className="cfh-art text-3xl text-[var(--cfh-ink)] mb-4">Thank you for reaching out.</h2>
          <p className="text-[var(--cfh-ink-mute)] text-sm leading-relaxed">
            We review every inquiry with care and will be in touch if there is a fit.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-24 px-6 bg-[var(--cfh-white)]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="cfh-caps text-[var(--cfh-moss)] mb-4">Get in touch</div>
          <h1 className="cfh-art text-4xl text-[var(--cfh-ink)] mb-4">Inquiries &amp; Partnerships</h1>
          <p className="text-[var(--cfh-ink-mute)]">
            We operate with discretion and purpose. If you represent an opportunity aligned with
            our thesis, please submit an inquiry below.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[var(--cfh-white)] border-t-2 border-t-[var(--cfh-teal)] border border-[var(--cfh-stone-light)] p-8 md:p-12 rounded-sm shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="cfh-caps text-[var(--cfh-ink-mute)]">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={form.firstName}
                onChange={handleChange}
                placeholder="Jane"
                className="bg-[var(--cfh-paper)] border border-[var(--cfh-stone-light)] rounded-sm px-4 py-2.5 text-[var(--cfh-ink)] focus:outline-none focus:border-[var(--cfh-moss)] focus:ring-1 focus:ring-[var(--cfh-moss)] transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="cfh-caps text-[var(--cfh-ink-mute)]">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={form.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="bg-[var(--cfh-paper)] border border-[var(--cfh-stone-light)] rounded-sm px-4 py-2.5 text-[var(--cfh-ink)] focus:outline-none focus:border-[var(--cfh-moss)] focus:ring-1 focus:ring-[var(--cfh-moss)] transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="email" className="cfh-caps text-[var(--cfh-ink-mute)]">
              Business Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              className="bg-[var(--cfh-paper)] border border-[var(--cfh-stone-light)] rounded-sm px-4 py-2.5 text-[var(--cfh-ink)] focus:outline-none focus:border-[var(--cfh-moss)] focus:ring-1 focus:ring-[var(--cfh-moss)] transition-all"
            />
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <label htmlFor="message" className="cfh-caps text-[var(--cfh-ink-mute)]">
              Message or Proposal
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Provide a brief overview..."
              className="bg-[var(--cfh-paper)] border border-[var(--cfh-stone-light)] rounded-sm px-4 py-2.5 text-[var(--cfh-ink)] focus:outline-none focus:border-[var(--cfh-moss)] focus:ring-1 focus:ring-[var(--cfh-moss)] transition-all resize-none"
            />
          </div>

          {formState === 'error' && (
            <p className="text-red-600 text-sm mb-6">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={formState === 'loading'}
            className="w-full bg-[var(--cfh-teal)] text-white px-8 py-3 rounded-sm text-sm font-medium hover:bg-[var(--cfh-ink)] transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {formState === 'loading' ? 'Sending…' : <><span>Submit Inquiry</span><ArrowRight size={16} /></>}
          </button>
        </form>
      </div>
    </main>
  )
}
