
import TitleAndSearch from "../marketplace/components/TitleAndSearch";
import Profile from "./components/profile";
import ProfileImage from "./components/profileImage";
import ProfileNft from "./components/profileNft";



export default function Layout(props: { children: React.ReactNode }) {


  return (

    <div className='w-full text-[22px]'>
      <ProfileImage/>
      <div
        className='mt-[60px] mx-28
                  max-[800px]:mx-0'
      >
        <Profile />
        <ProfileNft />
      </div>


        {props.children}
  

    </div>

  );
}
