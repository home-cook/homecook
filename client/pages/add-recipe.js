import Header from "../components/Header/Header";
import { useState } from "react";

const AddRecipe = () => {
  const [tags, setTags] = useState(["hello"]);
  const tagsList = ["healthy", "lowcarb", "paleo", "low-calorie"];

  const selectTag = (e) => {
    e.preventDefault();
    if (!tags.includes(e.target.value)) {
      setTags([...tags, e.target.value]);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <h1 className="text-6xl w-2/5"> Name of recipe</h1>
        <input
          class="bg-white h-10 w-2/5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
          type="text"
          placeholder="recipe name"
        />
        <h1 className="text-6xl w-2/5"> Description</h1>
        <textarea
          class="bg-white h-32 w-2/5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
          type="text"
          placeholder="description"
        />
        <h1 className="text-6xl w-2/5">Tags</h1>
        {/* <input
          class="bg-white h-10 w-2/5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
          type="text"
          placeholder="search tags"
        /> */}
        <div className="selected-tags box h-14 border border-gray-300 rounded-lg py-4 px-8 ">
          {tags}
        </div>
        <div className="tag-box box h-32 border border-gray-300 rounded-lg py-4 px-8 ">
          {tagsList.map((i) => (
            <button value={i} onClick={selectTag} className="">
              {i}
            </button>
          ))}
        </div>
        <br></br>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Continue
        </button>
      </div>
    </>
  );
};

export default AddRecipe;
