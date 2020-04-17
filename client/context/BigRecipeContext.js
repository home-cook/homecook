import { useState, createContext, useEffect } from "react";

// Create Context

export const BigRecipeContext = createContext();

// Provider component

export const BigRecipeProvider = (props) => {
  const [bigRecipes, setBigRecipes] = useState([]);

  const getBigReceipes = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/search?apiKey=0713bac886d245648e7d89a46033da15&number=14`
    );
    let res = await data.json();
    setBigRecipes(res.results);
  };

  useEffect(() => {
    getBigReceipes();
  }, []);

  console.log(bigRecipes, "big recipes on context.js");
  return (
    <BigRecipeContext.Provider value={[bigRecipes, setBigRecipes]}>
      {props.children}
    </BigRecipeContext.Provider>
  );
};
