import { Button, Label, Navbar, TextInput } from "flowbite-react";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api";
import { api_key } from "../api/index";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/actions/movies";

const Header = () => {
  const navigate = useNavigate();
  // const [movieName, setMovieName] = useState("");
  const movieName = useRef();
  const dispatch = useDispatch();
  const searchMovieByName = async () => {
    if (movieName.current.value != "") {
      const res = await api.get(
        `/search/movie?query=${movieName.current.value}&api_key=${api_key}`
      );
      dispatch(fetchMovies(res.data.results));
    } else {
      const res = await api.get(`movie/popular?api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));
    }
  };
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        {/* <img
          src="../../public/vite.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
        <span
          onClick={() => {
            navigate("/");
          }}
          className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >
          Linn Movies
        </span>
      </Navbar.Brand>
      <form className="flex max-w-md flex-row gap-4">
        <div>
          <TextInput
            id="name"
            type="text"
            // onChange={(e) => {
            //   setMovieName(e.target.value);
            // }}
            ref={movieName}
          />
        </div>

        <Button
          type="button"
          onClick={() => {
            searchMovieByName();
          }}
        >
          Search
        </Button>
      </form>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
