import type { RouteRecord } from 'vite-react-ssg'
import { Layout } from './components/Layout'
import FridayHelp from './pages/FridayHelp'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Pbearlab from './pages/Pbearlab'
import Videos from './pages/Videos'

// To add a page: create it in src/pages, then add a route here and a link in components/Header.tsx.
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'videos', element: <Videos /> },
      { path: 'friday-help', element: <FridayHelp /> },
      { path: 'pbearlab', element: <Pbearlab /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
