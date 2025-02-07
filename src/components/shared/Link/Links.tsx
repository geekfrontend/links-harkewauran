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
    icon: <GithubIcon />,
    href: "https://github.com/geekfrontend",
    className: "bg-sky-700",
    target: "_blank",
  },
  {
    label: "LinkedIn",
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/in/yohaneswauran/",
    className: "bg-sky-700",
    target: "_blank",
  },
];

const handleClick = (url: string, target: string | undefined) => {
  if (url !== "#") {
    window.open(url, target);
  }
};
const Links = () => {
  return (
    <section className="space-y-4">
      <SectionHeader icon={<LinkIcon size={24} />} title="Links" />
      <div className="flex flex-col w-full gap-y-3">
        {LINKS?.map((item, index) => (
          <LinkItem key={index} index={index} onClick={handleClick} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Links;
