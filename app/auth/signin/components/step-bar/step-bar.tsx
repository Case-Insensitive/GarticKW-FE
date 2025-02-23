import React, { FC } from "react";
import clsx from "clsx";

type TSidebarProps = {
  currentStep: number;
};

const StepBar: FC<TSidebarProps> = ({ currentStep }) => {
  return (
    <>
      <div
        className={`border-t-4 w-1/12 relative ${clsx(currentStep > 0 && "border-yellow-500")}`}
      >
        <div
          className={`w-[20px] h-[20px] bg-white rounded-full absolute -top-3 right-0 ${clsx(currentStep > 0 && "bg-yellow-500")}`}
        />
        <div className="w-[20px] h-[20px] bg-yellow-500 rounded-full absolute -top-3 -left-5" />
      </div>
      <div
        className={`border-t-4 w-1/12 relative ${clsx(currentStep > 1 && "border-yellow-500")}`}
      >
        <div
          className={`w-[20px] h-[20px] bg-white rounded-full absolute -top-3 right-0 ${clsx(currentStep > 1 && "bg-yellow-500")}`}
        />
      </div>
      <div
        className={`border-t-4 w-1/12 relative ${clsx(currentStep > 2 && "border-yellow-500")}`}
      >
        <div
          className={`w-[20px] h-[20px] bg-white rounded-full absolute -top-3 right-0 ${clsx(currentStep > 2 && "bg-yellow-500")}`}
        />
      </div>
      <div
        className={`border-t-4 w-1/12 relative ${clsx(currentStep > 3 && "border-yellow-500")}`}
      >
        <div
          className={`w-[20px] h-[20px] bg-white rounded-full absolute -top-3 right-0 ${clsx(currentStep > 3 && "bg-yellow-500")}`}
        />
      </div>
    </>
  );
};

export default StepBar;
