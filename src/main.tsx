import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './1/1_7_1/style.css'
import App from './1/1_7_1/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
