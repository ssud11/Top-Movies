import React, { useState, useEffect } from "react";
import spin from "./components/layout/Spin.js";
import axios from "axios";

export const Context = React.createContext();


export function ContextController({ children }) {
  let intialState = {
    movie_list: [],
    heading: ""
  };

  const [state, setState] = useState(intialState);
  const [country, setCountry] = useState({});

  //
  useEffect(() => {

    fetch(`https://geolocation-db.com/json/`)
    .then(res => res.json())

    .then(data => {
      console.log(data);
      let country = data.country_code;
      setCountry({ country });
          axios
          .get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          process.env.REACT_APP_MOVIE_KEY}&region=${country}`
          )
          .then(res => {
             console.log(`https://api.themoviedb.org/3/movie/top_rated?api_key=${
              process.env.REACT_APP_MOVIE_KEY}&region=${country}`);
            setState({
              movie_list: res.data.results,
          heading: `Top Movies for your country: ${data.country_name}/${country} - ${data.city} - ${data.state} `
            });
          })
          .catch(err => console.log(err));

    })

  }, []);

  if (country === undefined || country.length === 0) {
    return <spin />;
  } else {

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
  }
}