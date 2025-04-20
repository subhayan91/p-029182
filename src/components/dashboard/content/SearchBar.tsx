import React from "react";
import FilterBadge from "./FilterBadge";

export const SearchBar: React.FC = () => {
  return (
    <div className="rounded bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border flex min-h-[132px] w-full items-center gap-2.5 justify-center px-6 py-4 border-[rgba(234,236,240,1)] border-solid max-md:max-w-full max-md:px-5">
      <div className="self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <div className="w-full text-base text-[#667085] font-normal max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white flex w-full gap-2 overflow-hidden px-3.5 py-2.5 rounded-lg border-solid border-[#D0D5DD] max-md:max-w-full">
              <div className="self-stretch flex min-w-60 w-full items-center gap-2 flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c86fd5b38269c6cc5fae97153f0f3d551a8d49c?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                  alt="Search"
                />
                <div className="text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                  Search for label
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center gap-[40px_100px] text-sm leading-none justify-between flex-wrap mt-4 max-md:max-w-full">
          <div className="self-stretch flex min-w-60 items-center gap-2 text-[#253A82] font-medium whitespace-nowrap text-center flex-wrap my-auto max-md:max-w-full">
            <div className="self-stretch gap-2 my-auto px-4 py-1 rounded-lg">
              Filter:
            </div>
            <FilterBadge icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6d878c15e709603b90bd0ae4abd1d858a4dbc6c3?placeholderIfAbsent=true" text="Slack" />
            <FilterBadge icon="https://cdn.builder.io/api/v1/image/assets/TEMP/850d23312464c8741c5e4e85d84ce1889c2aee8c?placeholderIfAbsent=true" text="Outlook" />
            <FilterBadge icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3d8a0e583828cb33cccb4270bcd97375e81c9d26?placeholderIfAbsent=true" text="Gmail" />
            <FilterBadge icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4aa0001aa7e74288c103b551c28cdd95935494ca?placeholderIfAbsent=true" text="Teams" />
          </div>

          <div className="self-stretch text-[#344054] font-semibold my-auto">
            <div className="justify-center items-center border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-white flex gap-1 overflow-hidden px-3.5 py-2.5 rounded-lg border-solid border-[#D0D5DD]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/659f57f1c2207946e938b7334abcfb32b886af3a?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                alt="Calendar"
              />
              <div className="self-stretch my-auto px-0.5">
                Jan 6, 2024 – Jan 13, 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
