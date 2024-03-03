"use client";

import DynamicIcon from "@/helpers/DynamicIcon";
import { Pack, Plan } from "@/types";
import { useState } from "react";

export default function PricingTab({ plans }: { plans: Plan[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div>
      <div className="mx-auto mb-9 w-fit rounded-lg border border-border bg-section p-2">
        <div className="flex justify-center gap-2">
          {plans.map((plan: { label: string }, index) => (
            <button
              onClick={() => setActiveTab(index)}
              key={index}
              className={`rounded-lg border border-transparent px-9 py-3 text-[18px] font-bold text-dark transition-colors hover:border-primary ${
                activeTab === index ? "bg-primary" : ""
              }`}
            >
              {plan.label}
            </button>
          ))}
        </div>
      </div>

      <div className="row g-4 justify-center">
        {plans[activeTab].packs.map((plan: Pack, index) => (
          <div key={index} className="col-12 lg:col-4">
            <div onClick={() => setActiveCard(index)}>
              <div
                className={`relative overflow-hidden rounded-t-lg ${
                  activeCard === index ? "bg-primary" : "bg-border"
                } `}
              >
                {/* pack name */}
                <div className="px-10 pb-8 pt-14">
                  <div className="mb-6 flex items-center">
                    <DynamicIcon
                      icon={plan.icon}
                      className={`mr-5 rounded p-2 text-5xl ${
                        activeCard === index ? "bg-body/40" : "bg-primary"
                      }`}
                    />
                    <h4 className="font-bold">{plan.name}</h4>
                  </div>
                  <p className="">
                    <span className="text-6xl font-black text-dark">
                      ${plan.price}
                    </span>
                    /{plans[activeTab].label}
                  </p>
                </div>
              </div>

              <div
                className={`rounded-b-lg border-x-2 border-b-2 p-8 ${
                  activeCard === index ? "border-primary" : "border-border"
                }`}
              >
                {/* feature */}
                <div className="items-stretch">
                  {plan.features.map((feature, index: number) => (
                    <p key={index} className="pb-4 text-[18px]">
                      {feature}
                    </p>
                  ))}
                </div>
                {/* get started button */}
                <div className="mx-auto">
                  <button
                    className={`btn w-full py-3 text-[18px] ${
                      activeCard === index
                        ? "btn-primary"
                        : "btn-outline-primary bg-body"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
