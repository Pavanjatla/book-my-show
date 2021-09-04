import React from "react";
import DefaultHoc from "./HOC/Default.HOC";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/Home.Page";

function App() {
  return (
    <>
        <DefaultHoc path="/" exact component={HomePage} />
    </>
  );
}

export default App;
