import { useContext, useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Heading } from "evergreen-ui";
import fetch from "isomorphic-unfetch";

import { useRouter } from "next/router";

const Recipe = ({ recipeInfo }) => {
  const nutrition = recipeInfo.nutrition.nutrients;

  const router = useRouter();
  const { id } = router.query;

  // get list of steps

  const steps = () => {
    let stepsArr = recipeInfo.analyzedInstructions.map((i) => i.steps);
    return stepsArr[0].map((i) => `Step ${i.number}: ${i.step}`);
  };

  const getNutritionArray = () => {
    return nutrition.slice(0, 9).map((i) => {
      return `${i.title}: ${i.amount}`;
    });
  };

  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col">
        <div className="top-section m-auto flex flex-col items-center">
          <h1 className="text-5xl"> {recipeInfo.title}</h1>

          <img
            className="max-w-full"
            src={`https://spoonacular.com/recipeImages/${id}-556x370.jpg`}
          />
          <h1>Author: {recipeInfo.sourceName}</h1>
        </div>

        <ul className="top-items">
          <li>Time to Prepare: {recipeInfo.preparationMinutes}</li>
          <li>Time to cook: {recipeInfo.cookingMinutes}</li>
          <li>Servings: {recipeInfo.servings}</li>
        </ul>
        <div className="ingredient-step-section">
          <ul className="ingredients">
            <li>
              <h1>Ingredients</h1>
            </li>
            {recipeInfo.extendedIngredients &&
              recipeInfo.extendedIngredients.map((i) => {
                return (
                  <>
                    <div className="ingredient-items">
                      <li>{`${i.amount}, ${i.unit}`}</li>
                      <li>{i.originalName}</li>
                    </div>
                  </>
                );
              })}
          </ul>
          <ul className="steps">
            <li>
              <Heading size={700}>Preparation</Heading>
            </li>
            {recipeInfo.extendedIngredients &&
              steps().map((i) => {
                return <li>{i}</li>;
              })}
          </ul>
        </div>
        <ul className="nutrition">
          <li>
            <Heading size={700}>Nutrition</Heading>
          </li>
          {nutrition &&
            getNutritionArray().map((i) => {
              return <li>{i}</li>;
            })}
        </ul>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${context.params.id}/information?includeNutrition=true&apiKey=0713bac886d245648e7d89a46033da15`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { recipeInfo: data } };
}

export default Recipe;
