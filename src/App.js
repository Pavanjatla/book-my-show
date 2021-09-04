import React from "react";
import DefaultHoc from "./HOC/Default.HOC";

function HomePage(){
  return <h1>This is  HomePage</h1>;
}

function App() {
  return (
    <>
        <DefaultHoc path="/" exact component={HomePage} />
    </>
  );
}

export default App;
