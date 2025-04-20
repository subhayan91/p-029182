import React from "react";
import StepConnector from "./StepConnector";

export const PeopleSection: React.FC = () => {
  return (
    <div className="w-full max-md:max-w-full">
      <StepConnector icon="https://cdn.builder.io/api/v1/image/assets/TEMP/69051043ae48ce4c3fcd9eef08a1d8e58710505a?placeholderIfAbsent=true" title="People" />
      <div className="rounded bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border w-full p-6 border-[rgba(234,236,240,1)] border-solid max-md:max-w-full max-md:px-5">
        <div className="flex w-full items-center gap-3 flex-wrap max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/becb0cfc0baff0487f2c3a38e1525519ecacb7f0?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto rounded-3xl"
            alt="Candice Wu"
          />
          <div className="self-stretch text-sm text-[#344054] font-medium leading-none w-[81px] my-auto">
            <div className="w-full">
              <div className="self-stretch w-full gap-2">Candice Wu</div>
            </div>
          </div>
          <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <div className="flex w-full items-center gap-2 max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/82f9a348dbed440aaea73ce40e85a9b2d42b4c81?placeholderIfAbsent=true"
                  className="aspect-[0.91] object-contain w-5 self-stretch my-auto"
                  alt="Icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-3 flex-wrap mt-2.5 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/becb0cfc0baff0487f2c3a38e1525519ecacb7f0?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto rounded-3xl"
            alt="Inga Elisonyan"
          />
          <div className="self-stretch text-sm text-[#344054] font-medium leading-none w-24 my-auto">
            <div className="w-full max-w-24">
              <div className="self-stretch w-full gap-2">Inga Elisonyan</div>
            </div>
          </div>
          <div className="self-stretch flex min-w-60 flex-col flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d95689a33629173f8cf3a55c2575cc07d700029?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 rounded-[18px]"
              alt="Icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleSection;
