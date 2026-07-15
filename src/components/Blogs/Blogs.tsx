import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import BlogCard from "../BlogCard/BlogCard";
import { changePage } from "../../redux/slices/postsSlice";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import type { BlogsPerPage } from "../../interfaces";

const Blogs = ({ blogsPerPage }: BlogsPerPage) => {
  const { posts, currentPage } = useSelector((state: RootState) => state.posts);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const postsInPage = posts.slice(startIndex, endIndex);
  const numbers = Math.ceil(posts.length / blogsPerPage);
  const numbersOfPage = Array.from({ length: numbers }).map((_, index) => {
    return index + 1;
  });
  const dispatch = useDispatch();
  return (
    <div className=" pt-44">
      <h3 className="mb-16 font-bold text-lg sm:text-2xl">All blog posts</h3>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-32">
        {postsInPage.map((post) => {
          return <BlogCard blog={post} variant="vertical" key={post.id} />;
        })}
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-gray-200 mt-28">
        <div
          className="flex items-center text-[#667085] dark:text-white cursor-pointer"
          onClick={() => {
            if (currentPage > 1) {
              dispatch(changePage(currentPage - 1));
            }
          }}
        >
          <IoArrowBackOutline />
          <span className="pl-4">Previous</span>
        </div>
        <div className="flex justify-center p-24  ">
          {numbersOfPage.map((point, index) => {
            return (
              <span
                className={`mr-16 py-9 px-14  text-sm ${point == currentPage ? "bg-[#F9F5FF]" : ""} text-[#7F56D9] cursor-pointer rounded-lg`}
                key={index}
                onClick={() => dispatch(changePage(point))}
              >
                {point}
              </span>
            );
          })}
        </div>
        <div
          className="flex items-center text-[#667085] dark:text-white cursor-pointer"
          onClick={() => {
            if (currentPage < numbersOfPage.length) {
              dispatch(changePage(currentPage + 1));
            }
          }}
        >
          <span className="pr-4">Next</span>
          <IoArrowForward />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
