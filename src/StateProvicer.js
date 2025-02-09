import React, { createContext, useContext, useReducer } from "react";

// Prepares data layer
export const StateContext = createContext();

// Wrap our app and provide and Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
