import { getTaxonomy } from "@/lib/taxonomyParser";
import { Careers } from "@/types";
import JobTabs from "./JobTabs";

export default function Jobs({ jobs }: { jobs: Careers[] }) {
  const positions = getTaxonomy("career", "position");

  return (
    <div className="container">
      <JobTabs positions={positions} jobs={jobs} />
    </div>
  );
}
