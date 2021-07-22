import React from "react";
import './search-box.styles.css';

const SearchBox = () => (
    <input
        className='search'
        type='search'
        placeholder='Search monsters'
        onChange={ event => this.setState(
         { searchField: event.target.value })}
    />
)