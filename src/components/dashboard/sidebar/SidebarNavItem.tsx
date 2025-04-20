import React, { useState } from "react";

interface SidebarNavItemProps {
  icon: string;
  text: string;
  isActive?: boolean;
  children?: React.ReactNode;
  badge?: number;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  icon,
  text,
  isActive = false,
  children,
  badge,
}) => {
  const [isOpen, setIsOpen] = useState(isActive);

  return (
    <div className="w-full border-[rgba(234,236,240,1)] border-b">
      <div
        className={`flex w-full items-center gap-2 overflow-hidden text-base text-[#182230] font-semibold pl-2 pr-4 py-2 rounded-md ${isActive ? "bg-gray-50" : "bg-white"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="self-stretch flex items-center gap-2 flex-1 shrink basis-[0%] my-auto">
          <img
            src={icon}
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            alt={text}
          />
          <div className="self-stretch my-auto">{text}</div>
        </div>
        {badge !== undefined && (
          <div className="self-stretch bg-gray-50 border text-xs text-[#344054] font-medium text-center my-auto px-2 py-0.5 rounded-2xl border-[rgba(234,236,240,1)] border-solid">
            {badge}
          </div>
        )}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8049baec8ae8d9d38ecf72f46d4f0f61423b8796?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
          alt="Toggle"
        />
      </div>
      {isOpen && children && <div className="w-full py-2">{children}</div>}
    </div>
  );
};

export default SidebarNavItem;
