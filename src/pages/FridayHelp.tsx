import { Head } from 'vite-react-ssg'
import { ContactForm } from '../components/ContactForm'
import { fridayHelpExclusions, fridayHelpTopics } from '../content/modules'
import { site } from '../content/site'

const container = 'mx-auto max-w-[1200px] px-6 md:px-10'
const label = 'mb-2 text-sm font-semibold tracking-widest text-lab-deep'
const factTitle = 'font-display text-[30px] leading-[1.15] font-bold'

export default function FridayHelp() {
  const f = site.friday
  return (
    <>
      <Head>
        <title>Friday help — PbearLab Community</title>
        <meta
          name="description"
          content="Free IT help every Friday, 12pm to 2pm at Rānui Action Project. Walk-ins welcome, no booking needed."
        />
      </Head>

      <section className={`${container} pt-16 pb-8`}>
        <p className="mb-3 text-[15px] font-semibold tracking-widest text-lab-deep uppercase">
          Friday help
        </p>
        <h1 className="max-w-[880px] font-display text-5xl leading-[1.03] font-bold tracking-tighter md:text-6xl">
          Bring your questions, <span className="text-lab">we’ll sit with you.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-[21px] text-muted">
          Our every-Friday IT support session is part of the programme. Drop in whenever you like,
          for one question or the whole afternoon.
        </p>
      </section>

      <section className={`${container} py-6`}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-[20px] bg-ice p-8">
            <p className={label}>WHEN</p>
            <p className={factTitle}>
              {f.frequency}
              <br />
              {f.time}
            </p>
          </div>
          <div className="rounded-[20px] bg-ice p-8">
            <p className={label}>WHERE</p>
            <p className={factTitle}>{f.venue}</p>
            <p className="mt-3 text-muted">{f.address}</p>
          </div>
          <div className="rounded-[20px] bg-ice p-8">
            <p className={label}>COST</p>
            <p className={factTitle}>
              Free
              <br />
              Walk-ins welcome
            </p>
            <p className="mt-3 text-muted">
              No booking needed. Bring a friend or whānau member if you like.
            </p>
          </div>
        </div>
      </section>

      <section className={`${container} flex flex-wrap gap-12 pt-14 pb-6`}>
        <div className="min-w-0 flex-[1_1_420px]">
          <h2 className="mb-4 font-display text-4xl leading-[1.15] font-bold tracking-tight">
            What to bring
          </h2>
          <p className="text-muted">
            Your own phone, laptop or tablet, plus its charger. If it’s a problem on a particular
            app or website, bring that along too, and we’ll work through it together.
          </p>
        </div>
        <div className="min-w-0 flex-[1_1_420px]">
          <h2 className="mb-4 font-display text-4xl leading-[1.15] font-bold tracking-tight">
            What we can help with
          </h2>
          <ul className="list-disc space-y-1.5 pl-6 text-muted">
            {fridayHelpTopics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="not-included" className={`${container} pt-10 pb-6`}>
        <div className="rounded-[20px] border-2 border-ice-line p-8 md:p-10">
          <h2 className="mb-2 font-display text-4xl leading-[1.15] font-bold tracking-tight">
            What we can’t help with
          </h2>
          <p className="mb-5 text-muted">
            IT support at {f.venue} does <strong className="text-ink">not</strong> include:
          </p>
          <ul className="grid list-disc gap-x-12 gap-y-3 pl-6 text-muted md:grid-cols-2">
            {fridayHelpExclusions.map((x) => (
              <li key={x.title}>
                <strong className="font-semibold text-ink">{x.title}</strong> ({x.detail})
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className={`${container} pt-14 pb-20`}>
        <div className="flex flex-wrap gap-12 rounded-[28px] bg-ink p-8 text-white md:p-12">
          <div className="min-w-0 flex-[1_1_340px]">
            <p className="mb-2 text-[15px] font-semibold tracking-widest text-mist">
              BETWEEN FRIDAYS
            </p>
            <h2 className="font-display text-[40px] leading-[1.1] font-bold tracking-tight">
              Ask for help
            </h2>
            <p className="mt-4 text-mist-text">
              Send us your question and a volunteer will get back to you. Prefer to talk? Call or
              email us.
            </p>
            <p className="mt-5 font-semibold">
              {site.contact.email}
              <br />
              {site.contact.phone}
            </p>
          </div>
          <div className="min-w-0 flex-[1_1_400px]">
            <ContactForm
              subject="Digital Skills for Rānui: question"
              submitLabel="Send my question"
              fields={[
                { name: 'name', label: 'Your name', type: 'text', required: true },
                { name: 'contact', label: 'Email or phone number', type: 'text', required: true },
                { name: 'message', label: 'What do you need help with?', type: 'textarea' },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}
