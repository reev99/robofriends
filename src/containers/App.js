import React, { Component } from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

// STATE >> props
// In order to use the state, we need to use the class way of creating a component.
// State can usually be found in the parent component.

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ robots: users }));
    }

    searchChange = (event) => {
        // set state of searchfield
        this.setState({ searchfield: event.target.value });
    };

    // --- Render --- //
    render() {
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return !robots.length ? (
            <h1>Loading</h1>
        ) : (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <Searchbox searchChange={this.searchChange} />
                {/* Scroll is reusable */}
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;
