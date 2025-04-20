import React from "react";

interface ContentCardProps {
  title: string;
  description: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="w-full max-md:max-w-full">
      <div className="rounded bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border w-full pb-6 border-[rgba(234,236,240,1)] border-solid max-md:max-w-full">
        <div className="rounded bg-[rgba(37,58,130,1)] flex flex-col items-stretch text-base text-white font-bold leading-7 justify-center px-6 py-[21px] max-md:max-w-full max-md:pl-5">
          <div className="w-full max-md:max-w-full">
            <div className="flex w-full items-stretch gap-4 max-md:max-w-full">
              <div className="min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full">
                {title}
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#475467] text-sm font-normal leading-5 ml-6 mr-[23px] mt-2.5 max-md:max-w-full max-md:mr-2.5">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
