import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import Accordion from "@/shortcodes/Accordion";
import { Faq } from "@/types";

const Faq = ({ className }: { className?: string }) => {
  const allFqs = getListPage("sections/faq.md");
  const { frontmatter } = allFqs;
  const {
    title,
    subtitle,
    faqs,
  }: {
    title: string;
    subtitle: string;
    faqs: Faq[];
  } = frontmatter;

  return (
    <section className={`section bg-white ${className}`}>
      <div className="container">
        <div className="text-center lg:mb-8 lg:px-52">
          <h1 className="mb-4" dangerouslySetInnerHTML={markdownify(title)} />
          <p
            className="mb-14 text-[18px]"
            dangerouslySetInnerHTML={markdownify(subtitle)}
          />
        </div>
        <Accordion faqs={faqs} />
      </div>
    </section>
  );
};

export default Faq;
