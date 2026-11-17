import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { VideoEmbed } from '../components/VideoEmbed'
import { modules } from '../content/modules'
import { site } from '../content/site'

const container = 'mx-auto max-w-[1200px] px-6 md:px-10'

export default function Videos() {
  const { channelUrl, featuredVideoId } = site.youtube
  return (
    <>
      <Head>
        <title>Training videos — PbearLab Community</title>
        <meta
          name="description"
          content="Watch the Digital Skills for Rānui training videos on YouTube, one playlist for each month."
        />
      </Head>

      <section
        className={`${container} flex flex-wrap items-end justify-between gap-8 pt-16 pb-10`}
      >
        <div className="flex-[1_1_480px]">
          <p className="mb-3 text-[15px] font-semibold tracking-widest text-lab-deep uppercase">
            Training videos
          </p>
          <h1 className="font-display text-5xl leading-[1.03] font-bold tracking-tighter md:text-6xl">
            Watch again, <span className="text-lab">anytime.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[21px] text-muted">
            Every session is on YouTube, with one playlist for each month. Missed a Friday? Start
            here.
          </p>
        </div>
        {channelUrl ? (
          <Button href={channelUrl}>
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" fill="#0E2233" />
            </svg>
            Open our YouTube channel
          </Button>
        ) : (
          <p className="rounded-full bg-ice px-6 py-3 font-semibold text-lab-deep">
            YouTube channel coming soon
          </p>
        )}
      </section>

      {featuredVideoId && (
        <section className={`${container} pb-6`}>
          <div className="max-w-3xl">
            <VideoEmbed id={featuredVideoId} title="Featured training video" />
          </div>
        </section>
      )}

      <section className={`${container} py-6`}>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => {
            const card = (
              <>
                <div className="flex aspect-video flex-col items-center justify-center gap-2 bg-ice">
                  <span className="flex size-[60px] items-center justify-center rounded-full bg-ink">
                    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" fill="#fff" />
                    </svg>
                  </span>
                  <span className="text-[15px] text-muted">
                    {m.playlistUrl ? 'Watch on YouTube' : 'Videos coming soon'}
                  </span>
                </div>
                <div className="px-6 pt-5 pb-6">
                  <p className="mb-1 text-sm font-semibold tracking-widest text-lab-deep">
                    MONTH {m.month}
                  </p>
                  <h2 className="font-display text-[26px] leading-tight font-bold">{m.title}</h2>
                  <p className="mt-2 text-muted">{m.description}</p>
                </div>
              </>
            )
            const cardClass = 'block overflow-hidden rounded-[20px] border border-line bg-white'
            return m.playlistUrl ? (
              <a
                key={m.month}
                href={m.playlistUrl}
                rel="noopener"
                className={`${cardClass} !text-ink no-underline hover:border-lab`}
              >
                {card}
              </a>
            ) : (
              <div key={m.month} className={cardClass}>
                {card}
              </div>
            )
          })}
        </div>
      </section>

      <section className={`${container} pt-12 pb-20`}>
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-3xl bg-ice px-10 py-9">
          <div className="flex-[1_1_420px]">
            <p className="font-display text-[30px] leading-tight font-bold tracking-tight">
              Can’t get a video to play, or want to see it in person?
            </p>
            <p className="mt-2 text-muted">
              Come to Friday help, {site.friday.time} at {site.friday.venue}. We’ll show you.
            </p>
          </div>
          <Link
            to="/friday-help"
            className="inline-flex min-h-[54px] items-center rounded-full bg-ink px-8 text-lg font-semibold !text-white no-underline hover:bg-ink-soft"
          >
            Friday help details
          </Link>
        </div>
      </section>
    </>
  )
}
