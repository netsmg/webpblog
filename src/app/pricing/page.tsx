import Faq from "@/components/Faq";
import Package from "@/components/pricing/Pricing";
import DynamicIcon from "@/helpers/DynamicIcon";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Comparison } from "@/types";

export default function Pricing() {
  const data = getListPage("pricing/_index.md");
  const { frontmatter } = data;
  const { compare }: { compare: Comparison } = frontmatter;

  return (
    <>
      <SeoMeta
        title={frontmatter.meta_title}
        description={frontmatter.description}
      />
      <PageHeader title="Pricing Plan" />

      {/* Packages */}
      <Package />

      {/* pack compare */}
      <section className="section bg-white pb-0">
        <div className="container">
          <div className="text-center lg:mb-8 lg:px-52">
            <h1
              className="mb-4"
              dangerouslySetInnerHTML={markdownify(compare.title)}
            />
            <p
              className="mb-10 text-[18px]"
              dangerouslySetInnerHTML={markdownify(compare.content)}
            />
          </div>

          {/* table */}
          <div className="content">
            <table className="mb-0 border-collapse">
              <thead className="hidden lg:table-header-group">
                <tr>
                  {compare.plans.map((plan, index: number) => (
                    <th
                      key={index}
                      className={`${index === 0 ? "" : "text-center"}`}
                    >
                      <h4 className="font-bold">{plan.name}</h4>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.features.map((feature, index: number) => (
                  <tr key={index}>
                    {feature.name.map((availability, index: number) => (
                      <td key={index} data-label={compare.plans[index].name}>
                        {index > 0 ? (
                          <DynamicIcon
                            icon={
                              availability.available === true
                                ? "FaCheck"
                                : "FaX"
                            }
                            className={`text-base font-black ${
                              availability.available === true
                                ? "text-dark"
                                : "text-red-500"
                            }`}
                          />
                        ) : (
                          <h5>{availability.available}</h5>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  {compare.buttons.map((button, index) => (
                    <td key={index} data-label={compare.plans[index].name}>
                      {index !== 0 ? <button>{button.name}</button> : ""}
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
}
