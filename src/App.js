import React from 'react';
import "./App.css";
import Slider from "./components/slider/Slider";
import PictureContextProvider from "./context/SliderContext";
import SliderOrderProvider from "./context/SliderOrder";

class App extends React.Component{

    render() {
        return(
            <PictureContextProvider>
                <SliderOrderProvider>
                    <Slider/>
                </SliderOrderProvider>
            </PictureContextProvider>
        )
    }
}

export default App;