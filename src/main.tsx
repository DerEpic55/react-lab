import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './3/3_2_3/style.css'
import App from './3/3_2_3/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
