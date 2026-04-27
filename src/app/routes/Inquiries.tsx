import React, { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface InquiryFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Inquiries() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState<InquiryFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.');
      setState('success');
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  if (state === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-serif mb-4">Thank you for reaching out.</h2>
          <p className="text-muted-foreground">We'll be in touch shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-serif mb-2">Inquiries</h1>
        <p className="text-muted-foreground mb-10">
          For investment inquiries or general correspondence, please complete the
          form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-[var(--cfh-teal)]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-[var(--cfh-teal)]"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={form.subject}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-[var(--cfh-teal)]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 text-sm bg-background resize-none focus:outline-none focus:ring-1 focus:ring-[var(--cfh-teal)]"
            />
          </div>
          {state === 'error' && (
            <p className="text-sm text-red-600">{errorMsg}</p>
          )}
          <button
            type="submit"
            disabled={state === 'loading'}
            className="w-full py-2 rounded-md text-sm font-medium text-white bg-[var(--cfh-teal)] hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {state === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </main>
  );
}
