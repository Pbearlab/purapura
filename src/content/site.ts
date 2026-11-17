// Edit this file to update details that appear across the site.
// Anything still in [SQUARE BRACKETS] is a placeholder waiting for the real detail.

export const site = {
  name: 'Digital Skills for Rānui',

  // The Digital Skills for Rānui programme sessions (shown on the home page)
  programme: {
    frequency: 'Every Friday',
    time: '10am – 12pm',
    start: 'Friday 27 November',
    duration: '6 months',
  },

  // Friday help: the general, ongoing IT help service at Rānui Action Project
  friday: {
    frequency: 'Every Friday',
    time: '12pm – 2pm',
    venue: 'Rānui Action Project',
    address: '476 Swanson Road, Rānui, Auckland 0612',
    cost: 'Free · walk-ins welcome',
  },

  contact: {
    email: 'admin@pbearlab.co.nz',
    phone: '021 0818 8080',
    website: 'pbearlab.co.nz',
    websiteUrl: 'https://pbearlab.co.nz',
  },

  // Leave a link empty ('') and the site shows "coming soon" instead of a broken link.
  youtube: {
    channelUrl: '',
    // A single YouTube video ID (the part after v=) to show as the featured video on /videos.
    featuredVideoId: '',
  },

  // If you set up somewhere to receive form submissions (your own server or a form service),
  // put its URL here. While empty, the forms open the visitor's email app instead.
  formEndpoint: '',
} as const

/** True while a value still looks like a [PLACEHOLDER]. */
export const isPlaceholder = (value: string) => value.trim().startsWith('[')
