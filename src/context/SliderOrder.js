import React from "react";

export const SliderOrder = React.createContext()

class SliderOrderProvider extends React.Component{
    state = {
        list: true
    }
    toggle = () => {
        this.setState(
            {list: !this.state.list}
        )
    }
    render() {
        return(
            <SliderOrder.Provider
                value={{...this.state, fn:this.toggle}}
            >
                {this.props.children}
            </SliderOrder.Provider>
        )
    }
}

export default SliderOrderProvider