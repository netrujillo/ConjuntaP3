import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
