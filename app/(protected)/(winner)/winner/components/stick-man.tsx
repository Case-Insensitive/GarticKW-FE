import Image from "next/image";

const StickMan: React.FC = () => {
  return (
    <>
      <Image
        src={"/winner/stick-man-standing.png"}
        alt={"standing stickman"}
        width={172}
        height={247}
        className="absolute bottom-[40px] left-[100px] standing-stickman"
      />
      <Image
        src={"/winner/stick-man-worshipping.gif"}
        alt={"long live the king"}
        width={1280}
        height={720}
        unoptimized
        className="absolute w-[600px] bottom-[40px] left-[-150px] opacity-0 worshipping-stickman"
      />
    </>
  );
};

export default StickMan;
