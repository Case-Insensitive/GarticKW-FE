import WinnerBar from "../winner-bar";
import { IWinner } from "./winnerBarsGroup.type";

type WinnerBarsGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  winners: IWinner[];
};

const WinnerBarsGroup = ({ className, winners }: WinnerBarsGroupProps) => {
  const sortedWinners = winners.sort((a, b) => b.points - a.points);
  return (
    <div className={`grid grid-cols-3 ${className}`}>
      <WinnerBar
        barColorTw={"[#FF7676]"}
        points={sortedWinners[1].points}
        topElement={<div className="w-[50px] h-[min(30%,130px)] bg-teal-400">test</div>}
        barFinalHeight={`calc(55px + ${sortedWinners[1].points / sortedWinners[0].points} * (100% - 55px - min(30%, 130px)))`}
        widthTw={"fit"}
        heightTw={"full"}
      />
      <WinnerBar
        barColorTw={"[#FF4B91]"}
        points={sortedWinners[0].points}
        topElement={<div className="w-[50px] h-[min(30%,130px)] bg-teal-400">test</div>}
        barFinalHeight={`calc(55px + (100% - 55px - min(30%, 130px)))`}
        widthTw={"fit"}
        heightTw={"full"}
      />
      <WinnerBar
        barColorTw={"[#FFCD4B]"}
        points={sortedWinners[2].points}
        topElement={<div className="w-[50px] h-[min(30%,130px)] bg-teal-400">test</div>}
        barFinalHeight={`calc(55px + ${sortedWinners[2].points / sortedWinners[0].points} * (100% - 55px - min(30%, 130px)))`}
        widthTw={"fit"}
        heightTw={"full"}
      />
    </div>
  );
};

export default WinnerBarsGroup;
