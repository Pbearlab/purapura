import { useState, type FormEvent } from 'react'
import { site } from '../content/site'

type Field = {
  name: string
  label: string
  type: 'text' | 'email' | 'textarea'
  required?: boolean
}

type Props = {
  fields: Field[]
  submitLabel: string
  /** Used as the email subject when the form opens the visitor's email app */
  subject: string
}

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'done' | 'error'; message: string }

const inputClass =
  'min-h-12 w-full rounded-xl border-2 border-mist bg-white px-3.5 text-lg text-ink'

export function ContactForm({ fields, submitLabel, subject }: Props) {
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget // keep a reference, it is cleared after an await
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>

    // Option 1: a real endpoint is configured in src/content/site.ts
    if (site.formEndpoint) {
      setStatus({ kind: 'sending' })
      try {
        const res = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ subject, ...data }),
        })
        if (!res.ok) throw new Error(String(res.status))
        setStatus({ kind: 'done', message: 'Thank you, we have your message.' })
        form.reset()
      } catch {
        setStatus({
          kind: 'error',
          message: 'Sorry, that did not send. Please try again, or contact us directly.',
        })
      }
      return
    }

    // Option 2 (default): open the visitor's email app with the message filled in
    if (!site.contact.email.includes('@')) {
      setStatus({
        kind: 'error',
        message: 'The contact email has not been set yet. Add it in src/content/site.ts.',
      })
      return
    }
    const body = fields.map((f) => `${f.label}: ${data[f.name] ?? ''}`).join('\n')
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setStatus({
      kind: 'done',
      message: 'Your email app should open with your message ready to send.',
    })
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {fields.map((f) => (
        <div key={f.name} className="flex flex-col gap-1.5">
          <label htmlFor={`field-${f.name}`} className="font-semibold">
            {f.label}
          </label>
          {f.type === 'textarea' ? (
            <textarea
              id={`field-${f.name}`}
              name={f.name}
              rows={4}
              required={f.required}
              className="w-full rounded-xl border-2 border-mist bg-white px-3.5 py-3 text-lg text-ink"
            />
          ) : (
            <input
              id={`field-${f.name}`}
              name={f.name}
              type={f.type}
              required={f.required}
              className={inputClass}
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={status.kind === 'sending'}
        className="min-h-[54px] cursor-pointer self-start rounded-full bg-sun px-8 text-lg font-bold text-ink hover:brightness-95 disabled:opacity-60"
      >
        {status.kind === 'sending' ? 'Sending…' : submitLabel}
      </button>
      <p role="status" aria-live="polite" className="min-h-6 text-mist-text">
        {status.kind === 'done' || status.kind === 'error' ? status.message : ''}
      </p>
    </form>
  )
}
