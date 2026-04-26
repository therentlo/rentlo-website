export async function submitWaitlist(email: string, country: string): Promise<void> {
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID

  if (formspreeId) {
    await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source: 'therentlo.com', country }),
    })
  } else {
    // Mailto fallback so no signup is ever lost
    window.location.href = `mailto:hello@therentlo.com?subject=Rentlo%20waitlist%20signup&body=Email%3A%20${encodeURIComponent(email)}%0ACountry%3A%20${country}`
  }
}
