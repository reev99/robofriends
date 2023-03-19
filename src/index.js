import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// Redux
import { Provider } from "react-redux";
import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
} from "redux";
import * as reducers from "./reducers";

// Redux middleware
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

// App
import "./index.css";
import App from "./Containers/App";
import "tachyons";
import * as serviceWorker from "./serviceWorkerRegistration";

// --------------------------------------------------------------------- //
// --------------------------------------------------------------------- //

// Create logger
const logger = createLogger();

// Root reducer
const rootReducer = combineReducers({
    searchRobots: reducers.searchRobots,
    requestRobots: reducers.requestRobots,
});

// Create the store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// Register service worker
serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
