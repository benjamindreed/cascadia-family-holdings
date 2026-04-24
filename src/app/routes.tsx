import { Routes, Route } from 'react-router-dom'
import { Website } from './components/Website'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Website />} />
      <Route path="/portfolio" element={<Website section="portfolio" />} />
      <Route path="/inquiries" element={<Website section="inquiries" />} />
      <Route path="*" element={<Website />} />
    </Routes>
  )
}
