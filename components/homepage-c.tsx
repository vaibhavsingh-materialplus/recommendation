export default function HomepageC() {
  return (
    <div className="min-h-screen bg-purple-50">
      <header className="bg-purple-600 text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Homepage Variant C</h1>
          <p className="mt-2">Learn from our experts</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-6">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-purple-800">Latest Resources</h2>
          <div className="grid grid-cols-1 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-purple-100 h-48 md:w-64 rounded-md flex items-center justify-center flex-shrink-0 mb-4 md:mb-0">
                    <span className="text-purple-500 font-semibold">Resource {item}</span>
                  </div>
                  <div className="md:ml-6">
                    <h3 className="font-bold text-xl mb-2">Educational Guide {item}</h3>
                    <p className="text-gray-600 mb-4">
                      This comprehensive guide is designed to help you master our products. Only available in variant C.
                    </p>
                    <div className="flex items-center">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-2">
                        Tutorial
                      </span>
                      <span className="text-gray-500 text-sm">10 min read</span>
                    </div>
                    <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
                      Read Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-purple-800">Why Choose Us - Variant C</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our variant C experience focuses on educational content and resources to help you get the most out of our
            products.
          </p>
          <div className="bg-purple-100 p-6 rounded-lg">
            <p className="font-medium">This page is showing Variant C of the homepage.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
