import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action } from "@/types";
import Image from "next/image";
import CallToActionSVG from "../components/svg/CallToActionSVG";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const CallToAction = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="section bg-section">
          <div className="container">
            <div className="rounded-lg bg-primary px-8 py-16 md:px-20 xl:p-20">
              <div className="row items-center justify-between">
                <div className="mb-10 md:col-5 md:order-2 lg:col-5 md:mb-0">
                  {data.frontmatter.image ? (
                    <Image
                      src={data.frontmatter.image}
                      width="598"
                      height="416"
                      alt="banner image"
                      className=""
                    />
                  ) : (
                    <CallToActionSVG />
                  )}
                </div>
                <div className="md:col-7 md:order-1 lg:col-6">
                  <h2
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.title,
                    )}
                    className="mb-2 font-extrabold"
                  />
                  <p
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.description,
                    )}
                    className="mb-6 text-[20px]"
                  />
                  {data.frontmatter.button.enable && (
                    <a
                      className="btn bg-dark text-body"
                      href={data.frontmatter.button.link}
                    >
                      {data.frontmatter.button.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
