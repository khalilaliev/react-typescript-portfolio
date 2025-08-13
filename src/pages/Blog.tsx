import { FC, useEffect, useMemo, useState } from "react";
import { blogs } from "../data/blog";
import { useFadeIn } from "../hooks/useFadeIn";
import { motion } from "framer-motion";
import Heading from "../components/Heading/Heading";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";
import Sidebar from "../components/Sidebar/Sidebar";
import Button from "../components/Button/Button";

const Blog: FC = () => {
  const { animationProps } = useFadeIn({ delay: 0 });

  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [selectedId, setSelectedId] = useState<string | number | null>(
    blogs[0]?.id ?? null
  );
  const selected = useMemo(
    () => blogs.find((b) => b.id === selectedId),
    [selectedId]
  );

  console.log(selected);

  return (
    <>
      {width <= 768 ? (
        <motion.div {...animationProps}>
          <DynamicTitle title="Portfolio | Blogs" />
          <Heading text="My Blog" />
          {blogs.length !== 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  onClick={() => setSelectedId(blog.id)}
                  className="flex flex-col dark:bg-dark-bg dark:border-none border border-[#e5e7eb90] hover:shadow-lg bg-white dark:shadow-header-bg rounded-xl overflow-hidden w-full hover:-translate-y-1 duration-300 transition-all"
                >
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

          {selected && (
            <article className="mt-8 p-4 rounded-xl border dark:border-none dark:bg-dark-bg bg-white">
              {selected.imageUrl && (
                <img
                  src={selected.imageUrl}
                  alt={selected.title}
                  className="mb-4 rounded-xl w-full object-cover"
                />
              )}
              <h2 className="text-2xl font-bold mb-3 dark:text-white">
                {selected.title}
              </h2>
              <p className="text-gray-600 dark:text-dark-text">
                {selected.description}
              </p>
            </article>
          )}
        </motion.div>
      ) : (
        <div className="flex gap-5">
          <div className="flex-[30%]">
            <Sidebar
              data={blogs}
              selectedId={selectedId}
              onSelect={(id) => setSelectedId(id)}
            />
          </div>

          <div className="flex-[70%]">
            <DynamicTitle title="Portfolio | Blogs" />

            {selected && (
              <article className="flex flex-col dark:bg-dark-bg dark:border-none border border-[#e5e7eb90] bg-white dark:shadow-header-bg rounded-xl overflow-hidden w-full">
                {selected.imageUrl && (
                  <img
                    src={selected.imageUrl}
                    alt={selected.title}
                    className="rounded-t-xl max-h-[350px] w-full object-cover shadow-lg"
                  />
                )}
                <div className="mt-5 p-3 ">
                  <h2 className="text-3xl font-bold dark:text-white mb-3">
                    {selected.title}
                  </h2>
                  {selected.activity?.length !== 0 && (
                    <ul className="mt-5">
                      {selected.activity?.map((a) => (
                        <>
                          <li key={a.id} className="leading-7 text-gray-700">
                            <p className=" dark:text-dark-text">{a.label}</p>
                            {a.img && (
                              <img
                                src={a.img}
                                alt="TailwindCSS"
                                className="rounded-lg mt-3"
                              />
                            )}
                          </li>
                        </>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
