import { createContext, useState } from "react";
import axios from "axios";
export const Context = createContext();

//Create ContextProvider component which will warp the application and provide state management
const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState(""); // store the current search
  const [movies, setMovies] = useState([]); // store the data from API
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false
  );
  const API_KEY = process.env.REACT_APP_apiKey;
  const IMG_URL = "https://image.tmdb.org/t/p/w1280";
  const MULTI_SEARCH_API = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${search}`;

  //create an async function that will be called when the search is done and fetch data from API
  const getData = async () => {
    const { data } = await axios(MULTI_SEARCH_API);

    setMovies(data.results);
    console.log(data);
  };
  //create object values for passing down to the childrens
  const values = {
    search,
    setSearch,
    movies,
    user,
    setUser,
    setMovies,
    getData,
    IMG_URL,
    API_KEY,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default ContextProvider;
