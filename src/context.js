import React, { useState, useEffect } from "react";
import Loading from "./components/layout/Loading.js";
import axios from "axios";

export const Context = React.createContext();

const publicIp = require("react-public-ip");



export function ContextController({ children }) {
  let intialState = {
    movie_list: [],
    heading: ""
  };

  const [state, setState] = useState(intialState);
  const [country, setCountry] = useState({});
  const [ipv4, setIpv4] = useState({});

  useEffect(async() => {
    let ipv4 = await publicIp.v4() || "";
    console.log(ipv4);
    setIpv4({ ipv4 });

    axios
    .get(
      `http://ip-api.com/json/${ipv4}`
    ).then(data => {
      console.log(`http://ip-api.com/json/${ipv4}`);
        console.log(data.data);
        let country = data.data.countryCode;
        setCountry({ country });
        axios
          .get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_KEY}&region=${country}`
          )
          .then(res => {
            console.log(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_KEY}&region=${country}`);
            console.log(res);
            setState({
              movie_list: res.data.results,
              heading: `Top Movies in your country: ${data.data.city}/${country} - ${data.data.region} `
            });
          })
          .catch((function (err) {
            console.log(err);
          })
          );
      })

  }, []);

  if (country === undefined || country.length === 0) {
    return <Loading />;

  } else {

    return (
      <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
  }
}