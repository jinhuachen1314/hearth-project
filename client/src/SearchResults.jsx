import React from "react";
import PropTypes from 'prop-types';

const SearchResult = ({ result }) => {
  return (
    <>
      {Object.keys(result).map((key, idx) => {
          return (
            <>
              <div>{key}</div>
              <div>{result[key]}</div>
            </>
          );
      })}
    </>
  );
}

SearchResult.propTypes = {
  result: PropTypes.object
}

export default SearchResult;