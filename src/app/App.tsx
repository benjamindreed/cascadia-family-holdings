import { RouterProvider, Outlet } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import { Nav } from './components/Nav'
import { router } from './routes'

export function Layout() {
  return (
    <ThemeProvider>
      <Nav />
      <Outlet />
    </ThemeProvider>
  )
}

export default function App() {
  return <RouterProvider router={router} />
}
