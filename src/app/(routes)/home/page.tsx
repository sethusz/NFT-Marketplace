import HeroSection from "./components/heroSection";
import TopCreators from "./components/topCreators";
import TrendingCollection from "./components/trendingCollection";

export default function HomePage() {
	return (
		<div className="flex flex-col gap-[80px] ">
			<HeroSection/>
			<TrendingCollection />
			<TopCreators />
		</div>
	);
}
