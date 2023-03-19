import React from "react";

const SearchBox = ({ searchChange }) => {
    console.log("Render SearchBox");
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="Search Cats"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
