import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Autocomplete, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import SearchResult from "./SearchResults";

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "800px",
  margin: "auto",
});

const SearchContainer = () => {
  const [result, setResult] = useState({});
  const [value, setValue] = useState(null);
  const [addressList, setAddressList] = useState([]);

  /**
   * Load addresses when page is loaded, ie, component is mounted.
   */
  useEffect(() => {
    const getList = async () => {
      const list = await axios.get('/address');
      setAddressList(list.data);
    }

    getList();
  }, []);
  
  /**
   * Fetch home detail.
   * 
   * @param {Func} callback Callback used for a successful resolved result. 
   */
  const getSearchResult = async (callback) => {
    try {
      const response = await axios.get('/search', {
        params: { address: value }
      });
      callback(response.data.result);
    } catch (error) {
      // TODO, catch error
    }
  }

  /**
   * Event handler, set search query.
   * 
   * @param {Event} e Event
   * @param {string} value Option user selects/enters 
   */
  const handleValueChange = (e, value) => {
    setValue(value);
  }

  /**
   * Event handler, listens to click on search button.
   */
  const handleSubmit = () => {
    if (value === "") return;
    getSearchResult(setResult);
  }

  /**
   * Event handler, clears the result and search query.
   */
  const handleClearResult = () => {
    setResult({});
    setValue(null);
  }

  return (
    <>
      <Container>
        <Autocomplete
          onInputChange={handleValueChange}
          options={addressList}
          renderInput={params => (
            <TextField 
              {...params}
              label="Search Address"
              style={{ fontFamily: "Libre Franklin" }}
            />
          )}
          style={{ flexGrow: 1 }}
          value={value}
        />
        <Button 
          onClick={handleSubmit}
          variant="contained"
        >
          Search
        </Button>
        <Button
          onClick={handleClearResult}
        >
          Clear Result
        </Button>
      </Container>
      {!isEmpty(result) && <SearchResult result={result} />}
    </>
  );
}

export default SearchContainer;