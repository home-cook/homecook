import Header from "../../components/Header/Header";
import { useState } from "react";
import Link from "next/link";

const Step2 = () => {
  // const [tags, setTags] = useState([]);
  // const [tagsList, setTagsList] = useState([
  //   "healthy",
  //   "lowcarb",
  //   "paleo",
  //   "low-calorie",
  // ]);

  // const selectTag = (e) => {
  //   e.preventDefault();
  //   if (!tags.includes(e.target.value)) {
  //     setTags([...tags, e.target.value]);
  //     setTagsList(tagsList.filter((i) => i !== e.target.value));
  //   }
  // };

  // const deleteTag = (e) => {
  //   setTags(tags.filter((i) => i !== e.target.value));
  //   setTagsList([...tagsList, e.target.value]);
  // };

  // const submit = (e) => {
  //   e.preventDefault();
  //   console.log(tags);
  // };

  return (
    <>
      <Header />
      <form>
        <div className="container mx-auto">
          <h1 className="text-6xl w-2/5">Ingredients</h1>
          <div className="top-section flex flex-row">
            <input
              class="bg-white h-10 w-2/5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
              type="text"
              placeholder="search ingredients"
            />
            <input
              class="bg-white h-10 w-2/5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
              type="text"
              placeholder="quantity"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add
            </button>
          </div>
          <div className="tag-box box h-32 border border-gray-300 rounded-lg py-4 px-8 "></div>
        </div>
      </form>
    </>
  );
};

export default Step2;
