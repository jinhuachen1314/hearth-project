import React from "react";
import PropTypes from 'prop-types';
import AutoComplete from '@mui/material/Autocomplete';
import { Button, TextField } from "@mui/material";

const SearchBar = ({ option, handleInputChange, handleSubmit, handleClearResult}) => {

  return (
    <>
      Search Addres:
      <>
        <AutoComplete 
          options={option}
          renderInput={
            params => {
              return (
              <TextField 
                {...params}
                label="Search Address"
              />
            )}
          }
        />
        <Button 
          onClick={handleSubmit}
          variant="contained"
        >
          Submit
        </Button>
        <Button
          onClick={handleClearResult}
        >
          Clear Result
        </Button>
      </>
    </>
  );
}

SearchBar.propTypes = {
  handleClearResult: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  inputValue: PropTypes.string,
  option: PropTypes.arrayOf(PropTypes.string),
}

export default SearchBar;