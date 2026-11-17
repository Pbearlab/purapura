import { Head } from 'vite-react-ssg'
import { Button } from '../components/Button'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found — PbearLab Community</title>
      </Head>
      <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">
        <h1 className="font-display text-5xl font-bold tracking-tighter">Page not found</h1>
        <p className="mt-4 mb-8 max-w-xl text-xl text-muted">
          Sorry, we couldn’t find that page. Try the home page, or the training videos.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <Button to="/" variant="ink">
            Go to the home page
          </Button>
          <Button to="/videos" variant="outline">
            Training videos
          </Button>
        </div>
      </section>
    </>
  )
}
