import ArtistImage from "./components/artistImage";
import ArtistProfile from "./components/artistProfile";


export default function Layout(props: { children: React.ReactNode }) {
  return (

    <div className='w-full  '>
      <ArtistImage />
      <div
        className='mt-[60px] mx-28
                  max-[800px]:mx-0'
      >
        <ArtistProfile />
        {props.children}
      </div>
    </div>

  );
}
