import React from "react";

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
}

const SectionHeader = ({ icon, title }: SectionHeaderProps) => {
  return (
    <div className="flex items-center gap-2 px-2">
      {icon}
      <h2 className="font-medium text-neutral-600">{title}</h2>
    </div>
  );
};

export default SectionHeader;
