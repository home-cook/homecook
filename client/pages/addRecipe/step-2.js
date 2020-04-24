import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import Link from "next/link";

const Step2 = () => {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [query, setQuery] = useState([]);

  async function getSearchResults() {
    const res = await fetch(
      `https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&number=5&apiKey=0713bac886d245648e7d89a46033da15`
    );
    const data = await res.json();
    console.log(data);
    setIngredients(data);
  }

  const getQuery = (e) => {
    setQuery(e.target.value);
    getSearchResults();
  };

  const selectIngredient = (e) => {
    e.preventDefault();
    setSelectedIngredients([...selectedIngredients, e.target.value]);
    setIngredients([]);
  };

  console.log(selectedIngredients, "selected ingredients");

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
              onChange={getQuery}
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
          <div className="tag-box box h-32 border border-gray-300 rounded-lg py-4 px-8 ">
            {ingredients &&
              ingredients.map((i, index) => {
                return (
                  <button
                    onClick={selectIngredient}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-8 py-2 px-4 rounded"
                    key={index}
                    value={i.name}
                  >
                    {i.name}
                  </button>
                );
              })}
          </div>
          <div className="selected-tags box h-14 border border-gray-300 rounded-lg py-4 px-8 ">
            {selectedIngredients &&
              selectedIngredients.map((i, index) => {
                return (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-8 py-2 px-4 rounded"
                    key={index}
                    value={i.name}
                  >
                    {i}
                  </button>
                );
              })}
          </div>
        </div>
      </form>
    </>
  );
};

export default Step2;
