import { markdownify } from "@/lib/utils/textConverter";
import { Member } from "@/types";
import Image from "next/image";
import Social from "../Social";

export default function Team({ memebers }: { memebers: Member[] }) {
  return (
    <div className="container">
      <div className="row g-4">
        {memebers.map((member, index: number) => (
          <div key={index} className="col-12 md:col-6 lg:col-4 xl:col-3">
            <div className="outer-div relative h-full overflow-hidden rounded-lg border-2 border-border bg-body">
              <div className="flex h-full flex-col justify-between">
                <div className="mb-10 bg-section py-6 text-center">
                  <h4
                    dangerouslySetInnerHTML={markdownify(member.name)}
                    className="font-bold"
                  />
                  <p
                    dangerouslySetInnerHTML={markdownify(member.designation)}
                  />
                </div>

                <div className="inner-div">
                  <div className="social-icon-div absolute bottom-5 left-0 right-0 z-10 mx-auto hidden max-w-fit">
                    <Social source={member.social} className="social-icons" />
                  </div>
                </div>

                <div className="">
                  <Image
                    className="mx-auto"
                    src={member.image}
                    width={188}
                    height={223}
                    alt={member.name}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
