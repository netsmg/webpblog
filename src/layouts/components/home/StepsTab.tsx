"use client";

import DynamicIcon from "@/helpers/DynamicIcon";
import { Step } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";

export default function StepsTab({ tabs }: { tabs: Step[] }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="mx-auto mb-9 w-full rounded-lg border border-border bg-section p-2 lg:w-fit">
        <div className="flex flex-col gap-2 lg:flex-row lg:justify-center">
          {tabs.map((tab: Step, index) => (
            <button
              onClick={() => setActiveTab(index)}
              key={index}
              className={`rounded-[8px] border border-transparent px-9 py-3 transition-colors hover:border-primary ${
                activeTab === index ? "bg-primary" : ""
              }`}
            >
              <div className="flex items-center justify-center">
                <DynamicIcon icon={tab.logo} className="mr-4 text-2xl" />
                <h5 className="">{tab.label}</h5>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* tabs */}
      <div className="lg:flex">
        <div className="mb-9 flex items-center justify-center lg:w-[50%]">
          <Image
            src={tabs[activeTab].image}
            className="mx-auto"
            width="427"
            height="400"
            alt="header image"
            priority
          />
        </div>
        <div className="mt-5 lg:my-auto lg:w-[50%]">
          <div className="mb-4 lg:mb-8">
            <h3 className="font-bol mb-2 text-dark lg:mb-4">
              {tabs[activeTab].title}
            </h3>
            <p className="font-mediums">{tabs[activeTab].details}</p>
          </div>
          <div>
            {tabs[activeTab].points.map((point, index: number) => (
              <div key={index}>
                <div className="mb-2 flex items-center lg:mb-4">
                  <BsCheck className="mr-3 rounded-full bg-primary text-xl" />
                  <p className="font-semibold">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
