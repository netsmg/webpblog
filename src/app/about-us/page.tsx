import Gallery from "@/layouts/components/Gallery";
import JobCard from "@/layouts/components/JobCard";
import Achievement from "@/layouts/components/about/Achievement";
import Value from "@/layouts/components/about/Value";
import Team from "@/layouts/components/our-team/Team";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import PageHeader from "@/layouts/partials/PageHeader";
import SeoMeta from "@/layouts/partials/SeoMeta";
import { Careers } from "@/types";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const About = () => {
  const data = getListPage("about/_index.md");
  const { frontmatter } = data;
  const careers: Careers[] = getSinglePage("career");

  const team = getListPage("team/_index.md");

  return (
    <>
      <SeoMeta
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        description={frontmatter.description}
      />
      <PageHeader title={"About Us"} />
      <section className="section bg-section">
        <div className="container">
          <div className="row items-center justify-center">
            <div className="md:col-10 lg:col-6">
              {frontmatter.image && (
                <Image
                  className="mx-auto mb-6 rounded-lg"
                  src={frontmatter.image}
                  width={587}
                  height={507}
                  alt={frontmatter.title}
                />
              )}
            </div>
            <div className="md:col-10 lg:col-6 ">
              <h1
                className="mb-4 font-extrabold"
                dangerouslySetInnerHTML={markdownify(frontmatter.title)}
              />
              <p
                className="mb-6 text-[18px]"
                dangerouslySetInnerHTML={markdownify(frontmatter.description)}
              />
              <div className="mb-10 flex items-center">
                <div className="mr-4 flex rounded-sm bg-gray-100 px-4 py-2 text-yellow-400">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <h6
                  className="font-medium"
                  dangerouslySetInnerHTML={markdownify(frontmatter.reviews)}
                />
              </div>
              <button className="btn btn-primary">
                Start writing for free
              </button>
            </div>
          </div>
        </div>
      </section>

      {frontmatter.achievement.enable && (
        <Achievement achievement={frontmatter.achievement} />
      )}

      {frontmatter.value.enable && <Value value={frontmatter.value} />}

      <section className="section">
        <div className="container">
          <div className="mb-14 text-center lg:px-52">
            <h1
              className="mb-4 font-bold"
              dangerouslySetInnerHTML={markdownify(frontmatter.team.title)}
            />
            <p
              className="mb-6 text-[18px]"
              dangerouslySetInnerHTML={markdownify(
                frontmatter.team.description,
              )}
            />
          </div>
        </div>
        <Team memebers={team.frontmatter.members.slice(0, 8)} />
      </section>

      <section className="section bg-section">
        <div className="container">
          <div className="mb-14 text-center lg:px-52">
            <h1
              className="mb-4 font-bold"
              dangerouslySetInnerHTML={markdownify(frontmatter.job.title)}
            />
            <p
              className="mb-6 text-[18px]"
              dangerouslySetInnerHTML={markdownify(frontmatter.job.description)}
            />
          </div>
          <div className="row g-4">
            {careers.slice(0, 4).map((job: Careers, index: number) => (
              <JobCard job={job} key={index} />
            ))}
          </div>
        </div>
      </section>

      {frontmatter.gallery.enable && (
        <section className="section">
          <div className="container">
            <div className="mb-14 text-center lg:px-52">
              <h1
                className="mb-4 font-bold"
                dangerouslySetInnerHTML={markdownify(frontmatter.gallery.title)}
              />
              <p
                className="mb-6 text-[18px]"
                dangerouslySetInnerHTML={markdownify(
                  frontmatter.gallery.description,
                )}
              />
            </div>

            <Gallery
              photos={frontmatter.gallery.image}
              layout={"columns"}
              columns={3}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default About;
