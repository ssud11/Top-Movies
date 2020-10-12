import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../context";

const Search = () => {
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const [movieCountry, setMovieCountry] = useState("");

  useEffect(() => {
    if(movieCountry !== undefined && movieCountry.length  !== 0 ){
      axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          process.env.REACT_APP_MOVIE_KEY}&region=${movieCountry}`
      )
      .then(res => {
        console.log(`https://api.themoviedb.org/3/movie/top_rated?api_key=${
          process.env.REACT_APP_MOVIE_KEY}&region=${movieCountry}`);
        console.log(res.data.results);
        let movie_list = res.data.results;
      setState({ movie_list: movie_list, heading: `Search Results for country ISO: ${movieCountry}` });
      })
      .catch(err => console.log(err));
    } else {
      return;
    }
    
  }, [movieCountry]);

  const findCountry = e => {
    e.preventDefault();
    setMovieCountry(userInput);
  };

  const onChange = e => {
    setUserInput(e.target.value);
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
       Find out the Top Movies<br/> in your country! <i className="fas fa-globe-americas"></i>
      </h1>
      <form onSubmit={findCountry}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter the Country ISO Code..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <div id = "results"></div>
        <button className="btn btn-dark" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
