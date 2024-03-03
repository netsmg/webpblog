import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { Case } from "@/types";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import UseCaseCard from "../use-case/UseCaseCard";

const Generate = () => {
  const allCards = getListPage("use-case/_index.md");
  const { frontmatter } = allCards;
  const usecases: Case[] = getSinglePage("use-case");

  return (
    <section className="bg-section py-20">
      <div className="container">
        {/* top */}
        <div className="text-center lg:mb-14 lg:px-52">
          <h1
            className="mb-4 text-5xl leading-[1.2]"
            dangerouslySetInnerHTML={markdownify(frontmatter.title)}
          />
          <p
            className="mb-10 text-xl font-normal"
            dangerouslySetInnerHTML={markdownify(frontmatter.content ?? "")}
          />
        </div>
      </div>
      <UseCaseCard usecases={usecases.slice(0, 6)} />
      <div className="mt-14 flex justify-center">
        <Link
          href={"/use-case"}
          className="btn btn-primary flex items-center text-[18px]"
        >
          See All <FaArrowRightLong className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default Generate;
