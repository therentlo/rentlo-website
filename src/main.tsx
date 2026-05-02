import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import { App } from './App'
import { LegalHub } from './pages/legal/LegalHub'
import { LegalPrivacy } from './pages/legal/Privacy'
import { LegalTerms } from './pages/legal/Terms'
import { LegalCookies } from './pages/legal/Cookies'
import { LegalDPA } from './pages/legal/DPA'
import { LegalTenantNotice } from './pages/legal/TenantNotice'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        {/* Redirects from legacy URLs */}
        <Route path="/privacy" element={<Navigate to="/legal/privacy" replace />} />
        <Route path="/terms" element={<Navigate to="/legal/terms" replace />} />

        {/* Legal pages */}
        <Route path="/legal" element={<LegalHub />} />
        <Route path="/legal/privacy" element={<LegalPrivacy />} />
        <Route path="/legal/terms" element={<LegalTerms />} />
        <Route path="/legal/cookies" element={<LegalCookies />} />
        <Route path="/legal/dpa" element={<LegalDPA />} />
        <Route path="/legal/tenant-notice" element={<LegalTenantNotice />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
