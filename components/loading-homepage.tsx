import { Loader2 } from "lucide-react"

export default function LoadingHomepage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <Loader2 className="w-12 h-12 mx-auto animate-spin text-gray-500" />
        <h2 className="mt-4 text-xl font-semibold text-gray-700">Loading your experience</h2>
        <p className="mt-2 text-gray-500">Please wait while we prepare your personalized content...</p>
      </div>
    </div>
  )
}
