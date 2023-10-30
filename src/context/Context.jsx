import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const Context = createContext();

const API_KEY = process.env.REACT_APP_apiKey;
const MULTI_SEARCH_API = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=`;
const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const getData = async (API) => {
    const { data } = await axios(API);

    setMovies(data.results);
    console.log(data);
  };
  useEffect(() => {
    getData(MULTI_SEARCH_API);
  }, []);
  const values = { search, setSearch };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default ContextProvider;
