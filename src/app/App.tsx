import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import { AppRoutes } from './routes'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
