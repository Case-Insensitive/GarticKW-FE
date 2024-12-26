import React from "react";

type WinnerBarProps = {
  widthTw?: number | string;
  heightTw?: number | string;
  barColorTw: string;
  points: number;
  barInitialHeight?: number | string;
  barFinalHeight: number | string;
  topElement?: React.ReactNode;
};

const WinnerBar = ({
  widthTw = "fit",
  heightTw = "fit",
  barColorTw,
  points,
  barInitialHeight = "55px",
  barFinalHeight,
  topElement,
}: WinnerBarProps) => {
  return (
    <div
      className={`w-${widthTw} h-${heightTw} flex flex-col justify-end border-2 border-black border-solid`}
    >
      {topElement}
      <div
        className={`winner-bar ${barColorTw}`}
        style={
          {
            "--initial-height": `${barInitialHeight}`,
            "--final-height": `${barFinalHeight}`,
          } as React.CSSProperties
        }
      >
        <span>{points} points</span>
      </div>
    </div>
  );
};

export default WinnerBar;
