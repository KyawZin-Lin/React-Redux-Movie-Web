import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const Movie = () => {

  let movies = [];
  movies = useSelector((state)=>state.movies.movies);
  console.log(movies)
  return (
  <div className="container mx-auto mt-6 p-3">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
       {
        movies.length > 0 ?   movies.map((movie)=>{
          return (
            <MovieCard movie={movie} key={movie.id}/>
          )
        }) : <h1>
          there is no movies
        </h1>
       }
        
    </div>
  </div>
  );
};

export default Movie;
