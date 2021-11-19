import React from "react";
import PropTypes from 'prop-types';

const SearchBar = ({ handleChange, query, handleSubmit}) => {
  return (
    <>
      Search Addres:
      <input 
        value={query}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  query: PropTypes.string,
}

export default SearchBar;