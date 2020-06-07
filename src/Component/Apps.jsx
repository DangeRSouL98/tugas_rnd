import React from "react";
import Title from "./Title";
import Message from "./Message";
import Information from "./Information";
import Photo from "./Photo";

class Apps extends React.Component {
    state = {
        name : "Wellson",
        age : 19
    };
    render() {
        function click() {
            console.log("Hi RnD!!!");
        }

        return <div>
            <Photo /> 
            <Title click={click}/>
            <Message />
            <Information name={this.state.name} age={this.state.age} /> 
        </div>;
    }
}

export default Apps;