import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import Link from "next/link";

const Step2 = () => {
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState({});
  const [values, setValues] = useState([]);
  const [query, setQuery] = useState("");

  async function getSearchResults() {
    const res = await fetch(
      `https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&number=5&apiKey=0713bac886d245648e7d89a46033da15`
    );
    const data = await res.json();
    setIngredients(data);
  }

  const getQuery = (e) => {
    setQuery(e.target.value);
    getSearchResults();
  };

  const selectIngredient = (e) => {
    e.preventDefault();
    setCurrentIngredient({
      ...currentIngredient,
      ingredient_name: e.target.value,
    });
  };

  const selectQuantity = (e) => {
    e.preventDefault();
    setCurrentIngredient({ ...currentIngredient, quantity: e.target.value });
  };

  const submitIngredient = (e) => {
    e.preventDefault();
    setValues([...values, currentIngredient]);
    setCurrentIngredient({ quantity: "" });
    setIngredients([]);
    setQuery("");
  };

  console.log({ values });
  console.log({ currentIngredient });

  return (
    <>
      <Header />
      <form>
        <div className="container mx-auto flex flex-col">
          <h1 className="text-6xl w-2/5">Ingredients</h1>
          <div className="top-section flex flex-row">
            <input
              className="bg-white h-10 w-2/5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
              type="text"
              value={query}
              onChange={getQuery}
              placeholder="search ingredients"
            />
            <div className="">{currentIngredient.ingredient_name}</div>
            <input
              className="bg-white h-10 w-2/5 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
              type="number"
              onChange={selectQuantity}
              value={currentIngredient.quantity}
              name="quantity"
              placeholder="quantity"
            />
            <button
              onClick={submitIngredient}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
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
                    name="ingredient_name"
                  >
                    {i.name}
                  </button>
                );
              })}
          </div>
          <div className="tag-box flex flex-col flex-1 box h-32 rounded-lg py-4 px-8 ">
            <h2>Selected ingredients</h2>
            {values.length > 0 &&
              values.map((i) => {
                return (
                  <ul>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded">
                      <li>{`${i.ingredient_name}   ${i.quantity}`}</li>
                    </button>
                  </ul>
                );
              })}
          </div>
          <Link href="/addRecipe/step-3" as={`/addRecipe/step-3`}>
            <button className="bg-blue-500 self-end hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Continue
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Step2;
