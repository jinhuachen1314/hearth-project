import React from "react";
import PropTypes from 'prop-types';
import Table from "./Table";
import BasicInfo from "./BasicInfo";
import { Stack } from "@mui/material";

const BASIC_INFO_KEYS = [
  "ADDRESS", "CITY", "STATE OR PROVINCE",
  "ZIP OR POSTAL CODE", "SQUARE FEET", "BEDS",
  "BATHS", "PRICE"
];

const HOME_FACTS_KEYS = [
  "STATUS", "DAYS ON MARKET", "PROPERTY TYPE", 
  "HOA/MONTH", "YEAR BUILT", "LOCATION", 
  "LOT SIZE","MLS#", 
];

const PRICE_INSIGHTS_KEYS = [
  "PRICE", "$/SQUARE FEET",
];

const SearchResult = ({ result }) => {
  const price_insights = {}, basic_info = {}, home_facts = {};
  
  for (const key in result) {
    let value = result[key];

    if (["PRICE", "SQUARE FEET", "LOT SIZE", "$/SQUARE FEET"].includes(key)) {
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    if (["PRICE", "$/SQUARE FEET"].includes(key)) {
      value = `$${value}`;
    }

    if (["LOT SIZE"].includes(key)) {
      value = `${value} Sq. Ft.`;
    }

    if (PRICE_INSIGHTS_KEYS.includes(key)) {
      price_insights[key] = value;
    } 
    
    if (BASIC_INFO_KEYS.includes(key)) {
      basic_info[key] = value;
    }
    
    if (HOME_FACTS_KEYS.includes(key)) {
      home_facts[key] = value;
    }
  }

  return (
    <Stack>
      <BasicInfo content={basic_info} />
      <Table content={home_facts} header="Home Facts" />
      <Table content={price_insights} header="Price Insights" />
    </Stack>
  );
}

SearchResult.propTypes = {
  result: PropTypes.object,
}

export default SearchResult;