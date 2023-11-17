

export default function TableHeader() {


  return (

    <div className="flex justify-between text-[#858584] border border-[#858584] rounded-full p-[15px] mb-[20px]">
      <div className="flex gap-[20px] ml-10">
        <div>#</div>
        <div className='mr-[20px] 
                          max-[800px]:w-[150px]'>Artist</div>
      </div>

      <div className="flex gap-[80px] mr-[120px]">
        <div className='max-[800px]:hidden'>Change</div>
        <div className='max-[1100px]:hidden'>NFTs Sold</div>
        <div >Volume</div>
      </div>
    </div>


  );
}
