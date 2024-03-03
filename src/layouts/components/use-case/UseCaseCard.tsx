import { Case } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function UseCaseCard({ usecases }: { usecases: Case[] }) {
  return (
    <div className="container">
      <div className="row g-4">
        {usecases.map((usecase, index) => (
          <div key={index} className="col-12 md:col-6 lg:col-4">
            <div className="outer-div h-full rounded-lg border-2 border-border">
              <div className="flex h-full flex-col items-center justify-between p-5 text-center">
                <Image
                  src={usecase.frontmatter.img}
                  className="mx-auto"
                  width="250"
                  height="150"
                  alt="banner image"
                  priority
                />

                <div className="mt-5">
                  <Link
                    href={`/use-case/${usecase.slug}`}
                    className="h4 font-bold"
                  >
                    {usecase.frontmatter.title}
                  </Link>

                  <p className="font-mediums mt-5">
                    {usecase.frontmatter.content}
                  </p>
                  <Link
                    href={`/use-case/${usecase.slug}`}
                    className="h6 mt-6 flex items-center justify-center font-bold text-dark hover:text-primary"
                  >
                    Try {usecase.frontmatter.title}{" "}
                    <FaArrowRightLong className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
