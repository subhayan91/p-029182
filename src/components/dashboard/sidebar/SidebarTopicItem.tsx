import React, { useState } from "react";

interface SidebarTopicItemProps {
  text: string;
  isActive?: boolean;
}

export const SidebarTopicItem: React.FC<SidebarTopicItemProps> = ({
  text,
  isActive = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`flex w-full ${isActive ? "text-[#182230]" : "text-[#344054]"} whitespace-nowrap ${!isActive ? "mt-2" : ""} border-[rgba(234,236,240,1)] border-b`}
    >
      <div className="bg-white flex min-w-60 w-full items-center gap-2 overflow-hidden flex-1 shrink basis-[0%] px-4 py-2">
        <div className="self-stretch gap-3 flex-1 shrink basis-[0%] my-auto">
          {text}
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/78109304d241db78eae8a07f7e17c2883496628d?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
          alt="Expand"
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </div>
    </div>
  );
};

export default SidebarTopicItem;
