import { Dispatch, useEffect, useState } from "react"

export default function useDarkMode():[boolean | null, Dispatch<boolean>] {
  const [enabled, setDarkMode] = useState<boolean | null>(null)

  useEffect(() => {
    const darkMode = JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    setDarkMode(!! (darkMode ?? prefersDarkMode))
  }, [])

  useEffect(() => {
    if (typeof enabled === 'boolean') {
      document.documentElement.classList.toggle("light", !enabled)
      document.documentElement.classList.toggle("dark", enabled)
      localStorage.setItem('darkMode', JSON.stringify(enabled));
    }
  }, [enabled])

  return [enabled, setDarkMode]
}