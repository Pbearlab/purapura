import { useState } from 'react'

type Props = {
  /** YouTube video ID, the part after "v=" in the link */
  id: string
  title: string
}

/**
 * Shows a play button first. The YouTube player only loads once someone presses it,
 * so the page stays fast and YouTube sets no cookies until then.
 */
export function VideoEmbed({ id, title }: Props) {
  const [playing, setPlaying] = useState(false)

  if (!playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className="flex aspect-video w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl bg-ice text-ink"
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-ink">
          <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="#fff" />
          </svg>
        </span>
        <span className="font-semibold">Play: {title}</span>
      </button>
    )
  }

  return (
    <iframe
      className="aspect-video w-full rounded-2xl"
      src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1`}
      title={title}
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />
  )
}
