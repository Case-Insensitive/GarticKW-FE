"use client";

import winner1Lottie from "@/lottie/2coba1.json";
import winner3Lottie from "@/lottie/3coba.json";
import winner2Lottie from "@/lottie/Win-1.json";
import Lottie from "lottie-react";
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
          <div className="relative w-full">
            <Lottie
              animationData={winner1Lottie}
              loop={true}
              autoplay={true}
              className="absolute"
            />
          </div>
        }
        // topElement={
        //   <div className="relative w-full">
        //     <Image
        //       src={"/winner/2nd-winner.png"}
        //       alt={"runner up"}
        //       width={56}
        //       height={84}
        //       className="absolute left-[40px] top-[40px] z-10"
        //     />
        //   </div>
        // }
        barFinalHeight={`calc(55px + ${sortedWinners[1].points / sortedWinners[0].points} * (100% - 55px - min(30%, 130px)))`}
        widthTw={"full"}
        heightTw={"full"}
        imgSrc={sortedWinners[1].photo}
        imgAlt={sortedWinners[1].userName}
      />
      <WinnerBar
        barColorTw={"bg-[#FF4B91]"}
        points={sortedWinners[0].points}
        topElement={
          <div className="relative w-full">
            <Lottie
              animationData={winner2Lottie}
              loop={true}
              autoplay={true}
              className="absolute"
            />
          </div>
        }
        // topElement={
        //   <div className="relative w-full">
        //     <Image
        //       src={"/winner/1st-winner.png"}
        //       alt={"winner"}
        //       width={110}
        //       height={110}
        //       className="absolute top-[-20px] z-10"
        //     />
        //   </div>
        // }
        barFinalHeight={`calc(55px + (100% - 55px - min(30%, 130px)))`}
        widthTw={"full"}
        heightTw={"full"}
        imgSrc={sortedWinners[0].photo}
        imgAlt={sortedWinners[0].userName}
      />
      <WinnerBar
        barColorTw={"bg-[#FFCD4B]"}
        points={sortedWinners[2].points}
        topElement={
          <div className="relative w-full">
            <Lottie
              animationData={winner3Lottie}
              loop={true}
              autoplay={true}
              className="absolute"
            />
          </div>
        }
        // topElement={
        //   <div className="relative w-full">
        //     <Image
        //       src={"/winner/3rd-winner.png"}
        //       alt={"2nd runner up"}
        //       width={56}
        //       height={84}
        //       className="absolute left-[40px] top-[40px] z-10"
        //     />
        //   </div>
        // }
        barFinalHeight={`calc(55px + ${sortedWinners[2].points / sortedWinners[0].points} * (100% - 55px - min(30%, 130px)))`}
        widthTw={"full"}
        heightTw={"full"}
        imgSrc={sortedWinners[2].photo}
        imgAlt={sortedWinners[2].userName}
      />
    </div>
  );
};

export default WinnerBarsGroup;
