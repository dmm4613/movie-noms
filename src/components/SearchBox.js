import React from 'react';

const SearchBox = (props) => {
    return (
        <div className='search-box col col-sm-4'>
            <input className='form-control' 
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder='Type to search movie titles...'></input>
        </div>
    );
};

export default SearchBox;