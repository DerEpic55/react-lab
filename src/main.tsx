import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './4/4_3_4/style.css'
import App from './4/4_3_4/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
