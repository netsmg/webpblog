"use client";

import { markdownify } from "@/lib/utils/textConverter";
import { Achievement } from "@/types";
import CountUp from "react-countup";

export default function Achievement({
  achievement,
}: {
  achievement: Achievement;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="row items-center justify-center">
          {/* left */}
          <div className="col-10 mb-8 lg:col-6">
            <h1
              className="mb-4 font-extrabold"
              dangerouslySetInnerHTML={markdownify(achievement.title)}
            />
            <p
              className="mb-6 text-[18px]"
              dangerouslySetInnerHTML={markdownify(achievement.description)}
            />
            <button className="btn btn-primary">Start writing for free</button>
          </div>
          {/* right */}
          <div className="md:col-10 lg:col-6 ">
            <div className="row g-4 items-center justify-center">
              {/* card */}
              <div className="col-10 md:col-6">
                <div className="mx-auto flex flex-col items-center justify-center rounded-lg bg-footer px-10 py-6 text-white">
                  <h1 className="text-white">
                    <CountUp
                      end={20}
                      duration={1.5}
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                    />
                    M+
                  </h1>
                  <p className="text-white">Active Users</p>
                </div>
              </div>
              {/* card */}
              <div className="col-10 md:col-6">
                <div className="mx-auto flex flex-col items-center justify-center rounded-lg bg-footer px-10 py-6 text-white">
                  <h1 className="text-white">
                    <CountUp
                      end={50}
                      duration={1.5}
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                    />
                    K+
                  </h1>
                  <p className="text-white">Daily User</p>
                </div>
              </div>
              {/* card */}
              <div className="col-10 md:col-6">
                <div className="mx-auto flex flex-col items-center justify-center rounded-lg bg-footer px-10 py-6 text-white">
                  <h1 className="text-white">
                    <CountUp
                      end={200}
                      duration={1.5}
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                    />
                    +
                  </h1>
                  <p className="text-white">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
