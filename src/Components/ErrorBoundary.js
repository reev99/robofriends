import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    // Like try/catch in JavaScript
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
