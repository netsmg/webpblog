import config from "@/config/config.json";
import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";
import NotFoundSVG from "../layouts/components/svg/NotFoundSVG";

const NotFound = async () => {
  const { sticky_header } = config.settings;
  return (
    <>
      <SeoMeta title={"Page Not Found"} />
      <section
        className={`section text-center ${sticky_header && "pt-32 lg:pt-52"}`}
      >
        <div className="container">
          <div className="row justify-center">
            <div className="sm:col-10 md:col-8 lg:col-6">
              <NotFoundSVG />
              <h1 className="h2 mt-8">Page not found</h1>
              <Link href="/" className="btn btn-primary mt-6">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
