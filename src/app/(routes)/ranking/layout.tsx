import RankingTabs from "./components/rankingTabs";
import SubHead from "./components/subHead";

export default function Layout(props: { children: React.ReactNode }) {
  
  return (
    <>
    <div className="w-full mx-[110px]">
    <SubHead />
    <RankingTabs />
    {props.children}
    </div>
    </>
  )
}