import Faq from "@/components/Faq";
import ClientLogoSlider from "@/components/home/ClientLogoSlider";
import Features from "@/components/home/Features";
import Generate from "@/components/home/Generate";
import Reviews from "@/components/home/Reviews";
import Steps from "@/components/home/Steps";
import Pricing from "@/components/pricing/Pricing";
import BannerSVG from "@/components/svg/BannerSVG";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { HomePage } from "@/types";
import Image from "next/image";
import config from "@/config/config.json";

const Home = () => {
  const { sticky_header } = config.settings;
  const homepage: HomePage = getListPage("home-page/_index.md");
  const { banner, logo, feature, step, review } = homepage.frontmatter;
  const callToAction = getListPage("sections/call-to-action.md");

  return (
    <>
      <SeoMeta />
      {/* hero section */}
      <section className={`section ${sticky_header && "pt-32 lg:pt-52"}`}>
        <div className="container">
          <div className="row items-center">
            {/* left */}
            <div className="col-12 order-2 lg:col lg:order-1">
              <h1
                className="underline-svg mb-6 font-black"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
              <p
                className="mb-10 text-xl"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
              <div className="flex flex-col md:flex-row">
                {banner.buttons.map(
                  (
                    btn: { enable: boolean; label: string; link: string },
                    index: number,
                  ) =>
                    btn.enable && (
                      <a
                        key={index}
                        className={`btn mb-2  text-dark md:m-0 md:mr-5 ${
                          index / 2 === 0
                            ? "btn-primary"
                            : "btn-outline-primary"
                        }`}
                        href={btn.link}
                      >
                        {btn.label}
                      </a>
                    ),
                )}
              </div>
            </div>
            {/* right */}
            <div className="col-12 order-1 lg:col lg:order-2 max-lg:mb-6">
              <div className="mx-auto mt-4">
                {banner.image ? (
                  <Image
                    className=""
                    src={banner.image}
                    width="598"
                    height="416"
                    alt="banner image"
                  />
                ) : (
                  // banner svg image
                  <BannerSVG />
                )}
              </div>
            </div>
          </div>
          {logo.enable && <ClientLogoSlider logo={logo} />}
        </div>
      </section>

      {feature.enable && <Features feature={feature} />}

      {step.enable && <Steps step={step} />}

      <Generate />

      {review.enable && <Reviews review={review} />}

      <Pricing />

      <Faq className="pb-0" />

      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
