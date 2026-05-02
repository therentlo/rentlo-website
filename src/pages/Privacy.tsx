import { Navigate } from 'react-router-dom'

/** Legacy route — redirects to the new /legal/privacy page. */
export function Privacy() {
  return <Navigate to="/legal/privacy" replace />
}
