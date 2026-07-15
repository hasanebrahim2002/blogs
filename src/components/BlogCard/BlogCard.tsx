import { MdArrowOutward } from "react-icons/md";
import type { BlogProps } from "../../interfaces";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, variant }: BlogProps) => {
  return (
    <>
      <div
        className={`${variant == "vertical" ? "flex flex-col" : variant == "wide" ? "flex flex-col lg:flex-row pt-48" : "flex flex-col md:flex-row"} gap-20`}
      >
        <div
          className={
            variant == "vertical"
              ? "w-full h-228"
              : variant == "wide"
                ? "w-full lg:w-1/2 h-228"
                : "w-full md:w-5/8 h-200"
          }
        >
          <img src={blog.image} alt={blog.title} className="w-full h-full" />
        </div>
        <div
          className={
            variant == "vertical"
              ? ""
              : variant == "wide"
                ? "w-full lg:w-1/2"
                : "w-full md:w-3/8"
          }
        >
          <p className="text-sm text-[#6941C6] font-semibold pb-7">
            {blog.history}
          </p>
          <div className="flex justify-between pb-7">
            <h2 className="font-semibold text-lg">{blog.title}</h2>
            <span>
              <Link to={`/blog/${blog.id}`}>
                <MdArrowOutward className="font-semibold" />
              </Link>
            </span>
          </div>
          <p className="text-base text-[#667085] dark:text-[#C0C5D0]">
            {blog.description}
          </p>
          <div className="mt-12">
            {blog.category.map((category, index) => {
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
    </>
  );
};

export default BlogCard;
