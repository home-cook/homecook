import { useState, createContext, useEffect } from "react";

// Create Context

export const BigRecipeContext = createContext();

// Provider component

export const BigRecipeProvider = (props) => {
  return (
    <BigRecipeContext.Provider value={props.value}>
      {props.children}
    </BigRecipeContext.Provider>
  );
};
