export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-green-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-cinzel font-bold">
          Guardians of Wildlife
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg">
          Protecting wildlife, conserving ecosystems, and creating awareness
          for a sustainable future.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          
          {/* Mission */}
          <div className="bg-white p-8 rounded shadow">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700">
              Our mission is to protect wildlife and preserve natural habitats
              by spreading awareness, supporting conservation programs, and
              encouraging public participation in environmental protection.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded shadow">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700">
              We envision a future where humans and wildlife coexist in harmony,
              ecosystems are preserved, and endangered species are protected
              for future generations.
            </p>
          </div>

        </div>
      </section>

      {/* WHY WILDLIFE CONSERVATION MATTERS */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Why Wildlife Conservation Matters
          </h2>
          <p className="text-gray-700 text-lg">
            Wildlife plays a vital role in maintaining ecological balance.
            Rapid population growth, deforestation, climate change, and illegal
            hunting have caused severe harm to wildlife. Conservation helps
            protect biodiversity, maintain ecosystems, and ensure a healthier
            planet for future generations.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
            Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Animals */}
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Wildlife Information
              </h3>
              <p className="text-gray-600">
                Learn about endangered, extinct, and imported animal species
                and understand the importance of protecting them.
              </p>
            </div>

            {/* Programs */}
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Government Programs
              </h3>
              <p className="text-gray-600">
                Explore various government policies and programs aimed at
                conserving wildlife and protecting ecosystems.
              </p>
            </div>

            {/* Blogs */}
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="text-xl font-semibold text-green-700 mb-3">
                Awareness Blogs
              </h3>
              <p className="text-gray-600">
                Read informative blogs that highlight environmental issues,
                wildlife protection tips, and conservation success stories.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}