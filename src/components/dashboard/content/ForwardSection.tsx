import React from "react";
import StepConnector from "./StepConnector";

export const ForwardSection: React.FC = () => {
  return (
    <div className="w-full max-md:max-w-full">
      <StepConnector icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9388afa49973049257302c72a7b0cbccc458aa79?placeholderIfAbsent=true" title="Forward" />
      <div className="rounded bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border w-full max-w-[1078px] p-6 border-[rgba(234,236,240,1)] border-solid max-md:max-w-full max-md:px-5">
        <div className="w-full">
          <div className="w-full max-w-[1030px] max-md:max-w-full">
            <div className="flex w-full items-stretch gap-4 flex-wrap max-md:max-w-full">
              <div className="min-w-60 text-base text-[rgba(16,24,40,1)] font-semibold whitespace-nowrap leading-7 flex-1 shrink basis-[0%] max-md:max-w-full">
                Forward
              </div>
              <div className="w-5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d77b364bf9fc75fea9d756bc6c4c5d5d0bd4f78?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5"
                  alt="Options"
                />
              </div>
            </div>
            <div className="bg-[rgba(234,236,240,1)] flex min-h-px w-full mt-4 max-md:max-w-full" />
          </div>

          <div className="w-full max-w-[1030px] mt-4 max-md:max-w-full">
            <div className="flex w-full gap-1.5 font-medium max-md:max-w-full">
              <div className="flex min-w-60 w-full items-center gap-2 flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
                <div className="text-[#344054] text-sm leading-none self-stretch my-auto">
                  Choose Method:
                </div>
                <div className="items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white self-stretch flex gap-2 overflow-hidden text-base text-[#101828] whitespace-nowrap w-[162px] my-auto px-3.5 py-2.5 rounded-lg border-solid border-[#D0D5DD]">
                  <div className="self-stretch flex items-center gap-2 flex-1 shrink basis-[0%] my-auto">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c699f64370d631c659846ff707b536638b5e8a1?placeholderIfAbsent=true"
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
              </div>
            </div>

            <div className="w-full mt-2.5 max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <div className="text-[#344054] text-sm font-medium leading-none">
                  User Search
                </div>
                <div className="items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white flex w-full gap-2 overflow-hidden text-base text-[#667085] font-normal mt-1.5 px-3.5 py-2.5 rounded-lg border-solid border-[#D0D5DD] max-md:max-w-full">
                  <div className="self-stretch flex min-w-60 w-full items-center gap-2 flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c02db2d3b18d20e9e01c9cce0db436405f37d48e?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                      alt="Search"
                    />
                    <div className="text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                      Inga Elisonyan
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-2.5 max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <div className="text-[#344054] text-sm font-medium leading-none">
                  Message
                </div>
                <div className="items-stretch shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white flex min-h-[154px] w-full flex-col overflow-hidden mt-1.5 pt-3 pb-5 px-2 rounded-lg max-md:max-w-full">
                  <div className="text-[rgba(102,112,133,1)] text-base font-bold leading-6 max-md:max-w-full">
                    " Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt , Lorem ipsum dolor sit
                    amet, c
                    <br />
                    onsectetur adipiscing elit. Sed do eiusmod tempor incididunt
                    , Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do
                    <br />
                    eiusmod tempor incididunt "
                  </div>
                  <div className="flex items-center gap-2 mt-[22px]">
                    <div className="self-stretch flex items-center gap-2 overflow-hidden justify-center w-7 my-auto p-1 rounded-lg">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b0ad239d0708baef44e9a362d5d6e72490f01dd?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-5 self-stretch my-auto"
                        alt="Edit"
                      />
                    </div>
                    <div className="text-[rgba(37,58,130,1)] text-base font-normal self-stretch my-auto">
                      Edit Text
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full gap-1.5 text-sm text-[#344054] font-medium mt-2.5 max-md:max-w-full">
              <div className="flex min-w-60 w-full items-center gap-2 flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
                <div className="leading-none self-stretch my-auto">
                  Send Via:
                </div>
                <div className="items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white self-stretch flex gap-2 overflow-hidden text-base text-[#101828] whitespace-nowrap w-[162px] my-auto px-3.5 py-2.5 rounded-lg border-solid border-[#D0D5DD]">
                  <div className="self-stretch flex items-center gap-2 flex-1 shrink basis-[0%] my-auto">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c699f64370d631c659846ff707b536638b5e8a1?placeholderIfAbsent=true"
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

        <div className="flex w-full gap-1 text-base text-[#344054] font-semibold whitespace-nowrap flex-wrap mt-6 max-md:max-w-full">
          <button className="justify-center items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#253A82] flex min-w-60 gap-1.5 overflow-hidden text-white flex-1 shrink basis-[0%] px-4 py-2.5 rounded-lg border-solid border-[#253A82]">
            <div className="self-stretch my-auto px-0.5">Send</div>
          </button>
          <button className="justify-center items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white flex min-w-60 gap-1.5 overflow-hidden flex-1 shrink basis-[0%] px-4 py-2.5 rounded-lg border-solid border-[#D0D5DD]">
            <div className="self-stretch my-auto px-0.5">Assign</div>
          </button>
          <button className="justify-center items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white flex min-w-60 gap-1.5 overflow-hidden flex-1 shrink basis-[0%] px-4 py-2.5 rounded-lg border-solid border-[#D0D5DD]">
            <div className="self-stretch my-auto px-0.5">Escalate</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForwardSection;
