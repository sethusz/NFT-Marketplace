import TitleAndSearch from "../marketplace/components/TitleAndSearch";
import ArtistImage from "./components/artistImage";
import ArtistNft from "./components/artistNft";
import ArtistProfile from "./components/artistProfile";


export default function Layout(props: { children: React.ReactNode }) {
  return (

    <div className='w-full text-[22px]'>
      <ArtistImage />
      <div
        className='mt-[60px] mx-28
                  max-[800px]:mx-0'
      >
        <ArtistProfile />
        <ArtistNft />
      </div>


        {props.children}
  

    </div>

  );
}
