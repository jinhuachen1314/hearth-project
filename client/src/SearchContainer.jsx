import { isEmpty } from "lodash";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResults";
import axios from 'axios';

const SearchContainer = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState({});

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  }

  const getSearchResult = async (callback) => {
    try {
      const response = await axios.get('/search', {
        params: { address: query }
      });

      callback(response.data.result);
    } catch (error) {
      // TODO, catch error
    }
  }

  const handleSubmit = () => {
    if (query === "") return;
    getSearchResult(setResult);
  }

  return (
    <>
      <SearchBar
        handleChange={handleChange}
        handleSubmit={handleSubmit} 
        query={query}
      />
      {!isEmpty(result) && <SearchResult result={result} />}
    </>
  );
}

export default SearchContainer;