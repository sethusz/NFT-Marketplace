import ArtistImage from "./components/artistImage";
import ArtistNft from "./components/artistNft";
import ArtistProfile from "./components/artistProfile";

export default function ArtistPage() {

  return (
    <>
    <div className="w-full  text-white">
      <ArtistImage />
      <div className='mt-20 mx-28'>
        <ArtistProfile />
        <ArtistNft />
        </div>
      </div>
    </> 
    )
}