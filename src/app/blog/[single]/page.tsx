import Disqus from "@/components/Disqus";
import BlogCard from "@/components/blog/BlogCard";
import config from "@/config/config.json";
import MDXContent from "@/helpers/MDXContent";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import readingTime from "@/lib/utils/readingTime";
import { humanize, markdownify, slugify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { BlogPost } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BsDot } from "react-icons/bs";

const { blog_folder, sticky_header } = config.settings;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const posts: BlogPost[] = getSinglePage(blog_folder);

  const paths = posts.map((post) => ({
    single: post.slug,
  }));

  return paths;
};

const PostSingle = ({ params }: { params: { single: string } }) => {
  const callToAction = getListPage("sections/call-to-action.md");
  const posts: BlogPost[] = getSinglePage(blog_folder);
  const post = posts.filter((page) => page.slug === params.single)[0];

  const { frontmatter, content } = post;
  const { title, meta_title, description, image, categories } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      {/* <PageHeader title={"Details"} /> */}
      <section
        className={`section bg-section ${sticky_header && "pt-32 lg:pt-56"}`}
      >
        <div className="container">
          <div className="row justify-center">
            <article className="lg:col-10">
              {/* head */}
              <h1
                dangerouslySetInnerHTML={markdownify(title)}
                className="mb-4"
              />
              <ul className="mb-10">
                <li className="inline-block rounded bg-primary/25 px-3 py-1">
                  {categories?.map((category: string, index: number) => (
                    <Link key={index} href={`/categories/${slugify(category)}`}>
                      {humanize(category)}
                      {index !== categories.length - 1 && ", "}
                    </Link>
                  ))}
                </li>
                <BsDot className="mx-2 inline-block text-xl" />
                <li className="inline-block">{readingTime(content)}</li>
              </ul>
              {/* img */}
              {image && (
                <div className="mb-10 flex items-center justify-center overflow-hidden rounded-2xl bg-body">
                  <Image
                    src={image}
                    height={1000}
                    width={800}
                    alt="alt img"
                    className="py-7"
                  />
                </div>
              )}

              <div className="content mb-10">
                <MDXContent content={content} />
              </div>

              <Disqus className="mt-20" />
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="mb-14 font-bold">Recent Post</h1>
          <div className="row g-4">
            {posts.slice(0, 3).map((post: any, index: number) => (
              <div key={index} className="md:col-6 lg:col-4">
                <BlogCard data={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CallToAction data={callToAction} />
    </>
  );
};

export default PostSingle;
