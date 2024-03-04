import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import Jobs from "@/components/career/Jobs";
import DynamicIcon from "@/helpers/DynamicIcon";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Careers, Choose } from "@/types";

export default function Career() {
  const callToAction = getListPage("sections/call-to-action.md");
  const data = getListPage("career/_index.md");
  const { frontmatter } = data;
  const careers: Careers[] = getSinglePage("career");

  return (
    <>
      <SeoMeta
        meta_title={frontmatter.meta_title}
        description={frontmatter.description}
      />
      <PageHeader title={"Career"} />
      <section className="section bg-section">
        <div className="container">
          <div className="text-center lg:mb-14 lg:px-52">
            <h1
              className="mb-4"
              dangerouslySetInnerHTML={markdownify(frontmatter.title)}
            />
            <p
              className="mb-10 text-[18px]"
              dangerouslySetInnerHTML={markdownify(frontmatter.content ?? "")}
            />
          </div>
          <Gallery photos={frontmatter.images} layout={"rows"} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="text-center lg:mb-14 lg:px-52">
            <h1
              className="mb-4"
              dangerouslySetInnerHTML={markdownify(frontmatter.choose.title)}
            />
            <p
              className="mb-10 text-[18px]"
              dangerouslySetInnerHTML={markdownify(
                frontmatter.choose.description,
              )}
            />
          </div>
          <div className="container">
            <div className="row g-4">
              {frontmatter.choose.points.map((point: Choose, index: number) => (
                <div key={index} className="col-12 md:col-6 lg:col-3">
                  <div className="h-full rounded-lg border-2 border-border px-4 py-5 hover:border-primary md:px-5 md:py-10">
                    <div className="flex flex-col items-center text-center">
                      <DynamicIcon
                        icon={point.icon}
                        className="mb-5 rounded bg-primary p-4 text-6xl"
                      />
                      <h4 className="mb-4 font-bold">{point.title}</h4>
                      <p>{point.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-section">
        <div className="container">
          <div className="text-center lg:mb-14 lg:px-52">
            <h1
              className="mb-4"
              dangerouslySetInnerHTML={markdownify(frontmatter.job.title)}
            />
            <p
              className="mb-10 text-[18px]"
              dangerouslySetInnerHTML={markdownify(frontmatter.job.description)}
            />
          </div>
        </div>
        <Jobs jobs={careers} />
      </section>
      <Faq />
      <CallToAction data={callToAction} />
    </>
  );
}
