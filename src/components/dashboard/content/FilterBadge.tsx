import React from "react";

interface FilterBadgeProps {
  icon: string;
  text: string;
}

export const FilterBadge: React.FC<FilterBadgeProps> = ({ icon, text }) => {
  return (
    <div className="bg-[rgba(236,240,255,1)] self-stretch flex items-center gap-2 justify-center my-auto px-4 py-1 rounded-lg">
      <img
        src={icon}
        className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto rounded-[18px]"
        alt={text}
      />
      <div className="self-stretch my-auto">{text}</div>
    </div>
  );
};

export default FilterBadge;
