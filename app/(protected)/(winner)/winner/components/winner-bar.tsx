import ProfileImage from "./profile-image";

type WinnerBarProps = {
  widthTw?: number | string;
  heightTw?: number | string;
  barColorTw: string;
  points: number;
  barInitialHeight?: number | string;
  barFinalHeight: number | string;
  topElement?: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
};

const WinnerBar: React.FC<WinnerBarProps> = ({
  widthTw = "fit",
  heightTw = "fit",
  barColorTw,
  points,
  barInitialHeight = "55px",
  barFinalHeight,
  topElement,
  imgSrc,
  imgAlt,
}) => {
  return (
    <div className={`w-${widthTw} h-${heightTw} flex flex-col justify-end`}>
      <div className="realtive h-[130px] flex flex-col justify-end">
        {topElement}
        <ProfileImage imgSrc={imgSrc} imgAlt={imgAlt} delay={"2s"} />
      </div>
      <div
        className={`winner-bar h-[55px] ${barColorTw} w-full flex`}
        style={
          {
            "--initial-height": `${barInitialHeight}`,
            "--final-height": `${barFinalHeight}`,
          } as React.CSSProperties
        }
      >
        <div className="font-black text-center text-2xl w-full pt-3">
          {points} points
        </div>
      </div>
    </div>
  );
};

export default WinnerBar;
