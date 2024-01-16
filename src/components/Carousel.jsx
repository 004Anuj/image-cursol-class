import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super()
        this.state={
            count: 0
        }

        

    }

    increaserC=()=>{
            if(this.state.count<2){
                this.setState({count: this.state.count+=1})
            }
            else{
                this.setState({count: 0})
            }
        }

        decreaserC=()=>{
            if(this.state.count>0){
                this.setState({count: this.state.count-=1})
            }
            else{
                this.setState({count:2})
            }
        }

    render(){
        
        return(
            <div>
                <div onClick={this.decreaserC} className="prev">
                    <ArrowBackIosIcon/>
                </div>
                <div>
                    
                </div>
                <div className="container"> 
                    <img className="image" src={images[this.state.count].img} alt={images[this.state.count].title} />
                    <h1 className="title">{images[this.state.count].title}</h1>
                    <p className="subtitle">{images[this.state.count].subtitle}</p>
                </div>
                <div onClick={this.increaserC} className="next">
                    <ArrowForwardIosIcon/>
                
                </div>
            </div>
        )
    }
}

export default Carousel;