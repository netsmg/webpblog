import config from "@/config/config.json";
import readingTime from "@/lib/utils/readingTime";
import { humanize, plainify, slugify } from "@/lib/utils/textConverter";
import { BlogPost } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = ({ data }: { data: BlogPost }) => {
  const { summary_length, blog_folder } = config.settings;

  return (
    <div className="h-full overflow-hidden rounded-lg border-2 border-border hover:border-primary">
      <div className="h-[250px] bg-body">
        <div className="flex h-full items-center justify-center">
          {data.frontmatter.image && (
            <Image
              className="p-5"
              src={data.frontmatter.image}
              alt="blog img"
              width={350}
              height={250}
            />
          )}
        </div>
      </div>
      <div className="px-6 pb-6 pt-8">
        <ul className="mb-4">
          <li className="inline-block rounded bg-primary/25 px-3 py-1">
            {data.frontmatter.categories?.map(
              (category: string, index: number) => (
                <Link
                  key={index}
                  href={`/categories/${slugify(category)}`}
                  className="text-[12px] font-semibold"
                >
                  {humanize(category)}
                  {index !== data.frontmatter.categories.length - 1 && ", "}
                </Link>
              ),
            )}
          </li>
          <BsDot className="mx-2 inline-block text-xl font-semibold" />
          <li className="inline-block text-[12px] font-semibold">
            {readingTime(data.content)}
          </li>
        </ul>
        <Link
          href={`/${blog_folder}/${data.slug}`}
          className="h4 mb-3 text-2xl font-bold text-dark"
        >
          {data.frontmatter.title}
        </Link>

        <p className="mt-3">
          {plainify(data.content.slice(0, Number(summary_length)))}
        </p>

        <Link
          href={`/${blog_folder}/${data.slug}`}
          className="mt-6 flex items-center font-bold text-dark hover:text-primary"
        >
          Read More <FaArrowRightLong className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
