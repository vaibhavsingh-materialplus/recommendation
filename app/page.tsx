"use client"

import { useEffect, useState } from "react"
import { getVariant } from "@/utils/variant-selector"
import HomepageA from "@/components/homepage-a"
import HomepageB from "@/components/homepage-b"
import HomepageC from "@/components/homepage-c"
import LoadingHomepage from "@/components/loading-homepage"

export default function Home() {
  const [variant, setVariant] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const determineVariant = async () => {
      try {
        // Execute the script to get the variant
        const result = await getVariant()
        setVariant(result)
      } catch (error) {
        console.error("Error determining variant:", error)
        // Fallback to variant A in case of error
        setVariant("A")
      } finally {
        setLoading(false)
      }
    }

    determineVariant()
  }, [])

  // Show loading state while waiting for the script to complete
  if (loading) {
    return <LoadingHomepage />
  }

  // Render the appropriate homepage based on the variant
  switch (variant) {
    case "A":
      return <HomepageA />
    case "B":
      return <HomepageB />
    case "C":
      return <HomepageC />
    default:
      // Fallback to variant A if something unexpected happens
      return <HomepageA />
  }
}
