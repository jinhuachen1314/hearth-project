import React from "react";
import PropTypes from 'prop-types';
import Table from "./Table";
import BasicInfo from "./BasicInfo";
import { Stack } from "@mui/material";
import SimpleMap from "./SimpleMap";

const URL_KEY = "URL (SEE http://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)";

const BASIC_INFO_KEYS = [
  "ADDRESS", "CITY", "STATE OR PROVINCE",
  "ZIP OR POSTAL CODE", "SQUARE FEET", "BEDS",
  "BATHS", "PRICE", URL_KEY,
];

const HOME_FACTS_KEYS = [
  "STATUS", "DAYS ON MARKET", "PROPERTY TYPE", 
  "HOA/MONTH", "YEAR BUILT", "LOCATION", 
  "LOT SIZE","MLS#", "SOURCE"
];

const PRICE_INSIGHTS_KEYS = [
  "PRICE", "$/SQUARE FEET",
];

const OPEN_HOUSE_TIMES = [
  "NEXT OPEN HOUSE START TIME", "NEXT OPEN HOUSE END TIME"
];

const SearchResult = ({ result }) => {
  const basic_info = {}, home_facts = {}, price_insights = {}, open_house_times = {};
  
  const formatValue = (key, value) => {
    if (value === "") return "N/A";

    if (["PRICE", "SQUARE FEET", "LOT SIZE", "$/SQUARE FEET"].includes(key)) {
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    if (["PRICE", "$/SQUARE FEET"].includes(key)) {
      value = `$${value}`;
    }

    if (["LOT SIZE"].includes(key)) {
      value = `${value} Sq. Ft.`;
    }

    return value;
  }

  for (const key in result) {
    const value = formatValue(key, result[key]);

    if (PRICE_INSIGHTS_KEYS.includes(key)) {
      price_insights[key] = value;
    } 
    
    if (BASIC_INFO_KEYS.includes(key)) {
      basic_info[key] = value;
    }
    
    if (HOME_FACTS_KEYS.includes(key)) {
      home_facts[key] = value;
    }

    if (OPEN_HOUSE_TIMES.includes(key)) {
      open_house_times[key] = value;
    }
  }

  return (
    <Stack>
      <BasicInfo content={basic_info} />
      <Table 
        content={home_facts} 
        header="Home Facts" 
      />
      <Table 
        content={price_insights} 
        header="Price Insights" 
      />
      <Table 
        content={open_house_times}
        header="Open House Times"
      />
      <SimpleMap
        lat={parseFloat(result["LATITUDE"])}
        lng={parseFloat(result["LONGITUDE"])} 
      />
    </Stack>
  );
}

SearchResult.propTypes = {
  result: PropTypes.object,
}

export default SearchResult;