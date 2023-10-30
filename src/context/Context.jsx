import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const Context = createContext();

const API_KEY = process.env.REACT_APP_apiKey;

const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const MULTI_SEARCH_API = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${search}`;

  const getData = async () => {
    const { data } = await axios(MULTI_SEARCH_API);

    setMovies(data.results);
    console.log(data);
  };

  const values = { search, setSearch, movies, setMovies, getData };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default ContextProvider;
