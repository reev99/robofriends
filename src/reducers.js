import * as action from "./constants";

const initialStateSearch = {
    searchField: "",
};

export const searchRobots = (state = initialStateSearch, action_ = {}) => {
    switch (action_.type) {
        case action.CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action_.payload });
        default:
            return state;
    }
};

// Initial state for getting robots
const initialStateRobots = {
    isPending: false,
    robots: [],
    error: "",
};

// Getting the robots
export const requestRobots = (state = initialStateRobots, action_ = {}) => {
    switch (action_.type) {
        case action.REQUEST_ROBOTS_PENDING:
            console.log("REQUEST_ROBOTS_PENDING");
            return { ...state, isPending: true };

        case action.REQUEST_ROBOTS_SUCCESS:
            console.log("REQUEST_ROBOTS_SUCCESS");
            return { ...state, robots: action_.payload, isPending: false };

        case action.REQUEST_ROBOTS_FAILED:
            console.log("REQUEST_ROBOTS_FAILED");
            return { ...state, error: action_.payload, isPending: false };

        default:
            return state;
    }
};
