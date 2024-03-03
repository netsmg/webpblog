"use client";

import DynamicIcon from "@/helpers/DynamicIcon";
import taxonomyFilter from "@/lib/utils/taxonomyFilter";
import { humanize, markdownify, slugify } from "@/lib/utils/textConverter";
import { Careers } from "@/types";
import { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
import JobCard from "../JobCard";

export interface Icons {
  all: string;
  ui: string;
  development: string;
  seo: string;
  [key: string]: string;
}

export default function JobTabs({
  positions,
  jobs,
}: {
  positions: string[];
  jobs: Careers[];
}) {
  const icons: Icons = {
    all: "FaTableCellsLarge",
    ui: "FaPenRuler",
    development: "FaCode",
    seo: "FaSearchengin",
  };

  const [activeTab, setActiveTab] = useState("all");
  const filterByCategories = taxonomyFilter(jobs, "position", activeTab);

  const job_list = activeTab === "all" ? jobs : filterByCategories;

  return (
    <div>
      <div className="mx-auto mb-9 w-full rounded-lg border border-border bg-section p-2 lg:w-fit">
        <div className="flex flex-col justify-center gap-2 lg:flex-row">
          <div
            onClick={() => setActiveTab("all")}
            className={`rounded-lg border border-transparent px-10 py-3 transition-colors hover:border-primary ${
              activeTab === "all" ? "bg-primary" : ""
            }`}
          >
            <div className="flex justify-center">
              <p className="flex items-center text-[18px] text-dark">
                <DynamicIcon icon={icons.all} className="mr-2" />
                All
              </p>
            </div>
          </div>
          {positions.map((position: string, index: number) => (
            <div
              onClick={() => setActiveTab(position)}
              key={index}
              className={`rounded-lg border border-transparent px-10 py-3 transition-colors hover:border-primary ${
                activeTab === position ? "bg-primary" : ""
              }`}
            >
              <div className="flex justify-center">
                <p className="flex items-center text-[18px] text-dark">
                  <DynamicIcon icon={icons[position]} className="mr-2" />
                  {humanize(position)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row g-4">
        {job_list.map((job: any, index: number) => (
          <JobCard job={job} key={index} />
        ))}
      </div>
    </div>
  );
}
