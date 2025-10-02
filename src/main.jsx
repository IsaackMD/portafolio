import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Portfolio } from './pages/portfolio'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio></Portfolio>
  </StrictMode>,
)
