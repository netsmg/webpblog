"use client";

import { humanize } from "@/lib/utils/textConverter";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumbs = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  const paths = pathname.split("/").filter((x) => x);
  let parts = [
    {
      label: <AiOutlineHome />,
      href: "/",
      "aria-label": pathname === "/" ? "page" : undefined,
    },
  ];

  paths.forEach((label: string, i: number) => {
    const href = `/${paths.slice(0, i + 1).join("/")}`;
    label !== "page" &&
      parts.push({
        label: <span>{humanize(label.replace(/[-_]/g, " ")) || ""}</span>,
        href,
        "aria-label": pathname === href ? "page" : undefined,
      });
  });

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        className="inline-flex items-center  text-base font-medium"
        role="list"
      >
        {parts.map(({ label, ...attrs }, index) => (
          <li
            className="mx-1 flex items-center capitalize"
            role="listitem"
            key={index}
          >
            {index > 0 && (
              <span className="inlin-block mr-1 text-light">
                <MdKeyboardArrowRight />
              </span>
            )}
            {index !== parts.length - 1 ? (
              <Link className="text-light " {...attrs}>
                {label}
              </Link>
            ) : (
              <span className="text-light ">{label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
