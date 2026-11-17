export type Module = {
  month: number
  title: string
  description: string
  /** Paste the YouTube playlist link for this month here. Empty = "coming soon". */
  playlistUrl: string
}

export const modules: Module[] = [
  {
    month: 1,
    title: 'Mobile basics',
    description: 'Calls, apps, camera, maps, passcode, finding a lost phone',
    playlistUrl: '',
  },
  {
    month: 2,
    title: 'PC basics',
    description: 'Mouse, keyboard, files, safe searching, email, printing',
    playlistUrl: '',
  },
  {
    month: 3,
    title: 'Phone & PC together',
    description: 'Messaging, video calls with whānau, cloud backup, booking online',
    playlistUrl: '',
  },
  {
    month: 4,
    title: 'AI for everyday life',
    description: 'Chat by typing or voice, emails and forms, checking answers',
    playlistUrl: '',
  },
  {
    month: 5,
    title: 'Security & privacy',
    description: 'Spot scams, passwords, two-factor, privacy, if you’re hacked',
    playlistUrl: '',
  },
  {
    month: 6,
    title: 'Putting it to use',
    description: 'RealMe, myIR, Work and Income, banking, emergency-ready phone',
    playlistUrl: '',
  },
]

export const fridayHelpTopics = [
  'Phones: calls, apps, camera, maps, passcodes, a lost phone',
  'Computers: mouse, keyboard, files, email, printing',
  'Messaging, video calls with whānau, cloud backup',
  'Spotting scams, passwords, two-factor, privacy',
  'RealMe, myIR, Work and Income, banking, online bookings',
  'AI tools for everyday life',
]

// Rānui Action Project house rules: jobs that Friday help does NOT do
export const fridayHelpExclusions = [
  {
    title: 'Data migration or full device-to-device transfer',
    detail: 'phone to phone, laptop to laptop',
  },
  {
    title: 'Operating system installation or reinstallation',
    detail: 'Windows, macOS or Linux, including dual-boot',
  },
  {
    title: 'Full backups and restores',
    detail: 'or “restore everything exactly how it was”',
  },
  {
    title: 'Recovering lost data',
    detail: 'from damaged drives or phones, or deleted files',
  },
  {
    title: 'Complex app reconfiguration',
    detail: 'for example, setting up dozens of apps again after a phone reset',
  },
  {
    title: 'Hardware repairs',
    detail: 'opening devices, replacing parts, soldering, screen or battery swaps',
  },
  {
    title: 'Bypassing security controls',
    detail: 'unlocking phones, breaking encryption, getting around Apple or Google protections',
  },
]
