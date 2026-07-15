import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { RootState } from "../../redux/store/store";
import BlogCard from "../../components/BlogCard/BlogCard";

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = useSelector((state: RootState) => state.posts.posts);
  const currentBlog = blogs.find((item) => item.id === Number(id));
  const relatedBlogs = blogs.filter((blog) => {
    if (blog.id == currentBlog?.id) {
      return false;
    }
    return blog.category.some((category) => {
      return currentBlog?.category.some((cat) => {
        return category.name == cat.name;
      });
    });
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 mt-28">
      <div className="order-2 sm:order-1">
        <h3 className="mb-16 font-bold text-lg sm:text-2xl">
          Recent blog posts
        </h3>

        {relatedBlogs.map((sharedBlod, index) => {
          return (
            <div className="mb-32">
              <BlogCard blog={sharedBlod} variant="vertical" key={index} />
            </div>
          );
        })}
      </div>
      <div className="order-1 sm:order-2">
        <p className="text-sm text-[#6941C6] font-semibold pb-7">
          {currentBlog?.history}
        </p>
        <h2 className="font-semibold text-lg mb-10">{currentBlog?.title}</h2>
        <div className={"h-200"}>
          <img
            src={currentBlog?.image}
            alt={currentBlog?.title}
            className="w-full h-full"
          />
        </div>
        <div className={"w-full"}>
          <div className="flex justify-between pb-7"></div>
          <p className="text-base text-[#667085] dark:text-[#C0C5D0] p-10">
            {currentBlog?.description}
          </p>
          <p className="text-base text-[#667085] dark:text-[#C0C5D0] p-10">
            {currentBlog?.longDescription}
          </p>
          <h3 className="text-center">{currentBlog?.titleSection}</h3>
        </div>
        {currentBlog?.sections.map((item, index) => {
          return (
            <div key={index} className="mt-20">
              <div>
                <img src={item.image} alt="" />
              </div>
              <div>
                <h1 className="text-center p-14">{item.title}</h1>
                <h1 className="p-14">{item.head}</h1>
                <p className="p-14">{item.description}</p>
              </div>
            </div>
          );
        })}
        <div className="mt-12">
          {currentBlog?.category.map((category, index) => {
            return (
              <span
                key={index}
                className="text-sm font-medium rounded-2xl p-7 mr-4"
                style={{
                  color: category.color,
                  backgroundColor: category.bgColor,
                }}
              >
                {category.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
