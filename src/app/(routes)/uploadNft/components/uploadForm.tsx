'use client'
import { jwtDecode } from 'jwt-decode';
import { SetStateAction, useState } from 'react';


type TProps = {
  imgData: any
}


const UploadForm = ({ imgData }: TProps) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [startPrice, setStartPrice] = useState('');
  const [tags, setTags] = useState('');

  const categories = ['Category1', 'Category2', 'Category3', 'Category4', 'Category5', 'Category6', 'Category7', 'Category8'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const localToken = JSON.stringify(localStorage.getItem('token'));
    const { _id } = jwtDecode(localToken) as { _id: string };

    const nftData = {
      title: name,
      description: description,
      originLink: "somelink",
      etherscanLink: "someLink",
      tags: [tags, tags],
      price: Number(startPrice)
    };

    const formdata = new FormData();
    formdata.append('image', imgData);
    formdata.append('nftData', JSON.stringify({...nftData, owner: _id}));

    const res = await fetch(`https://nft-backend-beryl.vercel.app/nfts/${_id}`, {
      method: 'POST',
      body: formdata,
      credentials: 'include',
    });
    const data = await res.json();

  console.log(data);

    setName('');
    setCategory('');
    setDescription('');
    setStartPrice('');
    setTags('');

  };







  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[30px] w-[400px]
                                            max-[500px]:w-[300px]">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 bg-[#3B3B3B] w-full border border-[#bbb9b9] rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium">
          Categories
        </label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 p-2 w-full bg-[#3B3B3B] border border-[#bbb9b9] rounded-md"
          required
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium ">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="mt-1 p-2 w-full bg-[#3B3B3B] border border-[#bbb9b9] rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="startPrice" className="block text-sm font-medium">
          Start Price
        </label>
        <input
          type="text"
          id="startPrice"
          name="startPrice"
          value={startPrice}
          onChange={(e) => setStartPrice(e.target.value)}
          className="mt-1 p-2 w-full bg-[#3B3B3B] border border-[#bbb9b9] rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="tags" className="block text-sm font-medium ">
          Tags
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="mt-1 p-2 w-full bg-[#3B3B3B] border border-[#bbb9b9] rounded-md"
        />
      </div>
      <div>
        <button type="submit" className="w-full bg-blue-500  px-4 py-2 rounded-md">
          Create NFT
        </button>
      </div>
    </form>
  );
};

export default UploadForm;
