import React, { Component } from "react";
import Carousel from "./components/Carousel";
import "./App.css";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel />
        
      </div>
    );
  }
}