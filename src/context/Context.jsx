import { createContext, useEffect, useState } from "react";
export const Context = createContext();

const API_KEY = process.env.REACT_APP_apiKey;
const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const values = { search, setSearch };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default ContextProvider;
