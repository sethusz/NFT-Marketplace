import RankingInfo from "./components/rankingInfo";
import RankingTabs from "./components/rankingTabs";
import SubHead from "./components/subHead";

export default function RankingPage() {

  
  return (
    <>
    <div className="w-full mx-[110px]">
    <SubHead />
    <RankingTabs />
    <RankingInfo />
    
    </div>
    </>
  )
}