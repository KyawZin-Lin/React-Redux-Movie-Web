import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
const MovieCard = ({movie}) => {
  return (
    <div>
      <Link to={`movies/${movie.id}`}>
        <div className="max-w-sm">
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            {movie.overview.slice(0,150)}
            </p>
            <div className="">
              <span className="bg-black p-3 rounded-xl text-white">
              <i className="fa-solid fa-star me-2 mb-3"></i> {movie.vote_average}
              </span>
              <span className="ms-3 bg-black p-3 rounded-xl text-white">
              <i className="fa-regular fa-calendar-days me-2 mb-3"></i> {movie.release_date}
              </span>
            </div>
          </Card>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
