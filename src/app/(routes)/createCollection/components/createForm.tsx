'use client'
import { useState } from 'react';

const CreateForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [startPrice, setStartPrice] = useState('');
  const [tags, setTags] = useState('');

  const categories = ['Category1', 'Category2', 'Category3', 'Category4', 'Category5', 'Category6', 'Category7', 'Category8'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
        <button type="submit" className="w-full bg-blue-500  px-4 py-2 rounded-md">
          Create collection
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
