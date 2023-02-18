import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    // Like the try/catch block, we catch any errors thrown in the render method
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        // If there is no error, render children
        return this.props.children;
    }
}

export default ErrorBoundary;
