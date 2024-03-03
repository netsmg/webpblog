import Breadcrumbs from "@/components/Breadcrumbs";
import config from "@/config/config.json";
import { humanize } from "@/lib/utils/textConverter";

const PageHeader = ({ title }: { title: string }) => {
  const { sticky_header } = config.settings;
  return (
    <section className={`${sticky_header && "pt-24"}`}>
      <div className="text-center">
        <div className="py-20">
          <h1 className="underline-svg lg:text-[56px]">
            <strong>{humanize(title)}</strong>
          </h1>
          <Breadcrumbs className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
