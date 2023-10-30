import { createContext, useEffect, useState } from "react";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};
export default ContextProvider;
