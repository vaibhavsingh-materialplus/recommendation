"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

// This component handles route changes and sends page view events to Google Analytics
export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      // Get the full URL including search parameters
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

      // Send a page view to Google Analytics
      // @ts-ignore - gtag might not be recognized by TypeScript
      window.gtag?.("event", "page_view", {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [pathname, searchParams])

  return null // This component doesn't render anything
}
