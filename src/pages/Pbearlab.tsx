import { Head } from 'vite-react-ssg'
import { Button } from '../components/Button'
import { ContactForm } from '../components/ContactForm'
import { founder, services } from '../content/services'
import { site } from '../content/site'

const container = 'mx-auto max-w-[1200px] px-6 md:px-10'
const eyebrow = 'mb-2 text-[15px] font-semibold tracking-widest uppercase text-lab-deep'
const h2 = 'font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-[44px]'

export default function Pbearlab() {
  return (
    <>
      <Head>
        <title>PbearLab — Innovation &amp; Security</title>
        <meta
          name="description"
          content="PbearLab is an independent practice in Auckland combining applied AI, cybersecurity, software development and community IT support."
        />
      </Head>

      {/* Hero */}
      <section className="bg-ink text-white">
        <div className={`${container} pt-20 pb-[88px]`}>
          <p className="mb-4 text-[15px] font-semibold tracking-widest text-mist">
            PBEARLAB · INNOVATION &amp; SECURITY
          </p>
          <h1 className="max-w-[900px] font-display text-5xl leading-[1.03] font-bold tracking-tighter md:text-[68px]">
            Technology you can trust, <span className="text-mist">built for real-world use.</span>
          </h1>
          <p className="mt-7 max-w-[700px] text-[22px] text-mist-text">
            PbearLab is an independent practice in Auckland combining applied AI, cybersecurity,
            software development and community IT support.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button href="#contact">Tell us about your project</Button>
            <Button href={site.contact.websiteUrl} variant="outline-light">
              Visit {site.contact.website}
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`${container} pt-20 pb-6`}>
        <p className={eyebrow}>What we do</p>
        <h2 className={`${h2} mb-10`}>Four ways we can help</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <div key={s.title} className="rounded-[20px] border border-line bg-white p-9">
              <p className="mb-3 font-display text-lg font-bold text-lab">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mb-2 font-display text-[28px] leading-[1.15] font-bold">{s.title}</h3>
              <p className="text-muted">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className={`${container} flex flex-wrap items-start gap-12 pt-[72px] pb-6`}>
        <div className="min-w-0 flex-[1_1_360px]">
          <p className={eyebrow}>Who’s behind it</p>
          <h2 className={h2}>
            {founder.name}, {founder.role}
          </h2>
        </div>
        <div className="min-w-0 flex-[2_1_520px] space-y-4 text-xl">
          {founder.paragraphs.map((p, i) => (
            <p key={i} className={i > 0 ? 'text-muted' : ''}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Community link */}
      <section className={`${container} pt-14 pb-6`}>
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-3xl bg-ice px-10 py-9">
          <div className="flex-[1_1_420px]">
            <p className="font-display text-[28px] leading-tight font-bold">
              Looking for the free community programme?
            </p>
            <p className="mt-2 text-muted">
              {site.name} runs every Friday, {site.programme.time}, from 27 November.
            </p>
          </div>
          <Button to="/" variant="ink">
            {site.name}
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`${container} pt-14 pb-20`}>
        <div className="flex flex-wrap gap-12 rounded-[28px] bg-ink p-8 text-white md:p-12">
          <div className="min-w-0 flex-[1_1_340px]">
            <p className="mb-2 text-[15px] font-semibold tracking-widest text-mist">
              WORK WITH PBEARLAB
            </p>
            <h2 className="font-display text-[40px] leading-[1.1] font-bold tracking-tight">
              Tell us about your project
            </h2>
            <p className="mt-4 text-mist-text">
              A few lines is plenty. We’ll reply to talk through what you need.
            </p>
            <p className="mt-5 font-semibold">
              {site.contact.email}
              <br />
              {site.contact.phone}
              <br />
              {site.contact.website}
            </p>
          </div>
          <div className="min-w-0 flex-[1_1_400px]">
            <ContactForm
              subject="PbearLab enquiry"
              submitLabel="Send enquiry"
              fields={[
                { name: 'name', label: 'Your name', type: 'text', required: true },
                { name: 'email', label: 'Email', type: 'email', required: true },
                {
                  name: 'organisation',
                  label: 'Business or organisation (optional)',
                  type: 'text',
                },
                { name: 'message', label: 'What do you need?', type: 'textarea', required: true },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}
