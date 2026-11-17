import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'sun' | 'ink' | 'outline' | 'outline-light'

const base =
  'inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full px-8 text-lg font-semibold no-underline transition-colors'

const variants: Record<Variant, string> = {
  sun: 'bg-sun !text-ink hover:brightness-95',
  ink: 'bg-ink !text-white hover:bg-ink-soft',
  outline: 'border-2 border-ink !text-ink hover:bg-ice',
  'outline-light': 'border-2 border-mist !text-white hover:bg-ink-soft',
}

type Props = {
  variant?: Variant
  children: ReactNode
  /** Internal page link, e.g. "/videos" */
  to?: string
  /** External link, e.g. "https://pbearlab.co.nz" */
  href?: string
}

export function Button({ variant = 'sun', to, href, children }: Props) {
  const className = `${base} ${variants[variant]}`
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={className} {...(href?.startsWith('http') ? { rel: 'noopener' } : {})}>
      {children}
    </a>
  )
}
