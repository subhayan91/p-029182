import React, { useState } from "react";
import StepConnector from "./StepConnector";

export const ActionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Task");

  return (
    <div className="w-full max-md:max-w-full">
      <StepConnector icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b6df630b6cf67c831481065c49a9fc8933358e62?placeholderIfAbsent=true" title="Actions" />
      <div className="rounded bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border w-full p-6 border-[rgba(234,236,240,1)] border-solid max-md:max-w-full max-md:px-5">
        <div className="w-full font-medium max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="bg-gray-50 border flex w-full items-center gap-1 text-base font-semibold whitespace-nowrap flex-wrap p-1.5 rounded-xl border-[rgba(234,236,240,1)] border-solid max-md:max-w-full">
              <div
                className={`${activeTab === "Task" ? "border self-stretch shadow-[0px_1px_3px_0px_rgba(16,24,40,0.10),0px_1px_2px_0px_rgba(16,24,40,0.06)] bg-white text-[#344054] border-[rgba(37,58,130,1)] border-solid" : "text-[#667085]"} self-stretch min-h-11 gap-2 overflow-hidden my-auto px-3 py-2.5 rounded-md cursor-pointer`}
                onClick={() => setActiveTab("Task")}
              >
                Task
              </div>
              <div
                className={`${activeTab === "Meeting" ? "border self-stretch shadow-[0px_1px_3px_0px_rgba(16,24,40,0.10),0px_1px_2px_0px_rgba(16,24,40,0.06)] bg-white text-[#344054] border-[rgba(37,58,130,1)] border-solid" : "text-[#667085]"} self-stretch min-h-11 gap-2 overflow-hidden my-auto px-3 py-2.5 rounded-md cursor-pointer`}
                onClick={() => setActiveTab("Meeting")}
              >
                Meeting
              </div>
            </div>

            <div className="min-h-[70px] w-full mt-2.5 max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <div className="text-[#344054] text-sm leading-none">
                  Task Title
                </div>
                <input
                  type="text"
                  className="items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white flex w-full gap-2 overflow-hidden text-base text-[#101828] mt-1.5 px-3.5 py-2.5 rounded-lg border-solid border-[#D0D5DD] max-md:max-w-full"
                  defaultValue="Finalize Q2 Budget"
                />
              </div>
            </div>

            <div className="w-full mt-2.5 max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <div className="text-[#344054] text-sm leading-none">
                  Task Description
                </div>
                <textarea
                  className="border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white min-h-[154px] w-full gap-2 overflow-hidden text-base text-[#101828] mt-1.5 pt-3 pb-[118px] px-3.5 rounded-lg border-solid border-[#D0D5DD] max-md:max-w-full max-md:pb-[100px]"
                  defaultValue="Confirm line items with Sarah before Friday."
                />
              </div>
            </div>

            <div className="flex w-full gap-1.5 mt-2.5 max-md:max-w-full">
              <div className="flex min-w-60 w-full items-center gap-2 flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
                <div className="text-[#344054] text-sm leading-none self-stretch my-auto">
                  Select where to add this task:
                </div>
                <div className="items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white self-stretch flex gap-2 overflow-hidden text-base text-[#101828] whitespace-nowrap w-[162px] my-auto px-3.5 py-2.5 rounded-lg border-solid border-[#D0D5DD]">
                  <div className="self-stretch flex items-center gap-2 flex-1 shrink basis-[0%] my-auto">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6c909d6dff5cc78459e21f8baf9bf2573f223fc?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                      alt="Asana"
                    />
                    <div className="self-stretch my-auto">Asana</div>
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

        <button className="justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#253A82] flex w-[232px] max-w-full gap-1.5 overflow-hidden text-base text-white font-semibold whitespace-nowrap mt-6 px-4 py-2.5 rounded-lg">
          <div className="self-stretch my-auto px-0.5">Send</div>
        </button>
      </div>
    </div>
  );
};

export default ActionsSection;
