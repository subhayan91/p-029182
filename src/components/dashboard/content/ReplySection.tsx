import React, { useState } from "react";
import StepConnector from "./StepConnector";

export const ReplySection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Reply Option 1");

  return (
    <div className="w-full max-md:max-w-full">
      <StepConnector icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6a7328bd35f1f44c69b7c3a3b6c3682a10cc7817?placeholderIfAbsent=true" title="Reply" />
      <div className="rounded bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border w-full p-6 border-[rgba(234,236,240,1)] border-solid max-md:max-w-full max-md:px-5">
        <div className="w-full max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="bg-gray-50 border flex w-full items-center gap-1 text-base text-[#667085] font-semibold flex-wrap p-1.5 rounded-xl border-[rgba(234,236,240,1)] border-solid max-md:max-w-full">
              {["Reply Option 1", "Reply Option 2", "Reply Option 3"].map(
                (option) => (
                  <div
                    key={option}
                    className={`${
                      selectedTab === option
                        ? "border self-stretch shadow-[0px_1px_3px_0px_rgba(16,24,40,0.10),0px_1px_2px_0px_rgba(16,24,40,0.06)] bg-white text-[#344054] border-[rgba(37,58,130,1)] border-solid"
                        : "text-[#667085]"
                    } self-stretch min-h-11 gap-2 overflow-hidden my-auto px-3 py-2.5 rounded-md cursor-pointer`}
                    onClick={() => setSelectedTab(option)}
                  >
                    {option}
                  </div>
                ),
              )}
            </div>

            <div className="text-[#344054] text-base font-semibold border mt-2.5 border-[rgba(37,58,130,1)] border-solid max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>

            <div className="w-full mt-2.5 max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <div className="text-[#344054] text-sm font-medium leading-none">
                  Replying to Sarah (Slack)
                </div>
                <textarea
                  className="border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white min-h-[154px] w-full gap-2 overflow-hidden text-base text-[rgba(102,112,133,1)] font-normal leading-6 mt-1.5 pt-3 pb-[70px] px-3.5 rounded-lg border-solid border-[#D0D5DD] max-md:max-w-full"
                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt , Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt , Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
                />
              </div>
            </div>

            <div className="flex w-full gap-1.5 text-sm text-[#344054] font-medium mt-2.5 max-md:max-w-full">
              <div className="flex min-w-60 w-full items-center gap-2 flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
                <div className="leading-none self-stretch my-auto">
                  Send via:
                </div>
                <div className="items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white self-stretch flex gap-2 overflow-hidden text-base text-[#101828] whitespace-nowrap w-[162px] my-auto px-3.5 py-2.5 rounded-lg border-solid border-[#D0D5DD]">
                  <div className="self-stretch flex items-center gap-2 flex-1 shrink basis-[0%] my-auto">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/16e65c5ed268cfab446cfa7cbf5bd90634a4acd1?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                      alt="Slack"
                    />
                    <div className="self-stretch my-auto">Slack</div>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/78109304d241db78eae8a07f7e17c2883496628d?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                    alt="Dropdown"
                  />
                </div>
                <div className="leading-none self-stretch my-auto">Channel</div>
                <div className="items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white self-stretch flex gap-2 overflow-hidden text-base text-[#101828] whitespace-nowrap w-[162px] my-auto px-3.5 py-2.5 rounded-lg border-solid border-[#D0D5DD]">
                  <div className="self-stretch gap-2 flex-1 shrink basis-[0%] my-auto">
                    #general
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/78109304d241db78eae8a07f7e17c2883496628d?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                    alt="Dropdown"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="justify-center items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#253A82] flex w-[232px] max-w-full gap-1.5 overflow-hidden text-base text-white font-semibold whitespace-nowrap mt-6 px-4 py-2.5 rounded-lg border-solid border-[#253A82]">
          <div className="self-stretch my-auto px-0.5">Send</div>
        </button>
      </div>
    </div>
  );
};

export default ReplySection;
