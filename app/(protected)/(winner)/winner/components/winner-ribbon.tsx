import Image from "next/image";

const WinnerRibbon: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className={`relative mt-[62px] w-[55%] h-[62px]`}>
        <Image
          alt="ribbon"
          src={"/choose-category/Rectangle 50.png"}
          className="absolute w-full h-full z-[-1]"
          width={650}
          height={65}
        />
        <h1 className="flex justify-center items-center w-full h-full font-black text-5xl text-white">
          WINNER
        </h1>
      </div>
    </div>
  );
};

export default WinnerRibbon;
