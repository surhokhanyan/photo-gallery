import React from "react";
import Timeline from "../timeline/Timeline";
import {PictureContext} from "../../context/SliderContext";
import {SliderOrder} from "../../context/SliderOrder";

class Slider extends React.Component{
    static contextType = PictureContext;
    render(){
        const {photos, currentIndex, goNext, goPrev} = this.context;
        const mainPhoto = photos[currentIndex].img
        return (
            <SliderOrder.Consumer>
                {
                    data => {
                        return(
                            <div className={"slider"}>
                                <div className={"form"}>
                                    <label><b>Toggle Timeline?</b></label>
                                    <select onChange={data.fn} value={data.list}>
                                        <option>true</option>
                                        <option>false</option>
                                    </select>
                                </div>
                                <img src={mainPhoto} alt="photo" className={"main-photo"}/>
                                <div>
                                    <button onClick={goPrev}>Prev</button>
                                    <button onClick={goNext}>Next</button>
                                </div>
                                <Timeline/>
                            </div>
                        )
                    }
                }
            </SliderOrder.Consumer>

        )
    }
}

export default Slider