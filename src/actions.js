import * as action from "./constants";

export const setSearchfield = (text) => {
    console.log("setSearchfield ACTION");
    return {
        type: action.CHANGE_SEARCH_FIELD,
        payload: text,
    };
};

// --- Robot actions --- //
export const requestRobots = () => (dispatch) => {
    // Pending
    dispatch({ type: action.REQUEST_ROBOTS_PENDING });
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) =>
            dispatch({
                // Success
                type: action.REQUEST_ROBOTS_SUCCESS,
                payload: data,
            })
        )
        .catch((error) => {
            dispatch({
                // Failed
                type: action.REQUEST_ROBOTS_FAILED,
                payload: error,
            });
        });
};
