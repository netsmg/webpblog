import Faq from "@/components/Faq";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";

export default function FaqPage() {
  const allFqs = getListPage("sections/faq.md");
  const { frontmatter } = allFqs;
  const callToAction = getListPage("sections/call-to-action.md");

  return (
    <>
      <SeoMeta
        title={frontmatter.meta_title}
        description={frontmatter.description}
      />
      <PageHeader title="FAQ" />
      <Faq />
      <CallToAction data={callToAction} />
    </>
  );
}
