import Team from "@/components/our-team/Team";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";

export default function OurTeam() {
  const team = getListPage("team/_index.md");
  const { frontmatter } = team;
  const { title, description, members } = frontmatter;
  const callToAction = getListPage("sections/call-to-action.md");

  return (
    <>
      <SeoMeta
        title={frontmatter.meta_title}
        description={frontmatter.description}
      />
      <PageHeader title={"Our Team"} />
      <section className="section bg-section pb-0">
        <div className="container">
          <div className="mb-14 text-center lg:px-52">
            <h1
              className="mb-4 font-extrabold"
              dangerouslySetInnerHTML={markdownify(title)}
            />
            <p
              className="mb-6 text-[18px]"
              dangerouslySetInnerHTML={markdownify(description)}
            />
          </div>
        </div>
        <Team memebers={members} />
      </section>
      <CallToAction data={callToAction} />
    </>
  );
}
