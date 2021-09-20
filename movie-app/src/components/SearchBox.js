import React from 'react';
const SearchBox = (props) => {
    return (
        <div className="col col-sm-4">
            <input type="text" className="form-control"
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder="search movies "
            />
        </div>
    );
};
export default SearchBox;
