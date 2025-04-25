import { FC } from "react";
import { blogs } from "../data/blog";
import { useFadeIn } from "../hooks/useFadeIn";
import { motion } from "framer-motion";
import Heading from "../components/Heading/Heading";
import Button from "../components/Button/Button";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";

const Blog: FC = () => {
  const { animationProps } = useFadeIn({ delay: 0 });

  return (
    <motion.div {...animationProps}>
      <DynamicTitle title="Portfolio | Blogs" />
      <Heading text="My Blog" />
      {blogs.length !== 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col dark:bg-dark-bg dark:border-none border border-[#e5e7eb90] hover:shadow-lg bg-white dark:shadow-header-bg rounded-xl overflow-hidden w-full hover:-translate-y-1 duration-300 transition-all"
            >
              {/* <Link to={`/blogs/${blog.id}`}>
                <div className="flex-shrink-0">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-52 object-cover rounded-xl"
                  />
                </div>
              </Link> */}
              <div className="flex flex-col justify-between flex-grow p-4">
                <h2 className="text-xl font-semibold dark:text-white mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600  mb-4 dark:text-dark-text">
                  {blog.description}
                </p>
                <Button text="See the blog" source={`/blog/${blog.id}`} />
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Blog;
