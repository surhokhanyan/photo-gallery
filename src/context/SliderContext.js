import React from "react";
import {v4 as uuid} from "uuid";

export const PictureContext = React.createContext()

class PictureContextProvider extends React.Component{
    state = {
        photos: [
            {id: uuid(), img: "https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png"},
            {id: uuid(), img: "https://images.hdqwalls.com/download/small-memory-lp-1920x1080.jpg"},
            {id: uuid(), img: "https://preview.redd.it/nx5sjc8hhiw71.jpg?auto=webp&s=27c778c0abb813c99da955100f877e2638d7fe74"},
            {id: uuid(), img: "https://wallpapercave.com/wp/wp5264675.jpg"},
            {id: uuid(), img: "https://i.pinimg.com/originals/9c/7b/e4/9c7be43979a736a8695361a544630b97.jpg"},
            {id: uuid(), img: "https://images.wallpaperscraft.com/image/single/street_lighting_lights_134856_1920x1080.jpg"},
            {id: uuid(), img: "https://img2.wallspic.com/crops/7/6/1/2/7/172167/172167-digital_art-art-illustration-painting-drawing-1920x1080.jpg"},
            {id: uuid(), img: "https://images.wallpaperscraft.com/image/single/street_night_city_neon_187651_1920x1080.jpg"},
            {id: uuid(), img: "https://i.etsystatic.com/30816165/r/il/3318f7/3198348976/il_fullxfull.3198348976_81fc.jpg"},
            {id: uuid(), img: "https://images.wallpaperscraft.com/image/single/astronaut_ring_neon_156673_1920x1080.jpg"}
        ],
        currentIndex: 0,
    }
    goNext = () => {
        this.setState(state => {
            const prevState = {...state}
            if (prevState.currentIndex < prevState.photos.length - 1){
                prevState.currentIndex++
            }else{
                prevState.currentIndex = 0
            }
            return prevState
        })
    }
    goPrev = () => {
        this.setState(state => {
            const prevState = {...state}
            if (prevState.currentIndex <= 0){
                prevState.currentIndex = prevState.photos.length - 1
            }else {
                prevState.currentIndex--
            }
            return prevState
        })
    }
    setActivePicture = index => {
        this.setState({currentIndex: index})
    }

    render() {
        return(
            <PictureContext.Provider value={{
                ...this.state,
                setActivePicture: this.setActivePicture,
                goNext: this.goNext,
                goPrev: this.goPrev
            }}>
                {this.props.children}
            </PictureContext.Provider>
        )
    }
}

export default PictureContextProvider;