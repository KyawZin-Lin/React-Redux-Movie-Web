import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import MovieDetails from "./components/MovieDetails";


import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div>
      <Header/>
      {/* <Home/> */}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/movies/:id" element={<MovieDetails/>}/>


        <Route path="*" element={<NotFoundPage/>}/>


      </Routes>
    </div>
  );
};

export default App;
