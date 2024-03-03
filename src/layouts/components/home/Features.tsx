import { markdownify } from "@/lib/utils/textConverter";
import { Features } from "@/types";
import FeaturesTab from "./FeaturesTab";

const Features = ({ feature }: { feature: Features }) => {
  return (
    <section className="bg-section py-20">
      <div className="container">
        {/* top */}
        <div className="text-center lg:mb-14 lg:px-52">
          <h1
            className="mb-4"
            dangerouslySetInnerHTML={markdownify(feature.title)}
          />
          <p
            className="mb-10 text-xl font-normal"
            dangerouslySetInnerHTML={markdownify(feature.content ?? "")}
          />
        </div>

        <FeaturesTab features={feature.features} />
      </div>
    </section>
  );
};

export default Features;
