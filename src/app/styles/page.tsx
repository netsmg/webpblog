import UseCaseCard from "@/components/use-case/UseCaseCard";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Case, UseCases } from "@/types";

export default function UseCase() {
  const usecaseIndex: UseCases = getListPage("use-case/_index.md");
  const { frontmatter } = usecaseIndex;
  const usecases: Case[] = getSinglePage("use-case");

  return (
    <>
      <SeoMeta
        meta_title={frontmatter.meta_title}
        description={frontmatter.description}
      />
      <PageHeader title={"Use Cases"} />

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
        </div>
        <UseCaseCard usecases={usecases} />
      </section>
    </>
  );
}
