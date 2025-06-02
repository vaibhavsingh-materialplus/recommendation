export default function HomepageB() {
  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-green-600 text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Homepage Variant B</h1>
          <p className="mt-2">Discover our special offers</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-6">
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-green-800">Limited Time Offer</h2>
            <p className="text-lg mb-6">Get 25% off on all products when you sign up today!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 border rounded flex-grow" />
              <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
                Sign Up Now
              </button>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-green-800">Featured Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md p-6 flex">
                <div className="bg-green-100 h-32 w-32 rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="text-green-500 font-semibold">Deal {item}</span>
                </div>
                <div className="ml-6">
                  <h3 className="font-bold text-lg mb-2">Special Offer {item}</h3>
                  <p className="text-gray-600 mb-4">This is a limited time offer only available in variant B.</p>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-green-600 mr-2">$99</span>
                    <span className="text-gray-400 line-through">$149</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-green-800">Why Choose Us - Variant B</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our variant B experience focuses on special offers and deals that provide exceptional value.
          </p>
          <div className="bg-green-100 p-6 rounded-lg">
            <p className="font-medium">This page is showing Variant B of the homepage.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
