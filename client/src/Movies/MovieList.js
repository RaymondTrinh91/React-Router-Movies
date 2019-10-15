import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          console.log(response.data);
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars, id } = movie;
  return (
    <div>
    <MovieCard key={movie.id} id={id} title={title} director={director} metascore={metascore} stars={stars}/>
    </div>
  )
}

export default MovieList;

{/* <div className="movie-card">    
<Link to={`/movie/${movie.id}`}>
<h2>{title}</h2>
<div className="movie-director">
  Director: <em>{director}</em>
</div>
<div className="movie-metascore">
  Metascore: <strong>{metascore}</strong>
</div>
<h3>Actors</h3>

{stars.map(star => (
  <div key={star} className="movie-star">
    {star}
  </div>
))}
</Link>
</div> */}