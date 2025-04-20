import React from "react";
import SearchBar from "./SearchBar";
import ContentCard from "./ContentCard";
import PeopleSection from "./PeopleSection";
import ConversationSection from "./ConversationSection";
import ReplySection from "./ReplySection";
import ForwardSection from "./ForwardSection";
import ActionsSection from "./ActionsSection";
import ChatInput from "./ChatInput";

export const MainContent: React.FC = () => {
  return (
    <div className="bg-[rgba(236,240,255,1)] min-w-60 overflow-hidden flex-1 shrink basis-[0%] pt-4 pb-12 px-10 max-md:max-w-full max-md:px-5">
      <div className="w-full p-0.5 rounded-md max-md:max-w-full">
        <SearchBar />

        <div className="w-full mt-4 max-md:max-w-full">
          <ContentCard
            title="Quote request by Apple"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />

          <div className="w-full max-md:max-w-full">
            <PeopleSection />
            <ConversationSection />
            <ReplySection />
            <ForwardSection />
            <ActionsSection />
          </div>
        </div>

        <ChatInput />
      </div>
    </div>
  );
};

export default MainContent;
