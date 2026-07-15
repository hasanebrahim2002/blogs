const About = () => {
  return (
    <div className="pt-10">
      <section className="border-y border-[#EAECF0] dark:border-[#1D2939] py-14">
        <h1 className="text-5xl md:text-7xl lg:text-[120px] font-bold text-center uppercase leading-none">
          ABOUT US
        </h1>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-14 py-20">
        <div>
          <p className="text-sm font-semibold text-[#6941C6] uppercase">
            Who we are
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Stories that inspire, ideas that matter.
          </h2>
        </div>

        <div>
          <p className="text-[#667085] leading-28 dark:text-[#C0C5D0]">
            We believe great ideas deserve a place to be shared. Our platform
            brings together articles about technology, design, development,
            business and creativity to help readers discover insights that make
            a difference.
          </p>

          <p className="text-[#667085] leading-28 mt-6 dark:text-[#C0C5D0]">
            Every article is carefully selected to provide practical knowledge,
            fresh perspectives and meaningful discussions for developers,
            designers and curious minds.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-10 ">
        <div className="border border-[#EAECF0] rounded-xl p-8">
          <h3 className="text-5xl font-bold">20+</h3>
          <p className="text-[#667085] mt-3 dark:text-[#C0C5D0]">
            Published Articles
          </p>
        </div>

        <div className="border border-[#EAECF0] rounded-xl p-8">
          <h3 className="text-5xl font-bold">10K+</h3>
          <p className="text-[#667085] mt-3 dark:text-[#C0C5D0]">
            Monthly Readers
          </p>
        </div>

        <div className="border border-[#EAECF0] rounded-xl p-8">
          <h3 className="text-5xl font-bold">12</h3>
          <p className="text-[#667085] mt-3 dark:text-[#C0C5D0]">Categories</p>
        </div>

        <div className="border border-[#EAECF0] rounded-xl p-8">
          <h3 className="text-5xl font-bold">100%</h3>
          <p className="text-[#667085] mt-3 dark:text-[#C0C5D0]">
            Original Content
          </p>
        </div>
      </section>

      <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <img
          src="/blogs/images/blog1.jpg"
          className="rounded-xl object-cover h-500 w-full"
          alt=""
        />

        <div>
          <p className="text-sm font-semibold text-[#6941C6] uppercase">
            Our mission
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Creating a place where knowledge meets creativity.
          </h2>

          <p className="mt-8 leading-28 text-[#667085] dark:text-[#C0C5D0]">
            From software engineering to product design and modern business, our
            goal is to publish high-quality content that helps people learn,
            improve and stay inspired every day.
          </p>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-bold mb-12">What we believe</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-[#EAECF0] rounded-xl p-8 hover:-translate-y-2 duration-300">
            <h3 className="font-bold text-xl mb-4">Quality Content</h3>

            <p className="text-[#667085] dark:text-[#C0C5D0]">
              Every article is reviewed to ensure it delivers meaningful value.
            </p>
          </div>

          <div className="border border-[#EAECF0] rounded-xl p-8 hover:-translate-y-2 duration-300">
            <h3 className="font-bold text-xl mb-4">Honest Opinions</h3>

            <p className="text-[#667085] dark:text-[#C0C5D0]">
              We encourage authentic discussions backed by real experience.
            </p>
          </div>

          <div className="border border-[#EAECF0] rounded-xl p-8 hover:-translate-y-2 duration-300">
            <h3 className="font-bold text-xl mb-4">Continuous Learning</h3>
            <p className="text-[#667085] dark:text-[#C0C5D0]">
              Technology changes every day, and so do we.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#EAECF0] py-24 text-center">
        <h2 className="text-5xl font-bold">Join our journey.</h2>

        <p className="text-[#667085] dark:text-[#C0C5D0] mt-6 max-w-2xl mx-auto">
          Discover insightful articles, inspiring stories and practical
          knowledge delivered every week.
        </p>

        <button className="mt-10 bg-[#090D1F] text-white px-8 py-4 rounded-lg hover:opacity-90 duration-300">
          Explore Articles
        </button>
      </section>
    </div>
  );
};

export default About;
