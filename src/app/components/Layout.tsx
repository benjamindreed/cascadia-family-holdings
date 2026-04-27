import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './ThemeProvider'
import { Nav } from './Nav'

export default function Layout() {
  return (
    <ThemeProvider>
      <Nav />
      <Outlet />
    </ThemeProvider>
  )
}
