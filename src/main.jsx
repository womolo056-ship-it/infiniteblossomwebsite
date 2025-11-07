import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { logPerformanceMetrics } from './utils/performance'

// Log performance metrics in development
if (import.meta.env.DEV) {
  logPerformanceMetrics()
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/infiniteblossomwebsite">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
