import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './1/1_1_2/style.css'
import App from './1/1_1_2/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
