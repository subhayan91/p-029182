import React from "react";

interface StepConnectorProps {
  icon: string;
  title: string;
}

export const StepConnector: React.FC<StepConnectorProps> = ({
  icon,
  title,
}) => {
  return (
    <div className="flex w-full items-center gap-3 flex-wrap max-md:max-w-full">
      <div className="self-stretch flex min-h-[85px] flex-col items-center w-12 my-auto pb-1">
        <div className="bg-[rgba(218,181,250,1)] flex min-h-[17px] w-0.5 flex-1 rounded-sm" />
        <img
          src={icon}
          className="aspect-[1] object-contain w-12 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
          alt={title}
        />
        <div className="bg-[rgba(218,181,250,1)] flex min-h-4 w-0.5 flex-1 rounded-sm" />
      </div>
      <div className="self-stretch min-w-60 text-sm text-[#344054] font-semibold whitespace-nowrap leading-none flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        {title}
      </div>
    </div>
  );
};

export default StepConnector;
