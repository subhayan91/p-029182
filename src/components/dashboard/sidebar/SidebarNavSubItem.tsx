import React from "react";

interface SidebarNavSubItemProps {
  text: string;
  badge?: number;
}

export const SidebarNavSubItem: React.FC<SidebarNavSubItemProps> = ({
  text,
  badge,
}) => {
  return (
    <div className="bg-white flex w-full items-center gap-2 overflow-hidden whitespace-nowrap mt-4 pl-[41px] pr-3 py-0.5 rounded-md max-md:pl-5 first:mt-0">
      <div className="self-stretch gap-3 text-sm text-[rgba(52,64,84,1)] font-semibold leading-6 my-auto">
        {text}
      </div>
      {badge !== undefined && (
        <div className="self-stretch bg-gray-50 border text-xs text-[#344054] font-medium text-center my-auto px-2 py-0.5 rounded-2xl border-[rgba(234,236,240,1)] border-solid">
          {badge}
        </div>
      )}
    </div>
  );
};

export default SidebarNavSubItem;
