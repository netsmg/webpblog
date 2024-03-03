import Pagination from "@/components/Pagination";
import BlogCard from "@/components/blog/BlogCard";
import config from "@/config/config.json";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import readingTime from "@/lib/utils/readingTime";
import { sortByDate } from "@/lib/utils/sortFunctions";
import { humanize, plainify, slugify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { BlogPost } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const { blog_folder, summary_length, pagination } = config.settings;

const Posts = () => {
  const postIndex = getListPage(`${blog_folder}/_index.md`);
  const callToAction = getListPage("sections/call-to-action.md");
  const { title, meta_title, description, image } = postIndex.frontmatter;
  const posts: BlogPost[] = getSinglePage(blog_folder);
  const featuredPost: BlogPost | undefined = posts.find(
    (post) => post.frontmatter.featured,
  );
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = sortedPosts.slice(0, pagination);

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={postIndex.frontmatter.title} />
      <section className="section bg-section">
        <div className="container">
          {/* only one post can be shown as featured post. if multiple featured post is found, only the first one will be shown*/}
          {featuredPost && (
            <>
              <h1 className="mb-14 text-center font-extrabold">
                Featured Post
              </h1>
              <div className="row items-center justify-center">
                <div className="overflow-hidden lg:col-6">
                  <div className="flex h-full items-center justify-center rounded-lg bg-body p-5">
                    {featuredPost.frontmatter.image && (
                      <Image
                        className=""
                        src={featuredPost.frontmatter.image}
                        width={468}
                        height={318}
                        alt={""}
                      />
                    )}
                  </div>
                </div>
                <div className="p-6 lg:col-5">
                  <ul className="mb-4">
                    <li className="inline-block rounded bg-primary/25 px-3 py-1">
                      {featuredPost.frontmatter.categories?.map(
                        (category: string, index: number) => (
                          <Link
                            key={index}
                            href={`/categories/${slugify(category)}`}
                            className="text-[12px] font-semibold"
                          >
                            {humanize(category)}
                            {index !==
                              featuredPost.frontmatter.categories.length - 1 &&
                              ", "}
                          </Link>
                        ),
                      )}
                    </li>
                    <BsDot className="mx-2 inline-block text-xl font-semibold" />
                    <li className="inline-block text-[12px] font-semibold">
                      {readingTime(featuredPost.content)}
                    </li>
                  </ul>
                  <Link
                    href={`/${blog_folder}/${featuredPost.slug}`}
                    className="h3 mb-3 font-extrabold leading-tight text-dark"
                  >
                    {featuredPost.frontmatter.title}
                  </Link>

                  <p className="mb-6 text-[18px]">
                    {plainify(
                      featuredPost.content.slice(0, Number(summary_length)),
                    )}
                  </p>
                  <Link
                    href={`/${blog_folder}/${featuredPost.slug}`}
                    className="flex items-center font-bold text-dark hover:text-primary"
                  >
                    Read More <FaArrowRightLong className="ml-2" />
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="mb-14 text-center font-extrabold">Recent Post</h1>
          <div className="row g-4 mb-10">
            {currentPosts.map((post, index) => (
              <div key={index} className="md:col-6 lg:col-4">
                <BlogCard data={post} />
              </div>
            ))}
          </div>
          <Pagination
            section={blog_folder}
            currentPage={1}
            totalPages={totalPages}
          />
        </div>
      </section>
      <CallToAction data={callToAction} />
    </>
  );
};

export default Posts;
