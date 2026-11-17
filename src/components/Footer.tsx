import { site } from '../content/site'

export function Footer() {
  return (
    <footer className="bg-ink-deep text-mist-text">
      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-6 px-6 py-10 text-base md:px-10">
        <div className="max-w-[520px]">
          <p className="font-display text-[22px] font-bold text-white">
            PbearLab<span className="text-mist">.</span>
          </p>
          <p className="mt-2">
            {site.name} is run by Hans Wang &amp; Nina Gao, volunteers at Rānui Action Project, and
            supported by the Purapura Community Fund.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-2">
            {site.contact.email}
            <br />
            {site.contact.phone}
            <br />
            {site.contact.website}
          </p>
        </div>
      </div>
    </footer>
  )
}
