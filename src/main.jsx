import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Portfolio } from './pages/portfolio'
import './styles/globals.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)
