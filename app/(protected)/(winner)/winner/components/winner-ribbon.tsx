import Image from "next/image";

type WinnerRibbonProps = {
  className?: React.HTMLAttributes<HTMLDivElement>[`className`];
};

const WinnerRibbon: React.FC<WinnerRibbonProps> = ({ className }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className={`relative mt-[62px] w-[55%] h-[62px]`}>
        <Image
          alt="ribbon"
          src={"/choose-category/Rectangle 50.png"}
          className="absolute w-full h-full"
          width={400}
          height={40}
        />
        <h1 className="absolute flex justify-center items-center w-full h-full font-black text-5xl text-white">
          WINNER
        </h1>
      </div>
    </div>
  );
};

export default WinnerRibbon;
