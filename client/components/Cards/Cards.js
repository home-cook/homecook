import React, { useState, useEffect, useContext } from "react";
import { BigRecipeContext } from "../../context/BigRecipeContext";
import { Pane, Text, Heading } from "evergreen-ui";

import BigCard from "./BigCard";
import SmallCard from "./SmallCard";

const Cards = () => {
  //TODO move this context to home page
  const bigRecipes = useContext(BigRecipeContext);
  console.log(bigRecipes);

  return (
    <>
      <div className="all-cards">
        <h1 className="text-4xl mb-12">Featured Recipes</h1>
        <div className="big-cards">
          {bigRecipes.slice(0, 2).map((attr, ind) => {
            return <BigCard attr={attr} key={ind} />;
          })}
        </div>
        <div className="small-cards">
          {bigRecipes.slice(2).map((attr, ind) => {
            return <SmallCard attr={attr} key={ind} />;
          })}
        </div>
      </div>
      <style jsx>{`
        .all-cards {
          display: flex;
          flex-direction: column;
          margin: 2rem;
          align-items: flex-start;
        }
        .big-cards {
          display: flex;
        }
        .small-cards {
          display: flex;
          margin-top: 8rem;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
};

export default Cards;
