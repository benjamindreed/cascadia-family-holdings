import { Resend } from 'resend';
import { validateContact, ContactBody } from './validate';

interface Env {
  RESEND_API_KEY: string;
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  let body: Partial<ContactBody>;
  try {
    body = await request.json<Partial<ContactBody>>();
  } catch {
    return json({ error: 'Invalid request body' }, 400);
  }

  const validationError = validateContact(body);
  if (validationError) {
    return json({ error: validationError }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return json({ error: 'Email service not configured.' }, 500);
  }

  const { firstName, lastName, email, message } = body as ContactBody;
  const fullName = `${firstName} ${lastName}`;

  try {
    const resend = new Resend(env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Cascadia Family Holdings <onboarding@resend.dev>',
      to: 'benjamin.reed@gmail.com',
      subject: `CFH Inquiry from ${fullName}`,
      html: `
        <h2>New Inquiry — Cascadia Family Holdings</h2>
        <p><strong>From:</strong> ${fullName} &lt;${email}&gt;</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });
  } catch {
    return json({ error: 'Failed to send. Please try again.' }, 500);
  }

  return json({ success: true });
};
