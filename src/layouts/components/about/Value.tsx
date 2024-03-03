import DynamicIcon from "@/helpers/DynamicIcon";
import { markdownify } from "@/lib/utils/textConverter";
import { Value } from "@/types";

export default function Value({ value }: { value: Value }) {
  return (
    <section className="section bg-section">
      <div className="container">
        <div className="mb-14 text-center lg:px-52">
          <h1
            className="mb-4 font-bold"
            dangerouslySetInnerHTML={markdownify(value.title)}
          />
          <p
            className="mb-6 text-[18px]"
            dangerouslySetInnerHTML={markdownify(value.description)}
          />
        </div>

        <div className="row g-4">
          {value.values.map((singleValue, index) => (
            <div key={index} className="col lg:col-6">
              <div className="h-full rounded-lg border-2 border-border p-7 hover:border-primary">
                <div className="mb-4 flex flex-col items-center md:flex-row">
                  <DynamicIcon
                    icon={singleValue.logo}
                    className="mr-6 rounded-md bg-primary p-4 text-6xl text-dark"
                  />
                  <h3
                    dangerouslySetInnerHTML={markdownify(singleValue.name)}
                    className="font-extrabold"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={markdownify(
                      singleValue.description,
                    )}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
