"use client";

import { useTheme } from "next-themes";

import { MagicCard } from "../../magicui/magic-card";

import { LinkProps } from "@/types/link";

interface LinkItemProps extends LinkProps {
  index: number;
  onClick: (href: string, target: string) => void;
}

const LinkItem = ({
  label,
  icon,
  href,
  target = "",
  onClick,
}: LinkItemProps) => {
  const { theme } = useTheme();
  return (
    <MagicCard
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      onClick={() => onClick(href, target)}
      className="relative inline-flex items-center justify-start py-4 pl-4 pr-14 overflow-hidden font-medium text-neutral-800 transition-all duration-150 ease-in-out rounded-lg group shadow-sm cursor-pointer"
    >
      <div className="flex items-center gap-3 dark:text-white">
        <span>{icon}</span>
        <span className="relative w-full text-[15px] md:text-base text-left transition-colors duration-200 ease-in-out">
          {label}
        </span>
      </div>
    </MagicCard>
  );
};

export default LinkItem;
