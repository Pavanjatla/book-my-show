import React from "react";
import DefaultHoc from "./HOC/Default.HOC";
import MovieHoc from "./HOC/Movie.HOC";
//tailwind css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import Plays from "./pages/Plays.Page";

function App() {
  return (
    <>
        <DefaultHoc path="/" exact component={HomePage} />
        <MovieHoc path="/movie/:id" exact component ={MoviePage} />
        <Plays path="plays" exact component={Plays} />
    </>
  );
}

export default App;
