import { markdownify } from "@/lib/utils/textConverter";
import { Steps } from "@/types";
import StepsTab from "./StepsTab";

const Steps = ({ step }: { step: Steps }) => {
  return (
    <section className="py-20">
      <div className="container">
        {/* top */}
        <div className="text-center lg:mb-14 lg:px-52">
          <h1
            className="mb-4 text-5xl leading-[1.2]"
            dangerouslySetInnerHTML={markdownify(step.title)}
          />
          <p
            className="mb-10 text-xl font-normal"
            dangerouslySetInnerHTML={markdownify(step.content ?? "")}
          />
        </div>

        <StepsTab tabs={step.steps} />
      </div>
    </section>
  );
};

export default Steps;
