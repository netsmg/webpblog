import DynamicIcon from "@/helpers/DynamicIcon";
import { markdownify } from "@/lib/utils/textConverter";
import { Review, Reviews } from "@/types";
import { RiDoubleQuotesL } from "react-icons/ri";

const Reviews = ({ review }: { review: Reviews }) => {
  return (
    <section className="py-20">
      <div className="container">
        {/* top */}
        <div className="text-center lg:mb-14 lg:px-52">
          <h1
            className="mb-4 text-5xl leading-[1.2]"
            dangerouslySetInnerHTML={markdownify(review.title)}
          />
          <p
            className="mb-10 text-xl font-normal"
            dangerouslySetInnerHTML={markdownify(review.content ?? "")}
          />
        </div>

        {/* bottom */}
        <div className="masonry sm:masonry-sm md:masonry-md">
          {review.reviews.map((review: Review, index: number) => (
            <div
              key={index}
              className="break-inside mb-6 rounded-lg border border-border bg-section"
            >
              <div className="px-6 py-8">
                <RiDoubleQuotesL className="text-5xl text-primary" />
                <p className="mb-6 font-medium">{review.review}</p>
                <div className="flex items-center">
                  <DynamicIcon
                    icon={review.image}
                    className="mr-2 rounded-full text-5xl lg:mr-4"
                  />
                  <div>
                    <h4 className="text-2xl font-bold">{review.user}</h4>
                    <small className="font-mediums">{review.designation}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
