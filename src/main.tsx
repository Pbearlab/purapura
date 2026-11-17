import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './styles/index.css'

// vite-react-ssg renders each route to a static HTML file at build time,
// then React takes over in the browser.
export const createRoot = ViteReactSSG({ routes })
