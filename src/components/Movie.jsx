import React from "react";
import MovieCard from "./MovieCard";

const Movie = () => {
  return (
  <div className="container mx-auto mt-6">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <MovieCard/>
    </div>
  </div>
  );
};

export default Movie;
