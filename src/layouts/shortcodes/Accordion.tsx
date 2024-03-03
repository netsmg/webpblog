"use client";

import { Faq } from "@/types";
import { useState } from "react";

const Accordion = ({ faqs }: { faqs: Faq[] }) => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {faqs.map((faq: Faq, index) => (
        <div
          key={index}
          className={`accordion ${activeTab === index && "active"}`}
        >
          <button
            className="accordion-header"
            onClick={() => {
              activeTab === index ? setActiveTab(null) : setActiveTab(index);
            }}
          >
            {faq.title}
            {activeTab === index ? (
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 16C24 16.2652 23.8989 16.5196 23.7188 16.7071C23.5388 16.8946 23.2946 17 23.04 17H8.96C8.70539 17 8.46121 16.8946 8.28118 16.7071C8.10114 16.5196 8 16.2652 8 16C8 15.7348 8.10114 15.4804 8.28118 15.2929C8.46121 15.1054 8.70539 15 8.96 15H23.04C23.2946 15 23.5388 15.1054 23.7188 15.2929C23.8989 15.4804 24 15.7348 24 16Z"
                    fill="#121926"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="3.5"
                    stroke="#121926"
                  />
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16H16M16 16H23M16 16V9M16 16V23"
                    stroke="#121926"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="3.5"
                    stroke="#121926"
                  />
                </svg>
              </div>
            )}
          </button>
          <div className="accordion-content">{faq.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
