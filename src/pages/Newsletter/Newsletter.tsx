import Blogs from "../../components/Blogs/Blogs";

const Newsletter = () => {
  return (
    <div className="pt-32">
      <div>
        <p className="font-semibold text-[#7F56D9] text-center">Newlatters</p>
        <h1 className="font-semibold text-5xl leading-60 pb-20 text-center">
          Stories and interviews
        </h1>
        <p className="text-xl text-[#667085] dark:text-white pb-14 text-center">
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </p>
        <div className="flex flex-col items-center">
          <form className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-[#D0D5DD] py-10 px-8 rounded-lg shadow-sm focus:outline-none focus:ring-0"
            />

            <input
              type="submit"
              value="Subscribe"
              className="px-20 py-7 rounded-lg bg-[#7F56D9] text-white cursor-pointer w-full md:w-auto"
            />
          </form>

          <p className="mt-4 w-full max-w-2xl text-sm text-[#667085] dark:text-white">
            We care about your data in our{" "}
            <span className="underline cursor-pointer">privacy policy</span>.
          </p>
        </div>
      </div>
      <Blogs blogsPerPage={3} />
    </div>
  );
};

export default Newsletter;
