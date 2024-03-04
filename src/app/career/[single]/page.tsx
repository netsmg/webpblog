import JobCard from "@/components/JobCard";
import config from "@/config/config.json";
import MDXContent from "@/helpers/MDXContent";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import taxonomyFilter from "@/lib/utils/taxonomyFilter";
import { markdownify, slugify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { Careers } from "@/types";
import Image from "next/image";
import { RxDividerVertical } from "react-icons/rx";

export default function page({ params }: { params: { single: string } }) {
  const callToAction = getListPage("sections/call-to-action.md");
  const jobs: Careers[] = getSinglePage("career");
  const job = jobs.filter((page: Careers) => page.slug === params.single)[0];

  const { frontmatter, content } = job;
  const {
    title,
    meta_title,
    description,
    position,
    details,
    summery,
    city,
    duration,
    salary,
    image,
  } = frontmatter;

  const filterByCategories = taxonomyFilter(
    jobs,
    "position",
    slugify(position[0]),
  );
  const { settings } = config;

  return (
    <>
      <SeoMeta
        title={meta_title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section
        className={`section bg-section ${settings.sticky_header && "pt-56"}`}
      >
        <div className="container">
          <div className="row justify-center">
            <article className="lg:col-10">
              <ul className="mb-10 lg:flex">
                {title && (
                  <li className="mr-4 inline-block">
                    <h1
                      dangerouslySetInnerHTML={markdownify(title)}
                      className="font-extrabold"
                    />
                  </li>
                )}

                {duration && (
                  <li className="flex items-center lg:px-3 lg:py-1">
                    <p
                      dangerouslySetInnerHTML={markdownify(duration)}
                      className="text-[18px] font-medium text-dark"
                    />
                    <RxDividerVertical className="mx-2 text-[18px] font-medium text-dark" />
                    <p
                      dangerouslySetInnerHTML={markdownify(salary)}
                      className="text-[18px] font-medium text-dark"
                    />
                  </li>
                )}
              </ul>

              {details && (
                <p
                  dangerouslySetInnerHTML={markdownify(details)}
                  className="mb-10 text-[18px]"
                />
              )}

              {/* img */}
              {image && (
                <div className="mb-10 flex items-center justify-center overflow-hidden rounded-2xl bg-body">
                  <Image
                    src={image}
                    height={1000}
                    width={800}
                    alt="atl img"
                    className="py-7"
                  />
                </div>
              )}
              <div className="row">
                <div className="content col-12 mb-10 lg:col">
                  <MDXContent content={content} />
                </div>
                <div className="lg:col-5">
                  <div className="rounded-lg bg-primary px-6 py-10">
                    {title && (
                      <div className="row mb-3">
                        <p className="col-5 text-[18px] text-dark">
                          Department:
                        </p>
                        <p className="col text-[18px] text-dark">{title}</p>
                      </div>
                    )}
                    {city && (
                      <div className="row mb-3">
                        <p className="col-5 text-[18px] text-dark">Location:</p>
                        <p className="col text-[18px] text-dark">{city}</p>
                      </div>
                    )}
                    {duration && (
                      <div className="row mb-3">
                        <p className="col-5 text-[18px] text-dark">Type:</p>
                        <p className="col text-[18px] text-dark">{duration}</p>
                      </div>
                    )}
                    {salary && (
                      <div className="row mb-3">
                        <p className="col-5 text-[18px] text-dark">Salary:</p>
                        <p className="col text-[18px] text-dark">{salary}</p>
                      </div>
                    )}
                    {summery && <p className="mb-6 font-medium">{summery}</p>}

                    <button className="btn w-full bg-dark text-white hover:bg-white hover:text-dark">
                      Apply For This Job
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="mb-14 font-extrabold">Similar Jobs Like This</h1>
          <div className="row g-4">
            {filterByCategories.slice(0, 2).map((job: any, index: number) => (
              <JobCard job={job} key={index} />
            ))}
          </div>
        </div>
      </section>
      <CallToAction data={callToAction} />
    </>
  );
}
