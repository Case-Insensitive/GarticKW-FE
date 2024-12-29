import WinnerBar from "../winner-bar";
import { IWinner } from "./winnerBarsGroup.type";

type WinnerBarsGroupProps = {
  className?: React.HTMLAttributes<HTMLDivElement>[`className`];
  winners: IWinner[];
};

const WinnerBarsGroup: React.FC<WinnerBarsGroupProps> = ({
  className,
  winners,
}) => {
  const sortedWinners = winners.sort((a, b) => b.points - a.points);
  return (
    <div
      className={`grid grid-cols-3 gap-[22px] ${className} px-[290px] pt-[34px]`}
    >
      <WinnerBar
        barColorTw={"bg-[#FF7676]"}
        points={sortedWinners[1].points}
        topElement={
          <div className="w-[50px] h-[min(30%,130px)] bg-teal-400">test</div>
        }
        barFinalHeight={`calc(55px + ${sortedWinners[1].points / sortedWinners[0].points} * (100% - 55px - min(30%, 130px)))`}
        widthTw={"full"}
        heightTw={"full"}
      />
      <WinnerBar
        barColorTw={"bg-[#FF4B91]"}
        points={sortedWinners[0].points}
        topElement={
          <div className="w-[50px] h-[min(30%,130px)] bg-teal-400">test</div>
        }
        barFinalHeight={`calc(55px + (100% - 55px - min(30%, 130px)))`}
        widthTw={"full"}
        heightTw={"full"}
      />
      <WinnerBar
        barColorTw={"bg-[#FFCD4B]"}
        points={sortedWinners[2].points}
        topElement={
          <div className="w-[50px] h-[min(30%,130px)] bg-teal-400">test</div>
        }
        barFinalHeight={`calc(55px + ${sortedWinners[2].points / sortedWinners[0].points} * (100% - 55px - min(30%, 130px)))`}
        widthTw={"full"}
        heightTw={"full"}
      />
    </div>
  );
};

export default WinnerBarsGroup;
