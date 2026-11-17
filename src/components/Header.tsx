import { Link, NavLink } from 'react-router-dom'

const linkBase = 'border-b-[3px] px-3.5 py-2.5 text-base no-underline'
const inactive = 'border-transparent font-medium !text-ink hover:border-ice-line'
const active = 'border-lab font-semibold !text-ink'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${linkBase} ${isActive ? active : inactive}`

export function Header() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-6 py-3.5 md:px-10">
        <Link to="/" className="!text-ink no-underline">
          <span className="font-display text-[26px] font-bold tracking-tight">
            PbearLab<span className="text-lab">@</span>
            <span className="font-semibold text-muted">community</span>
          </span>
        </Link>

        <nav aria-label="Main" className="flex flex-wrap items-center gap-1">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          {/* A plain link to the "What you'll learn" section on the home page */}
          <Link to="/#learn" className={`${linkBase} ${inactive}`}>
            What you’ll learn
          </Link>
          <NavLink to="/videos" className={navLinkClass}>
            Training videos
          </NavLink>
          <NavLink to="/friday-help" className={navLinkClass}>
            Friday help
          </NavLink>
          <NavLink
            to="/pbearlab"
            className={({ isActive }) =>
              `ml-2 inline-flex min-h-11 items-center rounded-full px-5 text-base font-semibold no-underline !text-white ${
                isActive ? 'bg-lab' : 'bg-ink hover:bg-ink-soft'
              }`
            }
          >
            Work with PbearLab
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
