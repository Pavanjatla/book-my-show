import React from "react";
import axios from "axios";
import DefaultHoc from "./HOC/Default.HOC";
import MovieHoc from "./HOC/Movie.HOC";
//tailwind css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import Plays from "./pages/Plays.Page";

axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
        <DefaultHoc path="/" exact component={HomePage} />
        <MovieHoc path="/movie/:id" exact component ={MoviePage} />
        <DefaultHoc path="/plays" exact component={Plays} />
    </>
  );
}

export default App;
