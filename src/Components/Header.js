import React, { Component } from "react";
import CounterButton from "./CounterButton";

class Header extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return false;
    // }

    render() {
        console.log("Render Header");
        return (
            <>
                <h1 className="f1">Robofriends</h1>
                <CounterButton colour={"red"} />
            </>
        );
    }
}

export default Header;
