import '@/styles/globals.css'

import { useEffect, useState } from 'react'

import { Theme, THEMES } from '@/constants/theme'
import { AuthProvider } from '@/context/AuthContext'

import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>(THEMES.LIGHT)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const isValid = stored === THEMES.DARK || stored === THEMES.LIGHT
    const initialTheme: Theme = isValid ? (stored as Theme) : THEMES.LIGHT

    document.documentElement.setAttribute('data-theme', initialTheme)

    setTheme(initialTheme)
  }, [])

  const toggleTheme = () => {
    const next = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    document.documentElement.setAttribute('data-theme', next)
    setTheme(next)
    localStorage.setItem('theme', next)
  }

  return (
    <AuthProvider>
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 bg-content-surface text-text px-3 py-2 rounded"
      >
        Toggle Theme
      </button>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
