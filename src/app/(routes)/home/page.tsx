import BrowseCategories from "./components/browseCategories";
import HeroSection from "./components/heroSection";
import Highlight from "./components/highlight";
import HowWorks from "./components/howWorks";
import JoinDigest from "./components/joinDigest";
import MoreNft from "./components/moreNft";
import TopCreators from "./components/topCreators";
import TrendingCollection from "./components/trendingCollection";

export default function HomePage() {
	return (
		<div className="flex flex-col gap-[80px] mb-[40px] max-[1100px]:mx-[50px] max-[1100px]:items-center  ">
			<HeroSection/>
			<TrendingCollection />
			<TopCreators />
			<BrowseCategories />
			<MoreNft/>
			<Highlight />
			<HowWorks/>
			<JoinDigest />
		</div>
	);
}
