import { winners } from "@/data/dummy";
import WinnerBarsGroup from "./components/winner-bars-group/winner-bars-group";
import WinnerRibbon from "./components/winner-ribbon";

const WinnerPage: React.FC = () => {
  return (
    <>
      <WinnerRibbon />
      <WinnerBarsGroup winners={winners} className="h-[500px]" />
    </>
  );
};

export default WinnerPage;
