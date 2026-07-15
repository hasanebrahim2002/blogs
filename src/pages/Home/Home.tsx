import Blogs from "../../components/Blogs/Blogs";
import RecentBlogs from "../../components/RecentBlogs/RecentBlogs";

const Home = () => {
  return (
    <>
      <h1 className="text-[15vw] uppercase font-bold text-center border-t border-b mt-32">
        the blog
      </h1>
      <RecentBlogs />
      <Blogs blogsPerPage={6} />
    </>
  );
};

export default Home;
