"use client";

import DynamicIcon from "@/helpers/DynamicIcon";
import { Feature } from "@/types";
import Image from "next/image";
import { useState } from "react";

export default function FeaturesTab({ features }: { features: Feature[] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="row">
      <div className="col-12 lg:col">
        {features.map((feature: Feature, index: number) => (
          <section
            onClick={() => setActiveTab(index)}
            key={index}
            className={`mb-6 flex cursor-pointer rounded-lg border-2 py-8 pl-8 pr-14 ${
              activeTab === index
                ? "activeTab border-primary bg-primary"
                : " hover:border-primary"
            }`}
          >
            <div className="mr-16 h-3 w-3">
              <DynamicIcon
                icon={feature.logo}
                className="rounded pl-3 text-4xl"
              />
            </div>
            <div>
              <h4 className="mb-4 font-bold text-dark">{feature.label}</h4>
              <p className="font-mediums">{feature.details}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="col-12 lg:col">
        <div className="">
          <Image
            src={features[activeTab].image}
            className="mx-auto"
            width="563"
            height="516"
            alt="feature image"
            priority
          />
        </div>
      </div>
    </div>
  );
}
