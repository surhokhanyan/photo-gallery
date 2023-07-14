import React from "react";
import {PictureContext} from "../../context/SliderContext";
import {SliderOrder} from "../../context/SliderOrder";

class Timeline extends React.Component{
    render(){
        return (
            <PictureContext.Consumer>
                {
                    context => {
                        const {photos, currentIndex, setActivePicture} = context
                        return(
                            <SliderOrder.Consumer>
                                {
                                    data => {
                                        let cssClass = data.list ? "photo-list" : "photo-circle"
                                        return (
                                            <div className={cssClass}>
                                                {
                                                    photos.map(({id, img}, index) => {
                                                        let activeImg = index === currentIndex ? "active" : null
                                                        return(
                                                            <img src={img}  key={id} alt="photo" className={activeImg} onClick={()=> setActivePicture(index)}/>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    }
                                }
                            </SliderOrder.Consumer>

                        )
                    }
                }
            </PictureContext.Consumer>
        )
    }
}

export default Timeline