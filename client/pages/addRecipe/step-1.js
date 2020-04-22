import Header from "../../components/Header/Header";
import { useState } from "react";
import Link from "next/link";

const AddRecipe = () => {
  const [tags, setTags] = useState([]);
  const [tagsList, setTagsList] = useState([
    "healthy",
    "lowcarb",
    "paleo",
    "low-calorie",
  ]);

  const selectTag = (e) => {
    e.preventDefault();
    if (!tags.includes(e.target.value)) {
      setTags([...tags, e.target.value]);
      setTagsList(tagsList.filter((i) => i !== e.target.value));
    }
  };

  const deleteTag = (e) => {
    setTags(tags.filter((i) => i !== e.target.value));
    setTagsList([...tagsList, e.target.value]);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(tags);
  };

  return (
    <>
      <Header />
      <form onSubmit={submit}>
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
            {tags.map((i) => {
              return (
                <button value={i} onClick={deleteTag} className="delete">
                  {i}
                </button>
              );
            })}
          </div>
          <div className="tag-box box h-32 border border-gray-300 rounded-lg py-4 px-8 ">
            {tagsList.map((i) => (
              <button value={i} onClick={selectTag} className="">
                {i}
              </button>
            ))}
          </div>
          <br></br>
          <Link href="/addRecipe/step-2" as={`/addRecipe/step-2`}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Continue
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default AddRecipe;
