import { Navigate } from 'react-router-dom'

/** Legacy route — redirects to the new /legal/terms page. */
export function Terms() {
  return <Navigate to="/legal/terms" replace />
}
