import { Head } from 'vite-react-ssg'
import { Button } from '../components/Button'
import { modules } from '../content/modules'
import { services } from '../content/services'
import { site } from '../content/site'
import { Link } from 'react-router-dom'

const container = 'mx-auto max-w-[1200px] px-6 md:px-10'
const eyebrow = 'text-[15px] font-semibold tracking-widest uppercase'
const h2 = 'font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-[44px]'

export default function Home() {
  const f = site.friday
  const p = site.programme
  return (
    <>
      <Head>
        <title>Digital Skills for Rānui — PbearLab Community</title>
        <meta
          name="description"
          content="Free digital skills for whānau in Rānui: phones, computers, staying safe online and AI. Training videos, plus Friday sessions from 10am to 12pm at Rānui Action Project."
        />
      </Head>

      {/* Hero */}
      <section
        className={`${container} flex flex-wrap items-center gap-14 pt-16 pb-12 md:pt-[72px]`}
      >
        <div className="min-w-0 flex-[1_1_480px]">
          <p className="mb-5 inline-block rounded-2xl bg-ice px-3.5 py-1.5 text-[15px] font-semibold text-lab-deep">
            Free community programme · Rānui
          </p>
          <h1 className="font-display text-5xl leading-[1.02] font-bold tracking-tighter md:text-7xl">
            Digital skills for Rānui, <span className="text-lab">made simple.</span>
          </h1>
          <p className="mt-7 max-w-xl text-[22px] text-muted">
            Phones, computers, staying safe online and AI. Learn with our short videos, then bring
            your questions to Friday help.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button to="/videos">Watch the training videos</Button>
            <Button to="/friday-help" variant="outline">
              Come along on Friday
            </Button>
          </div>
        </div>

        <div className="max-w-[440px] min-w-[300px] flex-[1_1_320px] rounded-3xl bg-ice p-9">
          <p className="mb-3 text-[15px] font-semibold tracking-widest text-lab-deep uppercase">
            {p.frequency} · for {p.duration}
          </p>
          <p className="font-display text-[44px] leading-[1.05] font-bold tracking-tight">
            {p.time}
          </p>
          <div className="my-6 h-px bg-ice-line" />
          <p className="font-semibold">Starts {p.start}</p>
          <p className="mt-1">{f.venue}</p>
          <p className="mt-4 font-semibold text-lab-deep">{f.cost}</p>
        </div>
      </section>

      {/* Partners */}
      <section className={`${container} pb-6`}>
        <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-5 text-base text-muted">
          <span>
            Presented by <strong className="text-ink">PbearLab</strong>
          </span>
          <span>
            Hosted at <strong className="text-ink">Rānui Action Project</strong>
          </span>
          <span>
            Supported by the <strong className="text-ink">Purapura Community Fund</strong>
          </span>
        </div>
      </section>

      {/* What you'll learn */}
      <section id="learn" className={`${container} flex flex-wrap gap-12 pt-[72px] pb-6`}>
        <div className="min-w-0 flex-[1_1_280px]">
          <p className={`${eyebrow} mb-2 text-lab-deep`}>What you’ll learn</p>
          <h2 className={h2}>One step at a time, month by month</h2>
          <p className="mt-4 text-muted">
            Each month has its own set of videos. Start at the beginning or jump to what you need.
          </p>
        </div>
        <ol className="min-w-0 flex-[2_1_560px] border-b border-line">
          {modules.map((m) => (
            <li key={m.month} className="border-t border-line">
              <Link
                to="/videos"
                className="flex flex-wrap items-baseline gap-x-6 gap-y-2 py-6 !text-ink no-underline"
              >
                <span className="w-14 flex-none font-display text-[32px] font-bold text-lab">
                  {String(m.month).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-[1_1_320px]">
                  <span className="block font-display text-[26px] leading-tight font-bold">
                    {m.title}
                  </span>
                  <span className="mt-1 block text-muted">{m.description}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Three ways */}
      <section className={`${container} pt-[72px] pb-6`}>
        <h2 className={`${h2} mb-8`}>Three ways to keep learning</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: 'Watch',
              text: 'Every session is on YouTube. Pause, rewind and watch again at home, whenever suits you.',
              to: '/videos',
              link: 'Go to the videos',
            },
            {
              title: 'Come along',
              text: 'Bring your phone or laptop to our every-Friday IT support session. No booking needed.',
              to: '/friday-help',
              link: 'See Friday details',
            },
            {
              title: 'Ask for help',
              text: 'Stuck between Fridays? Send us your question and a volunteer will get back to you.',
              to: '/friday-help#contact',
              link: 'Get in touch',
            },
          ].map((card) => (
            <div key={card.title} className="rounded-[20px] border border-line bg-white p-8">
              <h3 className="mb-2 font-display text-[28px] font-bold">{card.title}</h3>
              <p className="mb-4 text-muted">{card.text}</p>
              <Link to={card.to} className="font-semibold">
                {card.link}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* PbearLab band */}
      <section className="mt-20 bg-ink text-white">
        <div className={`${container} flex flex-wrap items-center gap-14 py-[72px]`}>
          <div className="min-w-0 flex-[1_1_420px]">
            <p className={`${eyebrow} mb-3 text-mist`}>Behind the programme</p>
            <h2 className={h2}>PbearLab: innovation and security, for real-world use</h2>
            <p className="mt-5 text-xl text-mist-text">
              PbearLab is an independent practice working across applied AI, cybersecurity, web
              development and community IT support. The same skills we share on Fridays are
              available to your business or organisation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button to="/pbearlab">See what we do</Button>
              <Button href={site.contact.websiteUrl} variant="outline-light">
                Visit {site.contact.website}
              </Button>
            </div>
          </div>
          <div className="grid min-w-0 flex-[1_1_380px] grid-cols-2 gap-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-ink-soft p-6">
                <p className="font-display text-[22px] font-bold">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
