import React, { useContext } from "react";
import { Context } from "../../context";
import spin from "../layout/Spin.js";
import Movie from "./Movie";

const Movies = () => {
  const [state] = useContext(Context);
  const { movie_list, heading } = state;

  if (movie_list === undefined || movie_list.length === 0) {
    return <spin />;
  } else {
    return (
      <>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {movie_list.map(item => (
            <Movie key={item.id} movie={item} />
          ))}
        </div>
      </>
    );
  }
};

export default Movies;
