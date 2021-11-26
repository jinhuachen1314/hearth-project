import React from "react";
import PropTypes from 'prop-types';
import Table from "./Table";
import BasicInfo from "./BasicInfo";
import { Stack } from "@mui/material";

const HOME_FACTS_KEYS = [
  "PROPERTY TYPE", "LOT SIZE", "YEAR BUILT", 
  "DAYS ON MARKET", "HOA/MONTH", "STATUS",
  "MLS#", "LOCATION",
];

const PRICE_INSIGHTS_KEYS = [
  "PRICE", "$/SQUARE FEET",
];

const BASIC_INFO_KEYS = [
  "ADDRESS", "CITY", "STATE OR PROVINCE",
  "ZIP OR POSTAL CODE", "SQUARE FEET", "BEDS",
  "BATHS", "PRICE"
]

const SearchResult = ({ result }) => {
  // TODO, create 1 basic info card, 1 home facts card, and 1 basic info card
  const price_insights = {}, basic_info = {}, home_facts = {};

  for (const key in result) {
    if (PRICE_INSIGHTS_KEYS.includes(key)) {
      price_insights[key] = result[key];
    } 
    
    if (BASIC_INFO_KEYS.includes(key)) {
      basic_info[key] = result[key];
    }
    
    if (HOME_FACTS_KEYS.includes(key)) {
      home_facts[key] = result[key];
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