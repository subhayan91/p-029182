import React from "react";
import StepConnector from "./StepConnector";

export const ConversationSection: React.FC = () => {
  return (
    <div className="w-full max-md:max-w-full">
      <StepConnector icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e759baeb1a3d4eb7f5774d77001baecd6f439ab0?placeholderIfAbsent=true" title="Conversation" />
      <div className="rounded bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border w-full p-6 border-[rgba(234,236,240,1)] border-solid max-md:max-w-full max-md:px-5">
        <div className="w-full text-base text-[#667085] font-normal max-md:max-w-full">
          <div className="flex w-full gap-4 max-md:max-w-full">
            <div className="min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <div className="items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white flex w-full gap-2 overflow-hidden px-3.5 py-2.5 rounded-lg border-solid border-[#D0D5DD] max-md:max-w-full">
                  <div className="self-stretch flex min-w-60 w-full items-center gap-2 flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c86fd5b38269c6cc5fae97153f0f3d551a8d49c?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                      alt="Search"
                    />
                    <div className="text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                      Search by keywords
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(234,236,240,1)] flex min-h-px w-full mt-4 max-md:max-w-full" />
        </div>

        {/* Message rows */}
        <div className="flex w-full gap-2 font-normal flex-wrap mt-2.5 pl-8 max-md:max-w-full max-md:pl-5">
          <div className="flex min-w-60 gap-3 w-[572px] max-md:max-w-full">
            <div className="min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full">
              <div className="self-stretch w-full gap-2 text-xs text-[#475467] max-md:max-w-full">
                Thursday 11:41am
              </div>
              <div className="self-stretch flex-1 shrink basis-[0%] bg-white border w-full gap-2 overflow-hidden text-base text-[#101828] text-right leading-6 mt-1.5 px-3.5 py-2.5 rounded-[0px_8px_8px_8px] border-[rgba(234,236,240,1)] border-solid max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt
              </div>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/758dd1b7050f69490c6dcc05991ba2117432664c?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-10 shrink-0 rounded-[200px]"
            alt="User"
          />
        </div>

        <div className="flex w-[800px] max-w-full mt-2.5 pr-8 max-md:pr-5">
          <div className="flex min-w-60 w-full gap-3 flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/758dd1b7050f69490c6dcc05991ba2117432664c?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 shrink-0 rounded-[200px]"
              alt="User"
            />
            <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
              <div className="text-ellipsis self-stretch flex-1 shrink basis-[0%] w-full gap-2 text-sm text-[#344054] font-medium leading-none max-md:max-w-full">
                Name 2
              </div>
              <div className="self-stretch flex-1 shrink basis-[0%] bg-white border w-full gap-2 overflow-hidden text-base text-[#101828] font-normal mt-1.5 px-3.5 py-2.5 rounded-[0px_8px_8px_8px] border-[rgba(234,236,240,1)] border-solid max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-[649px] max-w-full mt-2.5 pr-8 max-md:pr-5">
          <div className="flex min-w-60 w-full gap-3 flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/758dd1b7050f69490c6dcc05991ba2117432664c?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 shrink-0 rounded-[200px]"
              alt="User"
            />
            <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
              <div className="text-ellipsis self-stretch flex-1 shrink basis-[0%] w-full gap-2 text-sm text-[#344054] font-medium leading-none max-md:max-w-full">
                Name 3
              </div>
              <div className="self-stretch flex-1 shrink basis-[0%] bg-white border w-full gap-2 overflow-hidden text-base text-[#101828] font-normal leading-6 mt-1.5 px-3.5 py-2.5 rounded-[0px_8px_8px_8px] border-[rgba(234,236,240,1)] border-solid max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-[800px] max-w-full mt-2.5 pr-8 max-md:pr-5">
          <div className="flex min-w-60 w-full gap-3 flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/758dd1b7050f69490c6dcc05991ba2117432664c?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 shrink-0 rounded-[200px]"
              alt="User"
            />
            <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
              <div className="text-ellipsis self-stretch flex-1 shrink basis-[0%] w-full gap-2 text-sm text-[#344054] font-medium leading-none max-md:max-w-full">
                Name 4
              </div>
              <div className="self-stretch flex-1 shrink basis-[0%] bg-white border w-full gap-2 overflow-hidden text-base text-[#101828] font-normal mt-1.5 px-3.5 py-2.5 rounded-[0px_8px_8px_8px] border-[rgba(234,236,240,1)] border-solid max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt
              </div>
            </div>
          </div>
        </div>

        <button className="justify-center items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white flex w-full gap-1.5 overflow-hidden text-base text-[#344054] font-semibold mt-2.5 px-4 py-2.5 rounded-lg border-solid border-[#D0D5DD] max-md:max-w-full">
          <div className="self-stretch my-auto px-0.5">See more</div>
        </button>
      </div>
    </div>
  );
};

export default ConversationSection;
