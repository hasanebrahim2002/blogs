const Projects = () => {
  return (
    <div>
      <section className="py-24">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 relative overflow-hidden rounded-2xl group cursor-pointer">
            <img
              src="/images/blog1.jpg"
              className="w-full h-900 object-cover group-hover:scale-105 duration-500"
              alt=""
            />

            <div className="absolute inset-0 bg-linear-to from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-0 p-10 text-white">
              <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm">
                Technology
              </span>

              <h2 className="text-5xl font-bold mt-6">
                The Future of AI is Already Here
              </h2>

              <p className="mt-5 max-w-xl text-gray-200 leading-20">
                Discover how artificial intelligence is reshaping products,
                businesses and everyday life.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="rounded-2xl overflow-hidden border border-[#EAECF0] dark:border-[#1D2939]">
              <img
                src="/images/blog2.jpg"
                className="w-full object-cover"
                alt=""
              />

              <div className="p-6">
                <span className="text-[#6941C6] text-sm">Design</span>

                <h3 className="font-bold text-2xl mt-3">Modern UI Systems</h3>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#EAECF0] dark:border-[#1D2939]">
              <img
                src="/images/blog3.jpg"
                className="w-full object-cover"
                alt=""
              />

              <div className="p-6">
                <span className="text-[#6941C6] text-sm">Business</span>

                <h3 className="font-bold text-2xl mt-3">Startup Growth</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/blog4.jpg"
              className="w-full h-420 object-cover"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-[#6941C6] font-semibold">Research</span>

            <h2 className="text-5xl font-bold mt-5">
              Innovation begins with curiosity.
            </h2>

            <p className="mt-8 text-[#667085] dark:text-[#C0C5D0] leading-20">
              Every project starts with a question. We explore ideas, test
              assumptions and publish practical insights that help people build
              better products.
            </p>

            <button className="mt-10 w-fit px-7 py-4 rounded-lg bg-[#090D1F] text-white">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
