import config from "@/config/config.json";
import DynamicIcon from "@/helpers/DynamicIcon";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Connect } from "@/types";

export default function ContactUs() {
  const { contact_form_action } = config.params;
  const data = getListPage("contact/_index.md");
  const { frontmatter } = data;
  return (
    <>
      <SeoMeta
        title={frontmatter.meta_title}
        description={frontmatter.description}
      />
      <PageHeader title={"Contact Us"} />
      <section className="section bg-section">
        <div className="container">
          <h1 className="mb-10 text-center font-bold">{frontmatter.title}</h1>
          <div className="row g-4 lg:items-center lg:justify-between">
            {/* left side */}
            <div className="col-10 lg:col-6">
              <form action={contact_form_action} method="POST" className="">
                <div className="mb-10">
                  <label htmlFor="name" className="form-label">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="form-input w-full border-0 border-b-2 border-border focus:border-primary focus:ring-transparent"
                    placeholder="name"
                    type="text"
                  />
                </div>
                <div className="mb-10">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="form-input w-full border-0 border-b-2 border-border focus:border-primary focus:ring-transparent"
                    placeholder="john.doe@email.com"
                    type="email"
                  />
                </div>
                <div className="mb-10">
                  <label htmlFor="message" className="form-label">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input w-full border-0 border-b-2 border-border focus:border-primary focus:ring-transparent"
                    placeholder="Write here your details message..."
                    rows={4}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send message
                </button>
              </form>
            </div>

            {/* right side */}
            <div className="col-10 lg:col-4">
              <h3 className="mb-4 font-extrabold">
                {frontmatter.connect.title}
              </h3>
              <p className="mb-10">{frontmatter.connect.description}</p>

              {frontmatter.connect.contact.map((c: Connect, index: number) => (
                <div key={index} className="mb-4 flex items-center">
                  <DynamicIcon
                    icon={c.icon}
                    className="mr-2 rounded bg-primary p-2 text-3xl"
                  />
                  <p>{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-4">
            {frontmatter.card.map(
              (
                c: { icon: string; title: string; subtitle: string },
                index: number,
              ) => (
                <div key={index} className="col md:col-6 lg:col-4">
                  <div className="rounded-lg border-2 border-border hover:border-primary">
                    <div className="flex flex-col items-center px-4 py-5 text-center md:px-8 md:py-10">
                      <DynamicIcon
                        icon={c.icon}
                        className="mb-4 rounded bg-primary p-4 text-6xl"
                      />

                      <h4 className="mb-4 font-bold">{c.title}</h4>

                      <p className="mb-4 text-[18px]">{c.subtitle}</p>

                      <button className="btn btn-secondary">Talk To Us</button>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
