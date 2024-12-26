import React from "react";

type WinnerBarProps = React.HTMLAttributes<HTMLDivElement> & {
  points: number;
  finalHeightPercentage: number;
};

const WinnerBar = ({
  className,
  points,
  finalHeightPercentage,
}: WinnerBarProps) => {
  return (
    <div
      className={`winner-bar ${className}`}
      style={
        {
          "--final-height": `${finalHeightPercentage}%`,
        } as React.CSSProperties
      }
    >
      <span>{points} points</span>
    </div>
  );
};

export default WinnerBar;
