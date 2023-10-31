import TitleAndSearch from "./components/TitleAndSearch";

export default function Layout(props: { children: React.ReactNode }) {
	return (
		<div className="w-full text-[14px] md:text-[22px]">
			<TitleAndSearch />
			{props.children}
		</div>
	);
}
