
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SidebarNavItem from "./SidebarNavItem";
import SidebarNavSubItem from "./SidebarNavSubItem";
import SidebarTopicItem from "./SidebarTopicItem";

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-w-60 min-h-[764px] w-[250px] border-[rgba(234,236,240,1)] border-r">
      <div className="w-full text-lg text-[rgba(37,58,130,1)] font-semibold leading-6 p-4 border-[rgba(234,236,240,1)] border-b">
        Unread <br />
        Later
      </div>
      <div className="bg-white w-full">
        <div className="w-full">
          <SidebarNavItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/07667742f5a6e0fbf8a6a81eda5bf61008490a52?placeholderIfAbsent=true" text="Attention Needed" isActive={true}>
            <SidebarNavSubItem text="Urgent" badge={2} />
            <SidebarNavSubItem text="Overdue" badge={1} />
            <SidebarNavSubItem text="Due Soon" badge={4} />
          </SidebarNavItem>

          <SidebarNavItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e0bec35bfb37284235ce1b365e012a1ffa0751f0?placeholderIfAbsent=true" text="You Need To" isActive={true}>
            <SidebarNavSubItem text="Reply" badge={9} />
            <SidebarNavSubItem text="Action" badge={2} />
          </SidebarNavItem>

          <SidebarNavItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/29b4a1fdc44b179cb6888bf18c63d8d2ef69307a?placeholderIfAbsent=true" text="Waiting on" isActive={true}>
            <SidebarNavSubItem text="Reply" badge={0} />
            <SidebarNavSubItem text="Action" badge={2} />
          </SidebarNavItem>
        </div>
      </div>

      <div className="flex w-full gap-[40px_100px] text-lg text-[rgba(37,58,130,1)] font-semibold leading-none justify-between p-4 border-[rgba(234,236,240,1)] border-b">
        <div>My Topics</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c86fd5b38269c6cc5fae97153f0f3d551a8d49c?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 shrink-0 cursor-pointer"
          alt="Add topic"
          onClick={() => navigate('/create-topic')}
        />
      </div>

      <div className="bg-white flex w-full flex-col items-stretch text-base font-semibold">
        <SidebarTopicItem text="MARKETING" isActive={true} />
        <SidebarTopicItem text="CUSTOMERS" />

        <div 
          className="bg-[rgba(236,240,255,1)] self-center flex w-[218px] max-w-full items-center gap-2 text-sm text-[#253A82] font-medium text-center leading-none justify-center mt-2 px-4 py-1 rounded-lg cursor-pointer"
          onClick={() => navigate('/create-topic')}
        >
          <div className="self-stretch flex w-full items-center gap-2 overflow-hidden flex-1 shrink basis-[0%] my-auto px-4 py-2">
            <div className="self-stretch w-full gap-3 flex-1 shrink basis-[0%] my-auto">
              + Create New Topic
            </div>
          </div>
        </div>
      </div>

      {/* Added Auth Links */}
      <div className="p-4 mt-4 border-t border-[rgba(234,236,240,1)]">
        <div className="flex flex-col space-y-2">
          <Link 
            to="/login" 
            className="text-[#253A82] hover:text-[#253A82]/80 font-medium text-sm"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="text-[#253A82] hover:text-[#253A82]/80 font-medium text-sm"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
