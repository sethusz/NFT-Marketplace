import Login from "@/app/@modal/view2/page";
import ArtistImage from "./components/artistImage";
import ArtistNft from "./components/artistNft";
import ArtistProfile from "./components/artistProfile";
import { useSelector } from "react-redux";

export default function ArtistPage() {

  const data = useSelector<any>(state => state.createSlice.demoGreetings)

  console.log(data)
  return (
    <>
    <div className="w-full  ">
      <ArtistImage />
      <div className='mt-[60px] mx-28
                      max-[800px]:mx-0'>
        <ArtistProfile modal={<Login />} />
        <ArtistNft />
        </div>
      </div>
    </> 
    )
}