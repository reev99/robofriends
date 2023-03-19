import React, { useState, useEffect } from "react";
// redux
import { connect } from "react-redux";
import CardList from "../Components/CardList";
// import { robots } from "./robots";
import SearchBox from "../Components/SearchBox";
import "./App.css";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
import Header from "../Components/Header";
// actions
import * as actions from "../actions";

// --- parameters for connect --- //
const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) =>
            dispatch(actions.setSearchfield(event.target.value)),
        onRequestRobots: () => dispatch(actions.requestRobots()),
    };
};

const App = (props) => {
    const { onRequestRobots, robots, searchField, isPending } = props;
    // const [searchfield, setSearchfield] = useState("");
    const [count, setCount] = useState(0);

    // console.log(props);
    // console.log(robots);

    // Load users from the server using the effect hook
    useEffect(() => {
        // Fetch the users from the server
        onRequestRobots();
    }, []);

    // Filter the robots based on the search term
    // If the search term is found in the robots array,
    // return each robot that matches the search term
    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
        <h1>Loading</h1>
    ) : (
        <div className="tc">
            <Header />
            <SearchBox searchChange={props.onSearchChange} />{" "}
            <Scroll>
                {" "}
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />{" "}
                </ErrorBoundary>{" "}
            </Scroll>{" "}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
