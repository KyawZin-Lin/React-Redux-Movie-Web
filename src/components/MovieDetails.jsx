import { Card, Spinner } from "flowbite-react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { api, api_key } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { selectedMovie } from "../redux/actions/movies";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const getMovie = async () => {
    const res = await api.get(`movie/${id}?api_key=${api_key}`);
    dispatch(selectedMovie(res.data));
  };

  useEffect(() => {
    getMovie();
  }, []);

  let movie = {};
  movie = useSelector((state) => state.movies.movie);
  // console.log(movie.production_countries[0].name)
  return (
    <div className="container mx-auto p-3">
      <div className="">
        <div className="">
          <span
            onClick={() => {
              navigate("/");
            }}
            className=" bg-blue-700 hover:bg-blue-800 rounded-lg  text-center px-2 text-white"
          >
            <i className="fa-solid fa-arrow-left me-3"></i>Back
          </span>
        </div>

        {JSON.stringify(movie) == "{}" ? (
          <div className="text-center">
            <h1>
              <Spinner aria-label="Medium sized spinner example" size="md" />
            </h1>
          </div>
        ) : (
          // <Card
          //   className="max-w-sm"
          //   imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          //   horizontal
          // >
          //   <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          //     {movie.title}
          //   </h5>
          //   <p className="font-normal text-gray-700 dark:text-gray-400">
          //     {movie.overview}
          //   </p>
          //   <div className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2">
          //     <span className=" ms-3 bg-black p-3 rounded-xl text-white inline">
          //       <i className="fa-solid fa-star me-2 mb-3"></i>{" "}
          //       {movie.vote_average}
          //     </span>
          //     <span className="ms-3 bg-black p-3 rounded-xl text-white">
          //       <i className="fa-regular fa-calendar-days me-2 mb-3"></i>{" "}
          //       {movie.release_date}
          //     </span>
          //     <span className="ms-3 bg-black p-3 rounded-xl text-white">
          //       <i className="fa-solid fa-users me-2 mb-3"></i>{" "}
          //       {movie.vote_count}
          //     </span>
          //     <span className="ms-3 bg-black p-3 rounded-xl text-white">
          //       <i className="fa-solid fa-earth-americas me-2 mb-3"></i>
          //       {movie.production_countries[0].name}
          //     </span>
          //   </div>
          // </Card>
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview.slice(0, 150)}
            </p>
            <div className="grid grid-flow-col auto-cols-max ">
              <span className="ms-1 bg-black p-3 rounded-xl text-white ">
                <i className="fa-solid fa-star me-2 mb-3"></i>{" "}
                {movie.vote_average}
              </span>
              <span className="ms-1 bg-black p-3 rounded-xl text-white ">
                <i className="fa-regular fa-calendar-days me-2 mb-3"></i>
                {movie.release_date}
              </span>
              <span className="ms-1 bg-black p-3 rounded-xl text-white ">
                <i className="fa-solid fa-users me-2 mb-3"></i>{" "}
                {movie.vote_count}
              </span>
            </div>
            <div className="grid grid-flow-col auto-cols-max">
              <span className="ms-1 bg-black p-3 rounded-xl text-white ">
                <i className="fa-solid fa-earth-americas me-2 mb-3"></i>
                {movie.production_countries[0].name}
              </span>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
