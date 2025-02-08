"use client";

import {
  LinkIcon,
  FileIcon,
  GlobeIcon,
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";

import SectionHeader from "@/components/shared/SectionHeader";
import { LinkProps } from "@/types/link";
import LinkItem from "./LinkItem";

export const LINKS: LinkProps[] = [
  {
    label: "Personal Website",
    icon: <GlobeIcon size={21} />,
    href: "https://harkewauran.space",
    className: "bg-emerald-700",
    target: "_blank",
  },
  {
    label: "Curriculum Vitae",
    icon: <FileIcon size={21} />,
    href: "https://cv.harkewauran.space",
    className: "bg-sky-700",
    target: "_blank",
  },
  {
    label: "GitHub",
    icon: <GithubIcon size={21} />,
    href: "https://github.com/geekfrontend",
    className: "bg-sky-700",
    target: "_blank",
  },
  {
    label: "LinkedIn",
    icon: <LinkedinIcon size={21} />,
    href: "https://www.linkedin.com/in/yohaneswauran/",
    className: "bg-sky-700",
    target: "_blank",
  },
];

const Links = () => {
  const handleClick = (url: string, target: string | undefined) => {
    if (target === "_blank") {
      window.open(url, "_blank");
    } else {
      window.location.href = url;
    }
  };

  return (
    <section className="space-y-4">
      <SectionHeader icon={<LinkIcon size={24} />} title="Links" />
      <div className="flex flex-col w-full gap-y-3">
        {LINKS.map((item, index) => (
          <LinkItem key={index} index={index} onClick={handleClick} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Links;
