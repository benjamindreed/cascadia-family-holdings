import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './routes/Home'
import Portfolio from './routes/Portfolio'
import Inquiries from './routes/Inquiries'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'inquiries', element: <Inquiries /> },
    ],
  },
])
