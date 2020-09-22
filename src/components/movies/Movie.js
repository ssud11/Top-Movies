import React from 'react';

const Movie = props => {
  const { movie } = props;

  return (
    <div className="col-md-15">
      <div className="card bg-light mb-3">
      <div className="card-header"><h5>{movie.title}</h5></div>
        <div className="card-body">
        <h5 className="card-title"><i className="fas fa-film"></i> Overview</h5>
          <p className="card-text">
             {movie.overview}
          </p>
            <br/>
            <h5 className="card-title"><i className="fas fa-poll"></i> Vote Average</h5>
            <p className="card-text">
            {movie.vote_average}
            </p>
            <br/>

            <h5 className="card-title"><i className="fas fa-video"></i> Original Title</h5>
            <p className="card-text">
            {movie.original_title}
            </p>

            <br/>

            <h5 className="card-title"><i className="far fa-calendar-alt"></i> Release Date</h5>
            <p className="card-text">
            {movie.release_date}
            </p>
             
          
          
        </div>
      </div>
    </div>
  );
};

export default Movie;
