import { markdownify, slugify } from "@/lib/utils/textConverter";
import { Careers } from "@/types";
import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";

const JobCard = ({ job }: { job: Careers }) => {
  return (
    <div className="lg:col-6">
      <div className="outer-div rounded-lg border-2 border-border px-4 py-5 md:px-8 md:py-10">
        {job.frontmatter?.title && (
          <a
            href={`/career/${slugify(job.slug)}`}
            dangerouslySetInnerHTML={markdownify(job.frontmatter?.title)}
            className="h3 mb-3 font-extrabold text-dark"
          />
        )}

        {job.frontmatter?.location && (
          <p
            dangerouslySetInnerHTML={markdownify(job.frontmatter?.location)}
            className="mb-4 text-light"
          />
        )}

        <div className="flex items-center">
          {job.frontmatter?.duration && (
            <>
              <BiTimeFive className="mr-2 text-[18px] font-medium text-dark" />
              <p
                dangerouslySetInnerHTML={markdownify(job.frontmatter?.duration)}
                className="mr-2 text-[18px] text-dark"
              />
            </>
          )}

          {job.frontmatter?.salary && (
            <>
              <RxDividerVertical className="mr-2 text-[18px] font-medium text-dark" />
              <p
                dangerouslySetInnerHTML={markdownify(job.frontmatter?.salary)}
                className="text-[18px] text-dark"
              />
            </>
          )}
        </div>

        <hr className="my-4" />

        <div className="mb-6">
          <p className="mb-3 text-[18px] text-dark ">Minimum qualifications</p>
          {job.frontmatter?.qualification?.map((q: any, index: number) => (
            <ul key={index}>
              <li className="mb-3 ml-2 text-light">- {q}</li>
            </ul>
          ))}
        </div>

        <Link
          href={`/career/${slugify(job.slug)}`}
          className="btn btn-secondary"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
