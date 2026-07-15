import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import BlogCard from "../BlogCard/BlogCard";

const RecentBlogs = () => {
  const blogs = useSelector((state: RootState) => state.posts.posts);
  const recentBlogs = blogs.slice(-4);
  return (
    <section className="pt-32">
      <h3 className="mb-16 font-bold text-lg sm:text-2xl">Recent blog posts</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
        <BlogCard blog={recentBlogs[0]} variant="vertical" />
        <div className="grid gap-y-32">
          <BlogCard blog={recentBlogs[1]} variant="horizontal" />
          <BlogCard blog={recentBlogs[2]} variant="horizontal" />
        </div>
      </div>
      <BlogCard blog={recentBlogs[3]} variant="wide" />
    </section>
  );
};

export default RecentBlogs;
