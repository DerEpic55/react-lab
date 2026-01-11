import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './4/4_5_5/style.css'
import App from './4/4_5_5/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
