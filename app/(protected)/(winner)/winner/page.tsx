import { winners } from "@/data/dummy";
import WinnerBarsGroup from "./components/winner-bars-group/winner-bars-group";
import WinnerRibbon from "./components/winner-ribbon";
import FootQuote from "./components/foot-quote";
import Image from "next/image";

const WinnerPage: React.FC = () => {
  return (
    <div className="relative bg-[#0802A3] min-h-screen text-white">
      <Image
        alt="ribbon"
        src={"/winner/winner-bg.png"}
        className="absolute w-full h-full"
        width={4100}
        height={2100}
      />
      <WinnerRibbon className="relative" />
      <WinnerBarsGroup winners={winners} className="h-[500px] relative" />
      <FootQuote className="relative pt-4" />
    </div>
  );
};

export default WinnerPage;
