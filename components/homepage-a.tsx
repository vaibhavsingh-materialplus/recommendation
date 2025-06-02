export default function HomepageA() {
  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-blue-600 text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Homepage Variant A</h1>
          <p className="mt-2">Welcome to our product showcase</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-6">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md p-6">
                <div className="bg-blue-100 h-40 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-blue-500 font-semibold">Product Image {item}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Product {item}</h3>
                <p className="text-gray-600">This is a description for product {item} in variant A.</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Why Choose Us - Variant A</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our variant A experience focuses on product showcases and features that highlight quality and craftsmanship.
          </p>
          <div className="bg-blue-100 p-6 rounded-lg">
            <p className="font-medium">This page is showing Variant A of the homepage.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
