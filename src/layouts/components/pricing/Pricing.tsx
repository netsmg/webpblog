import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import PricingTab from "./PricingTab";

const Pricing = () => {
  const callPackage = getListPage("pricing/_index.md");
  const { frontmatter } = callPackage;

  return (
    <section className="bg-section py-20">
      <div className="container">
        {/* top */}
        <div className="text-center lg:mb-8 lg:px-52">
          <h1
            className="mb-4 text-5xl leading-[1.2]"
            dangerouslySetInnerHTML={markdownify(frontmatter.title)}
          />
          <p
            className="mb-10 text-[18px]"
            dangerouslySetInnerHTML={markdownify(frontmatter.content ?? "")}
          />
        </div>
        <PricingTab plans={frontmatter.plans} />
      </div>
    </section>
  );
};

export default Pricing;
