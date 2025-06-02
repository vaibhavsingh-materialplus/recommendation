/**
 * This function simulates a script that takes some time to execute
 * and returns one of the variants: "A", "B", or "C"
 */
export async function getVariant(): Promise<string> {
  // Simulate a delay (e.g., API call, computation, etc.)
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // You can replace this with your actual logic to determine the variant
  // For example, this could be based on:
  // - User data or preferences
  // - A/B testing assignment
  // - Time of day or geographic location
  // - Random assignment with specific weights

  const variants = ["A", "B", "C"]
  const randomIndex = Math.floor(Math.random() * variants.length)

  return variants[randomIndex]
}
